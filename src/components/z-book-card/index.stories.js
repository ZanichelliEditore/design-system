import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {BookCardVariant} from "../../beans";

export default {
  title: "ZBookCard",
  component: "z-book-card",

  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(BookCardVariant),
    },
  },

  args: {
    "variant": "expanded",
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
    "theme": "",
    "--z-book-card-ribbon-background-color": "var(--avatar-C08)",
    "--z-book-card-ribbon-shadow-color": "var(--green950)",
    "--z-book-card-compact-width": "262px",
    "--z-book-card-compact-height": "600px",
  },
};

export const AllProps = {
  render: (args) =>
    html`<z-book-card
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
      borderless=${args.borderless}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      class=${args.theme}
      style=${styleMap({
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      })}
    ></z-book-card>`,

  name: "All props",
};

export const SlottedTags = {
  render: (args) =>
    html`<z-book-card
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
      borderless=${args.borderless}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      class=${args.theme}
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
    </z-book-card>`,

  name: "Slotted tags",
};

export const SlottedResources = {
  render: (args) =>
    html`<z-book-card
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
      borderless=${args.borderless}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      class=${args.theme}
      style=${styleMap({
        "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
        "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
        "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
        "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
      })}
    >
      <a
        class="z-link z-link-icon"
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
    </z-book-card>`,

  name: "Slotted resources",
};

export const SlottedHeaderCta = {
  render: (args) =>
    html`<z-book-card
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
      borderless=${args.borderless}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      class=${args.theme}
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
    </z-book-card>`,

  name: "Slotted header CTA",
};

export const SlottedFooterCta = {
  render: (args) =>
    html`<z-book-card
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
      borderless=${args.borderless}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      class=${args.theme}
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
    </z-book-card>`,

  name: "Slotted footer CTA",
};

export const ExpandedVariant = {
  render: (args) =>
    html`<z-book-card
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
        class="z-link z-link-icon"
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
    </z-book-card>`,

  name: "Expanded variant",

  parameters: {
    controls: {
      exclude: ["variant", "borderless", "theme", "--z-book-card-compact-width", "--z-book-card-compact-height"],
    },
  },
};

export const SearchVariant = {
  render: (args) =>
    html`<z-book-card
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
    </z-book-card>`,

  name: "Search variant",

  parameters: {
    controls: {
      exclude: ["variant", "borderless", "theme", "--z-book-card-compact-width", "--z-book-card-compact-height"],
    },
  },
};

export const CompactVariant = {
  render: (args) =>
    html`<z-book-card
      variant="compact"
      cover=${args.cover}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      authors=${args.authors}
      isbn=${args.isbn}
      isbn-label=${args.isbnLabel}
      borderless=${args.borderless}
      fallback-cover=${args.fallbackCover}
      opera-title-tag=${args.operaTitleTag}
      class=${args.theme}
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
    </z-book-card>`,

  name: "Compact variant",

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
};
