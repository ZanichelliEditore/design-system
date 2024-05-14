import {BreadcrumbHomepageVariant, BreadcrumbPathStyle} from "../../beans";
import {html} from "lit";
import "./style.stories.css";

export default {
  title: "ZBreadcrumb",
  component: "z-breadcrumb",

  argTypes: {
    pathStyle: {
      options: Object.values(BreadcrumbPathStyle),

      control: {
        type: "select",
      },
    },

    homepageVariant: {
      options: Object.values(BreadcrumbHomepageVariant),

      control: {
        type: "select",
      },
    },

    maxNodesToShow: {
      control: {
        type: "number",
      },
    },

    preventFollowUrl: {
      control: {
        type: "boolean",
      },
    },

    overflowMenuItemRows: {
      control: {
        type: "number",
      },
    },

    truncateChar: {
      control: {
        type: "number",
      },
    },
  },
};

export const Breadcrumb = {
  render: (args) =>
    html`<div class="z-breadcrumb-story-container">
      <z-breadcrumb
        path-style=${args.pathStyle}
        homepage-variant=${args.homepageVariant}
        max-nodes-to-show=${args.maxNodesToShow}
        prevent-follow-url=${args.preventFollowUrl}
        overflow-menu-item-rows=${args.overflowMenuItemRows}
        truncate-char=${args.truncateChar}
      >
        <a href="https://www.zanichelli.it"></a>
        <a href="./link1">Lingua inglese - Scuola secondaria di primo grado</a>
        <a href="./link2">Lingua Inglese - Lessico e funzioni linguistiche e comunicative</a>
        <a href="./link3">Il tempo libero e i luoghi del tempo libero</a>
        <a href="./link4">Chiedere di descrivere le proprie vacanze</a>
      </z-breadcrumb>
    </div>`,

  name: "Breadcrumb",

  args: {
    pathStyle: BreadcrumbPathStyle.SEMIBOLD,
    homepageVariant: BreadcrumbHomepageVariant.ICON,
    maxNodesToShow: 5,
    preventFollowUrl: false,
    overflowMenuItemRows: 0,
    truncateChar: 30,
  },
};
