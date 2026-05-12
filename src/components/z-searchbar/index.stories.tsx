import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ButtonVariant, ControlSize} from "../../beans";
import {CSSVarsArguments, extractCSSVars} from "../../utils/storybook-utils";
import {ZSearchbar} from "./index";

type ZSearchbarStoriesArgs = ZSearchbar &
  CSSVarsArguments<"--z-searchbar-results-height" | "--z-searchbar-tag-text-color" | "--z-searchbar-tag-bg">;

const StoryMeta = {
  title: "ZSearchbar",
  component: ZSearchbar,
  argTypes: {
    size: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ControlSize),
    },
    variant: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ButtonVariant),
    },
  },
  args: {
    "preventSubmit": false,
    "showSearchButton": false,
    "searchButtonIconOnly": false,
    "searchButtonLabel": "",
    "autocomplete": false,
    "autocompleteMinChars": 3,
    "resultsCount": undefined,
    "searchHelperLabel": "Cerca {searchString}",
    "resultsItems": [{label: "first item"}, {label: "second item"}, {label: "third item"}, {label: "fourth item"}],
    "sortResultsItems": false,
    "htmlid": "myId",
    "placeholder": "my placeholder",
    "value": "",
    "label": "",
    "htmlAriaLabel": "",
    "--z-searchbar-results-height": "540px",
    "--z-searchbar-tag-text-color": "var(--color-primary03)",
    "--z-searchbar-tag-bg": "var(--color-hover-primary)",
    "size": ControlSize.BIG,
    "variant": ButtonVariant.PRIMARY,
  },
  render: (args) => (
    <z-searchbar
      {...args}
      resultsItems={JSON.stringify(args.resultsItems)}
      style={extractCSSVars(args)}
    ></z-searchbar>
  ),
} satisfies Meta<ZSearchbarStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZSearchbarStoriesArgs>;

export const Default = {} satisfies Story;

export const SimpleSearch = {
  parameters: {
    controls: {
      include: ["value", "placeholder", "htmlid", "size", "label", "htmlAriaLabel"],
    },
  },
  args: {
    htmlid: "myIdSimple",
    preventSubmit: false,
    autocomplete: false,
  },
} satisfies Story;

export const Autocomplete = {
  args: {
    autocomplete: true,
    htmlid: "myIdAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,
    searchButtonLabel: "Cliccami",
  },
} satisfies Story;

export const AutocompleteWithComplexItems = {
  args: {
    autocomplete: true,
    htmlid: "myIdGroupedAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,
    searchButtonLabel: "Cliccami",
    resultsItems: [
      {
        label: "first item",
        icon: "download",
        tag: {
          text: "Riservato all'insegnante",
          icon: "teacher",
        },
        category: "Category A",
        subcategory: "Subcategory A1",
      },
      {
        label: "second item",
        icon: "collezioni",
        category: "Category B",
        subcategory: "Subcategory B1",
      },
      {
        label: "third item",
        icon: "dictonary",
        category: "Category A",
        subcategory: "Subcategory A2",
      },
      {
        label: "fourth item",
        icon: "exercises-online",
        category: "Category A",
        subcategory: "Subcategory A1",
      },
      {
        label: "fifth item",
        icon: "interactives-maps",
        category: "Category A",
        subcategory: "Subcategory A1",
      },
      {
        label: "sixth item",
        icon: "textual-analysis",
        category: "Category B",
        subcategory: "Subcategory B1",
      },
    ],
  },
} satisfies Story;

export const AutocompleteWithComplexTreeItems = {
  args: {
    autocomplete: true,
    htmlid: "myIdGroupedAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,
    searchButtonLabel: "Cliccami",
    resultsItems: [
      {
        label: "first item",
        icon: "download",
        tag: {
          text: "Riservato all'insegnante",
          icon: "teacher",
        },
        category: "Category A",
        subcategory: "Subcategory A1",
        children: [
          {
            label: "first item - first child",
            icon: "download",
            tag: {
              text: "Riservato all'insegnante",
              icon: "teacher",
            },
            children: [
              {
                label:
                  "first item - first child - first child lunghissssssssssssssss sssssssssssssssssss ssssssssssssssssssssssssssssss ssssssssssssssssssssssssssssssssssssssssssssssssssssimo",
                icon: "download",
                tag: {
                  text: "Riservato all'insegnante",
                  icon: "teacher",
                },
              },
              {
                label: "first item - first child - second child",
                icon: "download",
                tag: {
                  text: "Riservato all'insegnante",
                  icon: "teacher",
                },
              },
              {
                label: "first item - first child - third child",
                icon: "download",
                tag: {
                  text: "Riservato all'insegnante",
                  icon: "teacher",
                },
              },
            ],
          },
          {
            label: "first item - second child",
            icon: "download",
            tag: {
              text: "Riservato all'insegnante",
              icon: "teacher",
            },
          },
        ],
      },
      {
        label: "second item",
        icon: "collezioni",
        category: "Category B",
        subcategory: "Subcategory B1",
      },
      {
        label: "third item",
        icon: "dictonary",
        category: "Category A",
        subcategory: "Subcategory A2",
      },
      {
        label: "fourth item",
        icon: "exercises-online",
        category: "Category A",
        subcategory: "Subcategory A1",
      },
      {
        label: "fifth item",
        icon: "interactives-maps",
        category: "Category A",
        subcategory: "Subcategory A1",
        children: [
          {
            label: "fifth item - first child",
            icon: "download",
            tag: {
              text: "Riservato all'insegnante",
              icon: "teacher",
            },
          },
          {
            label: "fifth item - second child",
            icon: "download",
            tag: {
              text: "Riservato all'insegnante",
              icon: "teacher",
            },
          },
        ],
      },
      {
        label: "sixth item",
        icon: "textual-analysis",
        category: "Category B",
        subcategory: "Subcategory B1",
      },
    ],
  },
} satisfies Story;
