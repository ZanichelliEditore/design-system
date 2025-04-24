import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import {ZInput} from ".";
import {ControlSize, InputStatus, InputType, LabelPosition} from "../../beans";
import "./index";

const StoryMeta = {
  title: "ZInput",
  component: "z-input",
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
} satisfies Meta<ZInput>;

export default StoryMeta;

type Story = StoryObj<ZInput>;

export const AllProps = {
  render: (args) => html`
    <div style="width:50%">
      <z-input
        type=${args.type}
        label=${args.label}
        aria-label=${args.ariaLabel}
        .labelPosition=${args.labelPosition}
        placeholder=${args.placeholder}
        value=${args.value}
        name=${args.name}
        status=${args.status}
        message=${args.message}
        icon=${args.icon}
        .disabled=${args.disabled}
        .readonly=${args.readonly}
        .required=${args.required}
        .checked=${args.checked}
        hasclearicon=${args.hasclearicon}
        htmlid=${args.htmlid}
        htmltitle=${args.htmltitle}
        .autocomplete=${args.autocomplete}
        min=${args.min}
        minlength=${args.minlength}
        max=${args.max}
        maxlength=${args.maxlength}
        step=${args.step}
        pattern=${args.pattern}
        size=${args.size}
      ></z-input>
    </div>
  `,
} satisfies Story;

export const ZInputText = {
  render: (args) => html`
    <div style="width:50%">
      <z-input
        type=${args.type}
        label=${args.label}
        aria-label=${args.ariaLabel}
        placeholder=${args.placeholder}
        value=${args.value}
        name=${args.name}
        status=${args.status}
        message=${args.message}
        icon=${args.icon}
        .disabled=${args.disabled}
        .readonly=${args.readonly}
        .required=${args.required}
        hasclearicon=${args.hasclearicon}
        htmlid=${args.htmlid}
        htmltitle=${args.htmltitle}
        .autocomplete=${args.autocomplete}
        size=${args.size}
        minlength=${args.minlength}
        maxlength=${args.maxlength}
      ></z-input>
    </div>
  `,
  parameters: {
    controls: {
      include: [
        "type",
        "label",
        "ariaLabel",
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
  render: (args) => html`
    <z-input
      type=${args.type}
      label=${args.label}
      aria-label=${args.ariaLabel}
      placeholder=${args.placeholder}
      value=${args.value}
      name=${args.name}
      status=${args.status}
      message=${args.message}
      .disabled=${args.disabled}
      .readonly=${args.readonly}
      .required=${args.required}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      size=${args.size}
    ></z-input>
  `,
  parameters: {
    controls: {
      include: [
        "type",
        "label",
        "ariaLabel",
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
        "ariaLabel",
        "labelPosition",
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
  render: (args) => html`
    <z-input
      type="${args.type}"
      label=${args.label}
      aria-label=${args.ariaLabel}
      .labelPosition=${args.labelPosition}
      name=${args.name}
      .disabled=${args.disabled}
      .readonly=${args.readonly}
      .required=${args.required}
      .checked=${args.checked}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      size=${args.size}
    ></z-input>
  `,
} satisfies Story;

export const ZInputRadio = {
  parameters: {
    controls: {
      include: [
        "label",
        "ariaLabel",
        "labelPosition",
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
  render: (args) => html`
    <z-input
      type=${args.type}
      label=${args.label}
      aria-label=${args.ariaLabel}
      .labelPosition=${args.labelPosition}
      name=${args.name}
      value=${args.value}
      .disabled=${args.disabled}
      .readonly=${args.readonly}
      .required=${args.required}
      .checked=${args.checked}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      size=${args.size}
    ></z-input>
  `,
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
  render: (args) => html`
    <z-input
      type=${args.type}
      value=${args.value}
      min=${args.min}
      max=${args.max}
      step=${args.step}
      .hasclearicon=${args.hasclearicon}
    ></z-input>
  `,
} satisfies Story;
