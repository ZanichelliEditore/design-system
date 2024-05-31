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
        let uploaderDefault = document.querySelector("z-file-upload");
        let fileNumber = 0;
        document.addEventListener("fileInput", (e) => {
          fileNumber++;
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("file-number", fileNumber);
          chip.setAttribute("file-name", item.name);
          uploaderDefault.appendChild(chip);
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
        const uploaderDragdrop = document.querySelector("z-file-upload");
        document.addEventListener("fileInput", (e) => {
          const item = e.detail;
          const chip = document.createElement("Z-FILE");
          chip.setAttribute("slot", "files");
          chip.setAttribute("filetype", item.type);
          chip.setAttribute("file-name", item.name);
          uploaderDragdrop.appendChild(chip);
        });
      </script>`,
} satisfies Story;
