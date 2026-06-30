import {h} from "@stencil/core";
import {Fragment} from "@stencil/core/internal";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {CSSVarsArguments, extractCSSVars} from "../../utils/storybook-utils";
import {ZModal} from "./index";
import "./index.stories.css";

type ZSearchbarStoriesArgs = ZModal & CSSVarsArguments<"--z-modal-content-padding">;

const StoryMeta = {
  title: "ZModal",
  component: ZModal,
  args: {
    "modalid": "my-modal",
    "modaltitle": "My modal title",
    "modalsubtitle": "My modal subtitle",
    "closeButtonLabel": "chiudi modale",
    "alertdialog": false,
    "closable": true,
    "scrollInside": true,
    "lockPageScroll": true,
    "--z-modal-content-padding": "calc(var(--space-unit) * 2)",
  },
} satisfies Meta<ZSearchbarStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZModal>;

const openZModal = () => {
  document.querySelector("z-modal").open();
};
const closeZModal = () => {
  document.querySelector("z-modal").close();
};

export const ShortText = {
  args: {
    modalid: "my-modal-short",
  },
  render: (args) => (
    <Fragment>
      <z-modal
        {...args}
        style={extractCSSVars(args)}
      >
        <div slot="modalContent">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br />
          <z-button onClick={closeZModal}>close</z-button>
        </div>
      </z-modal>
      <z-button onClick={openZModal}>apri modale</z-button>
    </Fragment>
  ),
} satisfies Story;

export const LongText = {
  args: {
    modalid: "my-modal-long",
  },
  render: (args) => (
    <Fragment>
      <z-modal
        {...args}
        style={extractCSSVars(args)}
      >
        <div slot="modalContent">
          <z-input message={false}></z-input>
          Provaaaaa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
          Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne
          ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul,
          orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum
          quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo Reges: constructio
          interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem loco tantum
          explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se
          esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni licuit, cum rem
          aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat Catoni? Ita cum ea
          volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam voluptatem perpetuam quis
          potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas commovebat, nobisne omnibus et
          Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis filio testata civis se ipsa
          interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium, quod non referatur ad corpus.
          Est autem situm in nobis ut et adversa quasi perpetua oblivione obruamus et secunda iucunde ac suaviter
          meminerimus. Quin etiam ferae, inquit Pacuvius, quíbus abest, ad praécavendum intéllegendi astútia, iniecto
          terrore mortis horrescunt. Nihil enim hoc differt. Bonum liberi: misera orbitas. Quare attende, quaeso. Quod
          cum dixissent, ille contra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii
          censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse
          senserit? Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo
          gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae
          nolo, oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem.
          Duo Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc
          autem loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea
          suapte natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim
          Zenoni licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
          Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
          voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
          commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
          filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
          quod non referatur ad corpus. Est autem situm in nobis ut et adversa quasi perpetua oblivione obruamus et
          secunda iucunde ac suaviter meminerimus. Quin etiam ferae, inquit Pacuvius, quíbus abest, ad praécavendum
          intéllegendi astútia, iniecto terrore mortis horrescunt. Nihil enim hoc differt. Bonum liberi: misera orbitas.
          Quare attende, quaeso. Quod cum dixissent, ille contra. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius,
          ne patriam quidem captam esse senserit? Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem
          posse videamur? Morbo gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno?
          Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia,
          non modo voluptatem. Duo Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla
          maior potest. Hoc autem loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos
          diligamus, praeterea suapte natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille
          bene noris. Si enim Zenoni licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen
          inponere, cur non liceat Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in
          Aristonem incidunt; Istam voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil
          remittunt. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas?
          Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod
          negas animi ullum esse gaudium, quod non referatur ad corpus. Est autem situm in nobis ut et adversa quasi
          perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. Quin etiam ferae, inquit Pacuvius,
          quíbus abest, ad praécavendum intéllegendi astútia, iniecto terrore mortis horrescunt. Nihil enim hoc differt.
          Bonum liberi: misera orbitas. Quare attende, quaeso. Quod cum dixissent, ille contra. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere
          quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita summum bonum
          dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens, torqueatur
          eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero sum
          nescius esse utilitatem in historia, non modo voluptatem. Duo Reges: constructio interrete. Plane idem,
          inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem loco tantum explicemus haec honesta, quae
          dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se esse expetenda. Te enim iudicem
          aequum puto, modo quae dicat ille bene noris. Si enim Zenoni licuit, cum rem aliquam invenisset inusitatam,
          inauditum quoque ei rei nomen inponere, cur non liceat Catoni? Ita cum ea volunt retinere, quae superiori
          sententiae conveniunt, in Aristonem incidunt; Istam voluptatem perpetuam quis potest praestare sapienti?
          Urgent tamen et nihil remittunt. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem
          illum anteponebas? Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Sin autem ad
          animum, falsum est, quod negas animi ullum esse gaudium, quod non referatur ad corpus. Est autem situm in
          nobis ut et adversa quasi perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. Quin etiam
          ferae, inquit Pacuvius, quíbus abest, ad praécavendum intéllegendi astútia, iniecto terrore mortis horrescunt.
          Nihil enim hoc differt. Bonum liberi: misera orbitas. Quare attende, quaeso. Quod cum dixissent, ille contra.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
          Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne
          ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul,
          orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum
          quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo Reges: constructio
          interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem loco tantum
          explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se
          esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni licuit, cum rem
          aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat Catoni? Ita cum ea
          volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam voluptatem perpetuam quis
          potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas commovebat, nobisne omnibus et
          Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis filio testata civis se ipsa
          interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium, quod non referatur ad corpus.
          Est autem situm in nobis ut et adversa quasi perpetua oblivione obruamus et secunda iucunde ac suaviter
          meminerimus. Quin etiam ferae, inquit Pacuvius, quíbus abest, ad praécavendum intéllegendi astútia, iniecto
          terrore mortis horrescunt. Nihil enim hoc differt. Bonum liberi: misera orbitas. Quare attende, quaeso. Quod
          cum dixissent, ille contra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii
          censetis fuisse in Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse
          senserit? Possumusne ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo
          gravissimo affectus, exul, orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae
          nolo, oblivisci non possum quae volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem.
          Duo Reges: constructio interrete. Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc
          autem loco tantum explicemus haec honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea
          suapte natura per se esse expetenda. Te enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim
          Zenoni licuit, cum rem aliquam invenisset inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat
          Catoni? Ita cum ea volunt retinere, quae superiori sententiae conveniunt, in Aristonem incidunt; Istam
          voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas
          commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas? Stuprata per vim Lucretia a regis
          filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod negas animi ullum esse gaudium,
          quod non referatur ad corpus. Est autem situm in nobis ut et adversa quasi perpetua oblivione obruamus et
          secunda iucunde ac suaviter meminerimus. Quin etiam ferae, inquit Pacuvius, quíbus abest, ad praécavendum
          intéllegendi astútia, iniecto terrore mortis horrescunt. Nihil enim hoc differt. Bonum liberi: misera orbitas.
          Quare attende, quaeso. Quod cum dixissent, ille contra.
          <z-select
            items='[{"id":"item_1","name":"first item","selected":false},{"id":"item_2","name":"second item","selected":true},{"id":"item_3","name":"disabled item","selected":false,"disabled":true},{"id":"item_4","name":"fourth item","selected":false}]'
            label="this is the label"
            placeholder="select placeholder"
            message="helper text"
            autocomplete={false}
            noresultslabel="Nessun risultato"
          ></z-select>
        </div>
      </z-modal>
      <z-button onClick={openZModal}>apri modale</z-button>
    </Fragment>
  ),
} satisfies Story;
