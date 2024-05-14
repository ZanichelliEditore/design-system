import {html} from "lit";
import {DividerSize, ListSize, ListDividerType, ListType} from "../../../beans";
import {getColorTokens} from "../../../utils/storybook-utils";

export default {
  title: "ZList/ZListGroup",
  component: "z-list-group",

  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(ListSize),
    },

    dividerType: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(ListDividerType),
    },

    dividerSize: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(DividerSize),
    },

    dividerColor: {
      options: getColorTokens().map((token) => token.replace("--", "")),

      control: {
        type: "select",
      },
    },

    listType: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(ListType),
    },
  },

  argTypes: {
    size: ListSize.SMALL,
    dividerType: ListDividerType.HEADER,
    dividerSize: DividerSize.SMALL,
    dividerColor: "gray200",
    listType: ListType.NONE,
  },
};

export const ZListGroup = {
  render: (args) => html`
    <z-list>
      <z-list-group
        size=${args.size}
        divider-type=${args.dividerType}
        divider-size=${args.dividerSize}
        divider-color=${args.dividerColor}
        list-type=${args.listType}
      >
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          size=${args.size}
          list-type=${args.listType}
          divider-type=${args.dividerType}
          divider-size=${args.dividerSize}
          divider-color=${args.dividerColor}
          >Elemento 1</z-list-element
        >
        <z-list-element
          size=${args.size}
          list-type=${args.listType}
          divider-type=${args.dividerType}
          divider-size=${args.dividerSize}
          divider-color=${args.dividerColor}
          >Elemento 2</z-list-element
        >
        <z-list-element
          size=${args.size}
          list-type=${args.listType}
          divider-type=${args.dividerType}
          divider-size=${args.dividerSize}
          divider-color=${args.dividerColor}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group
        size=${args.size}
        divider-type=${args.dividerType}
        divider-size=${args.dividerSize}
        divider-color=${args.dividerColor}
        list-type=${args.listType}
      >
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          size=${args.size}
          list-type=${args.listType}
          divider-type=${args.dividerType}
          divider-size=${args.dividerSize}
          divider-color=${args.dividerColor}
          >Elemento 1</z-list-element
        >
        <z-list-element
          size=${args.size}
          list-type=${args.listType}
          divider-type=${args.dividerType}
          divider-size=${args.dividerSize}
          divider-color=${args.dividerColor}
          >Elemento 2</z-list-element
        >
        <z-list-element
          size=${args.size}
          list-type=${args.listType}
          divider-type=${args.dividerType}
          divider-size=${args.dividerSize}
          divider-color=${args.dividerColor}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list>
  `,

  name: "z-list-group",
};
