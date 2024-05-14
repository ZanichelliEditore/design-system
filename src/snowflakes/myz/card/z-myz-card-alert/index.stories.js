import {html} from "lit";

export default {
  title: "Snowflakes/MyzCard/ZMyzCardAlert",
  component: "z-myz-card-alert",

  args: {
    actiontext: "Annulla",
    contenttext: "Libro aggiunto ai miei libri preferiti",
    iconName: "checkmark-circle",
    type: "add",
  },
};

export const ZMyzCardAlert = {
  render: (args) =>
    html`<z-myz-card-alert
      actiontext="${args.actiontext}"
      contenttext="${args.contenttext}"
      iconName="${args.iconName}"
      type="${args.type}"
    ></z-myz-card-alert>`,

  name: "ZMyzCardAlert",
};
