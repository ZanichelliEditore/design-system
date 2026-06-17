// import {ComponentInterface} from "@stencil/core";

// /**
//  * Contract implemented by composable controllers.
//  * Each method mirrors a host lifecycle hook.
//  * @see Stencil doc on composition pattern https://stenciljs.com/docs/extends#composition
//  */
// export interface ReactiveController {
//   hostConnected?();
//   hostDisconnected?();
//   hostWillLoad?(): Promise<void> | void;
//   hostDidLoad?();
//   hostWillRender?(): Promise<void> | void;
//   hostDidRender?();
//   hostWillUpdate?(): Promise<void> | void;
//   hostDidUpdate?();
// }

// /**
//  * Minimal host implementation to register and invoke controllers across Stencil lifecycle hooks.
//  *
//  * Usage:
//  * - extend this class in a component
//  * - register controllers in the constructor via `addController(...)`
//  * - call `super.*` when overriding lifecycle hooks used by controllers
//  */
// export class ReactiveControllerHost implements ComponentInterface {
//   private readonly controllers = new Set<ReactiveController>();

//   /** Register a controller instance for lifecycle delegation. */
//   addController(controller: ReactiveController) {
//     this.controllers.add(controller);
//   }

//   /** Unregister a controller instance from lifecycle delegation. */
//   removeController(controller: ReactiveController) {
//     this.controllers.delete(controller);
//   }

//   connectedCallback() {
//     this.controllers.forEach((controller) => controller.hostConnected?.());
//   }

//   disconnectedCallback() {
//     this.controllers.forEach((controller) => controller.hostDisconnected?.());
//   }

//   componentWillLoad() {
//     this.controllers.forEach((controller) => controller.hostWillLoad?.());
//   }

//   componentDidLoad() {
//     this.controllers.forEach((controller) => controller.hostDidLoad?.());
//   }

//   componentWillRender() {
//     this.controllers.forEach((controller) => controller.hostWillRender?.());
//   }

//   componentDidRender() {
//     this.controllers.forEach((controller) => controller.hostDidRender?.());
//   }

//   componentWillUpdate() {
//     this.controllers.forEach((controller) => controller.hostWillUpdate?.());
//   }

//   componentDidUpdate() {
//     this.controllers.forEach((controller) => controller.hostDidUpdate?.());
//   }
// }
