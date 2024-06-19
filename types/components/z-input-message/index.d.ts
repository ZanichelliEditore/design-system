import { InputStatus } from "../../beans";
export declare class ZInputMessage {
    /** input helper message */
    message: string;
    /** input status (optional) */
    status?: InputStatus;
    private statusIcons;
    statusRole: {};
    onMessageChange(): void;
    componentWillLoad(): void;
    render(): HTMLZInputMessageElement;
}
