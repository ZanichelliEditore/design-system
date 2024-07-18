import "./index";
declare const _default: {
    title: string;
    component: string;
    args: {
        pressed: false;
        disabled: false;
        checked: false;
        index: number;
        text: string;
    };
};
export default _default;
export declare const Default: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const Pressed: {
    args: {
        pressed: boolean;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const Disabled: {
    args: {
        disabled: boolean;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
export declare const Checked: {
    args: {
        checked: boolean;
    };
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
