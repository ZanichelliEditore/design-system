import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {type ZFileUpload} from ".";
import {ButtonVariant, ZFileUploadType} from "../../../beans";
import "./index";

const StoryMeta = {
  title: "ZFileUpload",
  component: "z-file-upload",
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
    fileMaxSize: 50,
    acceptedFormat: ".pdf, .doc, .tiff, .png, .jpg",
    mainTitle: "Allega un file",
    description: "Vuoi allegare un file per chiarire meglio la tua richiesta?",
    uploadBtnLabel: "allega",
    hasFileSection: true,
  },
} satisfies Meta<ZFileUpload>;

export default StoryMeta;

type Story = StoryObj<ZFileUpload>;

export const Default = {
  args: {
    buttonVariant: ButtonVariant.PRIMARY,
  },
  render: (args) =>
    html`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <z-file-upload
        type=${ZFileUploadType.DEFAULT}
        .hasFileSection=${args.hasFileSection}
        description="${args.description}"
        .buttonVariant=${args.buttonVariant}
        .fileMaxSize=${args.fileMaxSize}
        .acceptedFormat=${args.acceptedFormat}
        .mainTitle=${args.mainTitle}
        .uploadBtnLabel=${args.uploadBtnLabel}
      >
      </z-file-upload>
      <script>
        fileNumber = 0;
        document.addEventListener("fileInput", (e) => {
          fileNumber++;
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("file-number", fileNumber);
          chip.setAttribute("file-name", item.name);
          document.querySelector("z-file-upload")?.appendChild(chip);
        });
      </script>`,
} satisfies Story;

export const Dragdrop = {
  args: {
    dragAndDropLabel: "Rilascia i file in questa area per allegarli.",
  },
  render: (args) =>
    html`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <br />
      <z-file-upload
        type=${ZFileUploadType.DRAGDROP}
        .hasFileSection=${args.hasFileSection}
        description="${args.description}"
        .fileMaxSize=${args.fileMaxSize}
        .acceptedFormat=${args.acceptedFormat}
        .mainTitle=${args.mainTitle}
        .dragAndDropLabel=${args.dragAndDropLabel}
      >
      </z-file-upload>
      <script>
        document.addEventListener("fileInput", (e) => {
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("filetype", item.type);
          chip.setAttribute("file-name", item.name);
          document.querySelector("z-file-upload")?.appendChild(chip);
        });
      </script>`,
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
  },
  render: (args) =>
    html`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <br />
      <z-file-upload
        type=${ZFileUploadType.DRAGDROP}
        .hasFileSection=${args.hasFileSection}
        description="${args.description}"
        .fileMaxSize=${args.fileMaxSize}
        .acceptedFormat=${args.acceptedFormat}
        .mainTitle=${args.mainTitle}
        .dragAndDropLabel=${args.dragAndDropLabel}
        .allowedFilesMessage=${args.allowedFilesMessage}
        .uploadClickableMessage=${args.uploadClickableMessage}
        .uploadMessage=${args.uploadMessage}
        .errorModalTitle=${args.errorModalTitle}
        .errorModalMessage=${args.errorModalMessage}
        .uploadedFilesLabel=${args.uploadedFilesLabel}
        .uploadBtnLabel=${args.uploadBtnLabel}
      >
      </z-file-upload>
      <script>
        document.addEventListener("fileInput", (e) => {
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("filetype", item.type);
          chip.setAttribute("file-name", item.name);
          document.querySelector("z-file-upload")?.appendChild(chip);
        });
      </script>`,
} satisfies Story;
