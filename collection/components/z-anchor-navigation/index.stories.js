import { html } from "lit";
import "../z-button/index";
import "../z-icon/index";
import "./index";
import "./index.stories.css";
const StoryMeta = {
    title: "ZAnchorNavigation",
    component: "z-anchor-navigation",
    args: {
        hideUnselected: false,
    },
};
export default StoryMeta;
export const Default = {
    render: (args) => html `
    <div class="z-anchor-navigation-story-wrapper">
      <z-anchor-navigation .hideUnselected=${args.hideUnselected}>
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
  `,
};
//# sourceMappingURL=index.stories.js.map
