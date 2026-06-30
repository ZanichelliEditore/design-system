import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ControlSize, InputStatus, InputType, LabelPosition} from "../../beans";
import {ZInput} from "./index";

const StoryMeta = {
  title: "ZInput",
  component: ZInput,
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(InputType),
    },
    labelPosition: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(LabelPosition),
    },
    size: {
      control: {
        type: "inline-radio",
      },
      options: Object.values(ControlSize),
    },
    status: {
      control: {
        type: "inline-radio",
        labels: {
          null: "-",
        },
      },
      options: [null, ...Object.values(InputStatus)],
    },
  },
  args: {
    type: InputType.TEXT,
    label: "this is the input label",
    ariaLabel: "",
    labelPosition: LabelPosition.RIGHT,
    placeholder: "input placeholder text",
    value: "",
    size: ControlSize.BIG,
    name: "",
    status: null,
    message: "helper text",
    icon: "",
    disabled: false,
    readonly: false,
    required: false,
    checked: false,
    hasclearicon: true,
    htmlid: "input-id",
    htmltitle: "",
    autocomplete: "",
    min: 1,
    minlength: 1,
    max: 10,
    maxlength: 10,
    step: 1,
    pattern: "",
  },
  render: (args) => <z-input {...args}></z-input>,
} satisfies Meta<ZInput>;

export default StoryMeta;

type Story = StoryObj<ZInput>;

export const AllProps = {} satisfies Story;

export const ZInputText = {
  parameters: {
    controls: {
      include: [
        "type",
        "label",
        "aria-label",
        "placeholder",
        "value",
        "name",
        "status",
        "message",
        "icon",
        "disabled",
        "readonly",
        "required",
        "hasclearicon",
        "htmlid",
        "htmltitle",
        "autocomplete",
        "size",
        "minlength",
        "maxlength",
      ],
    },
  },
  argTypes: {
    type: {
      options: Object.values(InputType).filter((type) => ["text", "password", "number", "email"].includes(type)),
    },
  },
} satisfies Story;

export const ZInputTextarea = {
  parameters: {
    controls: {
      include: [
        "type",
        "label",
        "aria-label",
        "placeholder",
        "value",
        "name",
        "status",
        "message",
        "disabled",
        "readonly",
        "required",
        "htmlid",
        "htmltitle",
        "size",
      ],
    },
  },
  args: {
    type: InputType.TEXTAREA,
  },
} satisfies Story;

export const ZInputCheckbox = {
  parameters: {
    controls: {
      include: [
        "label",
        "aria-label",
        "label-position",
        "name",
        "disabled",
        "readonly",
        "required",
        "checked",
        "htmlid",
        "htmltitle",
        "size",
      ],
    },
  },
  args: {
    type: InputType.CHECKBOX,
  },
} satisfies Story;

export const ZInputRadio = {
  parameters: {
    controls: {
      include: [
        "label",
        "aria-label",
        "label-position",
        "name",
        "value",
        "disabled",
        "readonly",
        "required",
        "checked",
        "htmlid",
        "htmltitle",
        "size",
      ],
    },
  },
  args: {
    type: InputType.RADIO,
  },
} satisfies Story;

export const ZInputNumber = {
  parameters: {
    controls: {
      include: ["min", "max", "step", "value", "hasclearicon"],
    },
  },
  args: {
    type: InputType.NUMBER,
    value: "1",
    hasclearicon: false,
  },
} satisfies Story;

export const ZInputPasswordWithRequirements = {
  parameters: {
    controls: {
      include: ["label", "placeholder", "message", "required", "minlength"],
    },
  },
  args: {
    type: InputType.PASSWORD,
    label: "Password",
    placeholder: "Inserisci la password",
    required: true,
    minlength: 8,
    message: "La password deve contenere almeno 8 caratteri",
  },
  render: (args) => html`
    <z-input
      type=${args.type}
      label=${args.label}
      placeholder=${args.placeholder}
      .required=${args.required}
      minlength=${args.minlength}
      message=${args.message}
    ></z-input>
  `,
} satisfies Story;
