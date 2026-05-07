import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ZResultCard} from "./index";

const StoryMeta: Meta = {
  title: "ZResultCard",
  component: ZResultCard,
  argTypes: {
    cardTitle: {control: "text"},
    cardSubtitle: {control: "text"},
    authors: {control: "text"},
    cover: {control: "text"},
    fallbackCover: {control: "text"},
    hasMultipleCovers: {control: "boolean"},
    isInfoCard: {control: "boolean"},
  },
  args: {
    cardTitle: "Title",
    cardSubtitle: "Subtitle",
    authors: "John Doe",
    cover: "https://place.abh.ai/s3fs-public/placeholder/DSC_0199_400x400.JPG",
    fallbackCover: "https://staticmy.zanichelli.it/copertine/dashboard/Dashboard_Book_Placeholder.jpg",
    hasMultipleCovers: false,
    isInfoCard: false,
    titleHtmlTag: "h2",
  },
};

export default StoryMeta;

type Story = StoryObj;

export const SingleCover: Story = {
  render: (args) => (
    <z-result-card
      cardTitle={args.cardTitle}
      cardSubtitle={args.cardSubtitle}
      authors={args.authors}
      cover={args.cover}
      fallbackCover={args.fallbackCover}
      hasMultipleCovers={args.hasMultipleCovers}
      isInfoCard={args.isInfoCard}
      titleHtmlTag={args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  ),
};

export const SingleCoverLateralSpaces: Story = {
  render: (args) => (
    <z-result-card
      cardTitle={args.cardTitle}
      cardSubtitle={args.cardSubtitle}
      authors={args.authors}
      cover="https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg"
      fallbackCover={args.fallbackCover}
      hasMultipleCovers={args.hasMultipleCovers}
      isInfoCard={args.isInfoCard}
      titleHtmlTag={args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  ),
};

export const MultipleCovers: Story = {
  args: {
    hasMultipleCovers: true,
  },
  render: (args) => (
    <z-result-card
      cardTitle={args.cardTitle}
      cardSubtitle={args.cardSubtitle}
      authors={args.authors}
      cover={args.cover}
      fallbackCover={args.fallbackCover}
      hasMultipleCovers={args.hasMultipleCovers}
      isInfoCard={args.isInfoCard}
      titleHtmlTag={args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  ),
};

export const MultipleCoversLateralSpaces: Story = {
  args: {
    hasMultipleCovers: true,
  },
  render: (args) => (
    <z-result-card
      cardTitle={args.cardTitle}
      cardSubtitle={args.cardSubtitle}
      authors={args.authors}
      cover="https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg"
      fallbackCover={args.fallbackCover}
      hasMultipleCovers={args.hasMultipleCovers}
      isInfoCard={args.isInfoCard}
      titleHtmlTag={args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  ),
};

export const LongTitleAndSubtitle: Story = {
  args: {
    cardTitle:
      "This is a very long title that should wrap to the next line if it exceeds the width of the card, it goes on two rows for desktop devices and one row for mobile",
    cardSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis. Nunc volutpat viverra felis, eu iaculis ipsum tempus mattis. Phasellus euismod quam eget nisl pellentesque.",
    hasMultipleCovers: true,
  },
  render: (args) => (
    <z-result-card
      cardTitle={args.cardTitle}
      cardSubtitle={args.cardSubtitle}
      authors={args.authors}
      cover={args.cover}
      fallbackCover={args.fallbackCover}
      hasMultipleCovers={args.hasMultipleCovers}
      isInfoCard={args.isInfoCard}
      titleHtmlTag={args.titleHtmlTag}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  ),
};

export const OnlyTitleAndSubtitle: Story = {
  render: (args) => (
    <z-result-card
      cardTitle={args.cardTitle}
      cardSubtitle={args.cardSubtitle}
      cover={args.cover}
      fallbackCover={args.fallbackCover}
      hasMultipleCovers={args.hasMultipleCovers}
      isInfoCard={args.isInfoCard}
      titleHtmlTag={args.titleHtmlTag}
    />
  ),
};

export const InfoCard: Story = {
  args: {
    cardTitle: "Info Card Title",
    cardSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis.",
    isInfoCard: true,
  },
  render: (args) => (
    <z-result-card
      cardTitle={args.cardTitle}
      cardSubtitle={args.cardSubtitle}
      authors={args.authors}
      cover={args.cover}
      fallbackCover={args.fallbackCover}
      hasMultipleCovers={args.hasMultipleCovers}
      isInfoCard={args.isInfoCard}
      titleHtmlTag={args.titleHtmlTag}
    />
  ),
};
