import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZBookCard} from ".";
import {BookCardVariant} from "../../beans";
import "../z-book-card-app/index";
import "../z-button/index";
import "../z-icon/index";
import "../z-tag/index";
import "./index";

type ZBookCardStoriesArgs = ZBookCard & {
  theme: "theme-default" | "theme-dark" | "theme-black-yellow";
};

const StoryMeta = {
  title: "ZBookCard",
  component: "z-book-card",
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(BookCardVariant),
    },
    theme: {
      control: {
        type: "inline-radio",
      },
      options: ["theme-default", "theme-dark", "theme-black-yellow"],
    },
  },
  args: {
    variant: BookCardVariant.LANDSCAPE,
    cover: "https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808490056.jpg",
    operaTitle: "Matematica.azzurro",
    volumeTitle: "Volume 3 con Tutor",
    authors: "Massimo Bergamini, Anna Trifone, Graziella Barozzi",
    isbn: "9788808930552",
    tags: '[{"label":"tag1","active":true},{"label":"tag2","active":false}]',
    adoption: true,
    catalogUrl: "https://www.zanichelli.it/ricerca/prodotti/matematica-multimediale-blu3ed?qid=9788808710932",
    ebookUrl: "https://www.zanichelli.it/ricerca",
    fallbackCover: "https://staticmy.zanichelli.it/copertine/dashboard/Dashboard_Book_Placeholder.jpg",
    theme: "theme-default",
  },
} satisfies Meta<ZBookCardStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZBookCardStoriesArgs>;

export const Card = {
  render: (args) =>
    html`<z-book-card
      variant=${args.variant}
      cover=${args.cover}
      authors=${args.authors}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      isbn=${args.isbn}
      tags=${args.tags}
      adoption=${args.adoption}
      catalog-url=${args.catalogUrl}
      ebook-url=${args.ebookUrl}
      fallback-cover=${args.fallbackCover}
      class=${args.theme}
    ></z-book-card>`,
} satisfies Story;

export const WithSlottedContent = {
  render: (args) =>
    html`<z-book-card
      variant=${args.variant}
      cover=${args.cover}
      authors=${args.authors}
      opera-title=${args.operaTitle}
      volume-title=${args.volumeTitle}
      isbn=${args.isbn}
      tags=${args.tags}
      adoption=${args.adoption}
      catalog-url=${args.catalogUrl}
      ebook-url=${args.ebookUrl}
      fallback-cover=${args.fallbackCover}
      class=${args.theme}
    >
      <div slot="cta">
        <z-icon
          style="padding: 4px; cursor: pointer;"
          name="star-full"
          width="20"
          height="20"
        ></z-icon>
      </div>
      <div
        slot="apps"
        style="display: flex; flex-wrap: wrap"
      >
        <z-book-card-app
          icon="https://placehold.co/24"
          name="Tutor di matematica"
          info="test test"
          link="http://localhost"
          style="border-right: 1px solid #d6d6d6; border-bottom: 1px solid #d6d6d6"
        ></z-book-card-app
        ><z-book-card-app
          icon="https://placehold.co/24"
          name="Esercizi"
          info="test test"
          link="http://localhost"
          style="border-bottom: 1px solid #d6d6d6"
        ></z-book-card-app
        ><z-book-card-app
          icon="https://placehold.co/24"
          name="Mappe"
          info="test test"
          link="http://localhost"
          style="border-right: 1px solid #d6d6d6"
        ></z-book-card-app
        ><z-book-card-app
          icon="https://placehold.co/24"
          name="Scrittura"
          info="test test"
          link="http://localhost"
        ></z-book-card-app>
      </div>
    </z-book-card>`,
} satisfies Story;

