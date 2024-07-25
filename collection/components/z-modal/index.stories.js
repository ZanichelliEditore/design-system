import { html } from "lit";
import "../date-picker/z-date-picker/index";
import "../z-button/index";
import "../z-select/index";
import "./index";
import "./index.stories.css";
const StoryMeta = {
    title: "ZModal",
    component: "z-modal",
    args: {
        modalid: "my-modal",
        modaltitle: "My modal title",
        modalsubtitle: "My modal subtitle",
        closeButtonLabel: "chiudi modale",
        alertdialog: false,
        closable: true,
        scrollInside: true,
    },
    decorators: [
        (Story) => html `
      <script>
        function openZModal() {
          document.querySelector("z-modal").open();
        }
        function closeZModal() {
          document.querySelector("z-modal").close();
        }
      </script>
      ${Story()}
    `,
    ],
};
export default StoryMeta;
export const ShortText = {
    args: {
        modalid: "my-modal-short",
    },
    render: (args) => html `
    <z-modal
      modalid=${args.modalid}
      modaltitle=${args.modaltitle}
      modalsubtitle=${args.modalsubtitle}
      close-button-label=${args.closeButtonLabel}
      alertdialog=${args.alertdialog}
      closable=${args.closable}
      scroll-inside=${args.scrollInside}
    >
      <div slot="modalContent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br />
        <z-button onclick="closeZModal()">close</z-button>
      </div>
    </z-modal>
    <z-button onclick="openZModal()">apri modale</z-button>
  `,
};
export const LongText = {
    args: {
        modalid: "my-modal-long",
    },
    render: (args) => html `
    <z-modal
      modalid=${args.modalid}
      modaltitle=${args.modaltitle}
      modalsubtitle=${args.modalsubtitle}
      close-button-label=${args.closeButtonLabel}
      alertdialog=${args.alertdialog}
      closable=${args.closable}
      scroll-inside=${args.scrollInside}
    >
      <div slot="modalContent">
        <z-date-picker
          date-picker-id="cicciaCulo"
          ariaLabel="stringaQualsiasi"
          label="ancheLi"
        ></z-date-picker>
        Provaaaaa Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in
        Archimede, qui dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne
        ergo in vita summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul,
        orbus, egens, torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae
        volo. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo Reges: constructio interrete.
        Plane idem, inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem loco tantum explicemus haec
        honesta, quae dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se esse expetenda. Te
        enim iudicem aequum puto, modo quae dicat ille bene noris. Si enim Zenoni licuit, cum rem aliquam invenisset
        inusitatam, inauditum quoque ei rei nomen inponere, cur non liceat Catoni? Ita cum ea volunt retinere, quae
        superiori sententiae conveniunt, in Aristonem incidunt; Istam voluptatem perpetuam quis potest praestare
        sapienti? Urgent tamen et nihil remittunt. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio
        quem illum anteponebas? Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Sin autem ad
        animum, falsum est, quod negas animi ullum esse gaudium, quod non referatur ad corpus. Est autem situm in nobis
        ut et adversa quasi perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. Quin etiam ferae,
        inquit Pacuvius, quíbus abest, ad praécavendum intéllegendi astútia, iniecto terrore mortis horrescunt. Nihil
        enim hoc differt. Bonum liberi: misera orbitas. Quare attende, quaeso. Quod cum dixissent, ille contra. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui
        dum in pulvere quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita
        summum bonum dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens,
        torqueatur eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec
        vero sum nescius esse utilitatem in historia, non modo voluptatem. Duo Reges: constructio interrete. Plane idem,
        inquit, et maxima quidem, qua fieri nulla maior potest. Hoc autem loco tantum explicemus haec honesta, quae
        dico, praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se esse expetenda. Te enim iudicem
        aequum puto, modo quae dicat ille bene noris. Si enim Zenoni licuit, cum rem aliquam invenisset inusitatam,
        inauditum quoque ei rei nomen inponere, cur non liceat Catoni? Ita cum ea volunt retinere, quae superiori
        sententiae conveniunt, in Aristonem incidunt; Istam voluptatem perpetuam quis potest praestare sapienti? Urgent
        tamen et nihil remittunt. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum
        anteponebas? Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Sin autem ad animum,
        falsum est, quod negas animi ullum esse gaudium, quod non referatur ad corpus. Est autem situm in nobis ut et
        adversa quasi perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. Quin etiam ferae, inquit
        Pacuvius, quíbus abest, ad praécavendum intéllegendi astútia, iniecto terrore mortis horrescunt. Nihil enim hoc
        differt. Bonum liberi: misera orbitas. Quare attende, quaeso. Quod cum dixissent, ille contra. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere
        quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita summum bonum
        dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens, torqueatur
        eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero sum
        nescius esse utilitatem in historia, non modo voluptatem. Duo Reges: constructio interrete. Plane idem, inquit,
        et maxima quidem, qua fieri nulla maior potest. Hoc autem loco tantum explicemus haec honesta, quae dico,
        praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se esse expetenda. Te enim iudicem aequum
        puto, modo quae dicat ille bene noris. Si enim Zenoni licuit, cum rem aliquam invenisset inusitatam, inauditum
        quoque ei rei nomen inponere, cur non liceat Catoni? Ita cum ea volunt retinere, quae superiori sententiae
        conveniunt, in Aristonem incidunt; Istam voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et
        nihil remittunt. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas?
        Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod
        negas animi ullum esse gaudium, quod non referatur ad corpus. Est autem situm in nobis ut et adversa quasi
        perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. Quin etiam ferae, inquit Pacuvius,
        quíbus abest, ad praécavendum intéllegendi astútia, iniecto terrore mortis horrescunt. Nihil enim hoc differt.
        Bonum liberi: misera orbitas. Quare attende, quaeso. Quod cum dixissent, ille contra. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere
        quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita summum bonum
        dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens, torqueatur
        eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero sum
        nescius esse utilitatem in historia, non modo voluptatem. Duo Reges: constructio interrete. Plane idem, inquit,
        et maxima quidem, qua fieri nulla maior potest. Hoc autem loco tantum explicemus haec honesta, quae dico,
        praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se esse expetenda. Te enim iudicem aequum
        puto, modo quae dicat ille bene noris. Si enim Zenoni licuit, cum rem aliquam invenisset inusitatam, inauditum
        quoque ei rei nomen inponere, cur non liceat Catoni? Ita cum ea volunt retinere, quae superiori sententiae
        conveniunt, in Aristonem incidunt; Istam voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et
        nihil remittunt. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas?
        Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod
        negas animi ullum esse gaudium, quod non referatur ad corpus. Est autem situm in nobis ut et adversa quasi
        perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. Quin etiam ferae, inquit Pacuvius,
        quíbus abest, ad praécavendum intéllegendi astútia, iniecto terrore mortis horrescunt. Nihil enim hoc differt.
        Bonum liberi: misera orbitas. Quare attende, quaeso. Quod cum dixissent, ille contra. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere
        quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita summum bonum
        dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens, torqueatur
        eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero sum
        nescius esse utilitatem in historia, non modo voluptatem. Duo Reges: constructio interrete. Plane idem, inquit,
        et maxima quidem, qua fieri nulla maior potest. Hoc autem loco tantum explicemus haec honesta, quae dico,
        praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se esse expetenda. Te enim iudicem aequum
        puto, modo quae dicat ille bene noris. Si enim Zenoni licuit, cum rem aliquam invenisset inusitatam, inauditum
        quoque ei rei nomen inponere, cur non liceat Catoni? Ita cum ea volunt retinere, quae superiori sententiae
        conveniunt, in Aristonem incidunt; Istam voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et
        nihil remittunt. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas?
        Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod
        negas animi ullum esse gaudium, quod non referatur ad corpus. Est autem situm in nobis ut et adversa quasi
        perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. Quin etiam ferae, inquit Pacuvius,
        quíbus abest, ad praécavendum intéllegendi astútia, iniecto terrore mortis horrescunt. Nihil enim hoc differt.
        Bonum liberi: misera orbitas. Quare attende, quaeso. Quod cum dixissent, ille contra. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Quem enim ardorem studii censetis fuisse in Archimede, qui dum in pulvere
        quaedam describit attentius, ne patriam quidem captam esse senserit? Possumusne ergo in vita summum bonum
        dicere, cum id ne in cena quidem posse videamur? Morbo gravissimo affectus, exul, orbus, egens, torqueatur
        eculeo: quem hunc appellas, Zeno? Nam memini etiam quae nolo, oblivisci non possum quae volo. Nec vero sum
        nescius esse utilitatem in historia, non modo voluptatem. Duo Reges: constructio interrete. Plane idem, inquit,
        et maxima quidem, qua fieri nulla maior potest. Hoc autem loco tantum explicemus haec honesta, quae dico,
        praeterquam quod nosmet ipsos diligamus, praeterea suapte natura per se esse expetenda. Te enim iudicem aequum
        puto, modo quae dicat ille bene noris. Si enim Zenoni licuit, cum rem aliquam invenisset inusitatam, inauditum
        quoque ei rei nomen inponere, cur non liceat Catoni? Ita cum ea volunt retinere, quae superiori sententiae
        conveniunt, in Aristonem incidunt; Istam voluptatem perpetuam quis potest praestare sapienti? Urgent tamen et
        nihil remittunt. Sin te auctoritas commovebat, nobisne omnibus et Platoni ipsi nescio quem illum anteponebas?
        Stuprata per vim Lucretia a regis filio testata civis se ipsa interemit. Sin autem ad animum, falsum est, quod
        negas animi ullum esse gaudium, quod non referatur ad corpus. Est autem situm in nobis ut et adversa quasi
        perpetua oblivione obruamus et secunda iucunde ac suaviter meminerimus. Quin etiam ferae, inquit Pacuvius,
        quíbus abest, ad praécavendum intéllegendi astútia, iniecto terrore mortis horrescunt. Nihil enim hoc differt.
        Bonum liberi: misera orbitas. Quare attende, quaeso. Quod cum dixissent, ille contra.
        <z-select
          items='[{"id":"item_1","name":"first item","selected":false},{"id":"item_2","name":"second item","selected":true},{"id":"item_3","name":"disabled item","selected":false,"disabled":true},{"id":"item_4","name":"fourth item","selected":false}]'
          label="this is the label"
          aria-label=""
          placeholder="select placeholder"
          name=""
          status="-"
          message="helper text"
          autocomplete="false"
          noresultslabel="Nessun risultato"
          disabled="false"
          readonly="false"
          htmlid=""
          htmltitle=""
          reset-item=""
          isfixed="false"
          size="big"
        ></z-select>
      </div>
    </z-modal>
    <z-button onclick="openZModal()">apri modale</z-button>
  `,
};
//# sourceMappingURL=index.stories.js.map
