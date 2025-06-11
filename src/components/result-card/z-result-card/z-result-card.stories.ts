import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "./index";

const StoryMeta: Meta = {
  title: "ZResultCard",
  component: "z-result-card",
  argTypes: {
    cardTitle: {control: "text"},
    cardSubtitle: {control: "text"},
    author: {control: "text"},
    cover: {control: "text"},
    hasMultipleCovers: {control: "boolean"},
    isInfoCard: {control: "boolean"},
  },
};

export default StoryMeta;

type Story = StoryObj;

const args = {
  cardTitle: "Title",
  cardSubtitle: "Subtitle",
  author: "John Doe",
  cover: "https://place.abh.ai/s3fs-public/placeholder/DSC_0199_400x400.JPG",
  hasMultipleCovers: false,
  isInfoCard: false,
};

export const SingleCover: Story = {
  args: {
    ...args,
  },

  render: (args) => html`
    <z-result-card
      .cardTitle=${args.cardTitle}
      .cardSubtitle=${args.cardSubtitle}
      .author=${args.author}
      .cover=${args.cover}
      .hasMultipleCovers=${args.hasMultipleCovers}
      .isInfoCard=${args.isInfoCard}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `,
};

export const MultipleCovers: Story = {
  args: {
    ...args,
    hasMultipleCovers: true,
  },
  render: (args) => html`
    <z-result-card
      .cardTitle=${args.cardTitle}
      .cardSubtitle=${args.cardSubtitle}
      .author=${args.author}
      .cover=${args.cover}
      .hasMultipleCovers=${args.hasMultipleCovers}
      .isInfoCard=${args.isInfoCard}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `,
};

export const LongTitleAndSubtitle: Story = {
  args: {
    ...args,
    cardTitle:
      "This is a very long title that should wrap to the next line if it exceeds the width of the card, it goes on two rows for desktop devices and one row for mobile",
    cardSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis. Nunc volutpat viverra felis, eu iaculis ipsum tempus mattis. Phasellus euismod quam eget nisl pellentesque.",
    hasMultipleCovers: true,
  },
  render: (args) => html`
    <z-result-card
      .cardTitle=${args.cardTitle}
      .cardSubtitle=${args.cardSubtitle}
      .author=${args.author}
      .cover=${args.cover}
      .hasMultipleCovers=${args.hasMultipleCovers}
      .isInfoCard=${args.isInfoCard}
    >
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  `,
};

export const OnlyTitleAndSubtitle: Story = {
  args: {
    ...args,
    author: undefined,
  },

  render: (args) => html`
    <z-result-card
      .cardTitle=${args.cardTitle}
      .cardSubtitle=${args.cardSubtitle}
      .author=${args.author}
      .cover=${args.cover}
      .hasMultipleCovers=${args.hasMultipleCovers}
      .isInfoCard=${args.isInfoCard}
    />
  `,
};

export const InfoCard: Story = {
  args: {
    ...args,
    cardTitle: "Info Card Title",
    cardSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis.",
    isInfoCard: true,
  },
  render: (args) => html`
    <z-result-card
      .cardTitle=${args.cardTitle}
      .cardSubtitle=${args.cardSubtitle}
      .author=${args.author}
      .cover=${args.cover}
      .hasMultipleCovers=${args.hasMultipleCovers}
      .isInfoCard=${args.isInfoCard}
    />
  `,
};
