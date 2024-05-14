import {html} from "lit";

export default {
  title: "ZVisuallyHidden",
  component: "z-visually-hidden",
};

export const ZVisuallyHiddenSample = {
  render: () =>
    html`<h2 class="heading-2">ZVisuallyHidden</h2>
      <span>
        This component visually hide an element while still allowing it to be exposed to assistive technologies (such as
        screen readers). </span
      ><span>
        There are real world situations where visually hiding content may be appropriate:
        <ul>
          <li>Hide visually the text of <code> ZAriaAlert </code></li>
          <li>
            Take advantage of the behavior and semantics of a native element like a checkbox or radio button, but
            replace it with a custom styled element visually.
          </li>
          <li>
            Hide visually an <code> h1 </code> because could be redundant for a sighted user but could be usefull for
            navigation through ScreenReader rotor
          </li>
        </ul> </span
      ><z-visually-hidden><div>Hello</div></z-visually-hidden>`,

  name: "ZVisuallyHidden-sample",
};
