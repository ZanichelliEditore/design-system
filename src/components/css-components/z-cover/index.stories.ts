import {html} from "lit-html";
import "./index.stories.css";
import "./styles.css";

export default {
  title: "ZCover",
  parameters: {
    layout: "centered",
  },
};

export const SingleCover = (): ReturnType<typeof html> => html`
  <div class="z-cover-story">
    <div class="z-cover-container">
      <div class="z-cover-stack">
        <img
          src="https://place.abh.ai/s3fs-public/placeholder/DSC_0199_400x400.JPG"
          alt="Book Cover"
          class="z-cover-img"
        />
      </div>
    </div>
  </div>
`;

export const MultipleCover = (): ReturnType<typeof html> => html`
  <div class="z-cover-story">
    <div class="z-cover-container has-multiple">
      <div class="z-cover-stack">
        <div>
          <div class="z-cover-shadow z-shadow-2"></div>
          <div class="z-cover-shadow z-shadow-1"></div>
        </div>
        <img
          src="https://place.abh.ai/s3fs-public/placeholder/DSC_0199_400x400.JPG"
          alt="Book Cover"
          class="z-cover-img"
        />
      </div>
    </div>
  </div>
`;
