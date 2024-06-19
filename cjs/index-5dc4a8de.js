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
const BUILD = /* web-components-library */ { allRenderFn: true, appendChildSlotFix: true, asyncLoading: true, asyncQueue: false, attachStyles: true, cloneNodeFix: true, cmpDidLoad: true, cmpDidRender: true, cmpDidUnload: false, cmpDidUpdate: true, cmpShouldUpdate: false, cmpWillLoad: true, cmpWillRender: true, cmpWillUpdate: true, connectedCallback: true, constructableCSS: true, cssAnnotations: true, devTools: false, disconnectedCallback: true, element: false, event: true, experimentalScopedSlotChanges: false, experimentalSlotFixes: true, formAssociated: false, hasRenderFn: true, hostListener: true, hostListenerTarget: true, hostListenerTargetBody: true, hostListenerTargetDocument: true, hostListenerTargetParent: false, hostListenerTargetWindow: true, hotModuleReplacement: false, hydrateClientSide: false, hydrateServerSide: false, hydratedAttribute: false, hydratedClass: true, hydratedSelectorName: "hydrated", initializeNextTick: false, invisiblePrehydration: true, isDebug: false, isDev: false, isTesting: false, lazyLoad: true, lifecycle: true, lifecycleDOMEvents: false, member: true, method: true, mode: false, observeAttribute: true, profile: false, prop: true, propBoolean: true, propMutable: true, propNumber: true, propString: true, reflect: true, scoped: true, scopedSlotTextContentFix: true, scriptDataOpts: false, shadowDelegatesFocus: false, shadowDom: true, slot: true, slotChildNodesFix: true, slotRelocation: true, state: true, style: true, svg: true, taskQueue: true, transformTagName: false, updatable: true, vdomAttribute: true, vdomClass: true, vdomFunctional: false, vdomKey: true, vdomListener: true, vdomPropOrAttr: true, vdomRef: true, vdomRender: true, vdomStyle: true, vdomText: true, vdomXlink: true, watchCallback: true };

/*
 Stencil Client Platform v4.18.3 | MIT Licensed | https://stenciljs.com
 */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/utils/constants.ts
var EMPTY_OBJ = {};
var SVG_NS = "http://www.w3.org/2000/svg";
var HTML_NS = "http://www.w3.org/1999/xhtml";

// src/utils/helpers.ts
var isDef = (v) => v != null;
var isComplexType = (o) => {
  o = typeof o;
  return o === "object" || o === "function";
};

// src/utils/query-nonce-meta-tag-content.ts
function queryNonceMetaTagContent(doc2) {
  var _a, _b, _c;
  return (_c = (_b = (_a = doc2.head) == null ? void 0 : _a.querySelector('meta[name="csp-nonce"]')) == null ? void 0 : _b.getAttribute("content")) != null ? _c : void 0;
}

