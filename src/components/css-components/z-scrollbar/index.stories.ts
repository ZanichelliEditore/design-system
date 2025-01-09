import {html} from "lit";
import "./index.stories.css";

export default {
  title: "ZScrollbar",

  parameters: {
    layout: "fullscreen",
  },
};

export const ZScrollbar = {
  render: (args) => html`
    <div class="z-scrollbar-story">
      <div class="scrollbar-container themes ${args.theme} z-scrollbar">
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
  `,
};
