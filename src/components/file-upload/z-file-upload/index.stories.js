import {html} from "lit";
import {ButtonVariant} from "../../../beans";

export default {
  title: "ZFileUpload",
  component: "z-file-upload",

  argTypes: {
    type: {
      options: ["default", "dragdrop"],

      control: {
        type: "radio",
      },
    },

    buttonVariant: {
      options: ["primary", "secondary"],

      control: {
        type: "radio",
      },
    },

    fileMaxSize: {
      control: {
        type: "text",
      },
    },

    acceptedFormat: {
      control: {
        type: "text",
      },
    },

    mainTitle: {
      control: {
        type: "text",
      },
    },

    description: {
      control: {
        type: "text",
      },
    },

    uploadBtnLabel: {
      control: {
        type: "text",
      },
    },

    dragAndDropLabel: {
      control: {
        type: "text",
      },
    },

    hasFileSection: {
      control: {
        type: "text",
      },
    },
  },
};

export const ZFileUploadDefaultVersion = {
  render: (args) =>
    html`<h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <br />
      <z-file-upload
        type="${args.type}"
        has-file-section="${args.hasFileSection}"
        description="${args.description}"
        button-variant="${args.buttonVariant}"
        file-max-size="${args.fileMaxSize}"
        accepted-format="${args.acceptedFormat}"
        main-title="${args.mainTitle}"
        upload-btn-label="${args.uploadBtnLabel}"
      >
      </z-file-upload>
      <script>
        const uploaderDefault = document.querySelector("z-file-upload");
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

  name: "ZFileUpload default version",

  args: {
    type: "default",
    buttonVariant: ButtonVariant.PRIMARY,
    fileMaxSize: "50",
    acceptedFormat: ".pdf, .doc, .tiff, .png, .jpg",
    mainTitle: "Allega un file",
    description: "Vuoi allegare un file per chiarire meglio la tua richiesta?",
    uploadBtnLabel: "allega",
    hasFileSection: "true",
  },
};

export const ZFileUploadDragdropVersion = {
  render: (args) =>
    html` <h4 class="heading-4">
        This story embeds a piece of js script to allow the component to work properly. Please refresh the page before
        using it!
      </h4>
      <br />
      <z-file-upload
        type="${args.type}"
        has-file-section="${args.hasFileSection}"
        file-max-size="${args.fileMaxSize}"
        description="${args.description}"
        accepted-format="${args.acceptedFormat}"
        main-title="${args.mainTitle}"
        drag-and-drop-label="${args.dragAndDropLabel}"
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

  name: "ZFileUpload dragdrop version",

  args: {
    type: "dragdrop",
    fileMaxSize: "50",
    acceptedFormat: ".pdf, .doc, .tiff, .png, .jpg",
    mainTitle: "Allega un file",
    description: "Vuoi allegare un file per chiarire meglio la tua richiesta?",
    uploadBtnLabel: "allega",
    dragAndDropLabel: "Rilascia i file in questa area per allegarli.",
    hasFileSection: "true",
  },
};
