'use strict';

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

const NAMESPACE = 'web-components-library';

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/snabbdom/snabbdom/blob/master/LICENSE
 *
 * Modified for Stencil's renderer and slot projection
 */
let scopeId;
let contentRef;
let hostTagName;
let useNativeShadowDom = false;
let checkSlotFallbackVisibility = false;
let checkSlotRelocate = false;
let isSvgMode = false;
let queuePending = false;
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
/**
 * Constant for styles to be globally applied to `slot-fb` elements for pseudo-slot behavior.
 *
 * Two cascading rules must be used instead of a `:not()` selector due to Stencil browser
 * support as of Stencil v4.
 */
const SLOT_FB_CSS = 'slot-fb{display:contents}slot-fb[hidden]{display:none}';
const XLINK_NS = 'http://www.w3.org/1999/xlink';
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
/**
 * Namespaces
 */
const SVG_NS = 'http://www.w3.org/2000/svg';
const HTML_NS = 'http://www.w3.org/1999/xhtml';
const isDef = (v) => v != null;
/**
 * Check whether a value is a 'complex type', defined here as an object or a
 * function.
 *
 * @param o the value to check
 * @returns whether it's a complex type or not
 */
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
/**
 * Helper method for querying a `meta` tag that contains a nonce value
 * out of a DOM's head.
 *
 * @param doc The DOM containing the `head` to query against
 * @returns The content of the meta tag representing the nonce value, or `undefined` if no tag
 * exists or the tag has no content.
 */
function queryNonceMetaTagContent(doc) {
    var _a, _b, _c;
    return (_c = (_b = (_a = doc.head) === null || _a === void 0 ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) === null || _b === void 0 ? void 0 : _b.getAttribute('content')) !== null && _c !== void 0 ? _c : undefined;
}
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let key = null;
    let slotName = null;
    let simple = false;
    let lastSimple = false;
    const vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        if (vnodeData.key) {
            key = vnodeData.key;
        }
        if (vnodeData.name) {
            slotName = vnodeData.name;
        }
        // normalize class / className attributes
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter((k) => classData[k])
                            .join(' ');
            }
        }
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    {
        vnode.$key$ = key;
    }
    {
        vnode.$name$ = slotName;
    }
    return vnode;
};
/**
 * A utility function for creating a virtual DOM node from a tag and some
 * possible text content.
 *
 * @param tag the tag for this element
 * @param text possible text content for the node
 * @returns a newly-minted virtual DOM node
 */
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    {
        vnode.$key$ = null;
    }
    {
        vnode.$name$ = null;
    }
    return vnode;
};
const Host = {};
/**
 * Check whether a given node is a Host node or not
 *
 * @param node the virtual DOM node to check
 * @returns whether it's a Host node or not
 */
const isHost = (node) => node && node.$tag$ === Host;
/**
 * Parse a new property value for a given property type.
 *
 * While the prop value can reasonably be expected to be of `any` type as far as TypeScript's type checker is concerned,
 * it is not safe to assume that the string returned by evaluating `typeof propValue` matches:
 *   1. `any`, the type given to `propValue` in the function signature
 *   2. the type stored from `propType`.
 *
 * This function provides the capability to parse/coerce a property's value to potentially any other JavaScript type.
 *
 * Property values represented in TSX preserve their type information. In the example below, the number 0 is passed to
 * a component. This `propValue` will preserve its type information (`typeof propValue === 'number'`). Note that is
 * based on the type of the value being passed in, not the type declared of the class member decorated with `@Prop`.
 * ```tsx
 * <my-cmp prop-val={0}></my-cmp>
 * ```
 *
 * HTML prop values on the other hand, will always a string
 *
 * @param propValue the new value to coerce to some type
 * @param propType the type of the prop, expressed as a binary number
 * @returns the parsed/coerced value
 */
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if (propType & 4 /* MEMBER_FLAGS.Boolean */) {
            // per the HTML spec, any string value means it is a boolean true value
            // but we'll cheat here and say that the string "false" is the boolean false
            return propValue === 'false' ? false : propValue === '' || !!propValue;
        }
        if (propType & 2 /* MEMBER_FLAGS.Number */) {
            // force it to be a number
            return parseFloat(propValue);
        }
        if (propType & 1 /* MEMBER_FLAGS.String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getElement = (ref) => (getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* EVENT_FLAGS.Bubbles */),
                composed: !!(flags & 2 /* EVENT_FLAGS.Composed */),
                cancelable: !!(flags & 1 /* EVENT_FLAGS.Cancellable */),
                detail,
            });
        },
    };
};
/**
 * Helper function to create & dispatch a custom Event on a provided target
 * @param elm the target of the Event
 * @param name the name to give the custom Event
 * @param opts options for configuring a custom Event
 * @returns the custom Event
 */
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const rootAppliedStyles = /*@__PURE__*/ new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructableStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        if (typeof style === 'string') {
            style = cssText;
        }
        else {
            style.replaceSync(cssText);
        }
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode) => {
    var _a;
    const scopeId = getScopeId(cmpMeta);
    const style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* NODE_TYPE.DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    styleElm = doc.createElement('style');
                    styleElm.innerHTML = style;
                    // Apply CSP nonce to the style tag if it exists
                    const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
                    if (nonce != null) {
                        styleElm.setAttribute('nonce', nonce);
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                // Add styles for `slot-fb` elements if we're using slots outside the Shadow DOM
                if (cmpMeta.$flags$ & 4 /* CMP_FLAGS.hasSlotRelocation */) {
                    styleElm.innerHTML += SLOT_FB_CSS;
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle(elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(), cmpMeta);
    if (flags & 10 /* CMP_FLAGS.needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
        if (flags & 2 /* CMP_FLAGS.scopedCssEncapsulation */) {
            elm.classList.add(scopeId + '-s');
        }
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + (cmp.$tagName$);
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
/**
 * When running a VDom render set properties present on a VDom node onto the
 * corresponding HTML element.
 *
 * Note that this function has special functionality for the `class`,
 * `style`, `key`, and `ref` attributes, as well as event handlers (like
 * `onClick`, etc). All others are just passed through as-is.
 *
 * @param elm the HTMLElement onto which attributes should be set
 * @param memberName the name of the attribute to set
 * @param oldValue the old value for the attribute
 * @param newValue the new value for the attribute
 * @param isSvg whether we're in an svg context or not
 * @param flags bitflags for Vdom variables
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if (memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
        }
        else if (memberName === 'style') {
            // update style attribute, css properties and values
            {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if (prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if (prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if (memberName === 'key')
            ;
        else if (memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if ((!isProp ) &&
            memberName[0] === 'o' &&
            memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue || newValue) {
                // Need to account for "capture" events.
                // If the event name ends with "Capture", we'll update the name to remove
                // the "Capture" suffix and make sure the event listener is setup to handle the capture event.
                const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
                // Make sure we only replace the last instance of "Capture"
                memberName = memberName.replace(CAPTURE_EVENT_REGEX, '');
                if (oldValue) {
                    plt.rel(elm, memberName, oldValue, capture);
                }
                if (newValue) {
                    plt.ael(elm, memberName, newValue, capture);
                }
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        const n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) {
                    /**
                     * in case someone tries to set a read-only property, e.g. "namespaceURI", we just ignore it
                     */
                }
            }
            /**
             * Need to manually update attribute if:
             * - memberName is not an attribute
             * - if we are rendering the host element in order to reflect attribute
             * - if it's a SVG, since properties might not work in <svg>
             * - if the newValue is null/undefined or 'false'.
             */
            let xlink = false;
            {
                if (ln !== (ln = ln.replace(/^xlink\:?/, ''))) {
                    memberName = ln;
                    xlink = true;
                }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    if (xlink) {
                        elm.removeAttributeNS(XLINK_NS, memberName);
                    }
                    else {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* VNODE_FLAGS.isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                if (xlink) {
                    elm.setAttributeNS(XLINK_NS, memberName, newValue);
                }
                else {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
/**
 * Parsed a string of classnames into an array
 * @param value className string, e.g. "foo bar baz"
 * @returns list of classes, e.g. ["foo", "bar", "baz"]
 */
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const CAPTURE_EVENT_SUFFIX = 'Capture';
const CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + '$');
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* NODE_TYPE.DocumentFragment */ && newVnode.$elm$.host
        ? newVnode.$elm$.host
        : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
/**
 * Create a DOM Node corresponding to one of the children of a given VNode.
 *
 * @param oldParentVNode the parent VNode from the previous render
 * @param newParentVNode the parent VNode from the current render
 * @param childIndex the index of the VNode, in the _new_ parent node's
 * children, for which we will create a new DOM node
 * @param parentElm the parent DOM node which our new node will be a child of
 * @returns the newly created node
 */
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    const newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    let oldVNode;
    if (!useNativeShadowDom) {
        // remember for later we need to check to relocate nodes
        checkSlotRelocate = true;
        if (newVNode.$tag$ === 'slot') {
            if (scopeId) {
                // scoped css needs to add its scoped id to the parent element
                parentElm.classList.add(scopeId + '-s');
            }
            newVNode.$flags$ |= newVNode.$children$
                ? // slot element has fallback content
                    2 /* VNODE_FLAGS.isSlotFallback */
                : // slot element does not have fallback content
                    1 /* VNODE_FLAGS.isSlotReference */;
        }
    }
    if (newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else if (newVNode.$flags$ & 1 /* VNODE_FLAGS.isSlotReference */) {
        // create a slot reference node
        elm = newVNode.$elm$ =
            doc.createTextNode('');
    }
    else {
        if (!isSvgMode) {
            isSvgMode = newVNode.$tag$ === 'svg';
        }
        // create element
        elm = newVNode.$elm$ = (doc.createElementNS(isSvgMode ? SVG_NS : HTML_NS, newVNode.$flags$ & 2 /* VNODE_FLAGS.isSlotFallback */
                ? 'slot-fb'
                : newVNode.$tag$)
            );
        if (isSvgMode && newVNode.$tag$ === 'foreignObject') {
            isSvgMode = false;
        }
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if (isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i, elm);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
        {
            if (newVNode.$tag$ === 'svg') {
                // Only reset the SVG context when we're exiting <svg> element
                isSvgMode = false;
            }
            else if (elm.tagName === 'foreignObject') {
                // Reenter SVG context when we're exiting <foreignObject> element
                isSvgMode = true;
            }
        }
    }
    // This needs to always happen so we can hide nodes that are projected
    // to another component but don't end up in a slot
    elm['s-hn'] = hostTagName;
    {
        if (newVNode.$flags$ & (2 /* VNODE_FLAGS.isSlotFallback */ | 1 /* VNODE_FLAGS.isSlotReference */)) {
            // remember the content reference comment
            elm['s-sr'] = true;
            // remember the content reference comment
            elm['s-cr'] = contentRef;
            // remember the slot name, or empty string for default slot
            elm['s-sn'] = newVNode.$name$ || '';
            // check if we've got an old vnode for this slot
            oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
            if (oldVNode && oldVNode.$tag$ === newVNode.$tag$ && oldParentVNode.$elm$) {
                {
                    // we've got an old slot vnode and the wrapper is being replaced
                    // so let's move the old slot content to the root of the element currently being rendered
                    relocateToHostRoot(oldParentVNode.$elm$);
                }
            }
        }
    }
    return elm;
};
/**
 * Relocates all child nodes of an element that were a part of a previous slot relocation
 * to the root of the Stencil component currently being rendered. This happens when a parent
 * element of a slot reference node dynamically changes and triggers a re-render. We cannot use
 * `putBackInOriginalLocation()` because that may relocate nodes to elements that will not be re-rendered
 * and so they will not be relocated again.
 *
 * @param parentElm The element potentially containing relocated nodes.
 */
const relocateToHostRoot = (parentElm) => {
    plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
    const host = parentElm.closest(hostTagName.toLowerCase());
    if (host != null) {
        const contentRefNode = Array.from(host.childNodes).find((ref) => ref['s-cr']);
        const childNodeArray = Array.from(parentElm.childNodes);
        // If we have a content ref, we need to invert the order of the nodes we're relocating
        // to preserve the correct order of elements in the DOM on future relocations
        for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
            // Only relocate nodes that were slotted in
            if (childNode['s-sh'] != null) {
                host.insertBefore(childNode, contentRefNode !== null && contentRefNode !== void 0 ? contentRefNode : null);
                // Reset so we can correctly move the node around again.
                childNode['s-sh'] = undefined;
                // Need to tell the render pipeline to check to relocate slot content again
                checkSlotRelocate = true;
            }
        }
    }
    plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
};
const putBackInOriginalLocation = (parentElm, recursive) => {
    plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
    const oldSlotChildNodes = parentElm.childNodes;
    for (let i = oldSlotChildNodes.length - 1; i >= 0; i--) {
        const childNode = oldSlotChildNodes[i];
        if (childNode['s-hn'] !== hostTagName && childNode['s-ol']) {
            // and relocate it back to it's original location
            parentReferenceNode(childNode).insertBefore(childNode, referenceNode(childNode));
            // remove the old original location comment entirely
            // later on the patch function will know what to do
            // and move this to the correct spot if need be
            childNode['s-ol'].remove();
            childNode['s-ol'] = undefined;
            // Reset so we can correctly move the node around again.
            childNode['s-sh'] = undefined;
            checkSlotRelocate = true;
        }
        if (recursive) {
            putBackInOriginalLocation(childNode, recursive);
        }
    }
    plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
};
/**
 * Create DOM nodes corresponding to a list of {@link d.Vnode} objects and
 * add them to the DOM in the appropriate place.
 *
 * @param parentElm the DOM node which should be used as a parent for the new
 * DOM nodes
 * @param before a child of the `parentElm` which the new children should be
 * inserted before (optional)
 * @param parentVNode the parent virtual DOM node
 * @param vnodes the new child virtual DOM nodes to produce DOM nodes for
 * @param startIdx the index in the child virtual DOM nodes at which to start
 * creating DOM nodes (inclusive)
 * @param endIdx the index in the child virtual DOM nodes at which to stop
 * creating DOM nodes (inclusive)
 */
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ((parentElm['s-cr'] && parentElm['s-cr'].parentNode) || parentElm);
    let childNode;
    if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
        containerElm = containerElm.shadowRoot;
    }
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx, parentElm);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode, referenceNode(before) );
            }
        }
    }
};
/**
 * Remove the DOM elements corresponding to a list of {@link d.VNode} objects.
 * This can be used to, for instance, clean up after a list of children which
 * should no longer be shown.
 *
 * This function also handles some of Stencil's slot relocation logic.
 *
 * @param vnodes a list of virtual DOM nodes to remove
 * @param startIdx the index at which to start removing nodes (inclusive)
 * @param endIdx the index at which to stop removing nodes (inclusive)
 */
