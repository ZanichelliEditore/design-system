import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {BookCardDeprecatedVariant, ButtonVariant, ControlSize} from "../../../beans";
import {CSSVarsArguments, getColorTokenArgConfig} from "../../../utils/storybook-utils";
import {ZBookCardDeprecated} from "./index";

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
  render: (args) => (
    <z-book-card-deprecated
      variant={args.variant}
      cover={args.cover}
      opera-title={args.operaTitle}
      volume-title={args.volumeTitle}
      authors={args.authors}
      isbn={args.isbn}
      isbn-label={args.isbnLabel}
      ribbon={args.ribbon}
      ribbon-icon={args.ribbonIcon}
      ribbon-interactive={args.ribbonInteractive}
      fallback-cover={args.fallbackCover}
      opera-title-tag={args.operaTitleTag}
      style={{
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      }}
    ></z-book-card-deprecated>
  ),
} satisfies Story;

export const SlottedTags = {
  parameters: {
    controls: {
      exclude: ["borderless"],
    },
  },
  render: (args) => (
    <z-book-card-deprecated
      variant={args.variant}
      cover={args.cover}
      opera-title={args.operaTitle}
      volume-title={args.volumeTitle}
      authors={args.authors}
      isbn={args.isbn}
      isbn-label={args.isbnLabel}
      ribbon={args.ribbon}
      ribbon-icon={args.ribbonIcon}
      ribbon-interactive={args.ribbonInteractive}
      fallback-cover={args.fallbackCover}
      opera-title-tag={args.operaTitleTag}
      style={{
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      }}
    >
      <z-tag
        slot="tags"
        style={{"--z-tag-bg": "var(--avatar-C18)"}}
      >
        EDI
      </z-tag>
      <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
    </z-book-card-deprecated>
  ),
} satisfies Story;

export const SlottedResources = {
  parameters: {
    controls: {
      exclude: ["borderless"],
    },
  },
  render: (args) => (
    <z-book-card-deprecated
      variant={args.variant}
      cover={args.cover}
      opera-title={args.operaTitle}
      volume-title={args.volumeTitle}
      authors={args.authors}
      isbn={args.isbn}
      isbn-label={args.isbnLabel}
      ribbon={args.ribbon}
      ribbon-icon={args.ribbonIcon}
      ribbon-interactive={args.ribbonInteractive}
      fallback-cover={args.fallbackCover}
      opera-title-tag={args.operaTitleTag}
      style={{
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      }}
    >
      <a
        class="z-link z-link-blue z-link-icon"
        slot="resources"
        style={{width: "100%", marginBottom: "6px"}}
      >
        <z-icon
          style={{marginRight: "8px"}}
          name="arrow-quad-north-east"
        ></z-icon>
        Resource link mock
      </a>
      <z-button
        slot="resources"
        variant={ButtonVariant.SECONDARY}
        size={ControlSize.X_SMALL}
        style={{width: "100%", marginBottom: "16px"}}
      >
        Resource CTA mock
      </z-button>
    </z-book-card-deprecated>
  ),
} satisfies Story;

export const SlottedHeaderCta = {
  parameters: {
    controls: {
      exclude: ["borderless"],
    },
  },
  render: (args) => (
    <z-book-card-deprecated
      variant={args.variant}
      cover={args.cover}
      operaTitle={args.operaTitle}
      volumeTitle={args.volumeTitle}
      authors={args.authors}
      isbn={args.isbn}
      isbnLabel={args.isbnLabel}
      ribbon={args.ribbon}
      ribbonIcon={args.ribbonIcon}
      ribbonInteractive={args.ribbonInteractive}
      fallbackCover={args.fallbackCover}
      operaTitleTag={args.operaTitleTag}
      style={{
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      }}
    >
      <z-icon
        name="star-empty"
        slot="header-cta"
      ></z-icon>
    </z-book-card-deprecated>
  ),
} satisfies Story;

export const SlottedFooterCta = {
  parameters: {
    controls: {
      exclude: ["borderless"],
    },
  },
  render: (args) => (
    <z-book-card-deprecated
      variant={args.variant}
      cover={args.cover}
      operaTitle={args.operaTitle}
      volumeTitle={args.volumeTitle}
      authors={args.authors}
      isbn={args.isbn}
      isbnLabel={args.isbnLabel}
      ribbon={args.ribbon}
      ribbonIcon={args.ribbonIcon}
      ribbonInteractive={args.ribbonInteractive}
      fallbackCover={args.fallbackCover}
      operaTitleTag={args.operaTitleTag}
      style={{
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      }}
    >
      <z-icon
        name="star-empty"
        slot="header-cta"
      ></z-icon>
      <div slot="footer-cta">
        <z-button
          href="http://dizionari.zanichelli.it"
          target="_blank"
          variant={ButtonVariant.SECONDARY}
          size={ControlSize.X_SMALL}
        >
          Leggi il libro online
        </z-button>
      </div>
    </z-book-card-deprecated>
  ),
} satisfies Story;

