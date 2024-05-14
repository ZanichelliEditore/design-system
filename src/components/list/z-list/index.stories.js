import {html} from "lit";
import {DividerSize, ListSize, ListDividerType, ListType} from "../../../beans";

export default {
  title: "ZList/ZList",
  component: "z-list",

  argTypes: {
    size: {
      control: {
        type: "select",
      },

      options: Object.values(ListSize),
    },

    listType: {
      control: {
        type: "select",
      },

      options: Object.values(ListType),
    },
  },

  args: {
    size: ListSize.MEDIUM,
    listType: ListType.NONE,
  },
};

export const ZListSimple = {
  render: (args) => html`
    <z-list
      list-type=${args.listType}
      size=${args.size}
    >
      <z-list-element
        list-type=${args.listType}
        size=${args.size}
        >Elemento 1</z-list-element
      >
      <z-list-element
        list-type=${args.listType}
        size=${args.size}
        >Elemento 2</z-list-element
      >
      <z-list-element
        list-type=${args.listType}
        size=${args.size}
        >Elemento 3</z-list-element
      >
    </z-list>
  `,

  name: "z-list-simple",
};

export const ZListWithHeaderDivider = {
  render: (args) =>
    html`<z-list>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group divider-type="header">
        <div slot="header-title">Gruppo 2</div>
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list> `,

  name: "z-list-with-header-divider",
};

export const ZListWithElementDivider = {
  render: (args) =>
    html`<z-list>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 1</div>
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
      <z-list-group divider-type="element">
        <div slot="header-title">Gruppo 2</div>
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 1</z-list-element
        >
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 2</z-list-element
        >
        <z-list-element
          list-type=${args.listType}
          size=${args.size}
          >Elemento 3</z-list-element
        >
      </z-list-group>
    </z-list>`,

  name: "z-list-with-element-divider",
};

export const ZListWithClickableElements = {
  render: (args) =>
    html`<z-list>
      <z-list-group>
        <z-list-element clickable>Elemento 1</z-list-element>
        <z-list-element clickable>Elemento 2</z-list-element>
        <z-list-element clickable>Elemento 3</z-list-element>
      </z-list-group>
    </z-list>`,

  name: "z-list-with-clickable-elements",
};

export const ZListWithExpandableElements = {
  render: (args) =>
    html`<z-list size="large">
      <z-list-group divider-type="element">
        <z-list-element
          expandable
          align-button="left"
          expandable-style="accordion"
          ><span>Elemento 1</span><span slot="inner-content">INNER CONTENT 1 BUTTON LEFT</span></z-list-element
        >
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
          ><span>Elemento 2</span><span slot="inner-content">INNER CONTENT 2</span></z-list-element
        >
        <z-list-element
          expandable
          align-button="right"
          expandable-style="menu"
          ><span>Elemento 3</span><span slot="inner-content">INNER CONTENT 3</span></z-list-element
        >
      </z-list-group>
    </z-list>`,

  name: "z-list-with-expandable-elements",
};

export const ZListWithUnorderedIndex = {
  render: (args) =>
    html`<z-list list-type="unordered">
      <z-list-element list-type="unordered">Elemento 1</z-list-element>
      <z-list-element list-type="unordered">Elemento 2</z-list-element>
      <z-list-element list-type="unordered">Elemento 3</z-list-element>
    </z-list>`,

  name: "z-list-with-unordered-index",

  parameters: {
    controls: {
      exclude: ["size", "listType"],
    },
  },
};

export const ZListWithOrderedIndex = {
  render: (args) =>
    html`<z-list list-type="ordered">
      <z-list-element list-type="ordered">Elemento 1</z-list-element>
      <z-list-element list-type="ordered">Elemento 2</z-list-element>
      <z-list-element list-type="ordered">Elemento 3</z-list-element>
    </z-list>`,

  name: "z-list-with-ordered-index",

  parameters: {
    controls: {
      exclude: ["size", "listType"],
    },
  },
};
