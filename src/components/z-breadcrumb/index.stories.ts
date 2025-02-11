import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZBreadcrumb} from ".";
import {BreadcrumbHomepageVariant, BreadcrumbPathStyle} from "../../beans";
import "./index";
import "./style.stories.css";

/**
 * Breadcrumb is a relevant component for SEO oriented applications.
 * As the crawlers flatten the light dom and the shadow dom, it is important to move all the relevant SEO content in the light DOM, to not affect indexability.
 *
 * The component will handle the logic for generating the proper markup inside the shadow dom.
 * No slot is rendered inside the latter.
 * Like the other use case, don't pass a custom label to the first child because it will be overwritten by the default home value.
 * This mode can be also used by SEO non-relevant application.
 * @example```
 * <z-breadcrumb>
 *  <a href="./home_link"></a>
 *  <a href="./link1">link1</a>
 *  <a href="./link2">link2</a>
 *  <a href="./link3">link3</a>
 * </z-breadcrumb>```
 *
 * This component follows the accessibility guidelines provided by W3C https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/
 */
const StoryMeta = {
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
  },
  args: {
    pathStyle: BreadcrumbPathStyle.SEMIBOLD,
    homepageVariant: BreadcrumbHomepageVariant.ICON,
    maxNodesToShow: 5,
    preventFollowUrl: false,
    overflowMenuItemRows: 0,
    truncateChar: 30,
  },
} satisfies Meta<ZBreadcrumb>;

export default StoryMeta;

export const Breadcrumb = {
  render: (args) =>
    html`<div class="z-breadcrumb-story-container">
      <z-breadcrumb
        .pathStyle=${args.pathStyle}
        .homepageVariant=${args.homepageVariant}
        .maxNodesToShow=${args.maxNodesToShow}
        .preventFollowUrl=${args.preventFollowUrl}
        .overflowMenuItemRows=${args.overflowMenuItemRows}
        .truncateChar=${args.truncateChar}
      >
        <a href="https://www.zanichelli.it"></a>
        <a href="./link1">Lingua inglese - Scuola secondaria di primo grado</a>
        <a href="./link2">Lingua Inglese - Lessico e funzioni linguistiche e comunicative</a>
        <a href="./link3">Il tempo libero e i luoghi del tempo libero</a>
        <a href="./link4">Chiedere di descrivere le proprie vacanze</a>
      </z-breadcrumb>
    </div>`,
} satisfies StoryObj<ZBreadcrumb>;
