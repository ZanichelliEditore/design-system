import {h} from "@stencil/core";
import type {Meta, StoryObj} from "@stencil/storybook-plugin";
import {ControlSize, InputStatus, InputType, LabelPosition} from "../../beans";
import {ICONS} from "../../constants/iconset.js";
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
    icon: {
      control: {
        type: "select",
      },
      options: Object.keys(ICONS),
    },
    message: {
      control: "text",
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
        type: "select",
      },
      options: Object.values(InputStatus),
    },
  },
  args: {
    type: InputType.TEXT,
    label: "this is the input label",
    labelPosition: LabelPosition.RIGHT,
    placeholder: "input placeholder text",
    size: ControlSize.BIG,
    message: "helper text",
    disabled: false,
    readonly: false,
    required: false,
    checked: false,
    hasclearicon: true,
    htmlid: "input-id",
    // min: 1,
    // minlength: 1,
    // max: 10,
    // maxlength: 10,
    // step: 1,
    min: undefined,
    minlength: undefined,
    max: undefined,
    maxlength: undefined,
    step: undefined,
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
      options: ["text", "password", "number", "email"],
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
        "minlength",
        "maxlength",
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
