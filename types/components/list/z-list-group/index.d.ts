import { DividerSize, ListDividerType, ListSize, ListType } from "../../../beans";
export declare class ZListGroup {
    host: HTMLZListGroupElement;
    /**
     * [optional] Sets size of inside elements.
     */
    size?: ListSize;
    /**
     * [optional] Sets the position where to insert the divider.
     */
    dividerType?: ListDividerType;
    /**
     * [optional] Sets the divider size.
     */
    dividerSize?: DividerSize;
    /**
     * [optional] Sets the divider color.
     */
    dividerColor?: string;
    /**
     * [optional] type of the list marker for each element
     */
    listType?: ListType;
    private hasHeader;
    componentDidLoad(): void;
    componentWillLoad(): void;
    render(): HTMLZListGroupElement;
}
