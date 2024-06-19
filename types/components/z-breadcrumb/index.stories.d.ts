import { ZBreadcrumb } from ".";
import { BreadcrumbHomepageVariant, BreadcrumbPathStyle } from "../../beans";
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
 * @example```html
 * <z-breadcrumb>
 *  <a href="./home_link"></a>
 *  <a href="./link1">link1</a>
 *  <a href="./link2">link2</a>
 *  <a href="./link3">link3</a>
 * </z-breadcrumb>```
 *
 * This component follows the accessibility guidelines provided by W3C https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/examples/breadcrumb/
 */
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        pathStyle: {
            options: BreadcrumbPathStyle[];
            control: {
                type: "select";
            };
        };
        homepageVariant: {
            options: BreadcrumbHomepageVariant[];
            control: {
                type: "select";
            };
        };
    };
    args: {
        pathStyle: BreadcrumbPathStyle.SEMIBOLD;
        homepageVariant: BreadcrumbHomepageVariant.ICON;
        maxNodesToShow: number;
        preventFollowUrl: false;
        overflowMenuItemRows: number;
        truncateChar: number;
    };
};
export default StoryMeta;
export declare const Breadcrumb: {
    render: (args: ZBreadcrumb) => import("lit-html").TemplateResult<1>;
};
