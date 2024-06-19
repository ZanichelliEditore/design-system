import { type ZSkipToContent } from ".";
import { ThemeVariant } from "../../beans";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        variant: {
            options: ThemeVariant[];
            control: {
                type: "inline-radio";
            };
        };
    };
};
export default StoryMeta;
export declare const Default: {
    args: {
        variant: ThemeVariant.LIGHT;
        links: ({
            ariaLabel: string;
            label: string;
            href: string;
        } | {
            label: string;
            href: string;
            ariaLabel?: undefined;
        })[];
    };
    render: (args: ZSkipToContent) => import("lit-html").TemplateResult<1>;
};
