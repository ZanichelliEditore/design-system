import "../../z-icon/index";
import "./index.stories.css";
/**
 * You can use the `.z-fab` class on a `<button>` or `<a>` with some additional configuration class:
 * - Sizes: `.z-fab-small`, `.z-fab-x-small`. Default with no size classes, is `big`
 * - Color variants: `.z-fab-primary03`, `.z-fab-surface01`, `.z-fab-surface02`, `.z-fab-surface04`. Default with no color classes, is `primary01`
 * - `.z-fab-extended`: show the label (if any) near the icon
 * - `.z-fab-extendable`: label will be shown only on mouse hover and only on desktop viewports (don't add the `.z-fab-extended` class in this case)
 *
 * Some css custom properties are also available to customize the component:
 * - `--z-fab-right-offset`: the right offset of the fab button (Default: `--grid-margin`)
 * - `--z-fab-bottom-offset`: the bottom offset of the fab button (Default: `--grid-margin`)
 * - `--z-fab-icon-size`: the size of the icon (Default: `20px`)
 * - `--z-fab-icon-fill`: the fill color of the icon (Default: `--color-inverse-icon`)
 *
 * > NB: for the `extended` and `extendable` versions, always wrap the text of the label with some element (e.g. a `<span>`).
 */
declare const _default: {
    title: string;
    argTypes: {
        icon: {
            options: string[];
            control: {
                type: string;
            };
        };
        size: {
            options: string[];
            control: {
                type: string;
            };
        };
        colorVariant: {
            options: string[];
            control: {
                type: string;
            };
        };
    };
    args: {
        colorVariant: string;
        icon: string;
        label: string;
        size: string;
        "z-fab-extendable": boolean;
        "z-fab-extended": boolean;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default _default;
export declare const Default: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
/**
 * Multiple ZFab can be used in the same page (max 3), but only one can be "default". The other ones must have a smaller size and can't have the text.
 * You can space them by setting the `--z-fab-bottom-offset` CSS prop.
 */
export declare const Multiple: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
