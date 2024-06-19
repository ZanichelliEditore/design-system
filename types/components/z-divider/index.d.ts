import { DividerOrientation, DividerSize } from "../../beans";
export declare class ZDivider {
    /** [optional] Divider size */
    size?: DividerSize;
    /** [optional] Divider color */
    color?: string;
    /** [optional] Divider orintation */
    orientation?: DividerOrientation;
    render(): HTMLZDividerElement;
}