const removeVnodes = (vnodes, startIdx, endIdx) => {
    for (let index = startIdx; index <= endIdx; ++index) {
        const vnode = vnodes[index];
        if (vnode) {
            const elm = vnode.$elm$;
            nullifyVNodeRefs(vnode);
            if (elm) {
                {
                    // we're removing this element
                    // so it's possible we need to show slot fallback content now
                    checkSlotFallbackVisibility = true;
                    if (elm['s-ol']) {
                        // remove the original location comment
                        elm['s-ol'].remove();
                    }
                    else {
                        // it's possible that child nodes of the node
                        // that's being removed are slot nodes
                        putBackInOriginalLocation(elm, true);
                    }
                }
                // remove the vnode's element from the dom
                elm.remove();
            }
        }
    }
};
/**
 * Reconcile the children of a new VNode with the children of an old VNode by
 * traversing the two collections of children, identifying nodes that are
 * conserved or changed, calling out to `patch` to make any necessary
 * updates to the DOM, and rearranging DOM nodes as needed.
 *
 * The algorithm for reconciling children works by analyzing two 'windows' onto
 * the two arrays of children (`oldCh` and `newCh`). We keep track of the
 * 'windows' by storing start and end indices and references to the
 * corresponding array entries. Initially the two 'windows' are basically equal
 * to the entire array, but we progressively narrow the windows until there are
 * no children left to update by doing the following:
 *
 * 1. Skip any `null` entries at the beginning or end of the two arrays, so
 *    that if we have an initial array like the following we'll end up dealing
 *    only with a window bounded by the highlighted elements:
 *
 *    [null, null, VNode1 , ... , VNode2, null, null]
 *                 ^^^^^^         ^^^^^^
 *
 * 2. Check to see if the elements at the head and tail positions are equal
 *    across the windows. This will basically detect elements which haven't
 *    been added, removed, or changed position, i.e. if you had the following
 *    VNode elements (represented as HTML):
 *
 *    oldVNode: `<div><p><span>HEY</span></p></div>`
 *    newVNode: `<div><p><span>THERE</span></p></div>`
 *
 *    Then when comparing the children of the `<div>` tag we check the equality
 *    of the VNodes corresponding to the `<p>` tags and, since they are the
 *    same tag in the same position, we'd be able to avoid completely
 *    re-rendering the subtree under them with a new DOM element and would just
 *    call out to `patch` to handle reconciling their children and so on.
 *
 * 3. Check, for both windows, to see if the element at the beginning of the
 *    window corresponds to the element at the end of the other window. This is
 *    a heuristic which will let us identify _some_ situations in which
 *    elements have changed position, for instance it _should_ detect that the
 *    children nodes themselves have not changed but merely moved in the
 *    following example:
 *
 *    oldVNode: `<div><element-one /><element-two /></div>`
 *    newVNode: `<div><element-two /><element-one /></div>`
 *
 *    If we find cases like this then we also need to move the concrete DOM
 *    elements corresponding to the moved children to write the re-order to the
 *    DOM.
 *
 * 4. Finally, if VNodes have the `key` attribute set on them we check for any
 *    nodes in the old children which have the same key as the first element in
 *    our window on the new children. If we find such a node we handle calling
 *    out to `patch`, moving relevant DOM nodes, and so on, in accordance with
 *    what we find.
 *
 * Finally, once we've narrowed our 'windows' to the point that either of them
 * collapse (i.e. they have length 0) we then handle any remaining VNode
 * insertion or deletion that needs to happen to get a DOM state that correctly
 * reflects the new child VNodes. If, for instance, after our window on the old
 * children has collapsed we still have more nodes on the new children that
 * we haven't dealt with yet then we need to add them, or if the new children
 * collapse but we still have unhandled _old_ children then we need to make
 * sure the corresponding DOM nodes are removed.
 *
 * @param parentElm the node into which the parent VNode is rendered
 * @param oldCh the old children of the parent node
 * @param newVNode the new VNode which will replace the parent
 * @param newCh the new children of the parent node
 * @param isInitialRender whether or not this is the first render of the vdom
 */
