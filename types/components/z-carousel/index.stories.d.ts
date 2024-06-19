import { type ZCarousel } from ".";
import { CarouselArrowsPosition, CarouselProgressMode } from "../../beans";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "../z-ghost-loading/index";
import "./index";
import "./index.stories.css";
type ZCarouselStoriesArgs = ZCarousel & {
    itemsCount: number;
} & CSSVarsArguments<"z-carousel-gutter">;
/**
 * This component was conceived as a list of elements to respect the rules of accessibility (https://www.w3.org/WAI/tutorials/carousels/working-example/).
 * Pass any number of elements inside its main `slot`.
 * @example```html
 * <z-carousel>
 *  <li>element</li>
 *  <li>element</li>
 *  <li>element</li>
 * </z-carousel>
 * ```
 * > Note: always use `li` elements as direct children of `z-carousel`, as it wraps them with an `ul` element.
 * You can set the gutter between the elements by using the `--z-carousel-gutter` custom property.
 * @example```css
 * z-carousel {
 *  --z-carousel-gutter: calc(var(--space-unit) * 2);
 * }```
 */
declare const StoryMeta: {
    title: string;
    component: string;
    decorators: ((Story: import("@storybook/types").PartialStoryFn<import("@storybook/web-components").WebComponentsRenderer, ZCarouselStoriesArgs>) => import("lit-html").TemplateResult<1>)[];
};
export default StoryMeta;
export declare const SlideshowWithArrowsOver: {
    args: {
        label: string;
        "--z-carousel-gutter": string;
        infinite: false;
        fixedArrows: true;
        itemsCount: number;
    };
    render: (args: ZCarouselStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const SingleMode: {
    parameters: {
        layout: string;
    };
    argTypes: {
        arrowsPosition: {
            control: {
                type: "inline-radio";
            };
            options: CarouselArrowsPosition[];
        };
        progressMode: {
            control: {
                type: "inline-radio";
            };
            options: CarouselProgressMode[];
        };
    };
    args: {
        label: string;
        progressMode: CarouselProgressMode.DOTS;
        arrowsPosition: CarouselArrowsPosition.BOTTOM;
        infinite: false;
        fixedArrows: true;
        itemsCount: number;
    };
    render: (args: ZCarouselStoriesArgs) => import("lit-html").TemplateResult<1>;
};
/**
 * You can handle ghost loading for the whole z-carousel by setting two properties:
 * - `isLoading` (boolean): to show a `z-ghost-loading` component instead of the carousel content.
 * - `ghostLoadingHeight` (number): to set the height of the `z-ghost-loading` component.
 * You can also manually handle ghost loading by putting <z-ghost-loading> elements as items.
 */
export declare const GhostLoading: {
    args: {
        label: string;
        ghostLoadingHeight: number;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZCarouselStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const LoadingItems: {
    args: {
        label: string;
        "--z-carousel-gutter": string;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZCarouselStoriesArgs) => import("lit-html").TemplateResult<1>;
};
