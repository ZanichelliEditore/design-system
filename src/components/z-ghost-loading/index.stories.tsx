import {h} from "@stencil/core";
import "./index.stories.css";

export default {
  title: "ZGhostLoading",
  component: "z-ghost-loading",
};

export const Default = {
  render: () => (
    <div class="z-ghost-loading-story-container">
      <div class="z-ghost-loading-row">
        <z-ghost-loading></z-ghost-loading>
        <z-ghost-loading></z-ghost-loading>
      </div>
      <div class="z-ghost-loading-row">
        <z-ghost-loading></z-ghost-loading>
        <z-ghost-loading></z-ghost-loading>
        <z-ghost-loading></z-ghost-loading>
        <z-ghost-loading></z-ghost-loading>
      </div>
      <div class="z-ghost-loading-row">
        <z-ghost-loading></z-ghost-loading>
        <z-ghost-loading></z-ghost-loading>
        <z-ghost-loading></z-ghost-loading>
      </div>
    </div>
  ),
};
