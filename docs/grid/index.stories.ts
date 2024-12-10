import {html} from "lit";
import "./index.stories.css";

export default {
  title: "Grid",
  tags: ["!autodocs"],
};

export const Grid = {
  render: () => html`
    <div class="grid-story body-1">
      <p><strong>z-grid</strong> column responsive CSS classes.</p>
      <p>Each "col" class can be used with a viewport prefix:
        <ul>
          <li>mobile-col-#</li>
          <li>tablet-col-#</li>
          <li>desktop-col-#</li>
          <li>wide-col-#</li>
        </ul>
      </p>
      <p>The prefix let the class apply its style only on that viewport.</p>
      <div class="container">
        <h3>Responsive columns</h3>
        <div class="z-grid">
          <div class="wide-col-6 desktop-col-4 tablet-col-3 mobile-col-2">
            wide-col-6 desktop-col-4 tablet-col-3 mobile-col-2
          </div>
          <div class="wide-col-6 desktop-col-4 tablet-col-3 mobile-col-2">
            wide-col-6 desktop-col-4 tablet-col-3 mobile-col-2
          </div>
          <div class="wide-col-4 desktop-col-4 tablet-col-3 mobile-col-2">
            wide-col-4 desktop-col-4 tablet-col-3 mobile-col-2
          </div>
          <div class="wide-col-4 desktop-col-4 tablet-col-3 mobile-col-2">
            wide-col-4 desktop-col-4 tablet-col-3 mobile-col-2
          </div>
          <div class="ghost-grid z-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  `,
};
