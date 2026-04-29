import{r as e}from"./lit-CgIPLKVa.js";import{i as t,t as n}from"./chunk-L4EGOTBX-KlzQXQPc.js";import{a as r,n as i,o as a,r as o}from"./client-DQfH-YhT.js";import"./z-icon-BmF0hk_o.js";import{h as s,u as c}from"./beans-CNd94UMz.js";import"./z-button-ColY3FoG.js";import{t as l}from"./taggedTemplateLiteral-BA-xtlkT.js";var u=()=>`html{scroll-behavior:smooth}z-anchor-navigation nav{display:none;flex-direction:column;justify-content:flex-start;row-gap:calc(var(--space-unit) / 2)}z-anchor-navigation[collapsed] nav{display:flex;margin-top:var(--space-unit)}z-anchor-navigation nav a{display:-webkit-box;overflow:clip;width:100%;box-sizing:border-box;padding:calc(var(--space-unit) * 1.5) calc(var(--space-unit) * 2);-webkit-box-orient:vertical;font-weight:inherit;-webkit-line-clamp:2;line-clamp:2;overflow-clip-margin:content-box;text-decoration:none}z-anchor-navigation nav>* a{color:inherit}z-anchor-navigation nav * a:not(:only-child){padding-right:calc(var(--space-unit) * 5)}@supports not (overflow-clip-margin: content-box){z-anchor-navigation nav a{display:inline-block;overflow:hidden;-webkit-line-clamp:none;line-clamp:none;text-overflow:ellipsis;white-space:nowrap}}z-anchor-navigation nav>*{position:relative;border-left:var(--border-size-large) solid var(--color-default-icon);color:var(--color-default-text);font-family:var(--font-family-sans);transition:background-color 0.3s ease-in-out,     border-color 0.3s ease-in-out,     color 0.3s ease-in-out}z-anchor-navigation nav>[data-current]{border-left-color:var(--color-primary01);color:var(--color-primary01);font-weight:var(--font-sb)}z-anchor-navigation nav>*>*:is(z-button,button){position:absolute;top:50%;right:0;transform:translateY(-50%);transition:opacity 0.3s ease-in-out}z-anchor-navigation nav>*:focus:focus-visible,z-anchor-navigation nav>*>*:focus:focus-visible{box-shadow:var(--shadow-focus-primary);outline:none}z-anchor-navigation nav button{padding:0;border:none;margin:0;background-color:transparent}@media (min-width: 768px){z-anchor-navigation:not([is-collapsed]) z-button.toggle{display:none !important}z-anchor-navigation:not([is-collapsed]) nav{display:flex}z-anchor-navigation nav>*>:is(z-button,button){opacity:0;pointer-events:none}@media (hover: hover){z-anchor-navigation nav>:is([data-current],:hover,:focus,:focus-within)>:is(z-button,button){fill:var(--color-default-icon);opacity:1;pointer-events:unset}z-anchor-navigation nav>*:hover{border-left-color:var(--color-hover-primary);background-color:var(--color-background);color:var(--color-hover-primary)}}z-anchor-navigation[hide-unselected] nav>*:not([data-current],:hover,:focus,:focus-within){color:transparent;fill:transparent}}`;r(class extends i{constructor(e){super(),e!==!1&&this.__registerHost(),this.hideUnselected=!1,this.autoCurrent=!0,this.collapsedLabel=`salta a`,this.isCollapsed=!1,this.collapsed=!1}setCurrent(){let e=Array.from(this.nav.querySelectorAll(`a`)).find(e=>e.href===this.host.ownerDocument.location.href);Array.from(this.nav.children).forEach(t=>{let n=t instanceof HTMLAnchorElement?t:t.querySelector(`a`),r=n===e;n.setAttribute(`aria-current`,r.toString()),t.toggleAttribute(`data-current`,r)})}toggleCollapsed(){this.collapsed=!this.collapsed}componentDidLoad(){this.autoCurrent&&(window.addEventListener(`hashchange`,this.setCurrent.bind(this)),this.setCurrent())}disconnectedCallback(){window.removeEventListener(`hashchange`,this.setCurrent)}render(){return a(o,{key:`1b96cf9278c21ddec964ab7263a98c093097a055`,collapsed:this.collapsed,class:`z-scrollbar`},a(`z-button`,{key:`e87eb05aec937a7fd88895367f6f64c7cea4807f`,class:`toggle`,size:s.SMALL,variant:c.SECONDARY,icon:this.collapsed?`chevron-up`:`chevron-down`,onClick:this.toggleCollapsed.bind(this)},this.collapsedLabel),a(`nav`,{key:`aba7ec022a53b00fcfd171dee5ea94bf56516ca1`,ref:e=>this.nav=e},a(`slot`,{key:`d03657516325808d95afc1318af0d6bef325d676`})))}get host(){return this}static get style(){return u()}},[260,`z-anchor-navigation`,{hideUnselected:[516,`hide-unselected`],autoCurrent:[4,`auto-current`],collapsedLabel:[1,`collapsed-label`],isCollapsed:[516,`is-collapsed`],collapsed:[32]}]);var d={schemaVersion:`1.0.0`,modules:[{kind:`javascript-module`,path:``,declarations:[{kind:`class`,name:`ZAnchorNavigation`,tagName:`z-anchor-navigation`,customElement:!0,members:[{kind:`field`,name:`hideUnselected`,type:`boolean`,description:`If enabled, the text of each anchor will be hidden unless
for the current one or the one the user is hovering.`,default:`false`},{kind:`field`,name:`autoCurrent`,type:`boolean`,description:"Enables automatic inference of the current item, listening for hash change\nand checking the `href` of the slotted anchors.\nWhen disabled, the highlight of current item must be handled manually by setting the `data-current`\nattribute to the correct slotted items and the `aria-current` attribute to the anchors.",default:`true`},{kind:`field`,name:`collapsedLabel`,type:`string`,description:`Sets the label of the button displayed on mobile viewport when the anchor navigation is collapsed`,default:`"salta a"`},{kind:`field`,name:`isCollapsed`,type:`boolean`,description:`Explicitly collapse anchor navigation.
If false will collapse automatically only on mobile.`,default:`false`}],events:[],slots:[{name:`-`,description:"Anchor navigation items. Use `<a>` elements inside. If you need an extra action element, use a wrapper around it and the anchor."}]}],exports:[{kind:`js`,name:`ZAnchorNavigation`,declaration:{name:`ZAnchorNavigation`,module:`src/components/z-anchor-navigation/index.tsx`}},{kind:`custom-element-definition`,name:`z-anchor-navigation`,declaration:{name:`ZAnchorNavigation`,module:`src/components/z-anchor-navigation/index.tsx`}}]}]};t({...n()||{},...d,modules:[...(n()||{}).modules||[],...d.modules]});var f,p={title:`ZAnchorNavigation`,component:`z-anchor-navigation`,args:{hideUnselected:!1,collapsedLabel:`salta a`,isCollapsed:!1}},m={render:t=>e`
    <div class="z-anchor-navigation-story-wrapper ${t.isCollapsed?`collapsed`:``}">
      <z-anchor-navigation
        collapsed-label=${t.collapsedLabel}
        .hideUnselected=${t.hideUnselected}
        .isCollapsed=${t.isCollapsed}
      >
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
  `},h={args:{autoCurrent:!1},parameters:{controls:{exclude:[`autoCurrent`]}},render:t=>e(f||=l([`
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
        collapsed-label=`,`
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
  `]),t.collapsedLabel,t.hideUnselected,t.autoCurrent)};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <div class="z-anchor-navigation-story-wrapper \${args.isCollapsed ? "collapsed" : ""}">
      <z-anchor-navigation
        collapsed-label=\${args.collapsedLabel}
        .hideUnselected=\${args.hideUnselected}
        .isCollapsed=\${args.isCollapsed}
      >
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
} satisfies StoryObj<ZAnchorNavigation>`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
        collapsed-label=\${args.collapsedLabel}
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
} satisfies StoryObj<ZAnchorNavigation>`,...h.parameters?.docs?.source},description:{story:"Setting `autoCurrent` to `false` disables the automatic highlighting of the current section in the anchor navigation\nand allows manual handling.\nIn this story, for example, the highlighting of the current section is done by clicking on the related button.",...h.parameters?.docs?.description}}};var g=[`Default`,`AutoCurrentDisabling`];export{h as AutoCurrentDisabling,m as Default,g as __namedExportsOrder,p as default};