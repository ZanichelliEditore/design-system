import type { ZButtonSort } from ".";
import "./index";
declare const StoryMeta: {
    title: string;
    args: {
        label: string;
        counter: number;
        desclabel: string;
        sortlabelasc: string;
        sortlabeldesc: string;
        isselected: true;
        sortasc: true;
    };
    render: (args: ZButtonSort) => import("lit-html").TemplateResult<1>;
};
export default StoryMeta;
export declare const Default: {};
export declare const Ellipsis: {
    args: {
        label: string;
    };
};