// export const SlottedResources = {
//   parameters: {
//     controls: {
//       exclude: ["borderless"],
//     },
//   },
//   render: (args) =>
//     html`<z-book-card
//       variant=${args.variant}
//       cover=${args.cover}
//       opera-title=${args.operaTitle}
//       volume-title=${args.volumeTitle}
//       authors=${args.authors}
//       isbn=${args.isbn}
//       isbn-label=${args.isbnLabel}
//       ribbon=${args.ribbon}
//       ribbon-icon=${args.ribbonIcon}
//       ribbon-interactive=${args.ribbonInteractive}
//       fallback-cover=${args.fallbackCover}
//       opera-title-tag=${args.operaTitleTag}
//       class=${args.theme}
//       style=${styleMap({
//         "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
//         "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
//         "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
//         "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
//       })}
//     >
//       <a
//         class="z-link z-link-icon"
//         slot="resources"
//         style="width:100%; margin-bottom: 6px;"
//       >
//         <z-icon
//           style="margin-right: 8px"
//           name="arrow-quad-north-east"
//         ></z-icon>
//         Resource link mock
//       </a>
//       <z-button
//         slot="resources"
//         variant="secondary"
//         size="x-small"
//         style="width:100%; margin-bottom: 16px;"
//         >Resource CTA mock</z-button
//       >
//     </z-book-card>`,
// } satisfies Story;

// export const SlottedHeaderCta = {
//   parameters: {
//     controls: {
//       exclude: ["borderless"],
//     },
//   },
//   render: (args) =>
//     html`<z-book-card
//       variant=${args.variant}
//       cover=${args.cover}
//       opera-title=${args.operaTitle}
//       volume-title=${args.volumeTitle}
//       authors=${args.authors}
//       isbn=${args.isbn}
//       isbn-label=${args.isbnLabel}
//       ribbon=${args.ribbon}
//       ribbon-icon=${args.ribbonIcon}
//       ribbon-interactive=${args.ribbonInteractive}
//       fallback-cover=${args.fallbackCover}
//       opera-title-tag=${args.operaTitleTag}
//       class=${args.theme}
//       style=${styleMap({
//         "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
//         "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
//         "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
//         "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
//       })}
//     >
//       <z-icon
//         name="star-empty"
//         slot="header-cta"
//       ></z-icon>
//     </z-book-card>`,
// } satisfies Story;

// export const SlottedFooterCta = {
//   parameters: {
//     controls: {
//       exclude: ["borderless"],
//     },
//   },
//   render: (args) =>
//     html`<z-book-card
//       variant=${args.variant}
//       cover=${args.cover}
//       opera-title=${args.operaTitle}
//       volume-title=${args.volumeTitle}
//       authors=${args.authors}
//       isbn=${args.isbn}
//       isbn-label=${args.isbnLabel}
//       ribbon=${args.ribbon}
//       ribbon-icon=${args.ribbonIcon}
//       ribbon-interactive=${args.ribbonInteractive}
//       fallback-cover=${args.fallbackCover}
//       opera-title-tag=${args.operaTitleTag}
//       class=${args.theme}
//       style=${styleMap({
//         "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
//         "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
//         "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
//         "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
//       })}
//     >
//       <z-icon
//         name="star-empty"
//         slot="header-cta"
//       ></z-icon>
//       <div slot="footer-cta">
//         <z-button
//           href="http://dizionari.zanichelli.it"
//           target="_blank"
//           variant="secondary"
//           size="x-small"
//         >
//           Leggi il libro online
//         </z-button>
//       </div>
//     </z-book-card>`,
// } satisfies Story;

// export const ExpandedVariant = {
//   parameters: {
//     controls: {
//       exclude: ["variant", "borderless", "theme", "--z-book-card-compact-width", "--z-book-card-compact-height"],
//     },
//   },
//   render: (args) =>
//     html`<z-book-card
//       variant="expanded"
//       cover=${args.cover}
//       opera-title=${args.operaTitle}
//       volume-title=${args.volumeTitle}
//       authors=${args.authors}
//       isbn=${args.isbn}
//       isbn-label=${args.isbnLabel}
//       ribbon=${args.ribbon}
//       ribbon-icon=${args.ribbonIcon}
//       ribbon-interactive=${args.ribbonInteractive}
//       fallback-cover=${args.fallbackCover}
//       opera-title-tag=${args.operaTitleTag}
//       style=${styleMap({
//         "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
//         "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
//       })}
//     >
//       <z-tag
//         slot="tags"
//         style="--z-tag-bg: var(--avatar-C18)"
//         >EDI</z-tag
//       >
//       <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
//       <a
//         class="z-link z-link-icon"
//         slot="resources"
//         style="width:100%; margin-bottom: 6px;"
//       >
//         <z-icon
//           style="margin-right: 8px"
//           name="arrow-quad-north-east"
//         ></z-icon>
//         Resource link mock
//       </a>
//       <z-button
//         slot="resources"
//         variant="secondary"
//         size="x-small"
//         style="width:100%; margin-bottom: 16px;"
//         >Resource CTA mock</z-button
//       >
//       <z-icon
//         name="star-empty"
//         slot="header-cta"
//         tabindex="0"
//       ></z-icon>
//     </z-book-card>`,
// } satisfies Story;

