import { MenuItem } from "../../../beans/index";
export declare class ZMenuDropdown {
    /** user name text */
    nomeutente: string;
    /** Json stringified or array to fill menu dropdown */
    menucontent: string | MenuItem[];
    /** unique button id */
    buttonid: string;
    ismenuopen: boolean;
    linkarray: MenuItem[];
    constructor();
    componentWillRender(): void;
    renderMenuOpen(): any;
    renderButtonMenu(): any;
    retriveMenuClass(): string;
    handleToggle(): void;
    handleFocus(e: MouseEvent | KeyboardEvent): void;
    render(): any;
}
