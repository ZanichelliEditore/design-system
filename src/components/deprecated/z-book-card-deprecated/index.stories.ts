import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {ZBookCardDeprecated} from ".";
import {BookCardDeprecatedVariant} from "../../../beans";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../../utils/storybook-utils";
import "../../z-button/index";
import "../../z-icon/index";
import "../../z-tag/index";
import "./index";

type ZBookCardStoriesArgs = ZBookCardDeprecated &
  CSSVarsArguments<
    | "z-book-card-ribbon-background-color"
    | "z-book-card-ribbon-shadow-color"
    | "z-book-card-compact-width"
    | "z-book-card-compact-height"
  >;
const StoryMeta = {
  title: "Deprecated/ZBookCardDeprecated",
  component: "z-book-card",
  argTypes: {
    "variant": {
      control: {
        type: "inline-radio",
      },
      options: Object.values(BookCardDeprecatedVariant),
    },
    "--z-book-card-ribbon-background-color": getColorTokenArgConfig(),
    "--z-book-card-ribbon-shadow-color": getColorTokenArgConfig(),
  },
  args: {
    "variant": BookCardDeprecatedVariant.EXPANDED,
    "cover": "https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808490056.jpg",
    "operaTitle": "Matematica.azzurro",
    "volumeTitle": "Volume 3 con Tutor",
    "authors": "Massimo Bergamini, Anna Trifone, Graziella Barozzi",
    "isbn": "9788808930552",
    "isbnLabel": "",
    "ribbon": "ADOTTATO",
    "ribbonIcon": "",
    "ribbonInteractive": false,
    "borderless": false,
    "fallbackCover": "https://staticmy.zanichelli.it/copertine/dashboard/Dashboard_Book_Placeholder.jpg",
    "operaTitleTag": "h1",
    "--z-book-card-ribbon-background-color": "var(--avatar-C08)",
    "--z-book-card-ribbon-shadow-color": "var(--green950)",
    "--z-book-card-compact-width": "262px",
    "--z-book-card-compact-height": "600px",
  },
} satisfies Meta<ZBookCardStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZBookCardStoriesArgs>;

export const AllProps = {
  parameters: {
    controls: {
      exclude: ["borderless"],
    },
  },
  render: (args) =>
    html`<z-book-card-deprecated
      variant=${args.variant}
      cover=${args.cover}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      authors=${args.authors}
      isbn=${args.isbn}
      isbn-label=${args.isbnLabel}
      ribbon=${args.ribbon}
      ribbon-icon=${args.ribbonIcon}
      ribbon-interactive=${args.ribbonInteractive}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      style=${styleMap({
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      })}
    ></z-book-card-deprecated>`,
} satisfies Story;

export const SlottedTags = {
  parameters: {
    controls: {
      exclude: ["borderless"],
    },
  },
  render: (args) =>
    html`<z-book-card-deprecated
      variant=${args.variant}
      cover=${args.cover}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      authors=${args.authors}
      isbn=${args.isbn}
      isbn-label=${args.isbnLabel}
      ribbon=${args.ribbon}
      ribbon-icon=${args.ribbonIcon}
      ribbon-interactive=${args.ribbonInteractive}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      style=${styleMap({
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      })}
    >
      <z-tag
        slot="tags"
        style="--z-tag-bg: var(--avatar-C18)"
        >EDI</z-tag
      >
      <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
    </z-book-card-deprecated>`,
} satisfies Story;

export const SlottedResources = {
  parameters: {
    controls: {
      exclude: ["borderless"],
    },
  },
  render: (args) =>
    html`<z-book-card-deprecated
      variant=${args.variant}
      cover=${args.cover}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      authors=${args.authors}
      isbn=${args.isbn}
      isbn-label=${args.isbnLabel}
      ribbon=${args.ribbon}
      ribbon-icon=${args.ribbonIcon}
      ribbon-interactive=${args.ribbonInteractive}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      style=${styleMap({
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      })}
    >
      <a
        class="z-link z-link-blue z-link-icon"
        slot="resources"
        style="width:100%; margin-bottom: 6px;"
      >
        <z-icon
          style="margin-right: 8px"
          name="arrow-quad-north-east"
        ></z-icon>
        Resource link mock
      </a>
      <z-button
        slot="resources"
        variant="secondary"
        size="x-small"
        style="width:100%; margin-bottom: 16px;"
        >Resource CTA mock</z-button
      >
    </z-book-card-deprecated>`,
} satisfies Story;

export const SlottedHeaderCta = {
  parameters: {
    controls: {
      exclude: ["borderless"],
    },
  },
  render: (args) =>
    html`<z-book-card-deprecated
      variant=${args.variant}
      cover=${args.cover}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      authors=${args.authors}
      isbn=${args.isbn}
      isbn-label=${args.isbnLabel}
      ribbon=${args.ribbon}
      ribbon-icon=${args.ribbonIcon}
      ribbon-interactive=${args.ribbonInteractive}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      style=${styleMap({
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      })}
    >
      <z-icon
        name="star-empty"
        slot="header-cta"
      ></z-icon>
    </z-book-card-deprecated>`,
} satisfies Story;

