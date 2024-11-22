import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZBookCard} from ".";
import {BookCardVariant, CardTagStatus} from "../../../beans";
import "../../z-button/index";
import "../../z-icon/index";
import "../../z-tag/index";
import "../z-book-card-app/index";
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
    edi: {
      control: {
        type: "inline-radio",
      },
      options: [...Object.values(CardTagStatus), null],
    },
    annotated: {
      control: {
        type: "inline-radio",
      },
      options: [...Object.values(CardTagStatus), null],
    },
    teacherVersion: {
      control: {
        type: "inline-radio",
      },
      options: [...Object.values(CardTagStatus), null],
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
    isbnLabel: "(ed. cartacea)",
    adoption: true,
    edi: CardTagStatus.ACTIVE,
    annotated: CardTagStatus.ACTIVE,
    teacherVersion: CardTagStatus.DISABLED,
    catalogUrl: "https://www.zanichelli.it/ricerca/prodotti/matematica-multimediale-blu3ed?qid=9788808710932",
    ebookUrl: "https://www.zanichelli.it/ricerca",
    fallbackCover: "https://staticmy.zanichelli.it/copertine/dashboard/Dashboard_Book_Placeholder.jpg",
    operaTitleHtmlTag: null,
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
      isbn-label=${args.isbnLabel}
      edi=${args.edi}
      annotated=${args.annotated}
      teacher-version=${args.teacherVersion}
      adoption=${args.adoption}
      catalog-url=${args.catalogUrl}
      ebook-url=${args.ebookUrl}
      fallback-cover=${args.fallbackCover}
      opera-title-html-tag=${args.operaTitleHtmlTag}
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
      isbn-label=${args.isbnLabel}
      edi=${args.edi}
      annotated=${args.annotated}
      teacher-version=${args.teacherVersion}
      adoption=${args.adoption}
      catalog-url=${args.catalogUrl}
      ebook-url=${args.ebookUrl}
      fallback-cover=${args.fallbackCover}
      opera-title-html-tag=${args.operaTitleHtmlTag}
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