// src/utils/result.ts
var result_exports = {};
__export(result_exports, {
  err: () => err,
  map: () => map,
  ok: () => ok,
  unwrap: () => unwrap,
  unwrapErr: () => unwrapErr
});
var ok = (value) => ({
  isOk: true,
  isErr: false,
  value
});
var err = (value) => ({
  isOk: false,
  isErr: true,
  value
});
function map(result, fn) {
  if (result.isOk) {
    const val = fn(result.value);
    if (val instanceof Promise) {
      return val.then((newVal) => ok(newVal));
    } else {
      return ok(val);
    }
  }
  if (result.isErr) {
    const value = result.value;
    return err(value);
  }
  throw "should never get here";
}
var unwrap = (result) => {
  if (result.isOk) {
    return result.value;
  } else {
    throw result.value;
  }
};
var unwrapErr = (result) => {
  if (result.isErr) {
    return result.value;
  } else {
    throw result.value;
  }
};
var createTime = (fnName, tagName = "") => {
  {
    return () => {
      return;
    };
  }
};
var uniqueTime = (key, measureText) => {
  {
    return () => {
      return;
    };
  }
};
var HYDRATED_CSS = "{visibility:hidden}.hydrated{visibility:inherit}";
var SLOT_FB_CSS = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var XLINK_NS = "http://www.w3.org/1999/xlink";
var h = (nodeName, vnodeData, ...children) => {
  let child = null;
  let key = null;
  let slotName = null;
  let simple = false;
  let lastSimple = false;
  const vNodeChildren = [];
  const walk = (c) => {
    for (let i2 = 0; i2 < c.length; i2++) {
      child = c[i2];
      if (Array.isArray(child)) {
        walk(child);
      } else if (child != null && typeof child !== "boolean") {
        if (simple = typeof nodeName !== "function" && !isComplexType(child)) {
          child = String(child);
        }
        if (simple && lastSimple) {
          vNodeChildren[vNodeChildren.length - 1].$text$ += child;
        } else {
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
    {
      const classData = vnodeData.className || vnodeData.class;
      if (classData) {
        vnodeData.class = typeof classData !== "object" ? classData : Object.keys(classData).filter((k) => classData[k]).join(" ");
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
var newVNode = (tag, text) => {
  const vnode = {
    $flags$: 0,
    $tag$: tag,
    $text$: text,
    $elm$: null,
    $children$: null
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
var Host = {};
var isHost = (node) => node && node.$tag$ === Host;
var parsePropertyValue = (propValue, propType) => {
  if (propValue != null && !isComplexType(propValue)) {
    if (propType & 4 /* Boolean */) {
      return propValue === "false" ? false : propValue === "" || !!propValue;
    }
    if (propType & 2 /* Number */) {
      return parseFloat(propValue);
    }
    if (propType & 1 /* String */) {
      return String(propValue);
    }
    return propValue;
  }
  return propValue;
};
var getElement = (ref) => getHostRef(ref).$hostElement$ ;

// src/runtime/event-emitter.ts
var createEvent = (ref, name, flags) => {
  const elm = getElement(ref);
  return {
    emit: (detail) => {
      return emitEvent(elm, name, {
        bubbles: !!(flags & 4 /* Bubbles */),
        composed: !!(flags & 2 /* Composed */),
        cancelable: !!(flags & 1 /* Cancellable */),
        detail
      });
    }
  };
};
var emitEvent = (elm, name, opts) => {
  const ev = plt.ce(name, opts);
  elm.dispatchEvent(ev);
  return ev;
};
var rootAppliedStyles = /* @__PURE__ */ new WeakMap();
var registerStyle = (scopeId2, cssText, allowCS) => {
  let style = styles.get(scopeId2);
  if (supportsConstructableStylesheets && allowCS) {
    style = style || new CSSStyleSheet();
    if (typeof style === "string") {
      style = cssText;
    } else {
      style.replaceSync(cssText);
    }
  } else {
    style = cssText;
  }
  styles.set(scopeId2, style);
};
var addStyle = (styleContainerNode, cmpMeta, mode) => {
  var _a;
  const scopeId2 = getScopeId(cmpMeta);
  const style = styles.get(scopeId2);
  styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
  if (style) {
    if (typeof style === "string") {
      styleContainerNode = styleContainerNode.head || styleContainerNode;
      let appliedStyles = rootAppliedStyles.get(styleContainerNode);
      let styleElm;
      if (!appliedStyles) {
        rootAppliedStyles.set(styleContainerNode, appliedStyles = /* @__PURE__ */ new Set());
      }
      if (!appliedStyles.has(scopeId2)) {
        {
          styleElm = doc.createElement("style");
          styleElm.innerHTML = style;
          const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
          if (nonce != null) {
            styleElm.setAttribute("nonce", nonce);
          }
          styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector("link"));
        }
        if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
          styleElm.innerHTML += SLOT_FB_CSS;
        }
        if (appliedStyles) {
          appliedStyles.add(scopeId2);
        }
      }
    } else if (!styleContainerNode.adoptedStyleSheets.includes(style)) {
      styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
    }
  }
  return scopeId2;
};
var attachStyles = (hostRef) => {
  const cmpMeta = hostRef.$cmpMeta$;
  const elm = hostRef.$hostElement$;
  const flags = cmpMeta.$flags$;
  const endAttachStyles = createTime("attachStyles", cmpMeta.$tagName$);
  const scopeId2 = addStyle(
    elm.shadowRoot ? elm.shadowRoot : elm.getRootNode(),
    cmpMeta);
  if (flags & 10 /* needsScopedEncapsulation */) {
    elm["s-sc"] = scopeId2;
    elm.classList.add(scopeId2 + "-h");
    if (flags & 2 /* scopedCssEncapsulation */) {
      elm.classList.add(scopeId2 + "-s");
    }
  }
  endAttachStyles();
};
var getScopeId = (cmp, mode) => "sc-" + (cmp.$tagName$);
var setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
  if (oldValue !== newValue) {
    let isProp = isMemberInElement(elm, memberName);
    let ln = memberName.toLowerCase();
    if (memberName === "class") {
      const classList = elm.classList;
      const oldClasses = parseClassList(oldValue);
      const newClasses = parseClassList(newValue);
      classList.remove(...oldClasses.filter((c) => c && !newClasses.includes(c)));
      classList.add(...newClasses.filter((c) => c && !oldClasses.includes(c)));
    } else if (memberName === "style") {
      {
        for (const prop in oldValue) {
          if (!newValue || newValue[prop] == null) {
            if (prop.includes("-")) {
              elm.style.removeProperty(prop);
            } else {
              elm.style[prop] = "";
            }
          }
        }
      }
      for (const prop in newValue) {
        if (!oldValue || newValue[prop] !== oldValue[prop]) {
          if (prop.includes("-")) {
            elm.style.setProperty(prop, newValue[prop]);
          } else {
            elm.style[prop] = newValue[prop];
          }
        }
      }
    } else if (memberName === "key") ; else if (memberName === "ref") {
      if (newValue) {
        newValue(elm);
      }
    } else if ((!isProp ) && memberName[0] === "o" && memberName[1] === "n") {
      if (memberName[2] === "-") {
        memberName = memberName.slice(3);
      } else if (isMemberInElement(win, ln)) {
        memberName = ln.slice(2);
      } else {
        memberName = ln[2] + memberName.slice(3);
      }
      if (oldValue || newValue) {
        const capture = memberName.endsWith(CAPTURE_EVENT_SUFFIX);
        memberName = memberName.replace(CAPTURE_EVENT_REGEX, "");
        if (oldValue) {
          plt.rel(elm, memberName, oldValue, capture);
        }
        if (newValue) {
          plt.ael(elm, memberName, newValue, capture);
        }
      }
    } else {
      const isComplex = isComplexType(newValue);
      if ((isProp || isComplex && newValue !== null) && !isSvg) {
        try {
          if (!elm.tagName.includes("-")) {
            const n = newValue == null ? "" : newValue;
            if (memberName === "list") {
              isProp = false;
            } else if (oldValue == null || elm[memberName] != n) {
              elm[memberName] = n;
            }
          } else {
            elm[memberName] = newValue;
          }
        } catch (e) {
        }
      }
      let xlink = false;
      {
        if (ln !== (ln = ln.replace(/^xlink\:?/, ""))) {
          memberName = ln;
          xlink = true;
        }
      }
      if (newValue == null || newValue === false) {
        if (newValue !== false || elm.getAttribute(memberName) === "") {
          if (xlink) {
            elm.removeAttributeNS(XLINK_NS, memberName);
          } else {
            elm.removeAttribute(memberName);
          }
        }
      } else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
        newValue = newValue === true ? "" : newValue;
        if (xlink) {
          elm.setAttributeNS(XLINK_NS, memberName, newValue);
        } else {
          elm.setAttribute(memberName, newValue);
        }
      }
    }
  }
};
var parseClassListRegex = /\s/;
var parseClassList = (value) => !value ? [] : value.split(parseClassListRegex);
var CAPTURE_EVENT_SUFFIX = "Capture";
var CAPTURE_EVENT_REGEX = new RegExp(CAPTURE_EVENT_SUFFIX + "$");

// src/runtime/vdom/update-element.ts
var updateElement = (oldVnode, newVnode, isSvgMode2) => {
  const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
  const oldVnodeAttrs = oldVnode && oldVnode.$attrs$ || EMPTY_OBJ;
  const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
  {
    for (const memberName of sortedAttrNames(Object.keys(oldVnodeAttrs))) {
      if (!(memberName in newVnodeAttrs)) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], void 0, isSvgMode2, newVnode.$flags$);
      }
    }
  }
  for (const memberName of sortedAttrNames(Object.keys(newVnodeAttrs))) {
    setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode2, newVnode.$flags$);
  }
};
function sortedAttrNames(attrNames) {
  return attrNames.includes("ref") ? (
    // we need to sort these to ensure that `'ref'` is the last attr
    [...attrNames.filter((attr) => attr !== "ref"), "ref"]
  ) : (
    // no need to sort, return the original array
    attrNames
  );
}

// src/runtime/vdom/vdom-render.ts
var scopeId;
var contentRef;
var hostTagName;
var useNativeShadowDom = false;
var checkSlotFallbackVisibility = false;
var checkSlotRelocate = false;
var isSvgMode = false;
var createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
  var _a;
  const newVNode2 = newParentVNode.$children$[childIndex];
  let i2 = 0;
  let elm;
  let childNode;
  let oldVNode;
  if (!useNativeShadowDom) {
    checkSlotRelocate = true;
    if (newVNode2.$tag$ === "slot") {
      if (scopeId) {
        parentElm.classList.add(scopeId + "-s");
      }
      newVNode2.$flags$ |= newVNode2.$children$ ? (
        // slot element has fallback content
        // still create an element that "mocks" the slot element
        2 /* isSlotFallback */
      ) : (
        // slot element does not have fallback content
        // create an html comment we'll use to always reference
        // where actual slot content should sit next to
        1 /* isSlotReference */
      );
    }
  }
  if (newVNode2.$text$ !== null) {
    elm = newVNode2.$elm$ = doc.createTextNode(newVNode2.$text$);
  } else if (newVNode2.$flags$ & 1 /* isSlotReference */) {
    elm = newVNode2.$elm$ = doc.createTextNode("");
  } else {
    if (!isSvgMode) {
      isSvgMode = newVNode2.$tag$ === "svg";
    }
    elm = newVNode2.$elm$ = doc.createElementNS(
      isSvgMode ? SVG_NS : HTML_NS,
      newVNode2.$flags$ & 2 /* isSlotFallback */ ? "slot-fb" : newVNode2.$tag$
    ) ;
    if (isSvgMode && newVNode2.$tag$ === "foreignObject") {
      isSvgMode = false;
    }
    {
      updateElement(null, newVNode2, isSvgMode);
    }
    if (isDef(scopeId) && elm["s-si"] !== scopeId) {
      elm.classList.add(elm["s-si"] = scopeId);
    }
    {
      updateElementScopeIds(elm, parentElm);
    }
    if (newVNode2.$children$) {
      for (i2 = 0; i2 < newVNode2.$children$.length; ++i2) {
        childNode = createElm(oldParentVNode, newVNode2, i2, elm);
        if (childNode) {
          elm.appendChild(childNode);
        }
      }
    }
    {
      if (newVNode2.$tag$ === "svg") {
        isSvgMode = false;
      } else if (elm.tagName === "foreignObject") {
        isSvgMode = true;
      }
    }
  }
  elm["s-hn"] = hostTagName;
  {
    if (newVNode2.$flags$ & (2 /* isSlotFallback */ | 1 /* isSlotReference */)) {
      elm["s-sr"] = true;
      elm["s-cr"] = contentRef;
      elm["s-sn"] = newVNode2.$name$ || "";
      elm["s-rf"] = (_a = newVNode2.$attrs$) == null ? void 0 : _a.ref;
      oldVNode = oldParentVNode && oldParentVNode.$children$ && oldParentVNode.$children$[childIndex];
      if (oldVNode && oldVNode.$tag$ === newVNode2.$tag$ && oldParentVNode.$elm$) {
        {
          relocateToHostRoot(oldParentVNode.$elm$);
        }
      }
    }
  }
  return elm;
};
var relocateToHostRoot = (parentElm) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const host = parentElm.closest(hostTagName.toLowerCase());
  if (host != null) {
    const contentRefNode = Array.from(host.childNodes).find((ref) => ref["s-cr"]);
    const childNodeArray = Array.from(parentElm.childNodes);
    for (const childNode of contentRefNode ? childNodeArray.reverse() : childNodeArray) {
      if (childNode["s-sh"] != null) {
        insertBefore(host, childNode, contentRefNode != null ? contentRefNode : null);
        childNode["s-sh"] = void 0;
        checkSlotRelocate = true;
      }
    }
  }
  plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var putBackInOriginalLocation = (parentElm, recursive) => {
  plt.$flags$ |= 1 /* isTmpDisconnected */;
  const oldSlotChildNodes = Array.from(parentElm.childNodes);
  if (parentElm["s-sr"] && BUILD.experimentalSlotFixes) {
    let node = parentElm;
    while (node = node.nextSibling) {
      if (node && node["s-sn"] === parentElm["s-sn"] && node["s-sh"] === hostTagName) {
        oldSlotChildNodes.push(node);
      }
    }
  }
  for (let i2 = oldSlotChildNodes.length - 1; i2 >= 0; i2--) {
    const childNode = oldSlotChildNodes[i2];
    if (childNode["s-hn"] !== hostTagName && childNode["s-ol"]) {
      insertBefore(parentReferenceNode(childNode), childNode, referenceNode(childNode));
      childNode["s-ol"].remove();
      childNode["s-ol"] = void 0;
      childNode["s-sh"] = void 0;
      checkSlotRelocate = true;
    }
    if (recursive) {
      putBackInOriginalLocation(childNode, recursive);
    }
  }
  plt.$flags$ &= ~1 /* isTmpDisconnected */;
};
var addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
  let containerElm = parentElm["s-cr"] && parentElm["s-cr"].parentNode || parentElm;
  let childNode;
  if (containerElm.shadowRoot && containerElm.tagName === hostTagName) {
    containerElm = containerElm.shadowRoot;
  }
  for (; startIdx <= endIdx; ++startIdx) {
    if (vnodes[startIdx]) {
      childNode = createElm(null, parentVNode, startIdx, parentElm);
      if (childNode) {
        vnodes[startIdx].$elm$ = childNode;
        insertBefore(containerElm, childNode, referenceNode(before) );
      }
    }
  }
};
var removeVnodes = (vnodes, startIdx, endIdx) => {
  for (let index = startIdx; index <= endIdx; ++index) {
    const vnode = vnodes[index];
    if (vnode) {
      const elm = vnode.$elm$;
      nullifyVNodeRefs(vnode);
      if (elm) {
        {
          checkSlotFallbackVisibility = true;
          if (elm["s-ol"]) {
            elm["s-ol"].remove();
          } else {
            putBackInOriginalLocation(elm, true);
          }
        }
        elm.remove();
      }
    }
  }
};
var updateChildren = (parentElm, oldCh, newVNode2, newCh, isInitialRender = false) => {
  let oldStartIdx = 0;
  let newStartIdx = 0;
  let idxInOld = 0;
  let i2 = 0;
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
      oldStartVnode = oldCh[++oldStartIdx];
    } else if (oldEndVnode == null) {
      oldEndVnode = oldCh[--oldEndIdx];
    } else if (newStartVnode == null) {
      newStartVnode = newCh[++newStartIdx];
    } else if (newEndVnode == null) {
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newStartVnode, isInitialRender)) {
      patch(oldStartVnode, newStartVnode, isInitialRender);
      oldStartVnode = oldCh[++oldStartIdx];
      newStartVnode = newCh[++newStartIdx];
    } else if (isSameVnode(oldEndVnode, newEndVnode, isInitialRender)) {
      patch(oldEndVnode, newEndVnode, isInitialRender);
      oldEndVnode = oldCh[--oldEndIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldStartVnode, newEndVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldStartVnode.$elm$.parentNode, false);
      }
      patch(oldStartVnode, newEndVnode, isInitialRender);
      insertBefore(parentElm, oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
      oldStartVnode = oldCh[++oldStartIdx];
      newEndVnode = newCh[--newEndIdx];
    } else if (isSameVnode(oldEndVnode, newStartVnode, isInitialRender)) {
      if ((oldStartVnode.$tag$ === "slot" || newEndVnode.$tag$ === "slot")) {
        putBackInOriginalLocation(oldEndVnode.$elm$.parentNode, false);
      }
      patch(oldEndVnode, newStartVnode, isInitialRender);
      insertBefore(parentElm, oldEndVnode.$elm$, oldStartVnode.$elm$);
      oldEndVnode = oldCh[--oldEndIdx];
      newStartVnode = newCh[++newStartIdx];
    } else {
      idxInOld = -1;
      {
        for (i2 = oldStartIdx; i2 <= oldEndIdx; ++i2) {
          if (oldCh[i2] && oldCh[i2].$key$ !== null && oldCh[i2].$key$ === newStartVnode.$key$) {
            idxInOld = i2;
            break;
          }
        }
      }
      if (idxInOld >= 0) {
        elmToMove = oldCh[idxInOld];
        if (elmToMove.$tag$ !== newStartVnode.$tag$) {
          node = createElm(oldCh && oldCh[newStartIdx], newVNode2, idxInOld, parentElm);
        } else {
          patch(elmToMove, newStartVnode, isInitialRender);
          oldCh[idxInOld] = void 0;
          node = elmToMove.$elm$;
        }
        newStartVnode = newCh[++newStartIdx];
      } else {
        node = createElm(oldCh && oldCh[newStartIdx], newVNode2, newStartIdx, parentElm);
        newStartVnode = newCh[++newStartIdx];
      }
      if (node) {
        {
          insertBefore(parentReferenceNode(oldStartVnode.$elm$), node, referenceNode(oldStartVnode.$elm$));
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVnodes(
      parentElm,
      newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$,
      newVNode2,
      newCh,
      newStartIdx,
      newEndIdx
    );
  } else if (newStartIdx > newEndIdx) {
    removeVnodes(oldCh, oldStartIdx, oldEndIdx);
  }
};
var isSameVnode = (leftVNode, rightVNode, isInitialRender = false) => {
  if (leftVNode.$tag$ === rightVNode.$tag$) {
    if (leftVNode.$tag$ === "slot") {
      return leftVNode.$name$ === rightVNode.$name$;
    }
    if (!isInitialRender) {
      return leftVNode.$key$ === rightVNode.$key$;
    }
    return true;
  }
  return false;
};
var referenceNode = (node) => {
  return node && node["s-ol"] || node;
};
var parentReferenceNode = (node) => (node["s-ol"] ? node["s-ol"] : node).parentNode;
var patch = (oldVNode, newVNode2, isInitialRender = false) => {
  const elm = newVNode2.$elm$ = oldVNode.$elm$;
  const oldChildren = oldVNode.$children$;
  const newChildren = newVNode2.$children$;
  const tag = newVNode2.$tag$;
  const text = newVNode2.$text$;
  let defaultHolder;
  if (text === null) {
    {
      isSvgMode = tag === "svg" ? true : tag === "foreignObject" ? false : isSvgMode;
    }
    {
      if (tag === "slot" && !useNativeShadowDom) {
        if (oldVNode.$name$ !== newVNode2.$name$) {
          newVNode2.$elm$["s-sn"] = newVNode2.$name$ || "";
          relocateToHostRoot(newVNode2.$elm$.parentElement);
        }
      } else {
        updateElement(oldVNode, newVNode2, isSvgMode);
      }
    }
    if (oldChildren !== null && newChildren !== null) {
      updateChildren(elm, oldChildren, newVNode2, newChildren, isInitialRender);
    } else if (newChildren !== null) {
      if (oldVNode.$text$ !== null) {
        elm.textContent = "";
      }
      addVnodes(elm, null, newVNode2, newChildren, 0, newChildren.length - 1);
    } else if (oldChildren !== null) {
      removeVnodes(oldChildren, 0, oldChildren.length - 1);
    }
    if (isSvgMode && tag === "svg") {
      isSvgMode = false;
    }
  } else if ((defaultHolder = elm["s-cr"])) {
    defaultHolder.parentNode.textContent = text;
  } else if (oldVNode.$text$ !== text) {
    elm.data = text;
  }
};
var updateFallbackSlotVisibility = (elm) => {
  const childNodes = elm.childNodes;
  for (const childNode of childNodes) {
    if (childNode.nodeType === 1 /* ElementNode */) {
      if (childNode["s-sr"]) {
        const slotName = childNode["s-sn"];
        childNode.hidden = false;
        for (const siblingNode of childNodes) {
          if (siblingNode !== childNode) {
            if (siblingNode["s-hn"] !== childNode["s-hn"] || slotName !== "") {
              if (siblingNode.nodeType === 1 /* ElementNode */ && (slotName === siblingNode.getAttribute("slot") || slotName === siblingNode["s-sn"]) || siblingNode.nodeType === 3 /* TextNode */ && slotName === siblingNode["s-sn"]) {
                childNode.hidden = true;
                break;
              }
            } else {
              if (siblingNode.nodeType === 1 /* ElementNode */ || siblingNode.nodeType === 3 /* TextNode */ && siblingNode.textContent.trim() !== "") {
                childNode.hidden = true;
                break;
              }
            }
          }
        }
      }
      updateFallbackSlotVisibility(childNode);
    }
  }
};
var relocateNodes = [];
var markSlotContentForRelocation = (elm) => {
  let node;
  let hostContentNodes;
  let j;
  for (const childNode of elm.childNodes) {
    if (childNode["s-sr"] && (node = childNode["s-cr"]) && node.parentNode) {
      hostContentNodes = node.parentNode.childNodes;
      const slotName = childNode["s-sn"];
      for (j = hostContentNodes.length - 1; j >= 0; j--) {
        node = hostContentNodes[j];
        if (!node["s-cn"] && !node["s-nr"] && node["s-hn"] !== childNode["s-hn"] && (!node["s-sh"] || node["s-sh"] !== childNode["s-hn"])) {
          if (isNodeLocatedInSlot(node, slotName)) {
            let relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
            checkSlotFallbackVisibility = true;
            node["s-sn"] = node["s-sn"] || slotName;
            if (relocateNodeData) {
              relocateNodeData.$nodeToRelocate$["s-sh"] = childNode["s-hn"];
              relocateNodeData.$slotRefNode$ = childNode;
            } else {
              node["s-sh"] = childNode["s-hn"];
              relocateNodes.push({
                $slotRefNode$: childNode,
                $nodeToRelocate$: node
              });
            }
            if (node["s-sr"]) {
              relocateNodes.map((relocateNode) => {
                if (isNodeLocatedInSlot(relocateNode.$nodeToRelocate$, node["s-sn"])) {
                  relocateNodeData = relocateNodes.find((r) => r.$nodeToRelocate$ === node);
                  if (relocateNodeData && !relocateNode.$slotRefNode$) {
                    relocateNode.$slotRefNode$ = relocateNodeData.$slotRefNode$;
                  }
                }
              });
            }
          } else if (!relocateNodes.some((r) => r.$nodeToRelocate$ === node)) {
            relocateNodes.push({
              $nodeToRelocate$: node
            });
          }
        }
      }
    }
    if (childNode.nodeType === 1 /* ElementNode */) {
      markSlotContentForRelocation(childNode);
    }
  }
};
var isNodeLocatedInSlot = (nodeToRelocate, slotName) => {
  if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
    if (nodeToRelocate.getAttribute("slot") === null && slotName === "") {
      return true;
    }
    if (nodeToRelocate.getAttribute("slot") === slotName) {
      return true;
    }
    return false;
  }
  if (nodeToRelocate["s-sn"] === slotName) {
    return true;
  }
  return slotName === "";
};
var nullifyVNodeRefs = (vNode) => {
  {
    vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
    vNode.$children$ && vNode.$children$.map(nullifyVNodeRefs);
  }
};
var insertBefore = (parent, newNode, reference) => {
  const inserted = parent == null ? void 0 : parent.insertBefore(newNode, reference);
  {
    updateElementScopeIds(newNode, parent);
  }
  return inserted;
};
var findScopeIds = (element) => {
  const scopeIds = [];
  if (element) {
    scopeIds.push(
      ...element["s-scs"] || [],
      element["s-si"],
      element["s-sc"],
      ...findScopeIds(element.parentElement)
    );
  }
  return scopeIds;
};
var updateElementScopeIds = (element, parent, iterateChildNodes = false) => {
  var _a;
  if (element && parent && element.nodeType === 1 /* ElementNode */) {
    const scopeIds = new Set(findScopeIds(parent).filter(Boolean));
    if (scopeIds.size) {
      (_a = element.classList) == null ? void 0 : _a.add(...element["s-scs"] = [...scopeIds]);
      if (element["s-ol"] || iterateChildNodes) {
        for (const childNode of Array.from(element.childNodes)) {
          updateElementScopeIds(childNode, element, true);
        }
      }
    }
  }
};
var renderVdom = (hostRef, renderFnResults, isInitialLoad = false) => {
  var _a, _b, _c, _d;
  const hostElm = hostRef.$hostElement$;
  const cmpMeta = hostRef.$cmpMeta$;
  const oldVNode = hostRef.$vnode$ || newVNode(null, null);
  const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
  hostTagName = hostElm.tagName;
  if (cmpMeta.$attrsToReflect$) {
    rootVnode.$attrs$ = rootVnode.$attrs$ || {};
    cmpMeta.$attrsToReflect$.map(
      ([propName, attribute]) => rootVnode.$attrs$[attribute] = hostElm[propName]
    );
  }
  if (isInitialLoad && rootVnode.$attrs$) {
    for (const key of Object.keys(rootVnode.$attrs$)) {
      if (hostElm.hasAttribute(key) && !["key", "ref", "style", "class"].includes(key)) {
        rootVnode.$attrs$[key] = hostElm[key];
      }
    }
  }
  rootVnode.$tag$ = null;
  rootVnode.$flags$ |= 4 /* isHost */;
  hostRef.$vnode$ = rootVnode;
  rootVnode.$elm$ = oldVNode.$elm$ = hostElm.shadowRoot || hostElm ;
  {
    scopeId = hostElm["s-sc"];
  }
  useNativeShadowDom = (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) !== 0;
  {
    contentRef = hostElm["s-cr"];
    checkSlotFallbackVisibility = false;
  }
  patch(oldVNode, rootVnode, isInitialLoad);
  {
    plt.$flags$ |= 1 /* isTmpDisconnected */;
    if (checkSlotRelocate) {
      markSlotContentForRelocation(rootVnode.$elm$);
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        if (!nodeToRelocate["s-ol"]) {
          const orgLocationNode = doc.createTextNode("");
          orgLocationNode["s-nr"] = nodeToRelocate;
          insertBefore(nodeToRelocate.parentNode, nodeToRelocate["s-ol"] = orgLocationNode, nodeToRelocate);
        }
      }
      for (const relocateData of relocateNodes) {
        const nodeToRelocate = relocateData.$nodeToRelocate$;
        const slotRefNode = relocateData.$slotRefNode$;
        if (slotRefNode) {
          const parentNodeRef = slotRefNode.parentNode;
          let insertBeforeNode = slotRefNode.nextSibling;
          if (insertBeforeNode && insertBeforeNode.nodeType === 1 /* ElementNode */) {
            let orgLocationNode = (_a = nodeToRelocate["s-ol"]) == null ? void 0 : _a.previousSibling;
            while (orgLocationNode) {
              let refNode = (_b = orgLocationNode["s-nr"]) != null ? _b : null;
              if (refNode && refNode["s-sn"] === nodeToRelocate["s-sn"] && parentNodeRef === refNode.parentNode) {
                refNode = refNode.nextSibling;
                while (refNode === nodeToRelocate || (refNode == null ? void 0 : refNode["s-sr"])) {
                  refNode = refNode == null ? void 0 : refNode.nextSibling;
                }
                if (!refNode || !refNode["s-nr"]) {
                  insertBeforeNode = refNode;
                  break;
                }
              }
              orgLocationNode = orgLocationNode.previousSibling;
            }
          }
          if (!insertBeforeNode && parentNodeRef !== nodeToRelocate.parentNode || nodeToRelocate.nextSibling !== insertBeforeNode) {
            if (nodeToRelocate !== insertBeforeNode) {
              insertBefore(parentNodeRef, nodeToRelocate, insertBeforeNode);
              if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
                nodeToRelocate.hidden = (_c = nodeToRelocate["s-ih"]) != null ? _c : false;
              }
            }
          }
          nodeToRelocate && typeof slotRefNode["s-rf"] === "function" && slotRefNode["s-rf"](nodeToRelocate);
        } else {
          if (nodeToRelocate.nodeType === 1 /* ElementNode */) {
            if (isInitialLoad) {
              nodeToRelocate["s-ih"] = (_d = nodeToRelocate.hidden) != null ? _d : false;
            }
            nodeToRelocate.hidden = true;
          }
        }
      }
    }
    if (checkSlotFallbackVisibility) {
      updateFallbackSlotVisibility(rootVnode.$elm$);
    }
    plt.$flags$ &= ~1 /* isTmpDisconnected */;
    relocateNodes.length = 0;
  }
  contentRef = void 0;
};

