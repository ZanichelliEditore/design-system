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
  render: (args) => (
    <z-result-card {...args}>
      <span slot="tags">Example tag</span>
      <span slot="volumes">2 volumes</span>
    </z-result-card>
  ),
};

export default StoryMeta;

type Story = StoryObj;

export const SingleCover: Story = {};

export const SingleCoverLateralSpaces: Story = {
  args: {
    cover: "https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg",
  },
};

export const MultipleCovers: Story = {
  args: {
    hasMultipleCovers: true,
  },
};

export const MultipleCoversLateralSpaces: Story = {
  args: {
    hasMultipleCovers: true,
    cover: "https://statictestmy.zanichelli.it/catalogo/assets/small/m40003.9788808075475.jpg",
  },
};

export const LongTitleAndSubtitle: Story = {
  args: {
    cardTitle:
      "This is a very long title that should wrap to the next line if it exceeds the width of the card, it goes on two rows for desktop devices and one row for mobile",
    cardSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis. Nunc volutpat viverra felis, eu iaculis ipsum tempus mattis. Phasellus euismod quam eget nisl pellentesque.",
    hasMultipleCovers: true,
  },
};

export const OnlyTitleAndSubtitle: Story = {
  render: (args) => <z-result-card {...args} />,
};

export const InfoCard: Story = {
  args: {
    cardTitle: "Info Card Title",
    cardSubtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt maximus tellus, eget dapibus nulla blandit sed. Nullam augue ipsum, mattis sit amet diam ut, finibus posuere libero. Fusce nec erat eu risus fermentum mattis.",
    isInfoCard: true,
  },
  render: (args) => <z-result-card {...args} />,
};
