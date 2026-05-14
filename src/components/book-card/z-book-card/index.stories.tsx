import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {BookCardVariant, ControlSize} from "../../../beans";
import {CSSVarsArguments, extractCSSVars} from "../../../utils/storybook-utils";
import {ZBookCardApp} from "../z-book-card-app/index";
import {ZBookCard} from "./index";
import "./index.stories.css";

type ZBookCardCSSVarsArgs = CSSVarsArguments<
  | "--z-book-card-portrait-cover-height"
  | "--z-book-card-title-lines"
  | "--z-book-card-title-word-break"
  | "--z-book-card-subtitle-lines"
  | "--z-book-card-subtitle-word-break"
  | "--z-book-card-authors-lines"
  | "--z-book-card-authors-word-break"
>;
type ZBookCardStoriesArgs = ZBookCard & ZBookCardCSSVarsArgs;

const StoryMeta = {
  title: "ZBookCard/ZBookCard",
  component: ZBookCard,
  subcomponents: {
    ZBookCardApp,
  },
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(BookCardVariant),
    },
  },
  args: {
    "variant": BookCardVariant.LANDSCAPE,
    "cover": "https://staticmy.zanichelli.it/copertine/dashboard/m40002.9788808999825.jpg",
    "operaTitle": "Matematica.azzurro",
    "volumeTitle": "Volume 3 con Tutor",
    "authors": "Massimo Bergamini, Anna Trifone, Graziella Barozzi",
    "isbn": "9788808930552",
    "isbnLabel": "(ed. cartacea)",
    "year": "2025",
    "ebookUrl": "https://www.zanichelli.it/ricerca",
    "fallbackCover": "https://staticmy.zanichelli.it/copertine/dashboard/Dashboard_Book_Placeholder.jpg",
    "titleHtmlTag": undefined,
    "hasMultipleCovers": false,
    "linkTarget": "_blank",
    "--z-book-card-portrait-cover-height": "378px",
    "--z-book-card-title-lines": "2",
    "--z-book-card-title-word-break": "initial",
    "--z-book-card-subtitle-lines": "1",
    "--z-book-card-subtitle-word-break": "break-all",
    "--z-book-card-authors-lines": "1",
    "--z-book-card-authors-word-break": "break-all",
  },
  render: (args) => (
    <z-book-card
      {...args}
      style={extractCSSVars(args)}
    ></z-book-card>
  ),
} satisfies Meta<ZBookCardStoriesArgs>;

export default StoryMeta;

type Story = StoryObj<ZBookCardStoriesArgs>;

export const Default = {} satisfies Story;

export const WithSlottedContent = {
  render: (args) => (
    <z-book-card
      {...args}
      style={extractCSSVars(args)}
      class="z-book-card--with-slotted-content"
    >
      <div slot="cta">
        <z-icon
          style={{cursor: "pointer", fill: "var(--blue500)"}}
          name="star-full"
          width="20"
          height="20"
        ></z-icon>
      </div>
      <div slot="ebook">
        <z-button size={ControlSize.X_SMALL}>custom ebook button</z-button>
      </div>
      <div slot="tags">
        <z-tag style={{"--z-tag-bg": "var(--gray500)"}}>EDIZIONE DIGITALE INSEGNANTE</z-tag>
        <z-tag style={{"--z-tag-bg": "var(--blue50)", "--z-tag-text-color": "var(--gray950)"}}>BES</z-tag>
      </div>
      <div slot="data">
        <a
          href="https://www.zanichelli.it"
          class="catalog-link z-link z-link-blue z-link-icon body-4-sb"
        >
          Scheda catalogo
          <z-icon
            name="arrow-quad-north-east"
            width="14"
            height="14"
          ></z-icon>
        </a>
        <div
          class="body-5-sb"
          style={{
            padding: "calc(var(--space-unit) / 2) var(--space-unit)",
            backgroundColor: "var(--green100)",
            borderRadius: "100px",
          }}
        >
          ADOTTATO
        </div>
      </div>
      <div
        slot="apps"
        style={{display: "flex", flexWrap: "wrap"}}
      >
        <z-book-card-app
          name="Tutor di matematica matematica"
          info="test test"
          link="http://localhost"
        ></z-book-card-app>
        <z-book-card-app
          name="Esercizi"
          info="test test"
          link="http://localhost"
        ></z-book-card-app>
      </div>
      <div
        class="body-4-sb"
        slot="coverOverlay"
      >
        ANTEPRIMA DEL LIBRO SENZA RISORSE MULTIMEDIALI
      </div>
    </z-book-card>
  ),
} satisfies Story;
