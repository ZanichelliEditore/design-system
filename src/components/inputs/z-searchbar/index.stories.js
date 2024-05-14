import {html} from "lit";
import {ControlSize, ButtonVariant} from "../../../beans";

export default {
  title: "ZSearchbar",
  component: "z-searchbar",

  argTypes: {
    "preventSubmit": {
      control: {
        type: "boolean",
      },
    },

    "showSearchButton": {
      control: {
        type: "boolean",
      },
    },

    "searchButtonIconOnly": {
      control: {
        type: "boolean",
      },
    },

    "autocomplete": {
      control: {
        type: "boolean",
      },
    },

    "autocompleteMinChars": {
      control: {
        type: "number",
      },
    },

    "resultsCount": {
      control: {
        type: "number",
      },
    },

    "resultsEllipsis": {
      control: {
        type: "boolean",
      },
    },

    "searchHelperLabel": {
      control: {
        type: "text",
      },
    },

    "resultsItems": {
      control: {
        type: "object",
      },
    },

    "sortResultsItems": {
      control: {
        type: "boolean",
      },
    },

    "htmlid": {
      control: {
        type: "text",
      },
    },

    "placeholder": {
      control: {
        type: "text",
      },
    },

    "value": {
      control: {
        type: "text",
      },
    },

    "--z-searchbar-results-height": {
      control: {
        type: "text",
      },
    },

    "--z-searchbar-tag-text-color": {
      control: {
        type: "text",
      },
    },

    "--z-searchbar-tag-bg": {
      control: {
        type: "text",
      },
    },

    "size": {
      control: {
        type: "inline-radio",
      },

      options: Object.values(ControlSize),
    },

    "variant": {
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
    "autocomplete": false,
    "autocompleteMinChars": 3,
    "resultsCount": "",
    "resultsEllipsis": true,
    "searchHelperLabel": "Cerca {searchString}",

    "resultsItems": [
      {
        label: "first item",
      },
      {
        label: "second item",
      },
      {
        label: "third item",
      },
      {
        label: "fourth item",
      },
    ],

    "sortResultsItems": false,
    "htmlid": "myId",
    "placeholder": "my placeholder",
    "value": "",
    "--z-searchbar-results-height": "",
    "--z-searchbar-tag-text-color": "var(--color-primary03)",
    "--z-searchbar-tag-bg": "var(--color-hover-primary)",
    "size": ControlSize.BIG,
    "variant": ButtonVariant.PRIMARY,
  },
};

export const ZSearchbar = {
  render: (args) => html`
    <z-searchbar
      prevent-submit=${args.preventSubmit}
      show-search-button=${args.showSearchButton}
      search-button-icon-only=${args.searchButtonIconOnly}
      autocomplete=${args.autocomplete}
      autocomplete-min-chars=${args.autocompleteMinChars}
      results-count=${args.resultsCount}
      results-ellipsis=${args.resultsEllipsis}
      search-helper-label=${args.searchHelperLabel}
      results-items=${JSON.stringify(args.resultsItems)}
      sort-results-items=${JSON.stringify(args.sortResultsItems)}
      value=${args.value}
      placeholder=${args.placeholder}
      htmlid=${args.htmlid}
      style="--z-searchbar-results-height: ${args["--z-searchbar-results-height"]}"
      size=${args.size}
      variant=${args.variant}
    ></z-searchbar>
  `,

  name: "z-searchbar",
};

export const ZSearchbarSimpleSearch = {
  render: (args) => html`
    <z-searchbar
      prevent-submit="false"
      show-search-button=${args.showSearchButton}
      search-button-icon-only=${args.searchButtonIconOnly}
      autcomplete="false"
      value=${args.value}
      placeholder=${args.placeholder}
      htmlid=${args.htmlid}
      size=${args.size}
    ></z-searchbar>
  `,

  name: "z-searchbar - simple search",

  parameters: {
    controls: {
      include: ["value", "placeholder", "htmlid", "size"],
    },
  },

  args: {
    htmlid: "myIdSimple",
  },
};

export const ZSearchbarAutocomplete = {
  render: (args) => html`
    <z-searchbar
      prevent-submit=${args.preventSubmit}
      show-search-button=${args.showSearchButton}
      search-button-icon-only=${args.searchButtonIconOnly}
      autocomplete=${args.autocomplete}
      autocomplete-min-chars=${args.autocompleteMinChars}
      results-count=${args.resultsCount}
      results-ellipsis=${args.resultsEllipsis}
      search-helper-label=${args.searchHelperLabel}
      results-items=${JSON.stringify(args.resultsItems)}
      sort-results-items=${JSON.stringify(args.sortResultsItems)}
      value=${args.value}
      placeholder=${args.placeholder}
      htmlid=${args.htmlid}
      style="--z-searchbar-results-height: ${args["--z-searchbar-results-height"]}"
      size=${args.size}
      variant=${args.variant}
    ></z-searchbar>
  `,

  name: "z-searchbar - autocomplete",

  args: {
    autocomplete: true,
    htmlid: "myIdAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,
  },
};

export const ZSearchbarAutocompleteWithComplexItems = {
  render: (args) => html`
    <z-searchbar
      prevent-submit=${args.preventSubmit}
      show-search-button=${args.showSearchButton}
      search-button-icon-only=${args.searchButtonIconOnly}
      autocomplete=${args.autocomplete}
      autocomplete-min-chars=${args.autocompleteMinChars}
      results-count=${args.resultsCount}
      results-ellipsis=${args.resultsEllipsis}
      search-helper-label=${args.searchHelperLabel}
      results-items=${JSON.stringify(args.resultsItems)}
      sort-results-items=${JSON.stringify(args.sortResultsItems)}
      value=${args.value}
      placeholder=${args.placeholder}
      htmlid=${args.htmlid}
      style="--z-searchbar-results-height: ${args[
        "--z-searchbar-results-height"
      ]}; --z-searchbar-tag-text-color: ${args["--z-searchbar-tag-text-color"]}; --z-searchbar-tag-bg: ${args[
        "--z-searchbar-tag-bg"
      ]}"
      size=${args.size}
      variant=${args.variant}
    ></z-searchbar>
  `,

  name: "z-searchbar - autocomplete with complex items",

  args: {
    autocomplete: true,
    htmlid: "myIdGroupedAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,

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
};
