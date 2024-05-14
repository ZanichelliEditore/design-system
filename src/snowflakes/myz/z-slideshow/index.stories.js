import {html} from "lit";

export default {
  title: "Snowflakes/ZSlideshow",
  component: "z-slideshow",
};

export const ZSlideshowSample = {
  render: () =>
    html`<div style="width:500px;">
      <z-slideshow
        data='["https://cdn.pixabay.com/photo/2015/03/28/16/40/lake-696098_960_720.jpg","https://cdn.pixabay.com/photo/2013/02/21/19/06/drink-84533_960_720.jpg","https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565_960_720.jpg"]'
      ></z-slideshow>
    </div>`,

  name: "ZSlideshow-sample",
};