// src/runtime/update-component.ts
var attachToAncestor = (hostRef, ancestorComponent) => {
  if (ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent["s-p"]) {
    ancestorComponent["s-p"].push(new Promise((r) => hostRef.$onRenderResolve$ = r));
  }
};
var scheduleUpdate = (hostRef, isInitialLoad) => {
  {
    hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
  }
  if (hostRef.$flags$ & 4 /* isWaitingForChildren */) {
    hostRef.$flags$ |= 512 /* needsRerender */;
    return;
  }
  attachToAncestor(hostRef, hostRef.$ancestorComponent$);
  const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
  return writeTask(dispatch) ;
};
var dispatchHooks = (hostRef, isInitialLoad) => {
  const elm = hostRef.$hostElement$;
  const endSchedule = createTime("scheduleUpdate", hostRef.$cmpMeta$.$tagName$);
  const instance = hostRef.$lazyInstance$ ;
  if (!instance) {
    throw new Error(
      `Can't render component <${elm.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`
    );
  }
  let maybePromise;
  if (isInitialLoad) {
    {
      hostRef.$flags$ |= 256 /* isListenReady */;
      if (hostRef.$queuedListeners$) {
        hostRef.$queuedListeners$.map(([methodName, event]) => safeCall(instance, methodName, event));
        hostRef.$queuedListeners$ = void 0;
      }
    }
    {
      maybePromise = safeCall(instance, "componentWillLoad");
    }
  } else {
    {
      maybePromise = safeCall(instance, "componentWillUpdate");
    }
  }
  {
    maybePromise = enqueue(maybePromise, () => safeCall(instance, "componentWillRender"));
  }
  endSchedule();
  return enqueue(maybePromise, () => updateComponent(hostRef, instance, isInitialLoad));
};
var enqueue = (maybePromise, fn) => isPromisey(maybePromise) ? maybePromise.then(fn) : fn();
var isPromisey = (maybePromise) => maybePromise instanceof Promise || maybePromise && maybePromise.then && typeof maybePromise.then === "function";
var updateComponent = async (hostRef, instance, isInitialLoad) => {
  var _a;
  const elm = hostRef.$hostElement$;
  const endUpdate = createTime("update", hostRef.$cmpMeta$.$tagName$);
  const rc = elm["s-rc"];
  if (isInitialLoad) {
    attachStyles(hostRef);
  }
  const endRender = createTime("render", hostRef.$cmpMeta$.$tagName$);
  {
    callRender(hostRef, instance, elm, isInitialLoad);
  }
  if (rc) {
    rc.map((cb) => cb());
    elm["s-rc"] = void 0;
  }
  endRender();
  endUpdate();
  {
    const childrenPromises = (_a = elm["s-p"]) != null ? _a : [];
    const postUpdate = () => postUpdateComponent(hostRef);
    if (childrenPromises.length === 0) {
      postUpdate();
    } else {
      Promise.all(childrenPromises).then(postUpdate);
      hostRef.$flags$ |= 4 /* isWaitingForChildren */;
      childrenPromises.length = 0;
    }
  }
};
var callRender = (hostRef, instance, elm, isInitialLoad) => {
  try {
    instance = instance.render() ;
    {
      hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
    }
    {
      hostRef.$flags$ |= 2 /* hasRendered */;
    }
    {
      {
        {
          renderVdom(hostRef, instance, isInitialLoad);
        }
      }
    }
  } catch (e) {
    consoleError(e, hostRef.$hostElement$);
  }
  return null;
};
var postUpdateComponent = (hostRef) => {
  const tagName = hostRef.$cmpMeta$.$tagName$;
  const elm = hostRef.$hostElement$;
  const endPostUpdate = createTime("postUpdate", tagName);
  const instance = hostRef.$lazyInstance$ ;
  const ancestorComponent = hostRef.$ancestorComponent$;
  {
    safeCall(instance, "componentDidRender");
  }
  if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
    hostRef.$flags$ |= 64 /* hasLoadedComponent */;
    {
      addHydratedFlag(elm);
    }
    {
      safeCall(instance, "componentDidLoad");
    }
    endPostUpdate();
    {
      hostRef.$onReadyResolve$(elm);
      if (!ancestorComponent) {
        appDidLoad();
      }
    }
  } else {
    {
      safeCall(instance, "componentDidUpdate");
    }
    endPostUpdate();
  }
  {
    hostRef.$onInstanceResolve$(elm);
  }
  {
    if (hostRef.$onRenderResolve$) {
      hostRef.$onRenderResolve$();
      hostRef.$onRenderResolve$ = void 0;
    }
    if (hostRef.$flags$ & 512 /* needsRerender */) {
      nextTick(() => scheduleUpdate(hostRef, false));
    }
    hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
  }
};
var appDidLoad = (who) => {
  {
    addHydratedFlag(doc.documentElement);
  }
  nextTick(() => emitEvent(win, "appload", { detail: { namespace: NAMESPACE } }));
};
var safeCall = (instance, method, arg) => {
  if (instance && instance[method]) {
    try {
      return instance[method](arg);
    } catch (e) {
      consoleError(e);
    }
  }
  return void 0;
};
var addHydratedFlag = (elm) => {
  var _a;
  return elm.classList.add((_a = BUILD.hydratedSelectorName) != null ? _a : "hydrated") ;
};

