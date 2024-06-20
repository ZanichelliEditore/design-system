import { ChildNode } from "../stencil-public-runtime";
import { Device } from "../beans/index";
export declare function format(first: string, middle: string, last: string): string;
/**
 * Return boolean value for passed value if a boolean corresponding value is found
 * Return passed value otherwise
 */
export declare function boolean(value: string | number | boolean): boolean | string | number;
export declare function retrieveAsset(assetName: string): string;
export declare function randomId(): string;
export declare function handleKeyboardSubmit(ev: KeyboardEvent, callback: (...args: any[]) => void, ...args: any[]): void;
export declare function handleEnterKeydSubmit(ev: KeyboardEvent, callback: (...args: any[]) => void, ...args: any[]): void;
export declare function getClickedElement(elem?: null | Element): null | Element;
export declare function getElementTree(elem: Element, tree?: Element[]): null | Element[];
export declare function getSiblings(elem: HTMLElement): ChildNode[];
export declare function getDevice(): Device;
type JSONValue = string | number | boolean | JSONObject | JSONArray;
interface JSONObject {
    [x: string]: JSONValue;
}
type JSONArray = JSONValue[];
export declare function convertJson(data: string): JSONValue;
export declare function colorFromId(id: number): string;
/**
 * Check if the passed CSS selector is valid.
 * @param selector CSS selector to validate
 */
export declare function isSelectorValid(selector: string): boolean;
export {};
