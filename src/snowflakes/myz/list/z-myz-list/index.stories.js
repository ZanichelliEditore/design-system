import {html} from "lit";

export default {
  title: "Snowflakes/List/ZMyzList",
  component: "z-myz-list",
};

export const ZMyzList = {
  render: (args) =>
    html`<z-myz-list
      inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'
    ></z-myz-list>`,

  name: "ZMyzList",
};