// src/runtime/set-value.ts
var getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
var setValue = (ref, propName, newVal, cmpMeta) => {
  const hostRef = getHostRef(ref);
  if (!hostRef) {
    throw new Error(
      `Couldn't find host element for "${cmpMeta.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`
    );
  }
  const elm = hostRef.$hostElement$ ;
  const oldVal = hostRef.$instanceValues$.get(propName);
  const flags = hostRef.$flags$;
  const instance = hostRef.$lazyInstance$ ;
  newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
  const areBothNaN = Number.isNaN(oldVal) && Number.isNaN(newVal);
  const didValueChange = newVal !== oldVal && !areBothNaN;
  if ((!(flags & 8 /* isConstructingInstance */) || oldVal === void 0) && didValueChange) {
    hostRef.$instanceValues$.set(propName, newVal);
    if (instance) {
      if (cmpMeta.$watchers$ && flags & 128 /* isWatchReady */) {
        const watchMethods = cmpMeta.$watchers$[propName];
        if (watchMethods) {
          watchMethods.map((watchMethodName) => {
            try {
              instance[watchMethodName](newVal, oldVal, propName);
            } catch (e) {
              consoleError(e, elm);
            }
          });
        }
      }
      if ((flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
        scheduleUpdate(hostRef, false);
      }
    }
  }
};

// src/runtime/proxy-component.ts
var proxyComponent = (Cstr, cmpMeta, flags) => {
  var _a;
  const prototype = Cstr.prototype;
  if (cmpMeta.$members$) {
    if (Cstr.watchers) {
      cmpMeta.$watchers$ = Cstr.watchers;
    }
    const members = Object.entries(cmpMeta.$members$);
    members.map(([memberName, [memberFlags]]) => {
      if ((memberFlags & 31 /* Prop */ || (flags & 2 /* proxyState */) && memberFlags & 32 /* State */)) {
        Object.defineProperty(prototype, memberName, {
          get() {
            return getValue(this, memberName);
          },
          set(newValue) {
            setValue(this, memberName, newValue, cmpMeta);
          },
          configurable: true,
          enumerable: true
        });
      } else if (flags & 1 /* isElementConstructor */ && memberFlags & 64 /* Method */) {
        Object.defineProperty(prototype, memberName, {
          value(...args) {
            var _a2;
            const ref = getHostRef(this);
            return (_a2 = ref == null ? void 0 : ref.$onInstancePromise$) == null ? void 0 : _a2.then(() => {
              var _a3;
              return (_a3 = ref.$lazyInstance$) == null ? void 0 : _a3[memberName](...args);
            });
          }
        });
      }
    });
    if ((flags & 1 /* isElementConstructor */)) {
      const attrNameToPropName = /* @__PURE__ */ new Map();
      prototype.attributeChangedCallback = function(attrName, oldValue, newValue) {
        plt.jmp(() => {
          var _a2;
          const propName = attrNameToPropName.get(attrName);
          if (this.hasOwnProperty(propName)) {
            newValue = this[propName];
            delete this[propName];
          } else if (prototype.hasOwnProperty(propName) && typeof this[propName] === "number" && this[propName] == newValue) {
            return;
          } else if (propName == null) {
            const hostRef = getHostRef(this);
            const flags2 = hostRef == null ? void 0 : hostRef.$flags$;
            if (flags2 && !(flags2 & 8 /* isConstructingInstance */) && flags2 & 128 /* isWatchReady */ && newValue !== oldValue) {
              const instance = hostRef.$lazyInstance$ ;
              const entry = (_a2 = cmpMeta.$watchers$) == null ? void 0 : _a2[attrName];
              entry == null ? void 0 : entry.forEach((callbackName) => {
                if (instance[callbackName] != null) {
                  instance[callbackName].call(instance, newValue, oldValue, attrName);
                }
              });
            }
            return;
          }
          this[propName] = newValue === null && typeof this[propName] === "boolean" ? false : newValue;
        });
      };
      Cstr.observedAttributes = Array.from(
        /* @__PURE__ */ new Set([
          ...Object.keys((_a = cmpMeta.$watchers$) != null ? _a : {}),
          ...members.filter(([_, m]) => m[0] & 15 /* HasAttribute */).map(([propName, m]) => {
            var _a2;
            const attrName = m[1] || propName;
            attrNameToPropName.set(attrName, propName);
            if (m[0] & 512 /* ReflectAttr */) {
              (_a2 = cmpMeta.$attrsToReflect$) == null ? void 0 : _a2.push([propName, attrName]);
            }
            return attrName;
          })
        ])
      );
    }
  }
  return Cstr;
};

// src/runtime/initialize-component.ts
var initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId) => {
  let Cstr;
  if ((hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
    hostRef.$flags$ |= 32 /* hasInitializedComponent */;
    const bundleId = cmpMeta.$lazyBundleId$;
    if (bundleId) {
      const CstrImport = loadModule(cmpMeta);
      if (CstrImport && "then" in CstrImport) {
        const endLoad = uniqueTime();
        Cstr = await CstrImport;
        endLoad();
      } else {
        Cstr = CstrImport;
      }
      if (!Cstr) {
        throw new Error(`Constructor for "${cmpMeta.$tagName$}#${hostRef.$modeName$}" was not found`);
      }
      if (!Cstr.isProxied) {
        {
          cmpMeta.$watchers$ = Cstr.watchers;
        }
        proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
        Cstr.isProxied = true;
      }
      const endNewInstance = createTime("createInstance", cmpMeta.$tagName$);
      {
        hostRef.$flags$ |= 8 /* isConstructingInstance */;
      }
      try {
        new Cstr(hostRef);
      } catch (e) {
        consoleError(e);
      }
      {
        hostRef.$flags$ &= ~8 /* isConstructingInstance */;
      }
      {
        hostRef.$flags$ |= 128 /* isWatchReady */;
      }
      endNewInstance();
      fireConnectedCallback(hostRef.$lazyInstance$);
    } else {
      Cstr = elm.constructor;
      const cmpTag = elm.localName;
      customElements.whenDefined(cmpTag).then(() => hostRef.$flags$ |= 128 /* isWatchReady */);
    }
    if (Cstr && Cstr.style) {
      let style = Cstr.style;
      const scopeId2 = getScopeId(cmpMeta);
      if (!styles.has(scopeId2)) {
        const endRegisterStyles = createTime("registerStyles", cmpMeta.$tagName$);
        registerStyle(scopeId2, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
        endRegisterStyles();
      }
    }
  }
  const ancestorComponent = hostRef.$ancestorComponent$;
  const schedule = () => scheduleUpdate(hostRef, true);
  if (ancestorComponent && ancestorComponent["s-rc"]) {
    ancestorComponent["s-rc"].push(schedule);
  } else {
    schedule();
  }
};
var fireConnectedCallback = (instance) => {
  {
    safeCall(instance, "connectedCallback");
  }
};

// src/runtime/connected-callback.ts
var connectedCallback = (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    const cmpMeta = hostRef.$cmpMeta$;
    const endConnected = createTime("connectedCallback", cmpMeta.$tagName$);
    if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
      hostRef.$flags$ |= 1 /* hasConnected */;
      {
        if (// TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
        cmpMeta.$flags$ & (4 /* hasSlotRelocation */ | 8 /* needsShadowDomShim */)) {
          setContentReference(elm);
        }
      }
      {
        let ancestorComponent = elm;
        while (ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host) {
          if (ancestorComponent["s-p"]) {
            attachToAncestor(hostRef, hostRef.$ancestorComponent$ = ancestorComponent);
            break;
          }
        }
      }
      if (cmpMeta.$members$) {
        Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
          if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
            const value = elm[memberName];
            delete elm[memberName];
            elm[memberName] = value;
          }
        });
      }
      {
        initializeComponent(elm, hostRef, cmpMeta);
      }
    } else {
      addHostEventListeners(elm, hostRef, cmpMeta.$listeners$);
      if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
        fireConnectedCallback(hostRef.$lazyInstance$);
      } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
        hostRef.$onReadyPromise$.then(() => fireConnectedCallback(hostRef.$lazyInstance$));
      }
    }
    endConnected();
  }
};
var setContentReference = (elm) => {
  const contentRefElm = elm["s-cr"] = doc.createComment(
    ""
  );
  contentRefElm["s-cn"] = true;
  insertBefore(elm, contentRefElm, elm.firstChild);
};
var disconnectInstance = (instance) => {
  {
    safeCall(instance, "disconnectedCallback");
  }
};
var disconnectedCallback = async (elm) => {
  if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
    const hostRef = getHostRef(elm);
    {
      if (hostRef.$rmListeners$) {
        hostRef.$rmListeners$.map((rmListener) => rmListener());
        hostRef.$rmListeners$ = void 0;
      }
    }
    if (hostRef == null ? void 0 : hostRef.$lazyInstance$) {
      disconnectInstance(hostRef.$lazyInstance$);
    } else if (hostRef == null ? void 0 : hostRef.$onReadyPromise$) {
      hostRef.$onReadyPromise$.then(() => disconnectInstance(hostRef.$lazyInstance$));
    }
  }
};
var patchPseudoShadowDom = (hostElementPrototype, descriptorPrototype) => {
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
var patchCloneNode = (HostElementPrototype) => {
  const orgCloneNode = HostElementPrototype.cloneNode;
  HostElementPrototype.cloneNode = function(deep) {
    const srcNode = this;
    const isShadowDom = srcNode.shadowRoot && supportsShadow ;
    const clonedNode = orgCloneNode.call(srcNode, isShadowDom ? deep : false);
    if (!isShadowDom && deep) {
      let i2 = 0;
      let slotted, nonStencilNode;
      const stencilPrivates = [
        "s-id",
        "s-cr",
        "s-lr",
        "s-rc",
        "s-sc",
        "s-p",
        "s-cn",
        "s-sr",
        "s-sn",
        "s-hn",
        "s-ol",
        "s-nr",
        "s-si",
        "s-rf",
        "s-scs"
      ];
      for (; i2 < srcNode.childNodes.length; i2++) {
        slotted = srcNode.childNodes[i2]["s-nr"];
        nonStencilNode = stencilPrivates.every((privateField) => !srcNode.childNodes[i2][privateField]);
        if (slotted) {
          if (clonedNode.__appendChild) {
            clonedNode.__appendChild(slotted.cloneNode(true));
          } else {
            clonedNode.appendChild(slotted.cloneNode(true));
          }
        }
        if (nonStencilNode) {
          clonedNode.appendChild(srcNode.childNodes[i2].cloneNode(true));
        }
      }
    }
    return clonedNode;
  };
};
var patchSlotAppendChild = (HostElementPrototype) => {
  HostElementPrototype.__appendChild = HostElementPrototype.appendChild;
  HostElementPrototype.appendChild = function(newChild) {
    const slotName = newChild["s-sn"] = getSlotName(newChild);
    const slotNode = getHostSlotNode(this.childNodes, slotName, this.tagName);
    if (slotNode) {
      const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
      const appendAfter = slotChildNodes[slotChildNodes.length - 1];
      const insertedNode = insertBefore(appendAfter.parentNode, newChild, appendAfter.nextSibling);
      updateFallbackSlotVisibility(this);
      return insertedNode;
    }
    return this.__appendChild(newChild);
  };
};
var patchSlotRemoveChild = (ElementPrototype) => {
  ElementPrototype.__removeChild = ElementPrototype.removeChild;
  ElementPrototype.removeChild = function(toRemove) {
    if (toRemove && typeof toRemove["s-sn"] !== "undefined") {
      const slotNode = getHostSlotNode(this.childNodes, toRemove["s-sn"], this.tagName);
      if (slotNode) {
        const slotChildNodes = getHostSlotChildNodes(slotNode, toRemove["s-sn"]);
        const existingNode = slotChildNodes.find((n) => n === toRemove);
        if (existingNode) {
          existingNode.remove();
          updateFallbackSlotVisibility(this);
          return;
        }
      }
    }
    return this.__removeChild(toRemove);
  };
};
var patchSlotPrepend = (HostElementPrototype) => {
  const originalPrepend = HostElementPrototype.prepend;
  HostElementPrototype.prepend = function(...newChildren) {
    newChildren.forEach((newChild) => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      const slotName = newChild["s-sn"] = getSlotName(newChild);
      const slotNode = getHostSlotNode(this.childNodes, slotName, this.tagName);
      if (slotNode) {
        const slotPlaceholder = document.createTextNode("");
        slotPlaceholder["s-nr"] = newChild;
        slotNode["s-cr"].parentNode.__appendChild(slotPlaceholder);
        newChild["s-ol"] = slotPlaceholder;
        const slotChildNodes = getHostSlotChildNodes(slotNode, slotName);
        const appendAfter = slotChildNodes[0];
        return insertBefore(appendAfter.parentNode, newChild, appendAfter.nextSibling);
      }
      if (newChild.nodeType === 1 && !!newChild.getAttribute("slot")) {
        newChild.hidden = true;
      }
      return originalPrepend.call(this, newChild);
    });
  };
};
var patchSlotAppend = (HostElementPrototype) => {
  HostElementPrototype.append = function(...newChildren) {
    newChildren.forEach((newChild) => {
      if (typeof newChild === "string") {
        newChild = this.ownerDocument.createTextNode(newChild);
      }
      this.appendChild(newChild);
    });
  };
};
var patchSlotInsertAdjacentHTML = (HostElementPrototype) => {
  const originalInsertAdjacentHtml = HostElementPrototype.insertAdjacentHTML;
  HostElementPrototype.insertAdjacentHTML = function(position, text) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentHtml.call(this, position, text);
    }
    const container = this.ownerDocument.createElement("_");
    let node;
    container.innerHTML = text;
    if (position === "afterbegin") {
      while (node = container.firstChild) {
        this.prepend(node);
      }
    } else if (position === "beforeend") {
      while (node = container.firstChild) {
        this.append(node);
      }
    }
  };
};
var patchSlotInsertAdjacentText = (HostElementPrototype) => {
  HostElementPrototype.insertAdjacentText = function(position, text) {
    this.insertAdjacentHTML(position, text);
  };
};
var patchSlotInsertAdjacentElement = (HostElementPrototype) => {
  const originalInsertAdjacentElement = HostElementPrototype.insertAdjacentElement;
  HostElementPrototype.insertAdjacentElement = function(position, element) {
    if (position !== "afterbegin" && position !== "beforeend") {
      return originalInsertAdjacentElement.call(this, position, element);
    }
    if (position === "afterbegin") {
      this.prepend(element);
      return element;
    } else if (position === "beforeend") {
      this.append(element);
      return element;
    }
    return element;
  };
};
var patchTextContent = (hostElementPrototype) => {
  const descriptor = Object.getOwnPropertyDescriptor(Node.prototype, "textContent");
  Object.defineProperty(hostElementPrototype, "__textContent", descriptor);
  {
    Object.defineProperty(hostElementPrototype, "textContent", {
      get() {
        var _a;
        const slotNode = getHostSlotNode(this.childNodes, "", this.tagName);
        if (((_a = slotNode == null ? void 0 : slotNode.nextSibling) == null ? void 0 : _a.nodeType) === 3 /* TEXT_NODE */) {
          return slotNode.nextSibling.textContent;
        } else if (slotNode) {
          return slotNode.textContent;
        } else {
          return this.__textContent;
        }
      },
      set(value) {
        var _a;
        const slotNode = getHostSlotNode(this.childNodes, "", this.tagName);
        if (((_a = slotNode == null ? void 0 : slotNode.nextSibling) == null ? void 0 : _a.nodeType) === 3 /* TEXT_NODE */) {
          slotNode.nextSibling.textContent = value;
        } else if (slotNode) {
          slotNode.textContent = value;
        } else {
          this.__textContent = value;
          const contentRefElm = this["s-cr"];
          if (contentRefElm) {
            insertBefore(this, contentRefElm, this.firstChild);
          }
        }
      }
    });
  }
};
var patchChildSlotNodes = (elm, cmpMeta) => {
  class FakeNodeList extends Array {
    item(n) {
      return this[n];
    }
  }
  if (cmpMeta.$flags$ & 8 /* needsShadowDomShim */) {
    const childNodesFn = elm.__lookupGetter__("childNodes");
    Object.defineProperty(elm, "children", {
      get() {
        return this.childNodes.map((n) => n.nodeType === 1);
      }
    });
    Object.defineProperty(elm, "childElementCount", {
      get() {
        return elm.children.length;
      }
    });
    Object.defineProperty(elm, "childNodes", {
      get() {
        const childNodes = childNodesFn.call(this);
        if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0 && getHostRef(this).$flags$ & 2 /* hasRendered */) {
          const result = new FakeNodeList();
          for (let i2 = 0; i2 < childNodes.length; i2++) {
            const slot = childNodes[i2]["s-nr"];
            if (slot) {
              result.push(slot);
            }
          }
          return result;
        }
        return FakeNodeList.from(childNodes);
      }
    });
  }
};
var getSlotName = (node) => node["s-sn"] || node.nodeType === 1 && node.getAttribute("slot") || "";
var getHostSlotNode = (childNodes, slotName, hostName) => {
  let i2 = 0;
  let childNode;
  for (; i2 < childNodes.length; i2++) {
    childNode = childNodes[i2];
    if (childNode["s-sr"] && childNode["s-sn"] === slotName && childNode["s-hn"] === hostName) {
      return childNode;
    }
    childNode = getHostSlotNode(childNode.childNodes, slotName, hostName);
    if (childNode) {
      return childNode;
    }
  }
  return null;
};
var getHostSlotChildNodes = (n, slotName) => {
  const childNodes = [n];
  while ((n = n.nextSibling) && n["s-sn"] === slotName) {
    childNodes.push(n);
  }
  return childNodes;
};

