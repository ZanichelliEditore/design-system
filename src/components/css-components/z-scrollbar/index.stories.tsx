import {h} from "@stencil/core";
import "./index.stories.css";

const StoryMeta = {
  title: "CSS Components/ZScrollbar",
  parameters: {
    a11y: {
      disable: true,
    },
    controls: {
      disable: true,
    },
  },
};

export default StoryMeta;

/**
 * If applied to elements with CSS property "overflow:scroll", the class will apply to both the vertical AND the horizontal scrollbars.
 * To avoid this, use "overflow-y" instead.
 * Bear in mind that the scrollbar behaves in different ways depending on the browser:
 *
 * - **Chrome desktop + Android + MS Edge + Opera**:
 *   - primary color scrollbar thumb with right angles
 *   - gray scrollbar track
 *   - thumb gets darker on hover
 *   - thumb doesn't bounce when at end of track
 * - **Safari on Mac + Chromium 69 (booktab)**:
 *   - thumb bounces when at end of track
 * - **Safari on iPad**:
 *   - no scrollbars
 * - **Chrome on iPad**:
 *   - gray, narrower thumb
 *   - no track
 * - **Firefox desktop**:
 *   - thumb has border radius
 *   - no track
 *   - thumb gets wider on hover
 * - **Firefox on Android**:
 *   - the scrollbar disappears if you're not actively scrolling
 *   - thumb has border radius
 *   - no track
 * - **Samsung browser**:
 *   - no side margins
 */
export const Default = {
  render: () => (
    <div class="z-scrollbar-story">
      <div class="scrollbar-container z-scrollbar">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sodales purus et congue pellentesque. Sed quis
          venenatis nibh. Cras ut velit vel nisl cursus euismod ac quis lorem. In eget nisl lectus. Quisque id nibh in
          nisi viverra varius vitae id est. Nulla tincidunt mi eget consequat lacinia. Quisque rhoncus dolor a tortor
          fermentum molestie. Vivamus posuere non sapien vitae auctor. Donec dignissim efficitur consectetur.
          Suspendisse eu bibendum tortor. Nulla facilisi. Mauris pharetra eleifend dolor. Morbi velit odio, mollis et
          euismod eu, imperdiet in lectus. Maecenas laoreet tellus et diam finibus blandit. Mauris aliquam quis tellus
          et congue.
        </p>
      </div>
    </div>
  ),
};