const updateChildren = (parentElm, oldCh, newVNode, newCh, isInitialRender = false) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let idxInOld = 0;
    let i = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    let elmToMove;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // VNode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
            // if the start nodes are the same then we should patch the new VNode
            // onto the old one, and increment our `newStartIdx` and `oldStartIdx`
            // indices to reflect that. We don't need to move any DOM Nodes around
            // since things are matched up in order.
            patch(oldStartVnode, newStartVnode, isInitialRender);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
            // likewise, if the end nodes are the same we patch new onto old and
            // decrement our end indices, and also likewise in this case we don't
            // need to move any DOM Nodes.
            patch(oldEndVnode, newEndVnode, isInitialRender);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
            // case: "Vnode moved right"
            //
            // We've found that the last node in our window on the new children is
            // the same VNode as the _first_ node in our window on the old children
            // we're dealing with now. Visually, this is the layout of these two
            // nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //                                    ^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //              ^^^^^^^^^^^^^
            //
            // In this situation we need to patch `newEndVnode` onto `oldStartVnode`
            // and move the DOM element for `oldStartVnode`.
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
            }
            patch(oldStartVnode, newEndVnode, isInitialRender);
            // We need to move the element for `oldStartVnode` into a position which
            // will be appropriate for `newEndVnode`. For this we can use
            // `.insertBefore` and `oldEndVnode.$elm$.nextSibling`. If there is a
            // sibling for `oldEndVnode.$elm$` then we want to move the DOM node for
            // `oldStartVnode` between `oldEndVnode` and it's sibling, like so:
            //
            // <old-start-node />
            // <some-intervening-node />
            // <old-end-node />
            // <!-- ->              <-- `oldStartVnode.$elm$` should be inserted here
            // <next-sibling />
            //
            // If instead `oldEndVnode.$elm$` has no sibling then we just want to put
            // the node for `oldStartVnode` at the end of the children of
            // `parentElm`. Luckily, `Node.nextSibling` will return `null` if there
            // aren't any siblings, and passing `null` to `Node.insertBefore` will
            // append it to the children of the parent element.
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
            // case: "Vnode moved left"
            //
            // We've found that the first node in our window on the new children is
            // the same VNode as the _last_ node in our window on the old children.
            // Visually, this is the layout of these two nodes:
            //
            // newCh: [..., newStartVnode , ... , newEndVnode , ...]
            //              ^^^^^^^^^^^^^
            // oldCh: [..., oldStartVnode , ... , oldEndVnode , ...]
            //                                    ^^^^^^^^^^^
            //
            // In this situation we need to patch `newStartVnode` onto `oldEndVnode`
            // (which will handle updating any changed attributes, reconciling their
            // children etc) but we also need to move the DOM node to which
            // `oldEndVnode` corresponds.
            if ((oldStartVnode.$tag$ === 'slot' || newEndVnode.$tag$ === 'slot')) {
                putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
            }
            patch(oldEndVnode, newStartVnode, isInitialRender);
            // We've already checked above if `oldStartVnode` and `newStartVnode` are
            // the same node, so since we're here we know that they are not. Thus we
            // can move the element for `oldEndVnode` _before_ the element for
            // `oldStartVnode`, leaving `oldStartVnode` to be reconciled in the
            // future.
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            // Here we do some checks to match up old and new nodes based on the
            // `$key$` attribute, which is set by putting a `key="my-key"` attribute
            // in the JSX for a DOM element in the implementation of a Stencil
            // component.
            //
            // First we check to see if there are any nodes in the array of old
            // children which have the same key as the first node in the new
            // children.
            idxInOld = -1;
            {
                for (i = oldStartIdx; i <= oldEndIdx; ++i) {
                    if (oldCh[i] && oldCh[i].$key$ !== null && oldCh[i].$key$ === newStartVnode.$key$) {
                        idxInOld = i;
                        break;
                    }
                }
            }
            if (idxInOld >= 0) {
                // We found a node in the old children which matches up with the first
                // node in the new children! So let's deal with that
                elmToMove = oldCh[idxInOld];
                if (elmToMove.$tag$ !== newStartVnode.$tag$) {
                    // the tag doesn't match so we'll need a new DOM element
                    node = createElm(oldCh && oldCh[newStartIdx], newVNode, idxInOld, parentElm);
                }
                else {
                    patch(elmToMove, newStartVnode, isInitialRender);
                    // invalidate the matching old node so that we won't try to update it
                    // again later on
                    oldCh[idxInOld] = undefined;
                    node = elmToMove.$elm$;
                }
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                // We either didn't find an element in the old children that matches
                // the key of the first new child OR the build is not using `key`
                // attributes at all. In either case we need to create a new element
                // for the new node.
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx, parentElm);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                // if we created a new node then handle inserting it to the DOM
                {
                    parentReferenceNode(oldStartVnode.$elm$).insertBefore(node, referenceNode(oldStartVnode.$elm$));
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        // we have some more new nodes to add which don't match up with old nodes
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if (newStartIdx > newEndIdx) {
        // there are nodes in the `oldCh` array which no longer correspond to nodes
        // in the new array, so lets remove them (which entails cleaning up the
        // relevant DOM nodes)
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
/**
 * Compare two VNodes to determine if they are the same
 *
 * **NB**: This function is an equality _heuristic_ based on the available
 * information set on the two VNodes and can be misleading under certain
 * circumstances. In particular, if the two nodes do not have `key` attrs
 * (available under `$key$` on VNodes) then the function falls back on merely
 * checking that they have the same tag.
 *
 * So, in other words, if `key` attrs are not set on VNodes which may be
 * changing order within a `children` array or something along those lines then
 * we could obtain a false negative and then have to do needless re-rendering
 * (i.e. we'd say two VNodes aren't equal when in fact they should be).
 *
 * @param leftVNode the first VNode to check
 * @param rightVNode the second VNode to check
 * @param isInitialRender whether or not this is the first render of the vdom
 * @returns whether they're equal or not
 */
const isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (leftVNode.$tag$ === rightVNode.$tag$) {
        if (leftVNode.$tag$ === 'slot') {
            return leftVNode.$name$ === rightVNode.$name$;
        }
        // this will be set if JSX tags in the build have `key` attrs set on them
        // we only want to check this if we're not on the first render since on
        // first render `leftVNode.$key$` will always be `null`, so we can be led
        // astray and, for instance, accidentally delete a DOM node that we want to
        // keep around.
        if (!isInitialRender) {
            return leftVNode.$key$ === rightVNode.$key$;
        }
        return true;
    }
    return false;
};
const referenceNode = (node) => {
    // this node was relocated to a new location in the dom
    // because of some other component's slot
    // but we still have an html comment in place of where
    // it's original location was according to it's original vdom
    return (node && node['s-ol']) || node;
};
const parentReferenceNode = (node) => (node['s-ol'] ? node['s-ol'] : node).parentNode;
/**
 * Handle reconciling an outdated VNode with a new one which corresponds to
 * it. This function handles flushing updates to the DOM and reconciling the
 * children of the two nodes (if any).
 *
 * @param oldVNode an old VNode whose DOM element and children we want to update
 * @param newVNode a new VNode representing an updated version of the old one
 * @param isInitialRender whether or not this is the first render of the vdom
 */
const patch = (oldVNode, newVNode, isInitialRender = false) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const tag = newVNode.$tag$;
    const text = newVNode.$text$;
    let defaultHolder;
    if (text === null) {
        {
            // test if we're rendering an svg element, or still rendering nodes inside of one
            // only add this to the when the compiler sees we're using an svg somewhere
            isSvgMode = tag === 'svg' ? true : tag === 'foreignObject' ? false : isSvgMode;
        }
        {
            if (tag === 'slot' && !useNativeShadowDom) {
                if (oldVNode.$name$ !== newVNode.$name$) {
                    newVNode.$elm$['s-sn'] = newVNode.$name$ || '';
                    relocateToHostRoot(newVNode.$elm$.parentElement);
                }
            }
            else {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if (oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            // so we need to call `updateChildren` to reconcile them
            updateChildren(elm, oldChildren, newVNode, newChildren, isInitialRender);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if (oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if (oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
        if (isSvgMode && tag === 'svg') {
            isSvgMode = false;
        }
    }
    else if ((defaultHolder = elm['s-cr'])) {
        // this element has slotted content
        defaultHolder.parentNode.textContent = text;
    }
    else if (oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
/**
 * Adjust the `.hidden` property as-needed on any nodes in a DOM subtree which
 * are slot fallbacks nodes.
 *
 * A slot fallback node should be visible by default. Then, it should be
 * conditionally hidden if:
 *
 * - it has a sibling with a `slot` property set to its slot name or if
 * - it is a default fallback slot node, in which case we hide if it has any
 *   content
 *
 * @param elm the element of interest
 */
const updateFallbackSlotVisibility = (elm) => {
    const childNodes = elm.childNodes;
    for (const childNode of childNodes) {
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            if (childNode['s-sr']) {
                // this is a slot fallback node
                // get the slot name for this slot reference node
                const slotName = childNode['s-sn'];
                // by default always show a fallback slot node
                // then hide it if there are other slots in the light dom
                childNode.hidden = false;
                // we need to check all of its sibling nodes in order to see if
                // `childNode` should be hidden
                for (const siblingNode of childNodes) {
                    // Don't check the node against itself
                    if (siblingNode !== childNode) {
                        if (siblingNode['s-hn'] !== childNode['s-hn'] || slotName !== '') {
                            // this sibling node is from a different component OR is a named
                            // fallback slot node
                            if (siblingNode.nodeType === 1 /* NODE_TYPE.ElementNode */ &&
                                (slotName === siblingNode.getAttribute('slot') || slotName === siblingNode['s-sn'])) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                        else {
                            // this is a default fallback slot node
                            // any element or text node (with content)
                            // should hide the default fallback slot node
                            if (siblingNode.nodeType === 1 /* NODE_TYPE.ElementNode */ ||
                                (siblingNode.nodeType === 3 /* NODE_TYPE.TextNode */ && siblingNode.textContent.trim() !== '')) {
                                childNode.hidden = true;
                                break;
                            }
                        }
                    }
                }
            }
            // keep drilling down
            updateFallbackSlotVisibility(childNode);
        }
    }
};
/**
 * Component-global information about nodes which are either currently being
 * relocated or will be shortly.
 */
const relocateNodes = [];
/**
 * Mark the contents of a slot for relocation via adding references to them to
 * the {@link relocateNodes} data structure. The actual work of relocating them
 * will then be handled in {@link renderVdom}.
 *
 * @param elm a render node whose child nodes need to be relocated
 */
const markSlotContentForRelocation = (elm) => {
    // tslint:disable-next-line: prefer-const
    let node;
    let hostContentNodes;
    let j;
    for (const childNode of elm.childNodes) {
        // we need to find child nodes which are slot references so we can then try
        // to match them up with nodes that need to be relocated
        if (childNode['s-sr'] && (node = childNode['s-cr']) && node.parentNode) {
            // first get the content reference comment node ('s-cr'), then we get
            // its parent, which is where all the host content is now
            hostContentNodes = node.parentNode.childNodes;
            const slotName = childNode['s-sn'];
            // iterate through all the nodes under the location where the host was
            // originally rendered
            for (j = hostContentNodes.length - 1; j >= 0; j--) {
                node = hostContentNodes[j];
                // check that the node is not a content reference node or a node
                // reference and then check that the host name does not match that of
                // childNode.
                // In addition, check that the slot either has not already been relocated, or
                // that its current location's host is not childNode's host. This is essentially
                // a check so that we don't try to relocate (and then hide) a node that is already
                // where it should be.
                if (!node['s-cn'] &&
                    !node['s-nr'] &&
                    node['s-hn'] !== childNode['s-hn'] &&
                    (!node['s-sh'] || node['s-sh'] !== childNode['s-hn'])) {
                    // if `node` is located in the slot that `childNode` refers to (via the
                    // `'s-sn'` property) then we need to relocate it from it's current spot
                    // (under the host element parent) to the right slot location
                    if (isNodeLocatedInSlot(node, slotName)) {
                        // it's possible we've already decided to relocate this node
                        let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                        // made some changes to slots
                        // let's make sure we also double check
                        // fallbacks are correctly hidden or shown
                        checkSlotFallbackVisibility = true;
                        // ensure that the slot-name attr is correct
                        node['s-sn'] = node['s-sn'] || slotName;
                        if (relocateNodeData) {
                            relocateNodeData.$nodeToRelocate$['s-sh'] = childNode['s-hn'];
                            // we marked this node for relocation previously but didn't find
                            // out the slot reference node to which it needs to be relocated
                            // so write it down now!
                            relocateNodeData.$slotRefNode$ = childNode;
                        }
                        else {
                            node['s-sh'] = childNode['s-hn'];
                            // add to our list of nodes to relocate
                            relocateNodes.push({
                                $slotRefNode$: childNode,
                                $nodeToRelocate$: node,
                            });
                        }
                        if (node['s-sr']) {
                            relocateNodes.map((relocateNode) => {
                                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node['s-sn'])) {
                                    relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                                    if (relocateNodeData && !relocateNode.$slotRefNode$) {
                                        relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                                    }
                                }
                            });
                        }
                    }
                    else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
                        // the node is not found within the slot (`childNode`) that we're
                        // currently looking at, so we stick it into `relocateNodes` to
                        // handle later. If we never find a home for this element then
                        // we'll need to hide it
                        relocateNodes.push({
                            $nodeToRelocate$: node,
                        });
                    }
                }
            }
        }
        // if we're dealing with any type of element (capable of itself being a
        // slot reference or containing one) then we recur
        if (childNode.nodeType === 1 /* NODE_TYPE.ElementNode */) {
            markSlotContentForRelocation(childNode);
        }
    }
};
/**
 * Check whether a node is located in a given named slot.
 *
 * @param nodeToRelocate the node of interest
 * @param slotName the slot name to check
 * @returns whether the node is located in the slot or not
 */
const isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
        if (nodeToRelocate.getAttribute('slot') === null && slotName === '') {
            // if the node doesn't have a slot attribute, and the slot we're checking
            // is not a named slot, then we assume the node should be within the slot
            return true;
        }
        if (nodeToRelocate.getAttribute('slot') === slotName) {
            return true;
        }
        return false;
    }
    if (nodeToRelocate['s-sn'] === slotName) {
        return true;
    }
    return slotName === '';
};
/**
 * 'Nullify' any VDom `ref` callbacks on a VDom node or its children by calling
 * them with `null`. This signals that the DOM element corresponding to the VDom
 * node has been removed from the DOM.
 *
 * @param vNode a virtual DOM node
 */
const nullifyVNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
    }
};
/**
 * The main entry point for Stencil's virtual DOM-based rendering engine
 *
 * Given a {@link d.HostRef} container and some virtual DOM nodes, this
 * function will handle creating a virtual DOM tree with a single root, patching
 * the current virtual DOM tree onto an old one (if any), dealing with slot
 * relocation, and reflecting attributes.
 *
 * @param hostRef data needed to root and render the virtual DOM tree, such as
 * the DOM node into which it should be rendered.
 * @param renderFnResults the virtual DOM nodes to be rendered
 * @param isInitialLoad whether or not this is the first call after page load
 */
const renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
    var _a, _b, _c, _d;
    const hostElm = hostRef.$hostElement$;
    const cmpMeta = hostRef.$cmpMeta$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    // if `renderFnResults` is a Host node then we can use it directly. If not,
    // we need to call `h` again to wrap the children of our component in a
    // 'dummy' Host node (well, an empty vnode) since `renderVdom` assumes
    // implicitly that the top-level vdom node is 1) an only child and 2)
    // contains attrs that need to be set on the host element.
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    hostTagName = hostElm.tagName;
    if (cmpMeta.$attrsToReflect$) {
        rootVnode.$attrs$ = rootVnode.$attrs$ || {};
        cmpMeta.$attrsToReflect$.map(([propName, attribute]) => (rootVnode.$attrs$[attribute] = hostElm[propName]));
    }
    // On the first render and *only* on the first render we want to check for
    // any attributes set on the host element which are also set on the vdom
    // node. If we find them, we override the value on the VDom node attrs with
    // the value from the host element, which allows developers building apps
    // with Stencil components to override e.g. the `role` attribute on a
    // component even if it's already set on the `Host`.
    if (isInitialLoad && rootVnode.$attrs$) {
        for (const key of Object.keys(rootVnode.$attrs$)) {
            // We have a special implementation in `setAccessor` for `style` and
            // `class` which reconciles values coming from the VDom with values
            // already present on the DOM element, so we don't want to override those
            // attributes on the VDom tree with values from the host element if they
            // are present.
            //
            // Likewise, `ref` and `key` are special internal values for the Stencil
            // runtime and we don't want to override those either.
            if (hostElm.hasAttribute(key) && !['key', 'ref', 'style', 'class'].includes(key)) {
                rootVnode.$attrs$[key] = hostElm[key];
            }
        }
    }
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* VNODE_FLAGS.isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = (hostElm.shadowRoot || hostElm );
    {
        scopeId = hostElm['s-sc'];
    }
    useNativeShadowDom = (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) !== 0;
    {
        contentRef = hostElm['s-cr'];
        // always reset
        checkSlotFallbackVisibility = false;
    }
    // synchronous patch
    patch(oldVNode, rootVnode, isInitialLoad);
    {
        // while we're moving nodes around existing nodes, temporarily disable
        // the disconnectCallback from working
        plt.$flags$ |= 1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        if (checkSlotRelocate) {
            markSlotContentForRelocation(rootVnode.$elm$);
            for (const relocateData of relocateNodes) {
                const nodeToRelocate = relocateData.$nodeToRelocate$;
                if (!nodeToRelocate['s-ol']) {
                    // add a reference node marking this node's original location
                    // keep a reference to this node for later lookups
                    const orgLocationNode = doc.createTextNode('');
                    orgLocationNode['s-nr'] = nodeToRelocate;
                    nodeToRelocate.parentNode.insertBefore((nodeToRelocate['s-ol'] = orgLocationNode), nodeToRelocate);
                }
            }
            for (const relocateData of relocateNodes) {
                const nodeToRelocate = relocateData.$nodeToRelocate$;
                const slotRefNode = relocateData.$slotRefNode$;
                if (slotRefNode) {
                    const parentNodeRef = slotRefNode.parentNode;
                    // When determining where to insert content, the most simple case would be
                    // to relocate the node immediately following the slot reference node. We do this
                    // by getting a reference to the node immediately following the slot reference node
                    // since we will use `insertBefore` to manipulate the DOM.
                    //
                    // If there is no node immediately following the slot reference node, then we will just
                    // end up appending the node as the last child of the parent.
                    let insertBeforeNode = slotRefNode.nextSibling;
                    // If the node we're currently planning on inserting the new node before is an element,
                    // we need to do some additional checks to make sure we're inserting the node in the correct order.
                    // The use case here would be that we have multiple nodes being relocated to the same slot. So, we want
                    // to make sure they get inserted into their new how in the same order they were declared in their original location.
                    //
                    // TODO(STENCIL-914): Remove `experimentalSlotFixes` check
                    if ((insertBeforeNode && insertBeforeNode.nodeType === 1 /* NODE_TYPE.ElementNode */)) {
                        let orgLocationNode = (_a = nodeToRelocate['s-ol']) === null || _a === void 0 ? void 0 : _a.previousSibling;
                        while (orgLocationNode) {
                            let refNode = (_b = orgLocationNode['s-nr']) !== null && _b !== void 0 ? _b : null;
                            if (refNode && refNode['s-sn'] === nodeToRelocate['s-sn'] && parentNodeRef === refNode.parentNode) {
                                refNode = refNode.nextSibling;
                                if (!refNode || !refNode['s-nr']) {
                                    insertBeforeNode = refNode;
                                    break;
                                }
                            }
                            orgLocationNode = orgLocationNode.previousSibling;
                        }
                    }
                    if ((!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode) ||
                        nodeToRelocate.nextSibling !== insertBeforeNode) {
                        // we've checked that it's worth while to relocate
                        // since that the node to relocate
                        // has a different next sibling or parent relocated
                        if (nodeToRelocate !== insertBeforeNode) {
                            // Add it back to the dom but in its new home
                            // If we get to this point and `insertBeforeNode` is `null`, that means
                            // we're just going to append the node as the last child of the parent. Passing
                            // `null` as the second arg here will trigger that behavior.
                            parentNodeRef.insertBefore(nodeToRelocate, insertBeforeNode);
                            // Reset the `hidden` value back to what it was defined as originally
                            // This solves a problem where a `slot` is dynamically rendered and `hidden` may have
                            // been set on content originally, but now it has a slot to go to so it should have
                            // the value it was defined as having in the DOM, not what we overrode it to.
                            if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
                                nodeToRelocate.hidden = (_c = nodeToRelocate['s-ih']) !== null && _c !== void 0 ? _c : false;
                            }
                        }
                    }
                }
                else {
                    // this node doesn't have a slot home to go to, so let's hide it
                    if (nodeToRelocate.nodeType === 1 /* NODE_TYPE.ElementNode */) {
                        // Store the initial value of `hidden` so we can reset it later when
                        // moving nodes around.
                        if (isInitialLoad) {
                            nodeToRelocate['s-ih'] = (_d = nodeToRelocate.hidden) !== null && _d !== void 0 ? _d : false;
                        }
                        nodeToRelocate.hidden = true;
                    }
                }
            }
        }
        if (checkSlotFallbackVisibility) {
            updateFallbackSlotVisibility(rootVnode.$elm$);
        }
        // done moving nodes around
        // allow the disconnect callback to work again
        plt.$flags$ &= ~1 /* PLATFORM_FLAGS.isTmpDisconnected */;
        // always reset
        relocateNodes.length = 0;
    }
    // Clear the content ref so we don't create a memory leak
    contentRef = undefined;
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise((r) => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* HOST_FLAGS.isQueuedForUpdate */;
    }
    if (hostRef.$flags$ & 4 /* HOST_FLAGS.isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* HOST_FLAGS.needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestor component or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return writeTask(dispatch) ;
};
/**
 * Dispatch initial-render and update lifecycle hooks, enqueuing calls to
 * component lifecycle methods like `componentWillLoad` as well as
 * {@link updateComponent}, which will kick off the virtual DOM re-render.
 *
 * @param hostRef a reference to a host DOM node
 * @param isInitialLoad whether we're on the initial load or not
 * @returns an empty Promise which is used to enqueue a series of operations for
 * the component
 */
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance = hostRef.$lazyInstance$ ;
    // We're going to use this variable together with `enqueue` to implement a
    // little promise-based queue. We start out with it `undefined`. When we add
    // the first function to the queue we'll set this variable to be that
    // function's return value. When we attempt to add subsequent values to the
    // queue we'll check that value and, if it was a `Promise`, we'll then chain
    // the new function off of that `Promise` using `.then()`. This will give our
    // queue two nice properties:
    //
    // 1. If all functions added to the queue are synchronous they'll be called
    //    synchronously right away.
    // 2. If all functions added to the queue are asynchronous they'll all be
    //    called in order after `dispatchHooks` exits.
    let maybePromise;
    if (isInitialLoad) {
        {
            hostRef.$flags$ |= 256 /* HOST_FLAGS.isListenReady */;
            if (hostRef.$queuedListeners$) {
                hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
                hostRef.$queuedListeners$ = undefined;
            }
        }
        {
            // If `componentWillLoad` returns a `Promise` then we want to wait on
            // whatever's going on in that `Promise` before we launch into
            // rendering the component, doing other lifecycle stuff, etc. So
            // in that case we assign the returned promise to the variable we
            // declared above to hold a possible 'queueing' Promise
            maybePromise = safeCall(instance, 'componentWillLoad');
        }
    }
    else {
        {
            // Like `componentWillLoad` above, we allow Stencil component
            // authors to return a `Promise` from this lifecycle callback, and
            // we specify that our runtime will wait for that `Promise` to
            // resolve before the component re-renders. So if the method
            // returns a `Promise` we need to keep it around!
            maybePromise = safeCall(instance, 'componentWillUpdate');
        }
    }
    {
        maybePromise = enqueue(maybePromise, () => safeCall(instance, 'componentWillRender'));
    }
    endSchedule();
    return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
/**
 * This function uses a Promise to implement a simple first-in, first-out queue
 * of functions to be called.
 *
 * The queue is ordered on the basis of the first argument. If it's
 * `undefined`, then nothing is on the queue yet, so the provided function can
 * be called synchronously (although note that this function may return a
 * `Promise`). The idea is that then the return value of that enqueueing
 * operation is kept around, so that if it was a `Promise` then subsequent
 * functions can be enqueued by calling this function again with that `Promise`
 * as the first argument.
 *
 * @param maybePromise either a `Promise` which should resolve before the next function is called or an 'empty' sentinel
 * @param fn a function to enqueue
 * @returns either a `Promise` or the return value of the provided function
 */
const enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn) : fn();
/**
 * Check that a value is a `Promise`. To check, we first see if the value is an
 * instance of the `Promise` global. In a few circumstances, in particular if
 * the global has been overwritten, this is could be misleading, so we also do
 * a little 'duck typing' check to see if the `.then` property of the value is
 * defined and a function.
 *
 * @param maybePromise it might be a promise!
 * @returns whether it is or not
 */