export const ExpandedVariant = {
  parameters: {
    controls: {
      exclude: ["variant", "borderless", "theme", "--z-book-card-compact-width", "--z-book-card-compact-height"],
    },
  },
  render: (args) => (
    <z-book-card-deprecated
      variant={BookCardDeprecatedVariant.EXPANDED}
      cover={args.cover}
      operaTitle={args.operaTitle}
      volumeTitle={args.volumeTitle}
      authors={args.authors}
      isbn={args.isbn}
      isbnLabel={args.isbnLabel}
      ribbon={args.ribbon}
      ribbonIcon={args.ribbonIcon}
      ribbonInteractive={args.ribbonInteractive}
      fallbackCover={args.fallbackCover}
      operaTitleTag={args.operaTitleTag}
      style={{
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
      }}
    >
      <z-tag
        slot="tags"
        style={{"--z-tag-bg": "var(--avatar-C18)"}}
      >
        EDI
      </z-tag>
      <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
      <a
        class="z-link z-link-blue z-link-icon"
        slot="resources"
        style={{width: "100%", marginBottom: "6px"}}
      >
        <z-icon
          style={{marginRight: "8px"}}
          name="arrow-quad-north-east"
        ></z-icon>
        Resource link mock
      </a>
      <z-button
        slot="resources"
        variant={ButtonVariant.SECONDARY}
        size={ControlSize.X_SMALL}
        style={{width: "100%", marginBottom: "16px"}}
      >
        Resource CTA mock
      </z-button>
      <z-icon
        name="star-empty"
        slot="header-cta"
        tabindex="0"
      ></z-icon>
    </z-book-card-deprecated>
  ),
} satisfies Story;

export const SearchVariant = {
  parameters: {
    controls: {
      exclude: ["variant", "borderless", "theme", "--z-book-card-compact-width", "--z-book-card-compact-height"],
    },
  },
  render: (args) => (
    <z-book-card-deprecated
      variant={BookCardDeprecatedVariant.SEARCH}
      cover={args.cover}
      operaTitle={args.operaTitle}
      volumeTitle={args.volumeTitle}
      authors={args.authors}
      isbn={args.isbn}
      isbnLabel={args.isbnLabel}
      ribbon={args.ribbon}
      ribbonIcon={args.ribbonIcon}
      ribbonInteractive={args.ribbonInteractive}
      fallbackCover={args.fallbackCover}
      operaTitleTag={args.operaTitleTag}
      style={{
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
      }}
    >
      <z-icon
        name="star-empty"
        slot="header-cta"
      ></z-icon>
      <z-tag
        slot="tags"
        style={{"--z-tag-bg": "var(--avatar-C18)"}}
      >
        EDI
      </z-tag>
      <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
      <div slot="footer-cta">
        <z-button
          href="http://dizionari.zanichelli.it"
          target="_blank"
          variant={ButtonVariant.SECONDARY}
          size={ControlSize.X_SMALL}
        >
          Leggi il libro online
        </z-button>
      </div>
    </z-book-card-deprecated>
  ),
} satisfies Story;

export const CompactVariant = {
  parameters: {
    controls: {
      exclude: [
        "variant",
        "ribbon",
        "ribbon-icon",
        "ribbon-interactive",
        "--z-book-card-ribbon-background-color",
        "--z-book-card-ribbon-shadow-color",
      ],
    },
  },
  render: (args) => (
    <z-book-card-deprecated
      variant={BookCardDeprecatedVariant.COMPACT}
      cover={args.cover}
      operaTitle={args.operaTitle}
      volumeTitle={args.volumeTitle}
      borderless={args.borderless}
      authors={args.authors}
      isbn={args.isbn}
      isbnLabel={args.isbnLabel}
      fallbackCover={args.fallbackCover}
      operaTitleTag={args.operaTitleTag}
      style={{
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      }}
    >
      <z-icon
        name="star-empty"
        slot="header-cta"
      ></z-icon>
      <z-tag
        slot="tags"
        style={{"--z-tag-bg": "var(--avatar-C18)"}}
      >
        EDI
      </z-tag>
      <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
      <div
        slot="footer-cta"
        style={{display: "flex", gap: "8px"}}
      >
        <z-button
          href="http://dizionari.zanichelli.it"
          target="_blank"
          variant={ButtonVariant.SECONDARY}
          size={ControlSize.X_SMALL}
        >
          Call to action
        </z-button>
        <z-button
          icon="arrow-quad-north-east"
          variant={ButtonVariant.SECONDARY}
          size={ControlSize.X_SMALL}
        ></z-button>
      </div>
    </z-book-card-deprecated>
  ),
} satisfies Story;
