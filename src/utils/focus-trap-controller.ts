import {getElement} from "@stencil/core";
import {createFocusTrap, type Options as FocusTrapOptions} from "focus-trap";
import {KeyboardCode} from "../beans";
import {ReactiveController, ReactiveControllerHost} from "./reactive-controller";
import {containsElement, getDeepActiveElement, getTabbableElements as getDefaultTabbableElements} from "./utils";

/**
 * Focus trap controller configuration plus the options for `focus-trap` library.
 * @see https://github.com/focus-trap/focus-trap#trap-configuration-options
 */
type FocusTrapControllerConfig = {
  /** Root element of the trap. Defaults to the host element if not provided. */
  getTrapRoot?: () => HTMLElement;
  /** List of tabbable elements or custom function to override the default retrieval. */
  tabbableElements?: HTMLElement[] | (() => HTMLElement[]);
  /** Function to determine if the trap is active. */
  isActive: () => boolean;
} & FocusTrapOptions;

/**
 * Reactive controller for focus trapping.
 *
 * It creates and syncs a `focus-trap` instance based on host state,
 * manages wrap-around Tab navigation, and cleans up on disconnect.
 */
export class FocusTrapController implements ReactiveController {
  /** Instance of the component using the controller. */
  private host: ReactiveControllerHost;

  /** Root element of the component using the controller (the same provided by `@Element` decorator). */
  private hostElement: HTMLElement;

  /** Instance of the focus trap. */
  focusTrap: ReturnType<typeof createFocusTrap> | undefined;

  constructor(
    host: ReactiveControllerHost,
    private readonly config: FocusTrapControllerConfig
  ) {
    this.host = host;
    this.host.addController(this);
    this.hostElement = getElement(this.host);
  }

  private get trapRoot(): HTMLElement {
    return this.config.getTrapRoot?.() ?? this.hostElement;
  }

  private getTabbableElements(): HTMLElement[] {
    if (!this.trapRoot) {
      return [];
    }

    if (this.config.tabbableElements) {
      return typeof this.config.tabbableElements === "function"
        ? this.config.tabbableElements()
        : this.config.tabbableElements;
    }

    return getDefaultTabbableElements(this.trapRoot);
  }

  private focusFirstTrapElement(): void {
    this.getTabbableElements()[0]?.focus();
  }

  private focusLastTrapElement(): void {
    const tabbableElements = this.getTabbableElements();

    tabbableElements[tabbableElements.length - 1]?.focus();
  }

  /** Create focus trap and activate/deactivate it according to `isActive()`. */
  sync(): void {
    if (!this.trapRoot) {
      return;
    }

    if (!this.focusTrap) {
      this.focusTrap = createFocusTrap(this.trapRoot, {
        allowOutsideClick: true,
        clickOutsideDeactivates: false,
        escapeDeactivates: false,
        returnFocusOnDeactivate: true,
        initialFocus: () => this.getTabbableElements()[0] ?? this.config.fallbackFocus,
        onPostActivate: () => this.focusFirstTrapElement(),
        isKeyForward: () => false,
        isKeyBackward: () => false,
        document: this.hostElement.ownerDocument,
        ...this.config,
      });
    }

    if (this.config.isActive()) {
      this.focusTrap.activate();

      return;
    }

    this.focusTrap.deactivate();
  }

  /**
   * Handle manual wrap-around on TAB key when focus is on the first/last tabbable element.
   * This complements the trap to support nested shadow DOM tabbables reliably.
   *
   * @example Manual wrap-around handling in a component:
   * ```ts
   * @Listen("keydown", {target: "document"})
   * handleKeyDown(event: KeyboardEvent): void {
   *   this.focusTrapController.handleWrapTab(event);
   * }
   * ```
   */
  handleWrapTab(event: KeyboardEvent): void {
    if (event.key !== KeyboardCode.TAB || event.altKey || event.ctrlKey || event.metaKey || event.defaultPrevented) {
      return;
    }

    const tabbableElements = this.getTabbableElements();

    if (!tabbableElements.length) {
      return;
    }

    const activeElement = getDeepActiveElement(this.hostElement.ownerDocument);
    const firstElement = tabbableElements[0];
    const lastElement = tabbableElements[tabbableElements.length - 1];
    const isOnFirstElement = activeElement ? containsElement(firstElement, activeElement) : false;
    const isOnLastElement = activeElement ? containsElement(lastElement, activeElement) : false;

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

  /** Deactivate trap and restore focus management state. */
  deactivate(): void {
    this.focusTrap?.deactivate();
  }

  hostDisconnected(): void {
    this.deactivate();
  }
}
