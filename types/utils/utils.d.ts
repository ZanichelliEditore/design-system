import { DeviceEnum } from "../beans/index";
export declare function format(first: string, middle: string, last: string): string;
/**
 * Return boolean value for passed value if a boolean corresponding value is found
 * Return passed value otherwise
 */
export declare function boolean(value: any): boolean | string;
export declare function retrieveAsset(assetName: string): string;
export declare function randomId(): string;
export declare function handleKeyboardSubmit(ev: KeyboardEvent, callback: Function, ...args: any[]): void;
export declare function getClickedElement(elem?: null | Element): null | Element;
export declare function getElementTree(elem: Element, tree?: Element[]): null | Element[];
export declare function getSiblings(elem: HTMLElement): any[];
export declare function getDevice(): DeviceEnum;
export declare function convertJson(data: string): any;
export declare function colorFromId(id: any): string;
