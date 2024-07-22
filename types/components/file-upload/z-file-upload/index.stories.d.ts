import { type ZFileUpload } from ".";
import { ButtonVariant, ZFileUploadType } from "../../../beans";
import "./index";
declare const StoryMeta: {
    title: string;
    component: string;
    argTypes: {
        type: {
            options: ZFileUploadType[];
            control: {
                type: "inline-radio";
            };
        };
        buttonVariant: {
            options: ButtonVariant[];
            control: {
                type: "inline-radio";
            };
        };
    };
    args: {
        fileMaxSize: number;
        acceptedFormat: string;
        mainTitle: string;
        description: string;
        uploadBtnLabel: string;
        hasFileSection: true;
    };
};
export default StoryMeta;
export declare const Default: {
    args: {
        buttonVariant: ButtonVariant.PRIMARY;
    };
    render: (args: ZFileUpload) => import("lit-html").TemplateResult<1>;
};
export declare const Dragdrop: {
    args: {
        dragAndDropLabel: string;
    };
    render: (args: ZFileUpload) => import("lit-html").TemplateResult<1>;
};
export declare const DragdropEnglish: {
    args: {
        mainTitle: string;
        description: string;
        uploadBtnLabel: string;
        dragAndDropLabel: string;
        allowedFilesMessage: string;
        uploadClickableMessage: string;
        uploadMessage: string;
        errorModalTitle: string;
        errorModalMessage: string;
        uploadedFilesLabel: string;
    };
    render: (args: ZFileUpload) => import("lit-html").TemplateResult<1>;
};
