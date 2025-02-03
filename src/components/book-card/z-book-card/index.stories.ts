import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";
import {ZBookCard} from ".";
import {BookCardVariant} from "../../../beans";
import {CSSVarsArguments} from "../../../utils/storybook-utils";
import "../../z-button/index";
import "../../z-icon/index";
import "../../z-tag/index";
import "../z-book-card-app/index";
import "./index";

type ZBookCardStoriesArgs = ZBookCard & CSSVarsArguments<
    | "--z-book-card-portrait-cover-height"
    | "--z-book-card-title-lines"
    | "--z-book-card-title-word-break"
    | "--z-book-card-subtitle-lines"
    | "--z-book-card-subtitle-word-break"
    | "--z-book-card-authors-lines"
    | "--z-book-card-authors-word-break"
  >;

const StoryMeta = {
  title: "ZBookCard/ZBookCard",
  component: "z-book-card",
  argTypes: {
    "variant": {
      control: {
        type: "inline-radio",
      },
      options: Object.values(BookCardVariant),
    },
    "--z-book-card-portrait-cover-height": {control: {type: "text"}},
    "--z-book-card-title-lines": {control: {type: "text"}},
    "--z-book-card-title-word-break": {control: {type: "text"}},
    "--z-book-card-subtitle-lines": {control: {type: "text"}},
    "--z-book-card-subtitle-word-break": {control: {type: "text"}},
    "--z-book-card-authors-lines": {control: {type: "text"}},
    "--z-book-card-authors-word-break": {control: {type: "text"}},
  },
  args: {
    "variant": BookCardVariant.LANDSCAPE,
    "cover": "https://staticmy.zanichelli.it/catalogo/assets/m40001.9788808490056.jpg",
    "operaTitle": "Matematica.azzurro",
    "volumeTitle": "Volume 3 con Tutor",
    "authors": "Massimo Bergamini, Anna Trifone, Graziella Barozzi",
    "isbn": "9788808930552",
    "isbnLabel": "(ed. cartacea)",
    "year": "2025",
    "ebookUrl": "https://www.zanichelli.it/ricerca",
    "fallbackCover": "https://staticmy.zanichelli.it/copertine/dashboard/Dashboard_Book_Placeholder.jpg",
    "titleHtmlTag": null,
    "--z-book-card-portrait-cover-height": "378px",
    "--z-book-card-title-lines": "2",
    "--z-book-card-title-word-break": "initial",
    "--z-book-card-subtitle-lines": "1",
    "--z-book-card-subtitle-word-break": "break-all",
    "--z-book-card-authors-lines": "1",
    "--z-book-card-authors-word-break": "break-all",
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
      isbn-label=${args.isbnLabel}
      year=${args.year}
      ebook-url=${args.ebookUrl}
      fallback-cover=${args.fallbackCover}
      title-html-tag=${args.titleHtmlTag}
      style=${styleMap({
        "--z-book-card-portrait-cover-height": args["--z-book-card-portrait-cover-height"],
        "--z-book-card-title-lines": args["--z-book-card-title-lines"],
        "--z-book-card-title-word-break": args["--z-book-card-title-word-break"],
        "--z-book-card-subtitle-lines": args["--z-book-card-subtitle-lines"],
        "--z-book-card-subtitle-word-break": args["--z-book-card-subtitle-word-break"],
        "--z-book-card-authors-lines": args["--z-book-card-authors-lines"],
        "--z-book-card-authors-word-break": args["--z-book-card-authors-word-break"],
      })}
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
      isbn-label=${args.isbnLabel}
      year=${args.year}
      ebook-url=${args.ebookUrl}
      fallback-cover=${args.fallbackCover}
      title-html-tag=${args.titleHtmlTag}
      style=${styleMap({
        "--z-book-card-portrait-cover-height": args["--z-book-card-portrait-cover-height"],
        "--z-book-card-title-lines": args["--z-book-card-title-lines"],
        "--z-book-card-title-word-break": args["--z-book-card-title-word-break"],
        "--z-book-card-subtitle-lines": args["--z-book-card-subtitle-lines"],
        "--z-book-card-subtitle-word-break": args["--z-book-card-subtitle-word-break"],
        "--z-book-card-authors-lines": args["--z-book-card-authors-lines"],
        "--z-book-card-authors-word-break": args["--z-book-card-authors-word-break"],
      })}
    >
      <div slot="cta">
        <z-icon
          style="cursor: pointer; fill: var(--blue500);"
          name="star-full"
          width="20"
          height="20"
        ></z-icon>
      </div>

      <div slot="ebook">
        <z-button
          variant="primary"
          size="x-small"
          >custom ebook button</z-button
        >
      </div>

      <div slot="tags">
        <z-tag style="--z-tag-bg: var(--gray500);">EDIZIONE DIGITALE INSEGNANTE</z-tag>
        <z-tag style="--z-tag-bg: var(--blue50); --z-tag-text-color: var(--gray950);">BES</z-tag>
      </div>

      <div slot="data">
        <a
          href="https://www.zanichelli.it"
          class="catalog-link z-link z-link-blue z-link-icon body-4-sb"
          >Scheda catalogo
          <z-icon
            name="arrow-quad-north-east"
            width="14"
            height="14"
          ></z-icon>
        </a>
        <div
          class="body-5-sb"
          style="padding: calc(var(--space-unit) / 2) var(--space-unit); background-color: var(--green100); border-radius: 100px;"
        >
          ADOTTATO
        </div>
      </div>

      <div
        slot="apps"
        style="display: flex; flex-wrap: wrap;"
      >
        <z-book-card-app
          icon="https://placehold.co/24"
          name="Tutor di matematica matematica"
          info="test test"
          link="http://localhost"
        ></z-book-card-app>
        <z-book-card-app
          icon="https://placehold.co/24"
          name="Esercizi"
          info="test test"
          link="http://localhost"
        ></z-book-card-app>
      </div>

      <div
        slot="coverOverlay"
        class="body-4-sb"
        style="text-align: center; padding: 16px 0;"
      >
        ANTEPRIMA DEL LIBRO SENZA RISORSE MULTIMEDIALI
      </div>

      <style>
        z-book-card-app {
          --z-book-card-app-padding-x: 8px;
          width: 100%;
          max-width: 100%;
          height: 47px;

          @media (min-width: 768px) {
            --z-book-card-app-padding-x: 16px;
            width: 315px;
          }
        }
      </style>
    </z-book-card>`,
} satisfies Story;
