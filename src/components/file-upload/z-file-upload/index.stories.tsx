import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ButtonVariant, ZFileUploadType} from "../../../beans";
import type {ZFileUploadCustomEvent} from "../../../components";
import {ZFileUpload} from "./index";

const onFileInput = (e: ZFileUploadCustomEvent<File>) => {
  const item = e.detail;
  const component = e.target as HTMLElement;
  const chip = document.createElement("Z-FILE");
  chip.setAttribute("slot", "files");
  chip.setAttribute("filetype", item.type);
  chip.setAttribute("file-name", item.name);
  component.appendChild(chip);
};

const StoryMeta = {
  title: "ZFileUpload",
  component: ZFileUpload,
  argTypes: {
    type: {
      options: Object.values(ZFileUploadType),
      control: {
        type: "inline-radio",
      },
    },
    buttonVariant: {
      options: Object.values(ButtonVariant),
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    buttonVariant: ButtonVariant.PRIMARY,
    type: ZFileUploadType.DEFAULT,
    fileMaxSize: 50,
    acceptedFormat: ".pdf, .doc, .tiff, .png, .jpg",
    mainTitle: "Allega un file",
    description: "Vuoi allegare un file per chiarire meglio la tua richiesta?",
    uploadBtnLabel: "allega",
    hasFileSection: true,
    showErrors: true,
  },
  render: (args) => (
    <z-file-upload
      {...args}
      onFileInput={onFileInput}
    />
  ),
} satisfies Meta<ZFileUpload>;

export default StoryMeta;

type Story = StoryObj<ZFileUpload>;

export const Default = {} satisfies Story;

export const Dragdrop = {
  args: {
    dragAndDropLabel: "Rilascia i file in questa area per allegarli.",
    type: ZFileUploadType.DRAGDROP,
  },
} satisfies Story;

export const DragdropEnglish = {
  args: {
    mainTitle: "Attach a file",
    description: "Do you want to attach a file to clarify your request?",
    uploadBtnLabel: "Attach",
    dragAndDropLabel: "Drop the image here",
    allowedFilesMessage: "You can upload files in the format PDF, DOC, TIFF, PNG, JPG for a maximum of 50MB",
    uploadClickableMessage: "Load",
    uploadMessage: "or drag from your computer",
    errorModalTitle: "Loading error",
    errorModalMessage: "The file does not respect the allowed parameters.",
    uploadedFilesLabel: "Uploaded files",
    type: ZFileUploadType.DRAGDROP,
  },
} satisfies Story;
