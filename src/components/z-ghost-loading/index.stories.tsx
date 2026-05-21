import {h} from "@stencil/core";
import {ZGhostLoading} from "./index";
import "./index.stories.css";

export default {
  title: "ZGhostLoading",
  component: ZGhostLoading,
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
