import {html} from "lit";

export default {
  title: "ZPanelElem",
  component: "z-panel-elem",

  args: {
    imgurl: "https://staticdemomy.zanichelli.it/download/biblioteca.png",
    linkicon: "arrow-quad-down",
    linklabel: "Biblioteca",
    url: "https://biblioteca.scuola.zanichelli.it/",
    elemid: "elem_id",
    isdisabled: false,
  },
};

export const ZPanelElem = {
  render: (args) =>
    html`<z-panel-elem
      imgurl="${args.imgurl}"
      linkicon="${args.linkicon}"
      linklabel="${args.linklabel}"
      url="${args.url}"
      elemid="${args.elemid}"
      isdisabled="${args.isdisabled}"
    ></z-panel-elem>`,

  name: "z-panel-elem",
};
