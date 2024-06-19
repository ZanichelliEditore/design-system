import{x as c}from"./lit-element-DGXdXVoE.js";import"./index-yOVBEWgS.js";import"./index-BEj-2O7q.js";import{s as d,g as o}from"./chunk-GKNNPQCW-BkHQSocK.js";import{d as l,H as p,h as i,a as v}from"./index-8h8udRzn.js";import{B as h}from"./index-CcuDdGyi.js";const q=`html{scroll-behavior:smooth}z-anchor-navigation nav{display:none;flex-direction:column;justify-content:flex-start;row-gap:calc(var(--space-unit) / 2)}z-anchor-navigation[collapsed] nav{display:flex;margin-top:var(--space-unit)}z-anchor-navigation nav a{display:-webkit-box;overflow:clip;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);-webkit-box-orient:vertical;color:inherit;font-weight:inherit;-webkit-line-clamp:2;overflow-clip-margin:content-box;text-decoration:none}z-anchor-navigation nav * a:not(:only-child){padding-right:calc(var(--space-unit) * 5)}@supports not (overflow-clip-margin: content-box){z-anchor-navigation nav a{display:inline-block;overflow:hidden;-webkit-line-clamp:none;text-overflow:ellipsis;white-space:nowrap}}z-anchor-navigation nav>*{position:relative;border-left:var(--border-size-large) solid var(--color-surface04);color:var(--color-default-text);font-family:var(--font-family-sans);transition:background-color 0.3s ease-in-out,
    border-color 0.3s ease-in-out,
    color 0.3s ease-in-out}z-anchor-navigation nav>[data-current]{border-left-color:var(--color-primary01);color:var(--color-link-primary);font-weight:var(--font-sb)}z-anchor-navigation nav>*>*:is(z-button,button,z-icon){position:absolute;top:50%;right:0;transform:translateY(-50%);transition:opacity 0.3s ease-in-out}z-anchor-navigation nav button{padding:0;border:none;margin:0;background-color:transparent}z-anchor-navigation nav z-icon{--z-icon-width:16px;--z-icon-height:16px;display:flex;padding:calc(var(--space-unit) * 1.5);fill:var(--color-default-icon)}@media (min-width: 768px){z-anchor-navigation z-button.toggle{display:none !important}z-anchor-navigation nav{display:flex}z-anchor-navigation nav a{outline:none}@media (hover: hover){z-anchor-navigation nav>*:hover{border-left-color:var(--color-hover-secondary);background-color:var(--color-hover-surface);color:var(--color-hover-link)}}z-anchor-navigation nav>*:is(:focus,:focus-within),z-anchor-navigation nav :is(z-icon,button):focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}z-anchor-navigation[hide-unselected] nav>*:not([data-current],:hover,:focus,:focus-within){color:transparent}z-anchor-navigation nav>*:not([data-current],:hover,:focus,:focus-within)>*:is(z-button,button,z-icon):not(:focus:focus-visible){opacity:0;pointer-events:none}@media (hover: none){z-anchor-navigation:not([hide-unselected]) nav>*>*:is(z-button,button,z-icon){opacity:1;pointer-events:all}}}`,g=class extends p{constructor(){super(),this.__registerHost(),this.hideUnselected=!1,this.collapsed=!1}setAriaCurrent(){Array.from(this.nav.children).forEach(e=>{const t=e instanceof HTMLAnchorElement?e:e.querySelector("a"),a=window.location.href===t.href;t.setAttribute("aria-current",a.toString()),e.toggleAttribute("data-current",a)})}toggleCollapsed(){this.collapsed=!this.collapsed}componentDidLoad(){window.addEventListener("hashchange",this.setAriaCurrent.bind(this)),this.setAriaCurrent()}disconnectedCallback(){window.removeEventListener("hashchange",this.setAriaCurrent)}render(){return i(v,{key:"15845dbeb62891c65e5ee81e67b59abb89f67dfa",collapsed:this.collapsed},i("z-button",{key:"a7f4bbb72ce94c1ea0b38d7773a753f2e5b2b42b",class:"toggle",variant:h.SECONDARY,icon:this.collapsed?"chevron-up":"chevron-down",onClick:this.toggleCollapsed.bind(this)},"salta a"),i("nav",{key:"18d4ddc2ceace278958e7a8c8c26e171333538d1",ref:e=>this.nav=e},i("slot",{key:"a5b2ba6614772dfd833c493194fc53b0d66fb136"})))}static get style(){return q}};l(g,[4,"z-anchor-navigation",{hideUnselected:[516,"hide-unselected"],collapsed:[32]}]);const s={schemaVersion:"1.0.0",modules:[{kind:"javascript-module",path:"",declarations:[{kind:"class",name:"ZAnchorNavigation",tagName:"z-anchor-navigation",customElement:!0,members:[{kind:"field",name:"hideUnselected",type:"boolean",description:`If enabled, the text of each anchor will be hidden unless
for the current one or the one the user is hovering.`,default:"false"}],events:[],slots:[{name:"Main",description:"slot. Put some `<a>` tags inside. If you need an action button/icon, wrap it and the <a> inside another tag."}]}],exports:[{kind:"js",name:"ZAnchorNavigation",declaration:{name:"ZAnchorNavigation",module:"src/components/z-anchor-navigation/index.tsx"}},{kind:"custom-element-definition",name:"z-anchor-navigation",declaration:{name:"ZAnchorNavigation",module:"src/components/z-anchor-navigation/index.tsx"}}]}]};d({...o()||{},...s,modules:[...(o()||{}).modules||[],...s.modules]});const w={title:"ZAnchorNavigation",component:"z-anchor-navigation",args:{hideUnselected:!1}},n={render:e=>c`
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
          ></z-button>
        </div>
        <div>
          <a
            href="#second-section"
            target="_self"
            >Second section</a
          >
          <z-icon
            name="share"
            tabindex="0"
          ></z-icon>
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
  `};var u,r,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          ></z-button>
        </div>
        <div>
          <a
            href="#second-section"
            target="_self"
            >Second section</a
          >
          <z-icon
            name="share"
            tabindex="0"
          ></z-icon>
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
} satisfies StoryObj<ZAnchorNavigation>`,...(m=(r=n.parameters)==null?void 0:r.docs)==null?void 0:m.source}}};const A=["Default"];export{n as Default,A as __namedExportsOrder,w as default};
