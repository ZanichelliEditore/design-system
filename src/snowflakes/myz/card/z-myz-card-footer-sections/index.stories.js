import {html} from "lit";

export default {
  title: "Snowflakes/MyzCard/ZMyzCardFooterSections",
  component: "z-myz-card-footer-sections",
};

export const ZMyzCardFooterSections = {
  render: () => html`
    <z-myz-card-footer-sections>
      <span slot="top">Top footer content</span>
      <span slot="bottom">Bottom footer content</span>
    </z-myz-card-footer-sections>
  `,

  name: "ZMyzCardFooterSections",
};
