import { Meta } from "@storybook/web-components";
import { type ZPagination } from ".";
import "./index";
declare const StoryMeta: Meta<ZPagination>;
export default StoryMeta;
export declare const VisiblePages: {
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
/**
 * > Note that enabling `split` will shut off `visiblePages` and `edges`.
 */
export declare const Split: {
    args: {
        split: number;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const Edges: {
    args: {
        edges: true;
    };
    parameters: {
        controls: {
            exclude: string[];
        };
    };
};
export declare const Skip: {
    args: {
        skip: number;
    };
};