export const SlottedFooterCta = {
  parameters: {
    controls: {
      exclude: ["borderless"],
    },
  },
  render: (args) =>
    html`<z-book-card-deprecated
      variant=${args.variant}
      cover=${args.cover}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      authors=${args.authors}
      isbn=${args.isbn}
      isbn-label=${args.isbnLabel}
      ribbon=${args.ribbon}
      ribbon-icon=${args.ribbonIcon}
      ribbon-interactive=${args.ribbonInteractive}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      style=${styleMap({
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      })}
    >
      <z-icon
        name="star-empty"
        slot="header-cta"
      ></z-icon>
      <div slot="footer-cta">
        <z-button
          href="http://dizionari.zanichelli.it"
          target="_blank"
          variant="secondary"
          size="x-small"
        >
          Leggi il libro online
        </z-button>
      </div>
    </z-book-card-deprecated>`,
} satisfies Story;

export const ExpandedVariant = {
  parameters: {
    controls: {
      exclude: ["variant", "borderless", "theme", "--z-book-card-compact-width", "--z-book-card-compact-height"],
    },
  },
  render: (args) =>
    html`<z-book-card-deprecated
      variant="expanded"
      cover=${args.cover}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      authors=${args.authors}
      isbn=${args.isbn}
      isbn-label=${args.isbnLabel}
      ribbon=${args.ribbon}
      ribbon-icon=${args.ribbonIcon}
      ribbon-interactive=${args.ribbonInteractive}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      style=${styleMap({
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
      })}
    >
      <z-tag
        slot="tags"
        style="--z-tag-bg: var(--avatar-C18)"
        >EDI</z-tag
      >
      <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
      <a
        class="z-link z-link-blue z-link-icon"
        slot="resources"
        style="width:100%; margin-bottom: 6px;"
      >
        <z-icon
          style="margin-right: 8px"
          name="arrow-quad-north-east"
        ></z-icon>
        Resource link mock
      </a>
      <z-button
        slot="resources"
        variant="secondary"
        size="x-small"
        style="width:100%; margin-bottom: 16px;"
        >Resource CTA mock</z-button
      >
      <z-icon
        name="star-empty"
        slot="header-cta"
        tabindex="0"
      ></z-icon>
    </z-book-card-deprecated>`,
} satisfies Story;

export const SearchVariant = {
  parameters: {
    controls: {
      exclude: ["variant", "borderless", "theme", "--z-book-card-compact-width", "--z-book-card-compact-height"],
    },
  },
  render: (args) =>
    html`<z-book-card-deprecated
      variant="search"
      cover=${args.cover}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      authors=${args.authors}
      isbn=${args.isbn}
      isbn-label=${args.isbnLabel}
      ribbon=${args.ribbon}
      ribbon-icon=${args.ribbonIcon}
      ribbon-interactive=${args.ribbonInteractive}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      style=${styleMap({
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
      })}
    >
      <z-icon
        name="star-empty"
        slot="header-cta"
      ></z-icon>
      <z-tag
        slot="tags"
        style="--z-tag-bg: var(--avatar-C18)"
        >EDI</z-tag
      >
      <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
      <div slot="footer-cta">
        <z-button
          href="http://dizionari.zanichelli.it"
          target="_blank"
          variant="secondary"
          size="x-small"
        >
          Leggi il libro online
        </z-button>
      </div>
    </z-book-card-deprecated>`,
} satisfies Story;

export const CompactVariant = {
  parameters: {
    controls: {
      exclude: [
        "variant",
        "ribbon",
        "ribbonIcon",
        "ribbonInteractive",
        "--z-book-card-ribbon-background-color",
        "--z-book-card-ribbon-shadow-color",
      ],
    },
  },
  render: (args) =>
    html`<z-book-card-deprecated
      variant="compact"
      cover=${args.cover}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      borderless=${args.borderless}
      authors=${args.authors}
      isbn=${args.isbn}
      isbn-label=${args.isbnLabel}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      style=${styleMap({
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      })}
    >
      <z-icon
        name="star-empty"
        slot="header-cta"
      ></z-icon>
      <z-tag
        slot="tags"
        style="--z-tag-bg: var(--avatar-C18)"
        >EDI</z-tag
      >
      <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
      <div
        slot="footer-cta"
        style="display:flex; gap:8px;"
      >
        <z-button
          href="http://dizionari.zanichelli.it"
          target="_blank"
          variant="secondary"
          size="x-small"
        >
          Call to action
        </z-button>
        <z-button
          icon="arrow-quad-north-east"
          variant="secondary"
          size="x-small"
        ></z-button>
      </div>
    </z-book-card-deprecated>`,
} satisfies Story;
