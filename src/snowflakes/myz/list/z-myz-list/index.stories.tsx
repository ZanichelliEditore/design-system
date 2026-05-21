import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZMyzList} from "./index";

const StoryMeta = {
  title: "Snowflakes/List/ZMyzList",
  component: ZMyzList,
} satisfies Meta<ZMyzList>;

export default StoryMeta;

export const Default = {
  render: () => (
    <z-myz-list
      inputrawdata='[
        {"text":"list element 1","link":"http://www.zanichelli.it","listitemid":"id1","icon":"checkbox-checked"},
        {"text":"list element 2","link":"http://my.zanichelli.it","listitemid":"id2","icon":"checkbox"},
        {"text":""}
      ]'
    ></z-myz-list>
  ),
} satisfies StoryObj<ZMyzList>;