const isPromisey = (maybePromise) => maybePromise instanceof Promise ||
    (maybePromise && maybePromise.then && typeof maybePromise.then === 'function');
/**
 * Update a component given reference to its host elements and so on.
 *
 * @param hostRef an object containing references to the element's host node,
 * VDom nodes, and other metadata
 * @param instance a reference to the underlying host element where it will be
 * rendered
 * @param isInitialLoad whether or not this function is being called as part of
 * the first render cycle
 */
const updateComponent = async (hostRef, instance, isInitialLoad) => {
    var _a;
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if (isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        callRender(hostRef, instance, elm, isInitialLoad);
    }
    if (rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map((cb) => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = (_a = elm['s-p']) !== null && _a !== void 0 ? _a : [];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* HOST_FLAGS.isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
/**
 * Handle making the call to the VDom renderer with the proper context given
 * various build variables
 *
 * @param hostRef an object containing references to the element's host node,
 * VDom nodes, and other metadata
 * @param instance a reference to the underlying host element where it will be
 * rendered
 * @param elm the Host element for the component
 * @param isInitialLoad whether or not this function is being called as part of
 * @returns an empty promise
 */
const callRender = (hostRef, instance, elm, isInitialLoad) => {
    try {
        /**
         * minification optimization: `allRenderFn` is `true` if all components have a `render`
         * method, so we can call the method immediately. If not, check before calling it.
         */
        instance = instance.render() ;
        {
            hostRef.$flags$ &= ~16 /* HOST_FLAGS.isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* HOST_FLAGS.hasRendered */;
        }
        {
            {
                // looks like we've got child nodes to render into this host element
                // or we need to update the css class/attrs on the host element
                // DOM WRITE!
                {
                    renderVdom(hostRef, instance, isInitialLoad);
                }
            }
        }
    }
    catch (e) {
        consoleError(e, hostRef.$hostElement$);
    }
    return null;
};
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance = hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    {
        safeCall(instance, 'componentDidRender');
    }
    if (!(hostRef.$flags$ & 64 /* HOST_FLAGS.hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* HOST_FLAGS.hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        {
            safeCall(instance, 'componentDidUpdate');
        }
        endPostUpdate();
    }
    {
        hostRef.$onInstanceResolve$(elm);
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* HOST_FLAGS.needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* HOST_FLAGS.isWaitingForChildren */ | 512 /* HOST_FLAGS.needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (ref) => {
    {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected &&
            (hostRef.$flags$ & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
/**
 * Allows to safely call a method, e.g. `componentDidLoad`, on an instance,
 * e.g. custom element node. If a build figures out that e.g. no component
 * has a `componentDidLoad` method, the instance method gets removed from the
 * output bundle and this function returns `undefined`.
 * @param instance any object that may or may not contain methods
 * @param method method name
 * @param arg single arbitrary argument
 * @returns result of method call if it exists, otherwise `undefined`
 */
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const addHydratedFlag = (elm) => elm.classList.add('hydrated')
    ;
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const elm = hostRef.$hostElement$ ;
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance = hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    // explicitly check for NaN on both sides, as `NaN === NaN` is always false
    const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
    const didValueChange = newVal !== oldVal && !areBothNaN;
    if ((!(flags & 8 /* HOST_FLAGS.isConstructingInstance */) || oldVal === undefined) && didValueChange) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if (instance) {
            // get an array of method names of watch functions to call
            if (cmpMeta.$watchers$ && flags & 128 /* HOST_FLAGS.isWatchReady */) {
                const watchMethods = cmpMeta.$watchers$[propName];
                if (watchMethods) {
                    // this instance is watching for when this property changed
                    watchMethods.map((watchMethodName) => {
                        try {
                            // fire off each of the watch methods that are watching this property
                            instance[watchMethodName](newVal, oldVal, propName);
                        }
                        catch (e) {
                            consoleError(e, elm);
                        }
                    });
                }
            }
            if ((flags & (2 /* HOST_FLAGS.hasRendered */ | 16 /* HOST_FLAGS.isQueuedForUpdate */)) === 2 /* HOST_FLAGS.hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
/**
 * Attach a series of runtime constructs to a compiled Stencil component
 * constructor, including getters and setters for the `@Prop` and `@State`
 * decorators, callbacks for when attributes change, and so on.
 *
 * @param Cstr the constructor for a component that we need to process
 * @param cmpMeta metadata collected previously about the component
 * @param flags a number used to store a series of bit flags
 * @returns a reference to the same constructor passed in (but now mutated)
 */
const proxyComponent = (Cstr, cmpMeta, flags) => {
    var _a;
    const prototype = Cstr.prototype;
    if (cmpMeta.$members$) {
        if (Cstr.watchers) {
            cmpMeta.$watchers$ = Cstr.watchers;
        }
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        members.map(([memberName, [memberFlags]]) => {
            if ((memberFlags & 31 /* MEMBER_FLAGS.Prop */ ||
                    ((flags & 2 /* PROXY_FLAGS.proxyState */) && memberFlags & 32 /* MEMBER_FLAGS.State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
            else if (flags & 1 /* PROXY_FLAGS.isElementConstructor */ &&
                memberFlags & 64 /* MEMBER_FLAGS.Method */) {
                // proxyComponent - method
                Object.defineProperty(prototype, memberName, {
                    value(...args) {
                        var _a;
                        const ref = getHostRef(this);
                        return (_a = ref === null || ref === void 0 ? void 0 : ref.$onInstancePromise$) === null || _a === void 0 ? void 0 : _a.then(() => { var _a; return (_a = ref.$lazyInstance$) === null || _a === void 0 ? void 0 : _a[memberName](...args); });
                    },
                });
            }
        });
        if ((flags & 1 /* PROXY_FLAGS.isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, oldValue, newValue) {
                plt.jmp(() => {
                    var _a;
                    const propName = attrNameToPropName.get(attrName);
                    //  In a web component lifecycle the attributeChangedCallback runs prior to connectedCallback
                    //  in the case where an attribute was set inline.
                    //  ```html
                    //    <my-component some-attribute="some-value"></my-component>
                    //  ```
                    //
                    //  There is an edge case where a developer sets the attribute inline on a custom element and then
                    //  programmatically changes it before it has been upgraded as shown below:
                    //
                    //  ```html
                    //    <!-- this component has _not_ been upgraded yet -->
                    //    <my-component id="test" some-attribute="some-value"></my-component>
                    //    <script>
                    //      // grab non-upgraded component
                    //      el = document.querySelector("#test");
                    //      el.someAttribute = "another-value";
                    //      // upgrade component
                    //      customElements.define('my-component', MyComponent);
                    //    </script>
                    //  ```
                    //  In this case if we do not un-shadow here and use the value of the shadowing property, attributeChangedCallback
                    //  will be called with `newValue = "some-value"` and will set the shadowed property (this.someAttribute = "another-value")
                    //  to the value that was set inline i.e. "some-value" from above example. When
                    //  the connectedCallback attempts to un-shadow it will use "some-value" as the initial value rather than "another-value"
                    //
                    //  The case where the attribute was NOT set inline but was not set programmatically shall be handled/un-shadowed
                    //  by connectedCallback as this attributeChangedCallback will not fire.
                    //
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
                    //
                    //  TODO(STENCIL-16) we should think about whether or not we actually want to be reflecting the attributes to
                    //  properties here given that this goes against best practices outlined here
                    //  https://developers.google.com/web/fundamentals/web-components/best-practices#avoid-reentrancy
                    if (this.hasOwnProperty(propName)) {
                        newValue = this[propName];
                        delete this[propName];
                    }
                    else if (prototype.hasOwnProperty(propName) &&
                        typeof this[propName] === 'number' &&
                        this[propName] == newValue) {
                        // if the propName exists on the prototype of `Cstr`, this update may be a result of Stencil using native
                        // APIs to reflect props as attributes. Calls to `setAttribute(someElement, propName)` will result in
                        // `propName` to be converted to a `DOMString`, which may not be what we want for other primitive props.
                        return;
                    }
                    else if (propName == null) {
                        // At this point we should know this is not a "member", so we can treat it like watching an attribute
                        // on a vanilla web component
                        const hostRef = getHostRef(this);
                        const flags = hostRef === null || hostRef === void 0 ? void 0 : hostRef.$flags$;
                        // We only want to trigger the callback(s) if:
                        // 1. The instance is ready
                        // 2. The watchers are ready
                        // 3. The value has changed
                        if (flags &&
                            !(flags & 8 /* HOST_FLAGS.isConstructingInstance */) &&
                            flags & 128 /* HOST_FLAGS.isWatchReady */ &&
                            newValue !== oldValue) {
                            const instance = hostRef.$lazyInstance$ ;
                            const entry = (_a = cmpMeta.$watchers$) === null || _a === void 0 ? void 0 : _a[attrName];
                            entry === null || entry === void 0 ? void 0 : entry.forEach((callbackName) => {
                                if (instance[callbackName] != null) {
                                    instance[callbackName].call(instance, newValue, oldValue, attrName);
                                }
                            });
                        }
                        return;
                    }
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // Create an array of attributes to observe
            // This list in comprised of all strings used within a `@Watch()` decorator
            // on a component as well as any Stencil-specific "members" (`@Prop()`s and `@State()`s).
            // As such, there is no way to guarantee type-safety here that a user hasn't entered
            // an invalid attribute.
            Cstr.observedAttributes = Array.from(new Set([
                ...Object.keys((_a = cmpMeta.$watchers$) !== null && _a !== void 0 ? _a : {}),
                ...members
                    .filter(([_, m]) => m[0] & 15 /* MEMBER_FLAGS.HasAttribute */)
                    .map(([propName, m]) => {
                    var _a;
                    const attrName = m[1] || propName;
                    attrNameToPropName.set(attrName, propName);
                    if (m[0] & 512 /* MEMBER_FLAGS.ReflectAttr */) {
                        (_a = cmpMeta.$attrsToReflect$) === null || _a === void 0 ? void 0 : _a.push([propName, attrName]);
                    }
                    return attrName;
                }),
            ]));
        }
    }
    return Cstr;
};
/**
 * Initialize a Stencil component given a reference to its host element, its
 * runtime bookkeeping data structure, runtime metadata about the component,
 * and (optionally) an HMR version ID.
 *
 * @param elm a host element
 * @param hostRef the element's runtime bookkeeping object
 * @param cmpMeta runtime metadata for the Stencil component
 * @param hmrVersionId an (optional) HMR version ID
 */
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
    let Cstr;
    // initializeComponent
    if ((hostRef.$flags$ & 32 /* HOST_FLAGS.hasInitializedComponent */) === 0) {
        // Let the runtime know that the component has been initialized
        hostRef.$flags$ |= 32 /* HOST_FLAGS.hasInitializedComponent */;
        {
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if (!Cstr.isProxied) {
                // we've never proxied this Constructor before
                // let's add the getters/setters to its prototype before
                // the first time we create an instance of the implementation
                {
                    cmpMeta.$watchers$ = Cstr.watchers;
                }
                proxyComponent(Cstr, cmpMeta, 2 /* PROXY_FLAGS.proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* HOST_FLAGS.isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* HOST_FLAGS.isConstructingInstance */;
            }
            {
                hostRef.$flags$ |= 128 /* HOST_FLAGS.isWatchReady */;
            }
            endNewInstance();
            fireConnectedCallback(hostRef.$lazyInstance$);
        }
        if (Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if (ancestorComponent && ancestorComponent['s-rc']) {
        // this is the initial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const fireConnectedCallback = (instance) => {
    {
        safeCall(instance, 'connectedCallback');
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* HOST_FLAGS.hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* HOST_FLAGS.hasConnected */;
            {
                // initUpdate
                // if the slot polyfill is required we'll need to put some nodes
                // in here to act as original content anchors as we move nodes around
                // host element has been connected to the DOM
                if ((// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
                        cmpMeta.$flags$ & (4 /* CMP_FLAGS.hasSlotRelocation */ | 8 /* CMP_FLAGS.needsShadowDomShim */))) {
                    setContentReference(elm);
                }
            }
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if (cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* MEMBER_FLAGS.Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                initializeComponent(elm, hostRef, cmpMeta);
            }
        }
        else {
            // not the first time this has connected
            // reattach any event listeners to the host
            // since they would have been removed when disconnected
            addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
            // fire off connectedCallback() on component instance
            if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$lazyInstance$) {
                fireConnectedCallback(hostRef.$lazyInstance$);
            }
            else if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$onReadyPromise$) {
                hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$));
            }
        }
        endConnected();
    }
};
const setContentReference = (elm) => {
    // only required when we're NOT using native shadow dom (slot)
    // or this browser doesn't support native shadow dom
    // and this host element was NOT created with SSR
    // let's pick out the inner content for slot projection
    // create a node to represent where the original
    // content was first placed, which is useful later on
    const contentRefElm = (elm['s-cr'] = doc.createComment(''));
    contentRefElm['s-cn'] = true;
    elm.insertBefore(contentRefElm, elm.firstChild);
};
const disconnectInstance = (instance) => {
    {
        safeCall(instance, 'disconnectedCallback');
    }
};
const disconnectedCallback = async (elm) => {
    if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        {
            if (hostRef.$rmListeners$) {
                hostRef.$rmListeners$.map((rmListener) => rmListener());
                hostRef.$rmListeners$ = undefined;
            }
        }
        if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$lazyInstance$) {
            disconnectInstance(hostRef.$lazyInstance$);
        }
        else if (hostRef === null || hostRef === void 0 ? void 0 : hostRef.$onReadyPromise$) {
            hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$));
        }
    }
};
const patchPseudoShadowDom = (hostElementPrototype, descriptorPrototype) => {
    patchCloneNode(hostElementPrototype);
    patchSlotAppendChild(hostElementPrototype);
    patchSlotAppend(hostElementPrototype);
    patchSlotPrepend(hostElementPrototype);
    patchSlotInsertAdjacentElement(hostElementPrototype);
    patchSlotInsertAdjacentHTML(hostElementPrototype);
    patchSlotInsertAdjacentText(hostElementPrototype);
    patchTextContent(hostElementPrototype);
    patchChildSlotNodes(hostElementPrototype, descriptorPrototype);
    patchSlotRemoveChild(hostElementPrototype);
};
const patchCloneNode = (HostElementPrototype) => {
    const orgCloneNode = HostElementPrototype.cloneNode;
    HostElementPrototype.cloneNode = function (deep) {
        const srcNode = this;
        const isShadowDom = srcNode.shadowRoot && supportsShadow ;
        const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
        if (!isShadowDom && deep) {
            let i = 0;
            let slotted, nonStencilNode;
            const stencilPrivates = [
                's-id',
                's-cr',
                's-lr',
                's-rc',
                's-sc',
                's-p',
                's-cn',
                's-sr',
                's-sn',
                's-hn',
                's-ol',
                's-nr',
                's-si',
            ];
            for (; i < srcNode.childNodes.length; i++) {
                slotted = srcNode.childNodes[i]['s-nr'];
                nonStencilNode = stencilPrivates.every((privateField) => !srcNode.childNodes[i][privateField]);
                if (slotted) {
                    if (clonedNode.__appendChild) {
                        clonedNode.__appendChild(slotted.cloneNode(true));
                    }
                    else {
                        clonedNode.appendChild(slotted.cloneNode(true));
                    }
                }
                if (nonStencilNode) {
                    clonedNode.appendChild(srcNode.childNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};
/**
 * Patches the `appendChild` method on a `scoped` Stencil component.
 * The patch will attempt to find a slot with the same name as the node being appended
 * and insert it into the slot reference if found. Otherwise, it falls-back to the original
 * `appendChild` method.
 *
 * @param HostElementPrototype The Stencil component to be patched
 */
const patchSlotAppendChild = (HostElementPrototype) => {
    HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
    HostElementPrototype.appendChild = function (newChild) {
        const slotName = (newChild['s-sn'] = getSlotName(newChild));
        const slotNode = getHostSlotNode(this.childNodes, slotName);
        if (slotNode) {
            const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
            const appendAfter = slotChildNodes[slotChildNodes.length - 1];
            const insertedNode = appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
            // Check if there is fallback content that should be hidden
            updateFallbackSlotVisibility(this);
            // Force a re-render of the host element
            forceUpdate(this);
            return insertedNode;
        }
        return this.__appendChild(newChild);
    };
};
/**
 * Patches the `removeChild` method on a `scoped` Stencil component.
 * This patch attempts to remove the specified node from a slot reference
 * if the slot exists. Otherwise, it falls-back to the original `removeChild` method.
 *
 * @param ElementPrototype The Stencil component to be patched
 */
const patchSlotRemoveChild = (ElementPrototype) => {
    ElementPrototype.__removeChild = ElementPrototype.removeChild;
    ElementPrototype.removeChild = function (toRemove) {
        if (toRemove && typeof toRemove['s-sn'] !== 'undefined') {
            const slotNode = getHostSlotNode(this.childNodes, toRemove['s-sn']);
            if (slotNode) {
                // Get all slot content
                const slotChildNodes = getHostSlotChildNodes(slotNode, toRemove['s-sn']);
                // See if any of the slotted content matches the node to remove
                const existingNode = slotChildNodes.find((n) => n === toRemove);
                if (existingNode) {
                    existingNode.remove();
                    // Check if there is fallback content that should be displayed if that
                    // was the last node in the slot
                    updateFallbackSlotVisibility(this);
                    return;
                }
            }
        }
        return this.__removeChild(toRemove);
    };
};
/**
 * Patches the `prepend` method for a slotted node inside a scoped component.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
const patchSlotPrepend = (HostElementPrototype) => {
    const originalPrepend = HostElementPrototype.prepend;
    HostElementPrototype.prepend = function (...newChildren) {
        newChildren.forEach((newChild) => {
            if (typeof newChild === 'string') {
                newChild = this.ownerDocument.createTextNode(newChild);
            }
            const slotName = (newChild['s-sn'] = getSlotName(newChild));
            const slotNode = getHostSlotNode(this.childNodes, slotName);
            if (slotNode) {
                const slotPlaceholder = document.createTextNode('');
                slotPlaceholder['s-nr'] = newChild;
                slotNode['s-cr'].parentNode.__appendChild(slotPlaceholder);
                newChild['s-ol'] = slotPlaceholder;
                const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
                const appendAfter = slotChildNodes[0];
                return appendAfter.parentNode.insertBefore(newChild, appendAfter.nextSibling);
            }
            if (newChild.nodeType === 1 && !!newChild.getAttribute('slot')) {
                newChild.hidden = true;
            }
            return originalPrepend.call(this, newChild);
        });
    };
};
/**
 * Patches the `append` method for a slotted node inside a scoped component. The patched method uses
 * `appendChild` under-the-hood while creating text nodes for any new children that passed as bare strings.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
const patchSlotAppend = (HostElementPrototype) => {
    HostElementPrototype.append = function (...newChildren) {
        newChildren.forEach((newChild) => {
            if (typeof newChild === 'string') {
                newChild = this.ownerDocument.createTextNode(newChild);
            }
            this.appendChild(newChild);
        });
    };
};
/**
 * Patches the `insertAdjacentHTML` method for a slotted node inside a scoped component. Specifically,
 * we only need to patch the behavior for the specific `beforeend` and `afterbegin` positions so the element
 * gets inserted into the DOM in the correct location.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
const patchSlotInsertAdjacentHTML = (HostElementPrototype) => {
    const originalInsertAdjacentHtml = HostElementPrototype.insertAdjacentHTML;
    HostElementPrototype.insertAdjacentHTML = function (position, text) {
        if (position !== 'afterbegin' && position !== 'beforeend') {
            return originalInsertAdjacentHtml.call(this, position, text);
        }
        const container = this.ownerDocument.createElement('_');
        let node;
        container.innerHTML = text;
        if (position === 'afterbegin') {
            while ((node = container.firstChild)) {
                this.prepend(node);
            }
        }
        else if (position === 'beforeend') {
            while ((node = container.firstChild)) {
                this.append(node);
            }
        }
    };
};
/**
 * Patches the `insertAdjacentText` method for a slotted node inside a scoped component. Specifically,
 * we only need to patch the behavior for the specific `beforeend` and `afterbegin` positions so the text node
 * gets inserted into the DOM in the correct location.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
const patchSlotInsertAdjacentText = (HostElementPrototype) => {
    HostElementPrototype.insertAdjacentText = function (position, text) {
        this.insertAdjacentHTML(position, text);
    };
};
/**
 * Patches the `insertAdjacentElement` method for a slotted node inside a scoped component. Specifically,
 * we only need to patch the behavior for the specific `beforeend` and `afterbegin` positions so the element
 * gets inserted into the DOM in the correct location.
 *
 * @param HostElementPrototype the `Element` to be patched
 */
const patchSlotInsertAdjacentElement = (HostElementPrototype) => {
    const originalInsertAdjacentElement = HostElementPrototype.insertAdjacentElement;
    HostElementPrototype.insertAdjacentElement = function (position, element) {
        if (position !== 'afterbegin' && position !== 'beforeend') {
            return originalInsertAdjacentElement.call(this, position, element);
        }
        if (position === 'afterbegin') {
            this.prepend(element);
            return element;
        }
        else if (position === 'beforeend') {
            this.append(element);
            return element;
        }
        return element;
    };
};
/**
 * Patches the text content of an unnamed slotted node inside a scoped component
 * @param hostElementPrototype the `Element` to be patched
 */
const patchTextContent = (hostElementPrototype) => {
    const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
    Object.defineProperty(hostElementPrototype, '__textContent', descriptor);
    {
        Object.defineProperty(hostElementPrototype, 'textContent', {
            get() {
                var _a;
                // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
                // the empty string
                const slotNode = getHostSlotNode(this.childNodes, '');
                // when a slot node is found, the textContent _may_ be found in the next sibling (text) node, depending on how
                // nodes were reordered during the vdom render. first try to get the text content from the sibling.
                if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3 /* NODE_TYPES.TEXT_NODE */) {
                    return slotNode.nextSibling.textContent;
                }
                else if (slotNode) {
                    return slotNode.textContent;
                }
                else {
                    // fallback to the original implementation
                    return this.__textContent;
                }
            },
            set(value) {
                var _a;
                // get the 'default slot', which would be the first slot in a shadow tree (if we were using one), whose name is
                // the empty string
                const slotNode = getHostSlotNode(this.childNodes, '');
                // when a slot node is found, the textContent _may_ need to be placed in the next sibling (text) node,
                // depending on how nodes were reordered during the vdom render. first try to set the text content on the
                // sibling.
                if (((_a = slotNode === null || slotNode === void 0 ? void 0 : slotNode.nextSibling) === null || _a === void 0 ? void 0 : _a.nodeType) === 3 /* NODE_TYPES.TEXT_NODE */) {
                    slotNode.nextSibling.textContent = value;
                }
                else if (slotNode) {
                    slotNode.textContent = value;
                }
                else {
                    // we couldn't find a slot, but that doesn't mean that there isn't one. if this check ran before the DOM
                    // loaded, we could have missed it. check for a content reference element on the scoped component and insert
                    // it there
                    this.__textContent = value;
                    const contentRefElm = this['s-cr'];
                    if (contentRefElm) {
                        this.insertBefore(contentRefElm, this.firstChild);
                    }
                }
            },
        });
    }
};
const patchChildSlotNodes = (elm, cmpMeta) => {
    class FakeNodeList extends Array {
        item(n) {
            return this[n];
        }
    }
    // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
    if (cmpMeta.$flags$ & 8 /* CMP_FLAGS.needsShadowDomShim */) {
        const childNodesFn = elm.__lookupGetter__('childNodes');
        Object.defineProperty(elm, 'children', {
            get() {
                return this.childNodes.map((n) => n.nodeType === 1);
            },
        });
        Object.defineProperty(elm, 'childElementCount', {
            get() {
                return elm.children.length;
            },
        });
        Object.defineProperty(elm, 'childNodes', {
            get() {
                const childNodes = childNodesFn.call(this);
                if ((plt.$flags$ & 1 /* PLATFORM_FLAGS.isTmpDisconnected */) === 0 &&
                    getHostRef(this).$flags$ & 2 /* HOST_FLAGS.hasRendered */) {
                    const result = new FakeNodeList();
                    for (let i = 0; i < childNodes.length; i++) {
                        const slot = childNodes[i]['s-nr'];
                        if (slot) {
                            result.push(slot);
                        }
                    }
                    return result;
                }
                return FakeNodeList.from(childNodes);
            },
        });
    }
};
const getSlotName = (node) => node['s-sn'] || (node.nodeType === 1 && node.getAttribute('slot')) || '';
/**
 * Recursively searches a series of child nodes for a slot with the provided name.
 * @param childNodes the nodes to search for a slot with a specific name.
 * @param slotName the name of the slot to match on.
 * @returns a reference to the slot node that matches the provided name, `null` otherwise
 */
const getHostSlotNode = (childNodes, slotName) => {
    let i = 0;
    let childNode;
    for (; i < childNodes.length; i++) {
        childNode = childNodes[i];
        if (childNode['s-sr'] && childNode['s-sn'] === slotName) {
            return childNode;
        }
        childNode = getHostSlotNode(childNode.childNodes, slotName);
        if (childNode) {
            return childNode;
        }
    }
    return null;
};
const getHostSlotChildNodes = (n, slotName) => {
    const childNodes = [n];
    while ((n = n.nextSibling) && n['s-sn'] === slotName) {
        childNodes.push(n);
    }
    return childNodes;
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    var _a;
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const dataStyles = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    let hasSlotRelocation = false;
    lazyBundles.map((lazyBundle) => {
        lazyBundle[1].map((compactMeta) => {
            var _a;
            const cmpMeta = {
                $flags$: compactMeta[0],
                $tagName$: compactMeta[1],
                $members$: compactMeta[2],
                $listeners$: compactMeta[3],
            };
            // Check if we are using slots outside the shadow DOM in this component.
            // We'll use this information later to add styles for `slot-fb` elements
            if (cmpMeta.$flags$ & 4 /* CMP_FLAGS.hasSlotRelocation */) {
                hasSlotRelocation = true;
            }
            {
                cmpMeta.$members$ = compactMeta[2];
            }
            {
                cmpMeta.$listeners$ = compactMeta[3];
            }
            {
                cmpMeta.$attrsToReflect$ = [];
            }
            {
                cmpMeta.$watchers$ = (_a = compactMeta[4]) !== null && _a !== void 0 ? _a : {};
            }
            const tagName = cmpMeta.$tagName$;
            const HostElement = class extends HTMLElement {
                // StencilLazyHost
                constructor(self) {
                    // @ts-ignore
                    super(self);
                    self = this;
                    registerHost(self, cmpMeta);
                    if (cmpMeta.$flags$ & 1 /* CMP_FLAGS.shadowDomEncapsulation */) {
                        // this component is using shadow dom
                        // and this browser supports shadow dom
                        // add the read-only property "shadowRoot" to the host element
                        // adding the shadow root build conditionals to minimize runtime
                        {
                            {
                                self.attachShadow({ mode: 'open' });
                            }
                        }
                    }
                }
                connectedCallback() {
                    if (appLoadFallback) {
                        clearTimeout(appLoadFallback);
                        appLoadFallback = null;
                    }
                    if (isBootstrapping) {
                        // connectedCallback will be processed once all components have been registered
                        deferredConnectedCallbacks.push(this);
                    }
                    else {
                        plt.jmp(() => connectedCallback(this));
                    }
                }
                disconnectedCallback() {
                    plt.jmp(() => disconnectedCallback(this));
                }
                componentOnReady() {
                    return getHostRef(this).$onReadyPromise$;
                }
            };
            // TODO(STENCIL-914): this check and `else` block can go away and be replaced by just the `scoped` check
            {
                // This check is intentionally not combined with the surrounding `experimentalSlotFixes` check
                // since, moving forward, we only want to patch the pseudo shadow DOM when the component is scoped
                if (cmpMeta.$flags$ & 2 /* CMP_FLAGS.scopedCssEncapsulation */) {
                    patchPseudoShadowDom(HostElement.prototype, cmpMeta);
                }
            }
            cmpMeta.$lazyBundleId$ = lazyBundle[0];
            if (!exclude.includes(tagName) && !customElements.get(tagName)) {
                cmpTags.push(tagName);
                customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* PROXY_FLAGS.isElementConstructor */));
            }
        });
    });
    // Only bother generating CSS if we have components
    // TODO(STENCIL-1118): Add test cases for CSS content based on conditionals
    if (cmpTags.length > 0) {
        // Add styles for `slot-fb` elements if any of our components are using slots outside the Shadow DOM
        if (hasSlotRelocation) {
            dataStyles.innerHTML += SLOT_FB_CSS;
        }
        // Add hydration styles
        {
            dataStyles.innerHTML += cmpTags + HYDRATED_CSS;
        }
        // If we have styles, add them to the DOM
        if (dataStyles.innerHTML.length) {
            dataStyles.setAttribute('data-styles', '');
            // Apply CSP nonce to the style tag if it exists
            const nonce = (_a = plt.$nonce$) !== null && _a !== void 0 ? _a : queryNonceMetaTagContent(doc);
            if (nonce != null) {
                dataStyles.setAttribute('nonce', nonce);
            }
            // Insert the styles into the document head
            // NOTE: this _needs_ to happen last so we can ensure the nonce (and other attributes) are applied
            head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
        }
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map((host) => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
    if (listeners) {
        listeners.map(([flags, name, method]) => {
            const target = getHostListenerTarget(elm, flags) ;
            const handler = hostListenerProxy(hostRef, method);
            const opts = hostListenerOpts(flags);
            plt.ael(target, name, handler, opts);
            (hostRef.$rmListeners$ = hostRef.$rmListeners$ || []).push(() => plt.rel(target, name, handler, opts));
        });
    }
};
const hostListenerProxy = (hostRef, methodName) => (ev) => {
    try {
        {
            if (hostRef.$flags$ & 256 /* HOST_FLAGS.isListenReady */) {
                // instance is ready, let's call it's member method for this event
                hostRef.$lazyInstance$[methodName](ev);
            }
            else {
                (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
            }
        }
    }
    catch (e) {
        consoleError(e);
    }
};
const getHostListenerTarget = (elm, flags) => {
    if (flags & 4 /* LISTENER_FLAGS.TargetDocument */)
        return doc;
    if (flags & 8 /* LISTENER_FLAGS.TargetWindow */)
        return win;
    if (flags & 16 /* LISTENER_FLAGS.TargetBody */)
        return doc.body;
    return elm;
};
// prettier-ignore
const hostListenerOpts = (flags) => supportsListenerOptions
    ? ({
        passive: (flags & 1 /* LISTENER_FLAGS.Passive */) !== 0,
        capture: (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0,
    })
    : (flags & 2 /* LISTENER_FLAGS.Capture */) !== 0;
/**
 * Assigns the given value to the nonce property on the runtime platform object.
 * During runtime, this value is used to set the nonce attribute on all dynamically created script and style tags.
 * @param nonce The value to be assigned to the platform nonce property.
 * @returns void
 */
const setNonce = (nonce) => (plt.$nonce$ = nonce);
/**
 * A WeakMap mapping runtime component references to their corresponding host reference
 * instances.
 *
 * **Note**: If we're in an HMR context we need to store a reference to this
 * value on `window` in order to maintain the mapping of {@link d.RuntimeRef}
 * to {@link d.HostRef} across HMR updates.
 *
 * This is necessary because when HMR updates for a component are processed by
 * the browser-side dev server client the JS bundle for that component is
 * re-fetched. Since the module containing {@link hostRefs} is included in
 * that bundle, if we do not store a reference to it the new iteration of the
 * component will not have access to the previous hostRef map, leading to a
 * bug where the new version of the component cannot properly initialize.
 */
const hostRefs = new WeakMap();
/**
 * Given a {@link d.RuntimeRef} retrieve the corresponding {@link d.HostRef}
 *
 * @param ref the runtime ref of interest
 * @returns the Host reference (if found) or undefined
 */
const getHostRef = (ref) => hostRefs.get(ref);
/**
 * Register a lazy instance with the {@link hostRefs} object so it's
 * corresponding {@link d.HostRef} can be retrieved later.
 *
 * @param lazyInstance the lazy instance of interest
 * @param hostRef that instances `HostRef` object
 * @returns a reference to the host ref WeakMap
 */
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
/**
 * Register a host element for a Stencil component, setting up various metadata
 * and callbacks based on {@link BUILD} flags as well as the component's runtime
 * metadata.
 *
 * @param hostElement the host element to register
 * @param cmpMeta runtime metadata for that component
 * @returns a reference to the host ref WeakMap
 */
const registerHost = (hostElement, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: hostElement,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onInstancePromise$ = new Promise((r) => (hostRef.$onInstanceResolve$ = r));
    }
    {
        hostRef.$onReadyPromise$ = new Promise((r) => (hostRef.$onReadyResolve$ = r));
        hostElement['s-p'] = [];
        hostElement['s-rc'] = [];
    }
    addHostEventListeners(hostElement, hostRef, cmpMeta.$listeners$);
    return hostRefs.set(hostElement, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e, el) => (0, console.error)(e, el);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module = cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    
        if (!hmrVersionId || !BUILD.hotModuleReplacement) {
          const processMod = importedModule => {
              cmpModules.set(bundleId, importedModule);
              return importedModule[exportName];
          }
          switch(bundleId) {
              
                case 'z-app-header_12.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-app-header_12.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-accordion.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-accordion.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-anchor-navigation.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-anchor-navigation.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-aria-alert.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-aria-alert.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-avatar.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-avatar.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-book-card.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-book-card.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-breadcrumb.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-breadcrumb.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-button-sort.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-button-sort.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-card.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-card.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-carousel.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-carousel.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-combobox.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-combobox.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-contextual-menu.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-contextual-menu.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-cover-hero.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-cover-hero.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-date-picker.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-date-picker.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-file.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-file.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-file-upload.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-file-upload.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-info-box.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-info-box.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-info-reveal.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-info-reveal.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-link.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-link.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-logo.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-logo.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-menu.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-menu.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-menu-section.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-menu-section.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-messages-pocket.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-messages-pocket.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-card-alert.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-card-alert.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-card-dictionary.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-card-dictionary.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-card-footer.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-card-footer.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-card-footer-sections.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-card-footer-sections.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-card-icon.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-card-icon.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-card-info.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-card-info.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-card-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-card-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-navigation-tab.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-navigation-tab.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-navigation-tab-link.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-navigation-tab-link.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-navigation-tabs.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-navigation-tabs.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-notification.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-notification.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-otp.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-otp.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-pagination.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-pagination.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-panel-elem.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-panel-elem.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-pocket-message.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-pocket-message.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-range-picker.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-range-picker.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-section-title.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-section-title.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-select.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-select.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-skip-to-content.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-skip-to-content.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-slideshow.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-slideshow.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-stepper.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-stepper.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-stepper-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-stepper-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-body.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-body.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-deprecated.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-deprecated.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-expanded-row.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-expanded-row.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-footer.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-footer.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-head.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-head.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-header-row.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-header-row.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-row.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-row.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-sticky-footer.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-sticky-footer.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-tbody.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-tbody.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-td.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-td.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-tfoot.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-tfoot.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-th.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-th.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-thead.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-thead.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-toast-notification.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-toast-notification.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-toast-notification-list.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-toast-notification-list.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-toggle-button.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-toggle-button.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-toggle-switch.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-toggle-switch.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-tooltip.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-tooltip.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-tr.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-tr.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-visually-hidden.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-visually-hidden.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-alert.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-alert.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-chip.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-chip.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-dragdrop-area_2.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-dragdrop-area_2.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-ghost-loading.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-ghost-loading.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-card_4.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-card_4.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-pocket_3.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-pocket_3.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-cell.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-cell.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-empty-box.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-empty-box.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-table-header.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-table-header.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-myz-list-item.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-myz-list-item.cjs.entry.js')); }).then(processMod, consoleError);
                case 'z-popover.cjs':
                    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
                        /* webpackMode: "lazy" */
                        './z-popover.cjs.entry.js')); }).then(processMod, consoleError);
          }
      }
    return Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require(
    /* @vite-ignore */
    /* webpackInclude: /\.entry\.js$/ */
    /* webpackExclude: /\.system\.entry\.js$/ */
    /* webpackMode: "lazy" */
    `./${bundleId}.entry.js${''}`)); }).then((importedModule) => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = /*@__PURE__*/ new Map();
const win = typeof window !== 'undefined' ? window : {};
const doc = win.document || { head: {} };
const H = (win.HTMLElement || class {
});
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: (h) => h(),
    raf: (h) => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const supportsShadow = 
// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
true;
const supportsListenerOptions = /*@__PURE__*/ (() => {
    let supportsListenerOptions = false;
    try {
        doc.addEventListener('e', null, Object.defineProperty({}, 'passive', {
            get() {
                supportsListenerOptions = true;
            },
        }));
    }
    catch (e) { }
    return supportsListenerOptions;
})();
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructableStylesheets = /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return typeof new CSSStyleSheet().replaceSync === 'function';
        }
        catch (e) { }
        return false;
    })()
    ;
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* PLATFORM_FLAGS.queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);

exports.H = H;
exports.Host = Host;
exports.bootstrapLazy = bootstrapLazy;
exports.createEvent = createEvent;
exports.getElement = getElement;
exports.h = h;
exports.promiseResolve = promiseResolve;
exports.registerInstance = registerInstance;
exports.setNonce = setNonce;

//# sourceMappingURL=index-dc60bee7.js.map