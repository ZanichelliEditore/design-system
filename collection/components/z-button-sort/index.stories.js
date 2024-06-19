import { html } from "lit";
import "./index";
const StoryMeta = {
    title: "ZButtonSort",
    args: {
        label: "sort",
        counter: 3,
        desclabel: "label DESC",
        sortlabelasc: "1-9",
        sortlabeldesc: "9-1",
        isselected: true,
        sortasc: true,
    },
    render: (args) => html `<z-button-sort
      label="${args.label}"
      counter="${args.counter}"
      desclabel="${args.desclabel}"
      sortlabelasc="${args.sortlabelasc}"
      sortlabeldesc="${args.sortlabeldesc}"
      isselected="${args.isselected}"
      sortasc="${args.sortasc}"
    ></z-button-sort>`,
};
export default StoryMeta;
export const Default = {};
export const Ellipsis = {
    args: {
        label: "Testo molto lungo lungo lungo lunghissimo lunghissimo lunghissimo ancora di più",
    },
};
//# sourceMappingURL=index.stories.js.map
