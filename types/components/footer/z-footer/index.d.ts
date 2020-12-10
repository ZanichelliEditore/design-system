import { FooterBean, FooterGroupBean } from "../../../beans/index.js";
export declare class ZFooter {
    /** JSON stringified data to fill the footer */
    data: string;
    /** set copyright user (optional)  */
    copyrightuser?: any;
    isOpen: boolean[];
    isMobile: boolean;
    jsonData: FooterBean;
    componentWillLoad(): void;
    componentDidLoad(): void;
    resize(): void;
    handleOnHeaderClick(id: number): void;
    renderFooterSection(id: number, group: FooterGroupBean): HTMLElement;
    renderFooterTop(): HTMLElement;
    renderZLogo(): HTMLElement;
    renderAddress(): HTMLElement;
    renderSocial(): HTMLElement;
    renderCopyright(): HTMLElement;
    renderCertification(): HTMLElement;
    renderBottomLinks(): HTMLElement;
    renderFooterBottom(): HTMLElement;
    render(): any;
}
