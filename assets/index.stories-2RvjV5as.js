import{x as f}from"./lit-element-DGXdXVoE.js";import"./index-B7tABtxN.js";import"./index-BN8hH0FG.js";import{s as x,g as u}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as y,H as z,h as t,a as S}from"./index-8h8udRzn.js";import{B as A}from"./index-CcuDdGyi.js";const w=`html{scroll-behavior:smooth}z-anchor-navigation nav{display:none;flex-direction:column;justify-content:flex-start;row-gap:calc(var(--space-unit) / 2)}z-anchor-navigation[collapsed] nav{display:flex;margin-top:var(--space-unit)}z-anchor-navigation nav a{display:-webkit-box;overflow:clip;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);-webkit-box-orient:vertical;color:inherit;font-weight:inherit;-webkit-line-clamp:2;overflow-clip-margin:content-box;text-decoration:none}z-anchor-navigation nav * a:not(:only-child){padding-right:calc(var(--space-unit) * 5)}@supports not (overflow-clip-margin: content-box){z-anchor-navigation nav a{display:inline-block;overflow:hidden;-webkit-line-clamp:none;text-overflow:ellipsis;white-space:nowrap}}z-anchor-navigation nav>*{position:relative;border-left:var(--border-size-large) solid var(--color-surface04);color:var(--color-default-text);font-family:var(--font-family-sans);transition:background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out,
    color 0.3s ease-in-out}z-anchor-navigation nav>[data-current]{border-left-color:var(--color-primary01);color:var(--color-link-primary);font-weight:var(--font-sb)}z-anchor-navigation nav>*>*:is(z-button,button){position:absolute;top:50%;right:0;transform:translateY(-50%);transition:opacity 0.3s ease-in-out}z-anchor-navigation nav>*:focus:focus-visible,z-anchor-navigation nav>*>*:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}z-anchor-navigation nav button{padding:0;border:none;margin:0;background-color:transparent}@media (min-width: 768px){z-anchor-navigation z-button.toggle{display:none !important}z-anchor-navigation nav{display:flex}z-anchor-navigation nav>*>:is(z-button,button){opacity:0;pointer-events:none}@media (hover: hover){z-anchor-navigation nav>:is([data-current],:hover,:focus,:focus-within)>:is(z-button,button){opacity:1;pointer-events:unset}z-anchor-navigation nav>*:hover{border-left-color:var(--color-hover-secondary);background-color:var(--color-hover-surface);color:var(--color-hover-link)}}z-anchor-navigation[hide-unselected] nav>*:not([data-current],:hover,:focus,:focus-within){color:transparent;fill:transparent}}`,C=class extends z{constructor(){super(),this.__registerHost(),this.hideUnselected=!1,this.autoCurrent=!0,this.collapsed=!1}setCurrent(){const e=Array.from(this.nav.querySelectorAll("a")).find(i=>i.href===this.host.ownerDocument.location.href);Array.from(this.nav.children).forEach(i=>{const o=i instanceof HTMLAnchorElement?i:i.querySelector("a"),s=o===e;o.setAttribute("aria-current",s.toString()),i.toggleAttribute("data-current",s)})}toggleCollapsed(){this.collapsed=!this.collapsed}componentDidLoad(){this.autoCurrent&&(window.addEventListener("hashchange",this.setCurrent.bind(this)),this.setCurrent())}disconnectedCallback(){window.removeEventListener("hashchange",this.setCurrent)}render(){return t(S,{key:"70b1d6dd642e50cbb5601f2bc6dda6c4078e2dd1",collapsed:this.collapsed},t("z-button",{key:"0fff682fef4daa252e7f53626b7b3cd12b19177a",class:"toggle",variant:A.SECONDARY,icon:this.collapsed?"chevron-up":"chevron-down",onClick:this.toggleCollapsed.bind(this)},"salta a"),t("nav",{key:"dc31ad454d6104c5dea79beb3d552385035f8011",ref:e=>this.nav=e},t("slot",{key:"bff8e0cb67fb2d34384fa4a03412015313f9f54d"})))}get host(){return this}static get style(){return w}};y(C,[4,"z-anchor-navigation",{hideUnselected:[516,"hide-unselected"],autoCurrent:[4,"auto-current"],collapsed:[32]}]);const r={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZAnchorNavigation",tagName:"z-anchor-navigation",customElement:!0,members:[{kind:"field",name:"hideUnselected",type:"boolean",description:`If enabled, the text of each anchor will be hidden unless
for the current one or the one the user is hovering.`,default:"false"},{kind:"field",name:"autoCurrent",type:"boolean",description:"Enables automatic inference of the current item, listening for hash change\nand checking the `href` of the slotted anchors.\nWhen disabled, the highlight of current item must be handled manually by setting the `data-current`\nattribute to the correct slotted items and the `aria-current` attribute to the anchors.",default:"true"}],events:[],slots:[{name:"-",description:"Anchor navigation items. Use `<a>` elements inside. If you need an extra action element, use a wrapper around it and the anchor."}]}],exports:[{kind:"js",name:"ZAnchorNavigation",declaration:{name:"ZAnchorNavigation",module:"src/components/z-anchor-navigation/index.tsx"}},{kind:"custom-element-definition",name:"z-anchor-navigation",declaration:{name:"ZAnchorNavigation",module:"src/components/z-anchor-navigation/index.tsx"}}]}]};x({...u()||{},...r,modules:[...(u()||{}).modules||[],...r.modules]});var m=Object.freeze,P=Object.defineProperty,N=(e,i)=>m(P(e,"raw",{value:m(e.slice())})),c;const k={title:"ZAnchorNavigation",component:"z-anchor-navigation",args:{hideUnselected:!1}},a={render:e=>f`
    <div class="z-anchor-navigation-story-wrapper">
      <z-anchor-navigation .hideUnselected=${e.hideUnselected}>
        <div>
          <a
            href="#first-section"
            target="_self"
            >First section</a
          >
          <z-button
            variant="tertiary"
            icon="share"
            size="x-small"
          ></z-button>
        </div>
        <div>
          <a
            href="#second-section"
            target="_self"
            >Second section</a
          >
        </div>
        <div>
          <a
            href="#third-section"
            target="_self"
            >Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          </a>
          <button
            type="button"
            aria-label="share"
          >
            <z-icon name="share" />
          </button>
        </div>
        <a
          href="#fourth-section"
          target="_self"
          >Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
        </a>
      </z-anchor-navigation>
      <div>
        <div id="first-section">
          <h4>First section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div id="second-section">
          <h4>Second section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div id="third-section">
          <h4>Third section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div id="fourth-section">
          <h4>Fourth section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
      </div>
    </div>
  `},n={args:{autoCurrent:!1},parameters:{controls:{exclude:["autoCurrent"]}},render:e=>f(c||(c=N([`
    <script>
      Array.from(document.querySelectorAll(".z-anchor-navigation-manual-current z-button")).forEach((item) =>
        item.addEventListener("click", (ev) => {
          const sectionID = ev.target.closest("z-button")?.dataset.to;
          const current = document.querySelector("#" + sectionID + "-anchor");
          const nav = current?.closest("nav");
          Array.from(nav?.children ?? []).forEach((item) => {
            const isCurrent = item.contains(current);
            if (isCurrent) {
              item.setAttribute("data-current", "");
            } else {
              item.removeAttribute("data-current");
            }
            const anchor = item.tagName === "A" ? item : item.querySelector("a");
            item?.setAttribute("aria-current", isCurrent.toString());
          });
          const section = document.querySelector("#" + sectionID);
          section?.scrollIntoView();
        })
      );
    <\/script>

    <div class="z-anchor-navigation-manual-current">
      <z-button
        size="x-small"
        data-to="first-section"
        >To first section</z-button
      >
      <z-button
        size="x-small"
        data-to="second-section"
        >To second section</z-button
      >
      <z-button
        size="x-small"
        data-to="third-section"
        >To third section</z-button
      >
      <z-button
        size="x-small"
        data-to="fourth-section"
        >Highlight fourth section</z-button
      >
    </div>
    <div class="z-anchor-navigation-story-wrapper">
      <z-anchor-navigation
        .hideUnselected=`,`
        .autoCurrent=`,`
      >
        <div>
          <a id="first-section-anchor">First section</a>
          <z-button
            variant="tertiary"
            icon="share"
            size="x-small"
          ></z-button>
        </div>
        <div>
          <a id="second-section-anchor">Second section</a>
        </div>
        <div>
          <a id="third-section-anchor"
            >Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          </a>
          <button
            type="button"
            aria-label="share"
          >
            <z-icon name="share" />
          </button>
        </div>
        <a id="fourth-section-anchor"
          >Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
        </a>
      </z-anchor-navigation>
      <div class="z-anchor-navigation-demo-sections">
        <div
          class="section"
          id="first-section"
        >
          <h4>First section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div
          class="section"
          id="second-section"
        >
          <h4>Second section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div
          class="section"
          id="third-section"
        >
          <h4>Third section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div
          class="section"
          id="fourth-section"
        >
          <h4>Fourth section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
      </div>
    </div>
  `])),e.hideUnselected,e.autoCurrent)};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => html\`
    <div class="z-anchor-navigation-story-wrapper">
      <z-anchor-navigation .hideUnselected=\${args.hideUnselected}>
        <div>
          <a
            href="#first-section"
            target="_self"
            >First section</a
          >
          <z-button
            variant="tertiary"
            icon="share"
            size="x-small"
          ></z-button>
        </div>
        <div>
          <a
            href="#second-section"
            target="_self"
            >Second section</a
          >
        </div>
        <div>
          <a
            href="#third-section"
            target="_self"
            >Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          </a>
          <button
            type="button"
            aria-label="share"
          >
            <z-icon name="share" />
          </button>
        </div>
        <a
          href="#fourth-section"
          target="_self"
          >Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
        </a>
      </z-anchor-navigation>
      <div>
        <div id="first-section">
          <h4>First section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div id="second-section">
          <h4>Second section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div id="third-section">
          <h4>Third section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div id="fourth-section">
          <h4>Fourth section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
      </div>
    </div>
  \`
} satisfies StoryObj<ZAnchorNavigation>`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var v,h,q,g,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    autoCurrent: false
  },
  parameters: {
    controls: {
      exclude: ["autoCurrent"]
    }
  },
  render: args => html\`
    <script>
      Array.from(document.querySelectorAll(".z-anchor-navigation-manual-current z-button")).forEach((item) =>
        item.addEventListener("click", (ev) => {
          const sectionID = ev.target.closest("z-button")?.dataset.to;
          const current = document.querySelector("#" + sectionID + "-anchor");
          const nav = current?.closest("nav");
          Array.from(nav?.children ?? []).forEach((item) => {
            const isCurrent = item.contains(current);
            if (isCurrent) {
              item.setAttribute("data-current", "");
            } else {
              item.removeAttribute("data-current");
            }
            const anchor = item.tagName === "A" ? item : item.querySelector("a");
            item?.setAttribute("aria-current", isCurrent.toString());
          });
          const section = document.querySelector("#" + sectionID);
          section?.scrollIntoView();
        })
      );
    <\/script>

    <div class="z-anchor-navigation-manual-current">
      <z-button
        size="x-small"
        data-to="first-section"
        >To first section</z-button
      >
      <z-button
        size="x-small"
        data-to="second-section"
        >To second section</z-button
      >
      <z-button
        size="x-small"
        data-to="third-section"
        >To third section</z-button
      >
      <z-button
        size="x-small"
        data-to="fourth-section"
        >Highlight fourth section</z-button
      >
    </div>
    <div class="z-anchor-navigation-story-wrapper">
      <z-anchor-navigation
        .hideUnselected=\${args.hideUnselected}
        .autoCurrent=\${args.autoCurrent}
      >
        <div>
          <a id="first-section-anchor">First section</a>
          <z-button
            variant="tertiary"
            icon="share"
            size="x-small"
          ></z-button>
        </div>
        <div>
          <a id="second-section-anchor">Second section</a>
        </div>
        <div>
          <a id="third-section-anchor"
            >Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
            Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          </a>
          <button
            type="button"
            aria-label="share"
          >
            <z-icon name="share" />
          </button>
        </div>
        <a id="fourth-section-anchor"
          >Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
          Third section with a very very long title and an icon and the title is repeated so it can go over 2 lines
        </a>
      </z-anchor-navigation>
      <div class="z-anchor-navigation-demo-sections">
        <div
          class="section"
          id="first-section"
        >
          <h4>First section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div
          class="section"
          id="second-section"
        >
          <h4>Second section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div
          class="section"
          id="third-section"
        >
          <h4>Third section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
        <div
          class="section"
          id="fourth-section"
        >
          <h4>Fourth section</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
            Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit?
            Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo
            affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo,
            oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo
            Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem
            loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte
            natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni
            licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
            Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
            voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
            commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
            filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
            quod non referatur ad corpus.
          </p>
        </div>
        <div class="separator"></div>
      </div>
    </div>
  \`
} satisfies StoryObj<ZAnchorNavigation>`,...(q=(h=n.parameters)==null?void 0:h.docs)==null?void 0:q.source},description:{story:"Setting `autoCurrent` to `false` disables the automatic highlighting of the current section in the anchor navigation\nand allows manual handling.\nIn this story, for example, the highlighting of the current section is done by clicking on the related button.",...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};const H=["Default","AutoCurrentDisabling"];export{n as AutoCurrentDisabling,a as Default,H as __namedExportsOrder,k as default};
