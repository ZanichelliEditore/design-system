import {html} from "lit";
import "./index.stories.css";

export default {
  title: "Grid",
};

export const GridSystem = {
  render: () => html`
    <div class="grid-story">
      <p>This story highlights z-grid column responsive CSS classes from albe-design-tokens grid system.</p>
      <p>Changing the viewport size will change the grid layout.</p>
      <p>Try changing viewport size using Storybook preview tool on Canvas tab.</p>
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

  name: "Grid System",
};
