import {html} from "lit";

export default {
  title: "ZGhostLoading",
  component: "z-ghost-loading",
};

export const ZGhostLoading = {
  render: () =>
    html`<div style="height:24px; padding-bottom:8px;"><z-ghost-loading></z-ghost-loading></div>
      <div style="width:50%; height:24px"><z-ghost-loading></z-ghost-loading></div>
      <br /><br />
      <div style="height:12px; padding-bottom:8px;"><z-ghost-loading></z-ghost-loading></div>
      <div style="height:12px; padding-bottom:8px;"><z-ghost-loading></z-ghost-loading></div>
      <div style="height:12px; padding-bottom:8px;"><z-ghost-loading></z-ghost-loading></div>
      <div style="width:50%; height:12px"><z-ghost-loading></z-ghost-loading></div>
      <br /><br />
      <div style="display:flex">
        <div style="width:30%; height:50px; padding-right:20px"><z-ghost-loading></z-ghost-loading></div>
        <div style="width:30%; height:50px; padding-right:20px"><z-ghost-loading></z-ghost-loading></div>
        <div style="width:30%; height:50px;"><z-ghost-loading></z-ghost-loading></div>
      </div>`,

  name: "ZGhostLoading",
};
