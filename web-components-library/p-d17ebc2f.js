let e,t,n,l=!1,o=!1,s=!1,i=!1,r=!1;const c="http://www.w3.org/1999/xlink",f={},a=e=>"object"==(e=typeof e)||"function"===e,u=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,r=!1;const c=[],f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!a(l))&&(l+=""),i&&r?c[c.length-1].t+=l:c.push(i?d(null,l):l),r=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}const u=d(e,null);return u.l=t,c.length>0&&(u.o=c),u.i=o,u.u=s,u},d=(e,t)=>({$:0,p:e,t,h:null,o:null,l:null,i:null,u:null}),$={},p=e=>Z(e).m,h=(e,t,n)=>{const l=p(e);return{emit:e=>m(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},m=(e,t,n)=>{const l=fe.ce(t,n);return e.dispatchEvent(l),l},b=new WeakMap,y=e=>"sc-"+e.g,w=(e,t,n,l,o,s)=>{if(n!==l){let i=ne(e,t),r=t.toLowerCase();if("class"===t){const t=e.classList,o=v(n),s=v(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const f=a(l);if((i||f&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let u=!1;r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,u=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(u?e.removeAttributeNS(c,t):e.removeAttribute(t)):(!i||4&s||o)&&!f&&(l=!0===l?"":l,u?e.setAttributeNS(c,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ne(re,r)?r.slice(2):r[2]+t.slice(3),n&&fe.rel(e,t,n,!1),l&&fe.ael(e,t,l,!1)}},g=/\s/,v=e=>e?e.split(g):[],k=(e,t,n,l)=>{const o=11===t.h.nodeType&&t.h.host?t.h.host:t.h,s=e&&e.l||f,i=t.l||f;for(l in s)l in i||w(o,l,s[l],void 0,n,t.$);for(l in i)w(o,l,s[l],i[l],n,t.$)},j=(o,r,c,f)=>{const a=r.o[c];let u,d,$,p=0;if(l||(s=!0,"slot"===a.p&&(e&&f.classList.add(e+"-s"),a.$|=a.o?2:1)),null!==a.t)u=a.h=ce.createTextNode(a.t);else if(1&a.$)u=a.h=ce.createTextNode("");else{if(i||(i="svg"===a.p),u=a.h=ce.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&a.$?"slot-fb":a.p),i&&"foreignObject"===a.p&&(i=!1),k(null,a,i),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),a.o)for(p=0;p<a.o.length;++p)d=j(o,a,p,u),d&&u.appendChild(d);"svg"===a.p?i=!1:"foreignObject"===u.tagName&&(i=!0)}return u["s-hn"]=n,3&a.$&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=a.u||"",$=o&&o.o&&o.o[c],$&&$.p===a.p&&o.h&&S(o.h,!1)),u},S=(e,t)=>{fe.$|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(x(o).insertBefore(o,R(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&S(o,t)}fe.$&=-2},O=(e,t,l,o,s,i)=>{let r,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&c.tagName===n&&(c=c.shadowRoot);s<=i;++s)o[s]&&(r=j(null,l,s,e),r&&(o[s].h=r,c.insertBefore(r,R(t))))},M=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.h,U(l),o=!0,s["s-ol"]?s["s-ol"].remove():S(s,!0),s.remove())},C=(e,t)=>e.p===t.p&&("slot"===e.p?e.u===t.u:e.i===t.i),R=e=>e&&e["s-ol"]||e,x=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,P=(e,t)=>{const n=t.h=e.h,l=e.o,o=t.o,s=t.p,r=t.t;let c;null===r?(i="svg"===s||"foreignObject"!==s&&i,"slot"===s||k(e,t,i),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,r=0,c=0,f=0,a=t.length-1,u=t[0],d=t[a],$=l.length-1,p=l[0],h=l[$];for(;i<=a&&r<=$;)if(null==u)u=t[++i];else if(null==d)d=t[--a];else if(null==p)p=l[++r];else if(null==h)h=l[--$];else if(C(u,p))P(u,p),u=t[++i],p=l[++r];else if(C(d,h))P(d,h),d=t[--a],h=l[--$];else if(C(u,h))"slot"!==u.p&&"slot"!==h.p||S(u.h.parentNode,!1),P(u,h),e.insertBefore(u.h,d.h.nextSibling),u=t[++i],h=l[--$];else if(C(d,p))"slot"!==u.p&&"slot"!==h.p||S(d.h.parentNode,!1),P(d,p),e.insertBefore(d.h,u.h),d=t[--a],p=l[++r];else{for(c=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].i&&t[f].i===p.i){c=f;break}c>=0?(s=t[c],s.p!==p.p?o=j(t&&t[r],n,c,e):(P(s,p),t[c]=void 0,o=s.h),p=l[++r]):(o=j(t&&t[r],n,r,e),p=l[++r]),o&&x(u.h).insertBefore(o,R(u.h))}i>a?O(e,null==l[$+1]?null:l[$+1].h,n,l,r,$):r>$&&M(t,i,a)})(n,l,t,o):null!==o?(null!==e.t&&(n.textContent=""),O(n,null,t,o,0,o.length-1)):null!==l&&M(l,0,l.length-1),i&&"svg"===s&&(i=!1)):(c=n["s-cr"])?c.parentNode.textContent=r:e.t!==r&&(n.data=r)},T=e=>{const t=e.childNodes;let n,l,o,s,i,r;for(l=0,o=t.length;l<o;l++)if(n=t[l],1===n.nodeType){if(n["s-sr"])for(i=n["s-sn"],n.hidden=!1,s=0;s<o;s++)if(r=t[s].nodeType,t[s]["s-hn"]!==n["s-hn"]||""!==i){if(1===r&&i===t[s].getAttribute("slot")){n.hidden=!0;break}}else if(1===r||3===r&&""!==t[s].textContent.trim()){n.hidden=!0;break}T(n)}},W=[],L=e=>{let t,n,l,s,i,r,c=0;const f=e.childNodes,a=f.length;for(;c<a;c++){if(t=f[c],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],r=l.length-1;r>=0;r--)n=l[r],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(N(n,s)?(i=W.find((e=>e.v===n)),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.k=t:W.push({k:t,v:n}),n["s-sr"]&&W.map((e=>{N(e.v,n["s-sn"])&&(i=W.find((e=>e.v===n)),i&&!e.k&&(e.k=i.k))}))):W.some((e=>e.v===n))||W.push({v:n}));1===t.nodeType&&L(t)}},N=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,U=e=>{e.l&&e.l.ref&&e.l.ref(null),e.o&&e.o.map(U)},D=(e,t)=>{t&&!e.j&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.j=t)))},E=(e,t)=>{if(e.$|=16,!(4&e.$))return D(e,e.S),ye((()=>A(e,t)));e.$|=512},A=(e,t)=>{const n=e.O;let l;return t?(e.$|=256,e.M&&(e.M.map((([e,t])=>_(n,e,t))),e.M=null),l=_(n,"componentWillLoad")):l=_(n,"componentWillUpdate"),l=z(l,(()=>_(n,"componentWillRender"))),z(l,(()=>F(e,n,t)))},F=async(e,t,n)=>{const l=e.m,o=l["s-rc"];n&&(e=>{const t=e.C,n=e.m,l=t.$,o=((e,t)=>{let n=y(t);const l=ie.get(n);if(e=11===e.nodeType?e:ce,l)if("string"==typeof l){let t,o=b.get(e=e.head||e);o||b.set(e,o=new Set),o.has(n)||(t=ce.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);H(e,t),o&&(o.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>q(e);0===t.length?n():(Promise.all(t).then(n),e.$|=4,t.length=0)}},H=(i,r)=>{try{r=r.render(),i.$&=-17,i.$|=2,((i,r)=>{const c=i.m,f=i.C,a=i.R||d(null,null),p=(e=>e&&e.p===$)(r)?r:u(null,null,r);if(n=c.tagName,f.P&&(p.l=p.l||{},f.P.map((([e,t])=>p.l[t]=c[e]))),p.p=null,p.$|=4,i.R=p,p.h=a.h=c.shadowRoot||c,e=c["s-sc"],t=c["s-cr"],l=0!=(1&f.$),o=!1,P(a,p),fe.$|=1,s){let e,t,n,l,o,s;L(p.h);let i=0;for(;i<W.length;i++)e=W[i],t=e.v,t["s-ol"]||(n=ce.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<W.length;i++)if(e=W[i],t=e.v,e.k){for(l=e.k.parentNode,o=e.k.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&T(p.h),fe.$&=-2,W.length=0})(i,r)}catch(e){le(e,i.m)}return null},q=e=>{const t=e.m,n=e.O,l=e.S;_(n,"componentDidRender"),64&e.$?_(n,"componentDidUpdate"):(e.$|=64,B(t),_(n,"componentDidLoad"),e.T(t),l||V()),e.W(t),e.j&&(e.j(),e.j=void 0),512&e.$&&be((()=>E(e,!1))),e.$&=-517},V=()=>{B(ce.documentElement),be((()=>m(re,"appload",{detail:{namespace:"web-components-library"}})))},_=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){le(e)}},z=(e,t)=>e&&e.then?e.then(t):t(),B=e=>e.classList.add("hydrated"),G=(e,t,n)=>{if(t.L){e.watchers&&(t.N=e.watchers);const l=Object.entries(t.L),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>Z(this).U.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=Z(e),s=o.m,i=o.U.get(t),r=o.$,c=o.O;if(n=((e,t)=>null==e||a(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.L[t][0]),(!(8&r)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(o.U.set(t,n),c)){if(l.N&&128&r){const e=l.N[t];e&&e.map((e=>{try{c[e](n,i,t)}catch(e){le(e,s)}}))}2==(18&r)&&E(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=Z(this);return n.D.then((()=>n.O[e](...t)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){fe.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.P.push([e,o]),o}))}}return e},I=(e,t={})=>{const n=[],l=t.exclude||[],o=re.customElements,s=ce.head,i=s.querySelector("meta[charset]"),r=ce.createElement("style"),c=[];let f,a=!0;Object.assign(fe,t),fe.A=new URL(t.resourcesUrl||"./",ce.baseURI).href,e.map((e=>{e[1].map((t=>{const s={$:t[0],g:t[1],L:t[2],F:t[3]};s.L=t[2],s.F=t[3],s.P=[],s.N={};const i=s.g,r=class extends HTMLElement{constructor(e){super(e),te(e=this,s),1&s.$&&e.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),a?c.push(this):fe.jmp((()=>(e=>{if(0==(1&fe.$)){const t=Z(e),n=t.C,l=()=>{};if(1&t.$)J(e,t,n.F);else{t.$|=1,12&n.$&&(e=>{const t=e["s-cr"]=ce.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){D(t,t.S=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.$)){{if(t.$|=32,(o=se(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.N=o.watchers,G(o,n,2),o.isProxied=!0);const e=()=>{};t.$|=8;try{new o(t)}catch(e){le(e)}t.$&=-9,t.$|=128,e()}if(o.style){let e=o.style;const t=y(n);if(!ie.has(t)){const l=()=>{};((e,t,n)=>{let l=ie.get(e);ue&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,ie.set(e,l)})(t,e,!!(1&n.$)),l()}}}const s=t.S,i=()=>E(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){fe.jmp((()=>(()=>{if(0==(1&fe.$)){const e=Z(this),t=e.O;e.H&&(e.H.map((e=>e())),e.H=void 0),_(t,"disconnectedCallback")}})()))}componentOnReady(){return Z(this).q}};s.V=e[0],l.includes(i)||o.get(i)||(n.push(i),o.define(i,G(r,s,1)))}))})),r.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles",""),s.insertBefore(r,i?i.nextSibling:s.firstChild),a=!1,c.length?c.map((e=>e.connectedCallback())):fe.jmp((()=>f=setTimeout(V,30)))},J=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=Q(e,n),i=K(t,o),r=X(n);fe.ael(s,l,i,r),(t.H=t.H||[]).push((()=>fe.rel(s,l,i,r)))}))},K=(e,t)=>n=>{try{256&e.$?e.O[t](n):(e.M=e.M||[]).push([t,n])}catch(e){le(e)}},Q=(e,t)=>4&t?ce:8&t?re:16&t?ce.body:e,X=e=>0!=(2&e),Y=new WeakMap,Z=e=>Y.get(e),ee=(e,t)=>Y.set(t.O=e,t),te=(e,t)=>{const n={$:0,m:e,C:t,U:new Map};return n.D=new Promise((e=>n.W=e)),n.q=new Promise((e=>n.T=e)),e["s-p"]=[],e["s-rc"]=[],J(e,n,t.F),Y.set(e,n)},ne=(e,t)=>t in e,le=(e,t)=>(0,console.error)(e,t),oe=new Map,se=e=>{const t=e.g.replace(/-/g,"_"),n=e.V,l=oe.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(oe.set(n,e),e[t])),le)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},ie=new Map,re="undefined"!=typeof window?window:{},ce=re.document||{head:{}},fe={$:0,A:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},ae=e=>Promise.resolve(e),ue=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),de=[],$e=[],pe=(e,t)=>n=>{e.push(n),r||(r=!0,t&&4&fe.$?be(me):fe.raf(me))},he=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){le(e)}e.length=0},me=()=>{he(de),he($e),(r=de.length>0)&&fe.raf(me)},be=e=>ae().then(e),ye=pe($e,!0);export{$ as H,I as b,h as c,p as g,u as h,ae as p,ee as r}