// export const SearchVariant = {
//   parameters: {
//     controls: {
//       exclude: ["variant", "borderless", "theme", "--z-book-card-compact-width", "--z-book-card-compact-height"],
//     },
//   },
//   render: (args) =>
//     html`<z-book-card
//       variant="search"
//       cover=${args.cover}
//       opera-title=${args.operaTitle}
//       volume-title=${args.volumeTitle}
//       authors=${args.authors}
//       isbn=${args.isbn}
//       isbn-label=${args.isbnLabel}
//       ribbon=${args.ribbon}
//       ribbon-icon=${args.ribbonIcon}
//       ribbon-interactive=${args.ribbonInteractive}
//       fallback-cover=${args.fallbackCover}
//       opera-title-tag=${args.operaTitleTag}
//       style=${styleMap({
//         "--z-book-card-ribbon-background-color": `${args["--z-book-card-ribbon-background-color"]}`,
//         "--z-book-card-ribbon-shadow-color": `${args["--z-book-card-ribbon-shadow-color"]}`,
//       })}
//     >
//       <z-icon
//         name="star-empty"
//         slot="header-cta"
//       ></z-icon>
//       <z-tag
//         slot="tags"
//         style="--z-tag-bg: var(--avatar-C18)"
//         >EDI</z-tag
//       >
//       <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
//       <div slot="footer-cta">
//         <z-button
//           href="http://dizionari.zanichelli.it"
//           target="_blank"
//           variant="secondary"
//           size="x-small"
//         >
//           Leggi il libro online
//         </z-button>
//       </div>
//     </z-book-card>`,
// } satisfies Story;

// export const CompactVariant = {
//   parameters: {
//     controls: {
//       exclude: [
//         "variant",
//         "ribbon",
//         "ribbonIcon",
//         "ribbonInteractive",
//         "--z-book-card-ribbon-background-color",
//         "--z-book-card-ribbon-shadow-color",
//       ],
//     },
//   },
//   render: (args) =>
//     html`<z-book-card
//       variant="compact"
//       cover=${args.cover}
//       opera-title=${args.operaTitle}
//       volume-title=${args.volumeTitle}
//       borderless=${args.borderless}
//       authors=${args.authors}
//       isbn=${args.isbn}
//       isbn-label=${args.isbnLabel}
//       fallback-cover=${args.fallbackCover}
//       opera-title-tag=${args.operaTitleTag}
//       class=${args.theme}
//       style=${styleMap({
//         "--z-book-card-compact-width": `${args["--z-book-card-compact-width"]}`,
//         "--z-book-card-compact-height": `${args["--z-book-card-compact-height"]}`,
//       })}
//     >
//       <z-icon
//         name="star-empty"
//         slot="header-cta"
//       ></z-icon>
//       <z-tag
//         slot="tags"
//         style="--z-tag-bg: var(--avatar-C18)"
//         >EDI</z-tag
//       >
//       <z-tag slot="tags">VERSIONE INSEGNANTE</z-tag>
//       <div
//         slot="footer-cta"
//         style="display:flex; gap:8px;"
//       >
//         <z-button
//           href="http://dizionari.zanichelli.it"
//           target="_blank"
//           variant="secondary"
//           size="x-small"
//         >
//           Call to action
//         </z-button>
//         <z-button
//           icon="arrow-quad-north-east"
//           variant="secondary"
//           size="x-small"
//         ></z-button>
//       </div>
//     </z-book-card>`,
// } satisfies Story;
