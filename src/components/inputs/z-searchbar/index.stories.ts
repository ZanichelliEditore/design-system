import {html} from "lit";
import {ControlSize, ButtonVariant} from "../../../beans";
import "./index";
import {Meta, StoryObj} from "@storybook/web-components";
import {ZSearchbar} from "./index";
import {CssVarsArguments} from "../../../utils/storybook-utils";

type ZSearchbarStoriesArgs = ZSearchbar &
  CssVarsArguments<"--z-searchbar-results-height" | "--z-searchbar-tag-text-color" | "--z-searchbar-tag-bg">;

const StoryMeta = {
  title: "ZSearchbar",
  component: "z-searchbar",
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
    "autocomplete": false,
    "autocompleteMinChars": 3,
    "resultsCount": null,
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
} satisfies Meta<ZSearchbarStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZSearchbarStoriesArgs>;

export const Default = {
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
} satisfies Story;

export const SimpleSearch = {
  parameters: {
    controls: {
      include: ["value", "placeholder", "htmlid", "size"],
    },
  },
  args: {
    htmlid: "myIdSimple",
  },
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
} satisfies Story;

export const Autocomplete = {
  args: {
    autocomplete: true,
    htmlid: "myIdAutocomplete",
    showSearchButton: false,
    searchButtonIconOnly: false,
  },
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
} satisfies Story;

export const AutocompleteWithComplexItems = {
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
} satisfies Story;
