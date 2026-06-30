import {Component, Element, Event, EventEmitter, Host, Listen, Prop, State, Watch, h} from "@stencil/core";
import {KeyboardCode, OffCanvasVariant, TransitionDirection} from "../../beans";
import {FocusTrapController} from "../../utils/focus-trap-controller";
import {ReactiveControllerHost} from "../../utils/reactive-controller";
import {getTabbableElements} from "../../utils/utils";

/**
 * @slot canvasContent - Slot for the offcanvas content.
 */
@Component({
  tag: "z-offcanvas",
  styleUrl: "styles.css",
  shadow: false,
  scoped: true,
})
export class ZOffcanvas extends ReactiveControllerHost {
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

  /** Whether to show the backdrop when the offcanvas is open and variant is not `pushcontent`. Default: `true` */
  @Prop()
  showBackdrop = true;

  /** emitted when `open` prop changes */
  @Event()
  canvasOpenStatusChanged: EventEmitter<boolean>;

  /** Used to skip the opening transition when the offcanvas is already open at the first render. */
  @State()
  private skipAnimation = false;

  private canvasContent: HTMLElement;

  private focusTrapController = new FocusTrapController(this, {
    fallbackFocus: () => this.canvasContent,
    isActive: () => this.open && this.variant === OffCanvasVariant.OVERLAY,
  });

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

    this.focusTrapController.handleWrapTab(event);
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
    this.focusTrapController.sync();
  }

  componentWillLoad() {
    if (this.open) {
      this.skipAnimation = true; // TODO: remove this line when `skipLoadAnimation` prop is removed.
    }

    return super.componentWillLoad();
  }

  componentDidRender() {
    this.skipAnimation = false; // TODO: remove this line when `skipLoadAnimation` prop is removed.
  }

  componentDidLoad() {
    if (this.open) {
      this.onOpenChanged();
    }
  }

  disconnectedCallback() {
    this.handlePageScroll();
    super.disconnectedCallback();
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
            tabIndex={getTabbableElements(this.host).length ? undefined : -1} // allows the div to programmatically receive focus when there are no focusable elements inside, necessary for the focus trap to work properly
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
