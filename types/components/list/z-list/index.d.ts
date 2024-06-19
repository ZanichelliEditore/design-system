import { ListSize, ListType } from "../../../beans";
export declare class ZList {
    host: HTMLZListElement;
    /**
     * [optional] Sets size of inside elements.
     */
    size?: ListSize;
    /**
     * [optional] type of the list marker for each element
     */
    listType?: ListType;
    /**
     * Sets role of the element.
     */
    role: string;
    private setChildrenSizeType;
    componentDidLoad(): void;
    render(): HTMLZListElement;
}
