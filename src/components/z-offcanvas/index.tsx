import {Component, Event, EventEmitter, h, Host, Listen, Prop, State, Watch} from "@stencil/core";
import {KeyboardCode, OffCanvasVariant, TransitionDirection} from "../../beans";

/**
 * @slot canvasContent - Slot for the offcanvas content.
 * @cssprop --z-offcanvas--top-space - Top offset of the offcanvas, for `overlay` variant. Useful when there is some fixed element above the offcanvas. Default: `0`.
 * @cssprop --z-offcanvas--container-width - Width of the offcanvas for `left` and `right` direction. Default: `375px`.
 * @cssprop --z-offcanvas--container-height - Height of the offcanvas for `up` direction. Default: `90%`.
 */
@Component({
  tag: "z-offcanvas",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZOffcanvas {
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
   *  when it starts with `open` set to `true`. Only exists for Typescript backward compatibility.
   */
  @Prop()
  skipLoadAnimation = false;

  /** Whether to show the backdrop when the offcanvas is open. Default: true */
  @Prop()
  showBackdrop = true;

  /** emitted when `open` prop changes */
  @Event()
  canvasOpenStatusChanged: EventEmitter;

  /** Used to skip the opening transition when the offcanvas is already open at the first render. */
  @State()
  private skipAnimation = false;

  private canvasContainer: HTMLElement;

  private canvasContent: HTMLElement;

  private allFocusableElements: HTMLElement[] = [];

  private previouslyFocusedElement: HTMLElement | null = null;

  /**
   * Returns all focusable elements inside the offcanvas content.
   * Elements are considered focusable if:
   * - They are not disabled
   * - They are visible in the layout
   * - They have a non-negative tabIndex or an explicit tabindex="0"
   */
  private getFocusableElements(): HTMLElement[] {
    if (!this.canvasContent) {
      return [];
    }

    const all = Array.from(this.canvasContent.querySelectorAll<HTMLElement>("*"));

    return all.filter((el) => {
      const tabindex = el.getAttribute("tabindex");
      const isDisabled = el.hasAttribute("disabled");
      const isHidden = el.offsetParent === null;

      return !isDisabled && !isHidden && parseInt(tabindex) >= 0;
    });
  }

  /**
   * Keeps keyboard navigation trapped inside the offcanvas when it is open.
   * Implements circular tab navigation:
   * - If Shift + Tab is pressed on the first focusable element, move focus to the last.
   * - If Tab is pressed on the last focusable element, move focus to the first.
   */
  private trapFocus(event: KeyboardEvent): void {
    if (!this.allFocusableElements.length) {
      return;
    }

    const first = this.allFocusableElements[0];
    const last = this.allFocusableElements[this.allFocusableElements.length - 1];
    const active = document.activeElement as HTMLElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    }

    if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /**
   * Handles keyboard interactions when the offcanvas is open.
   * - Closes the offcanvas when the Escape key is pressed.
   * - Traps focus inside the component when the Tab key is used.
   */
  @Listen("keydown", {target: "document"})
  handleKeyDown(event: KeyboardEvent): void {
    if (!this.open) {
      return;
    }

    if (event.key === KeyboardCode.ESC) {
      event.preventDefault();
      this.open = false;

      return;
    }

    if (event.key === KeyboardCode.TAB) {
      this.trapFocus(event);
    }
  }

  /**
   * Stop the event default behavior and propagation when the offcanvas is closed.
   */
  @Listen("click", {capture: true})
  @Listen("focusin", {capture: true})
  stopEvent(event: Event): void {
    if (this.open) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
  }

  /**
   * Hide the body overflow when the offcanvas is open.
   */
  @Watch("variant")
  private handlePageOverflow(): void {
    const overflow =
      this.variant === OffCanvasVariant.OVERLAY || this.transitiondirection === TransitionDirection.UP
        ? "overflow-y"
        : "overflow-x";

    document.body.style[overflow] = this.open ? "hidden" : "";
  }

  @Watch("open")
  onOpenChanged(): void {
    this.canvasOpenStatusChanged.emit(this.open);

    if (this.open) {
      // Store the element that was focused before the offcanvas opens, this allows restoring the focus when the offcanvas closes.
      this.previouslyFocusedElement = document.activeElement as HTMLElement;

      // Move focus inside the offcanvas once it is rendered.
      if (this.allFocusableElements.length > 0) {
        this.allFocusableElements[0].focus();
      } else {
        this.canvasContent?.focus();
      }

      this.handlePageOverflow();
    } else {
      // Restore focus to the element that was focused before the offcanvas was opened.
      this.previouslyFocusedElement?.focus();

      // When the offcanvas is closing, wait for the transitionend event before restoring the page overflow.
      const listenerCallback = (): void => {
        this.handlePageOverflow();
        this.canvasContainer.removeEventListener("transitionend", listenerCallback);
      };

      this.canvasContainer?.addEventListener("transitionend", listenerCallback);
    }
  }

  componentWillLoad(): void {
    if (this.open) {
      this.skipAnimation = true;
    }
  }

  componentDidLoad(): void {
    this.handlePageOverflow();
  }

  componentDidRender(): void {
    this.skipAnimation = false;
    this.allFocusableElements = this.getFocusableElements();
  }

  connectedCallback(): void {
    this.handlePageOverflow();
  }

  disconnectedCallback(): void {
    this.open = false;
  }

  render(): HTMLZOffcanvasElement {
    return (
      <Host
        skip-animation={this.skipAnimation}
        aria-hidden={!this.open ? "true" : null}
      >
        <div
          class="canvas-container"
          role="presentation"
          ref={(el) => (this.canvasContainer = el)}
        >
          <div
            class="canvas-content z-scrollbar"
            role="presentation"
            ref={(el) => (this.canvasContent = el)}
          >
            <slot name="canvasContent"></slot>
          </div>
        </div>
        {(this.variant == OffCanvasVariant.OVERLAY || this.transitiondirection === TransitionDirection.UP) &&
          this.showBackdrop && (
            <div
              class="backdrop"
              onClick={() => (this.open = false)}
            ></div>
          )}
      </Host>
    );
  }
}
