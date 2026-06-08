import {
  Component,
  ComponentInterface,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  Watch,
  h,
} from "@stencil/core";
import {createFocusTrap} from "focus-trap";
import {tabbable} from "tabbable";
import {KeyboardCode, OffCanvasVariant, TransitionDirection} from "../../beans";
import {containsElement} from "../../utils/utils.js";

/**
 * @slot canvasContent - Slot for the offcanvas content.
 */
@Component({
  tag: "z-offcanvas",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZOffcanvas implements ComponentInterface {
  @Element() host: HTMLZOffcanvasElement;

  /**
   * Offcanvas variant.
   * - `overlay`: The offcanvas covers the page content putting an overlay.
   * - `pushcontent`: The offcanvas isn't absolutely positioned and "pushes" the page content.
   * > NB: `pushcontent` variant may need some extra style tuning of the context around the component to work properly.
   * Also, the `pushcontent` variant doesn't have the open/close transition.
   */
  @Prop({reflect: true})
  variant?: OffCanvasVariant = OffCanvasVariant.PUSHCONTENT;

  /** Whether the offcanvas is open. Default: false */
  @Prop({reflect: true, mutable: true})
  open = false;

  /**
   * Open the content transitioning to a specified direction.
   * The `up` direction always show the `overlay`, also when the variant is `pushcontent`.
   */
  @Prop({reflect: true})
  transitiondirection?: TransitionDirection = TransitionDirection.LEFT;

  /**
   * Skip the opening transition when the offcanvas is already open at the first render.
   * @deprecated This prop is not needed anymore, the component will automatically skip the transition
   * when it starts with `open` set to `true`. Only exists for Typescript backward compatibility.
   */
  @Prop()
  skipLoadAnimation = false;

  /** Whether to show the backdrop when the offcanvas is open. Default: true */
  @Prop()
  showBackdrop = true;

  /** emitted when `open` prop changes */
  @Event()
  canvasOpenStatusChanged: EventEmitter<boolean>;

  /** Used to skip the opening transition when the offcanvas is already open at the first render. */
  @State()
  private skipAnimation = false;

  private canvasContent: HTMLElement;

  private focusTrap: ReturnType<typeof createFocusTrap>;

  /**
   * Get tabbable elements in the offcanvas, including those in shadow roots.
   */
  private getTabbableElements(): HTMLElement[] {
    const hostElements = Array.from(this.host.querySelectorAll<HTMLElement>("*"));
    const seen = new Set<HTMLElement>();
    const mergedEntries: {element: HTMLElement; lightIndex: number; shadowIndex: number}[] = [];

    const addElement = (element: HTMLElement, lightIndex: number, shadowIndex: number): void => {
      if (seen.has(element)) {
        return;
      }

      seen.add(element);
      mergedEntries.push({element, lightIndex, shadowIndex});
    };

    // Get tabbable elements in the Light DOM
    tabbable(this.host, {getShadowRoot: false}).forEach((element) => {
      if (!(element instanceof HTMLElement)) {
        return;
      }

      addElement(element, hostElements.indexOf(element), -1);
    });

    // Get tabbable elements in the Shadow DOM of each tabbable element with a shadow root
    hostElements.forEach((hostElement, index) => {
      if (!hostElement.shadowRoot) {
        return;
      }

      tabbable(hostElement, {getShadowRoot: true}).forEach((element, shadowIndex) => {
        if (element instanceof HTMLElement) {
          addElement(element, index, shadowIndex);
        }
      });
    });

    // Sort by light DOM order first, then by shadow DOM order for elements within the same host
    mergedEntries.sort((a, b) => {
      if (a.lightIndex !== b.lightIndex) {
        return a.lightIndex - b.lightIndex;
      }

      return a.shadowIndex - b.shadowIndex;
    });

    return mergedEntries.map((entry) => entry.element);
  }

  private focusFirstTrapElement(): void {
    this.getTabbableElements()[0]?.focus();
  }

  private focusLastTrapElement(): void {
    const trapTabbableElements = this.getTabbableElements();

    trapTabbableElements[trapTabbableElements.length - 1]?.focus();
  }

  /** Get the currently active element, including those in shadow DOM. */
  private getDeepActiveElement(): Element | null {
    let activeElement: Element | null = this.host.ownerDocument.activeElement;

    while (activeElement instanceof HTMLElement && activeElement.shadowRoot?.activeElement) {
      activeElement = activeElement.shadowRoot.activeElement;
    }

    return activeElement;
  }

  /**
   * Activate or deactivate the focus trap based on the `open` state and the `overlay` variant.
   */
  private updateFocusTrap(): void {
    if (this.variant !== OffCanvasVariant.OVERLAY) {
      return;
    }

    if (!this.focusTrap) {
      // Initialize once and keep in sync with component state via activate/deactivate.
      this.focusTrap = createFocusTrap(this.host, {
        allowOutsideClick: true,
        clickOutsideDeactivates: false, // already handled by backdrop click listener
        escapeDeactivates: false, // already handled by keydown listener
        returnFocusOnDeactivate: true,
        initialFocus: () => this.getTabbableElements()[0] ?? this.canvasContent,
        fallbackFocus: () => this.canvasContent,
        onPostActivate: () => this.focusFirstTrapElement(),
        // Disable `focus-trap` tab navigation; wrap-around at the boundaries
        // is handled explicitly in `handleKeyDown` to avoid conflicts with hidden boundaries.
        isKeyForward: () => false,
        isKeyBackward: () => false,
        tabbableOptions: {displayCheck: "non-zero-area"},
      });
    }

    if (this.open) {
      this.focusTrap.activate();

      return;
    }

    this.focusTrap.deactivate();
  }

  /**
   * Handles Escape and wrap-around Tab navigation at the focus boundaries.
   */
  @Listen("keydown", {target: "document"})
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.open || this.variant !== OffCanvasVariant.OVERLAY) {
      return;
    }

    if (event.key === KeyboardCode.ESC) {
      event.preventDefault();
      this.open = false;

      return;
    }

    if (event.key !== KeyboardCode.TAB || event.altKey || event.ctrlKey || event.metaKey || event.defaultPrevented) {
      return;
    }

    const trapTabbableElements = this.getTabbableElements();

    if (!trapTabbableElements.length) {
      return;
    }

    const activeElement = this.getDeepActiveElement();
    const isOnFirstElement = containsElement(trapTabbableElements[0], activeElement);
    const isOnLastElement = containsElement(trapTabbableElements[trapTabbableElements.length - 1], activeElement);

    if (event.shiftKey && isOnFirstElement) {
      event.preventDefault();
      this.focusLastTrapElement();

      return;
    }

    if (!event.shiftKey && isOnLastElement) {
      event.preventDefault();
      this.focusFirstTrapElement();
    }
  }

  /**
   * Lock the page scroll when the offcanvas is open and unlock it when the offcanvas is closed.
   */
  @Watch("variant", {immediate: true})
  private handlePageScroll(): void {
    const overflow =
      this.variant === OffCanvasVariant.OVERLAY || this.transitiondirection === TransitionDirection.UP
        ? "overflow-y"
        : "overflow-x";

    this.host.ownerDocument.body.style[overflow] = this.open ? "hidden" : "";
  }

  @Watch("open")
  onOpenChanged(): void {
    this.canvasOpenStatusChanged.emit(this.open);

    this.handlePageScroll();
    this.updateFocusTrap();
  }

  componentWillLoad() {
    if (this.open) {
      this.skipAnimation = true; // TODO: remove this line when `skipLoadAnimation` prop is removed.
    }
  }

  componentDidRender() {
    this.skipAnimation = false; // TODO: remove this line when `skipLoadAnimation` prop is removed.
    this.updateFocusTrap();
  }

  componentDidLoad() {
    if (this.open) {
      this.onOpenChanged();
    }
  }

  disconnectedCallback() {
    this.focusTrap?.deactivate();
    this.handlePageScroll();
  }

  render(): HTMLZOffcanvasElement {
    return (
      <Host
        skip-animation={this.skipAnimation}
        aria-hidden={!this.open ? "true" : null}
        aria-modal={this.open && this.variant === OffCanvasVariant.OVERLAY ? "true" : null}
        role={this.open && this.variant === OffCanvasVariant.OVERLAY ? "dialog" : null}
      >
        <div class="canvas-container">
          <div
            class="canvas-content z-scrollbar"
            ref={(el) => (this.canvasContent = el)}
            tabIndex={this.getTabbableElements().length ? undefined : -1} // allows the div to programmatically receive focus when there are no focusable elements inside, necessary for the focus trap to work properly
          >
            <slot name="canvasContent"></slot>
          </div>
        </div>
        {(this.variant == OffCanvasVariant.OVERLAY || this.transitiondirection === TransitionDirection.UP) &&
          this.showBackdrop && (
            <div
              class="backdrop"
              onClick={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                this.open = false;
              }}
            ></div>
          )}
      </Host>
    );
  }
}
