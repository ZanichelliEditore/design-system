import { ZSectionTitle } from ".";
import { ZSectionTitleDividerPosition } from "../../beans";
import { CSSVarsArguments } from "../../utils/storybook-utils";
import "./index";
type ZSectionTitleStoriesArgs = ZSectionTitle & CSSVarsArguments<"z-section-title--divider-color">;
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        dividerPosition: {
            options: ZSectionTitleDividerPosition[];
            control: {
                type: "inline-radio";
            };
        };
        "--z-section-title--divider-color": import("@storybook/types").Args;
    };
    args: {
        uppercase: true;
        "--z-section-title--divider-color": string;
    };
};
export default StoryMeta;
export declare const PrimaryTitleOnly: {
    args: {
        dividerPosition: ZSectionTitleDividerPosition.BEFORE;
    };
    render: (args: ZSectionTitleStoriesArgs) => import("lit-html").TemplateResult<1>;
};
export declare const SecondaryTitle: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
    render: (args: ZSectionTitleStoriesArgs) => import("lit-html").TemplateResult<1>;
};
