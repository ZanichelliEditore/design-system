import { AvatarSize } from "../../beans";
export declare class ZAvatar {
  /** [optional] Avatar size */
  size?: AvatarSize;
  /** [optional] Avatar text */
  text?: string;
  /** [optional] Avatar text color */
  textColor?: string;
  /** [optional] Avatar background color */
  backgroundColor?: string;
  /** [optional] Avatar image */
  image?: string;
  constructor();
  getTextSize(): "5" | "4" | "2";
  render(): any;
}
