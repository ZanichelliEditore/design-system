import "./index";
declare const _default: {
    title: string;
    component: string;
    argTypes: {
        fill: {
            options: string[];
            control: {
                type: "select";
            };
        };
    };
    args: {
        name: string;
        height: number;
        width: number;
        fill: string;
    };
};
export default _default;
export declare const Default: {
    render: (args: any) => import("lit-html").TemplateResult<1>;
};