// src/runtime/bootstrap-lazy.ts
var bootstrapLazy = (lazyBundles, options = {}) => {
  var _a;
  const endBootstrap = createTime();
  const cmpTags = [];
  const exclude = options.exclude || [];
  const customElements2 = win.customElements;
  const head = doc.head;
  const metaCharset = /* @__PURE__ */ head.querySelector("meta[charset]");
  const dataStyles = /* @__PURE__ */ doc.createElement("style");
  const deferredConnectedCallbacks = [];
  let appLoadFallback;
  let isBootstrapping = true;
  Object.assign(plt, options);
  plt.$resourcesUrl$ = new URL(options.resourcesUrl || "./", doc.baseURI).href;
  let hasSlotRelocation = false;
  lazyBundles.map((lazyBundle) => {
    lazyBundle[1].map((compactMeta) => {
      var _a2;
      const cmpMeta = {
        $flags$: compactMeta[0],
        $tagName$: compactMeta[1],
        $members$: compactMeta[2],
        $listeners$: compactMeta[3]
      };
      if (cmpMeta.$flags$ & 4 /* hasSlotRelocation */) {
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
        cmpMeta.$watchers$ = (_a2 = compactMeta[4]) != null ? _a2 : {};
      }
      const tagName = cmpMeta.$tagName$;
      const HostElement = class extends HTMLElement {
        // StencilLazyHost
        constructor(self) {
          super(self);
          self = this;
          registerHost(self, cmpMeta);
          if (cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */) {
            {
              {
                self.attachShadow({ mode: "open" });
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
            deferredConnectedCallbacks.push(this);
          } else {
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
      {
        if (cmpMeta.$flags$ & 2 /* scopedCssEncapsulation */) {
          patchPseudoShadowDom(HostElement.prototype, cmpMeta);
        }
      }
      cmpMeta.$lazyBundleId$ = lazyBundle[0];
      if (!exclude.includes(tagName) && !customElements2.get(tagName)) {
        cmpTags.push(tagName);
        customElements2.define(
          tagName,
          proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */)
        );
      }
    });
  });
  if (cmpTags.length > 0) {
    if (hasSlotRelocation) {
      dataStyles.textContent += SLOT_FB_CSS;
    }
    {
      dataStyles.textContent += cmpTags + HYDRATED_CSS;
    }
    if (dataStyles.innerHTML.length) {
      dataStyles.setAttribute("data-styles", "");
      const nonce = (_a = plt.$nonce$) != null ? _a : queryNonceMetaTagContent(doc);
      if (nonce != null) {
        dataStyles.setAttribute("nonce", nonce);
      }
      head.insertBefore(dataStyles, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
  }
  isBootstrapping = false;
  if (deferredConnectedCallbacks.length) {
    deferredConnectedCallbacks.map((host) => host.connectedCallback());
  } else {
    {
      plt.jmp(() => appLoadFallback = setTimeout(appDidLoad, 30));
    }
  }
  endBootstrap();
};
var addHostEventListeners = (elm, hostRef, listeners, attachParentListeners) => {
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
var hostListenerProxy = (hostRef, methodName) => (ev) => {
  var _a;
  try {
    {
      if (hostRef.$flags$ & 256 /* isListenReady */) {
        (_a = hostRef.$lazyInstance$) == null ? void 0 : _a[methodName](ev);
      } else {
        (hostRef.$queuedListeners$ = hostRef.$queuedListeners$ || []).push([methodName, ev]);
      }
    }
  } catch (e) {
    consoleError(e);
  }
};
var getHostListenerTarget = (elm, flags) => {
  if (flags & 4 /* TargetDocument */) return doc;
  if (flags & 8 /* TargetWindow */) return win;
  if (flags & 16 /* TargetBody */) return doc.body;
  return elm;
};
var hostListenerOpts = (flags) => supportsListenerOptions ? {
  passive: (flags & 1 /* Passive */) !== 0,
  capture: (flags & 2 /* Capture */) !== 0
} : (flags & 2 /* Capture */) !== 0;

// src/runtime/nonce.ts
var setNonce = (nonce) => plt.$nonce$ = nonce;

// src/client/client-host-ref.ts
var hostRefs = /* @__PURE__ */ new WeakMap();
var getHostRef = (ref) => hostRefs.get(ref);
var registerInstance = (lazyInstance, hostRef) => hostRefs.set(hostRef.$lazyInstance$ = lazyInstance, hostRef);
var registerHost = (hostElement, cmpMeta) => {
  const hostRef = {
    $flags$: 0,
    $hostElement$: hostElement,
    $cmpMeta$: cmpMeta,
    $instanceValues$: /* @__PURE__ */ new Map()
  };
  {
    hostRef.$onInstancePromise$ = new Promise((r) => hostRef.$onInstanceResolve$ = r);
  }
  {
    hostRef.$onReadyPromise$ = new Promise((r) => hostRef.$onReadyResolve$ = r);
    hostElement["s-p"] = [];
    hostElement["s-rc"] = [];
  }
  addHostEventListeners(hostElement, hostRef, cmpMeta.$listeners$);
  return hostRefs.set(hostElement, hostRef);
};
var isMemberInElement = (elm, memberName) => memberName in elm;
var consoleError = (e, el) => (0, console.error)(e, el);

// src/client/client-load-module.ts
var cmpModules = /* @__PURE__ */ new Map();
var loadModule = (cmpMeta, hostRef, hmrVersionId) => {
  const exportName = cmpMeta.$tagName$.replace(/-/g, "_");
  const bundleId = cmpMeta.$lazyBundleId$;
  if (!bundleId) {
    return void 0;
  }
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
    `./${bundleId}.entry.js${""}`
  )); }).then((importedModule) => {
    {
      cmpModules.set(bundleId, importedModule);
    }
    return importedModule[exportName];
  }, consoleError);
};

// src/client/client-style.ts
var styles = /* @__PURE__ */ new Map();
var win = typeof window !== "undefined" ? window : {};
var doc = win.document || { head: {} };
var H = win.HTMLElement || class {
};
var plt = {
  $flags$: 0,
  $resourcesUrl$: "",
  jmp: (h2) => h2(),
  raf: (h2) => requestAnimationFrame(h2),
  ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
  rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
  ce: (eventName, opts) => new CustomEvent(eventName, opts)
};
var supportsShadow = (
  // TODO(STENCIL-854): Remove code related to legacy shadowDomShim field
  true
);
var supportsListenerOptions = /* @__PURE__ */ (() => {
  let supportsListenerOptions2 = false;
  try {
    doc.addEventListener(
      "e",
      null,
      Object.defineProperty({}, "passive", {
        get() {
          supportsListenerOptions2 = true;
        }
      })
    );
  } catch (e) {
  }
  return supportsListenerOptions2;
})();
var promiseResolve = (v) => Promise.resolve(v);
var supportsConstructableStylesheets = /* @__PURE__ */ (() => {
  try {
    new CSSStyleSheet();
    return typeof new CSSStyleSheet().replaceSync === "function";
  } catch (e) {
  }
  return false;
})() ;
var queuePending = false;
var queueDomReads = [];
var queueDomWrites = [];
var queueTask = (queue, write) => (cb) => {
  queue.push(cb);
  if (!queuePending) {
    queuePending = true;
    if (write && plt.$flags$ & 4 /* queueSync */) {
      nextTick(flush);
    } else {
      plt.raf(flush);
    }
  }
};
var consume = (queue) => {
  for (let i2 = 0; i2 < queue.length; i2++) {
    try {
      queue[i2](performance.now());
    } catch (e) {
      consoleError(e);
    }
  }
  queue.length = 0;
};
var flush = () => {
  consume(queueDomReads);
  {
    consume(queueDomWrites);
    if (queuePending = queueDomReads.length > 0) {
      plt.raf(flush);
    }
  }
};
var nextTick = (cb) => promiseResolve().then(cb);
var writeTask = /* @__PURE__ */ queueTask(queueDomWrites, true);

exports.H = H;
exports.Host = Host;
exports.bootstrapLazy = bootstrapLazy;
exports.createEvent = createEvent;
exports.getElement = getElement;
exports.h = h;
exports.promiseResolve = promiseResolve;
exports.registerInstance = registerInstance;
exports.setNonce = setNonce;

//# sourceMappingURL=index-5dc4a8de.js.map