import {html} from "lit";
import {InputType, InputStatus, LabelPosition, ControlSize} from "../../../beans";

export default {
  title: "ZInput",
  component: "z-input",

  argTypes: {
    type: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(InputType),
    },

    label: {
      control: {
        type: "text",
      },
    },

    ariaLabel: {
      control: {
        type: "text",
      },
    },

    labelPosition: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(LabelPosition),
    },

    placeholder: {
      control: {
        type: "text",
      },
    },

    value: {
      control: {
        type: "text",
      },
    },

    size: {
      control: {
        type: "inline-radio",
      },

      options: Object.values(ControlSize),
    },

    name: {
      control: {
        type: "text",
      },
    },

    status: {
      control: {
        type: "inline-radio",
      },

      options: ["default", ...Object.values(InputStatus)],
    },

    message: {
      control: {
        type: "text",
      },
    },

    icon: {
      control: {
        type: "text",
      },
    },

    disabled: {
      control: {
        type: "boolean",
      },
    },

    readonly: {
      control: {
        type: "boolean",
      },
    },

    required: {
      control: {
        type: "boolean",
      },
    },

    checked: {
      control: {
        type: "boolean",
      },
    },

    hasclearicon: {
      control: {
        type: "boolean",
      },
    },

    htmlid: {
      control: {
        type: "text",
      },
    },

    htmltitle: {
      control: {
        type: "text",
      },
    },

    autocomplete: {
      control: {
        type: "text",
      },
    },

    min: {
      control: {
        type: "number",
      },
    },

    minlength: {
      control: {
        type: "number",
      },
    },

    max: {
      control: {
        type: "number",
      },
    },

    maxlength: {
      control: {
        type: "number",
      },
    },

    step: {
      control: {
        type: "number",
      },
    },

    pattern: {
      control: {
        type: "text",
      },
    },
  },

  args: {
    type: "text",
    label: "this is the input label",
    ariaLabel: "",
    labelPosition: LabelPosition.RIGHT,
    placeholder: "input placeholder text",
    value: "",
    size: "big",
    name: "",
    status: "default",
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

  decorators: [
    (Story) => html`
      <style>
        span,
        p {
          font-size: inherit;
          letter-spacing: initial;
        }
      </style>
      ${Story()}
    `,
  ],
};

export const ZInputAllProps = {
  render: (args) => html`
    <z-input
      type=${args.type}
      label=${args.label}
      aria-label=${args.ariaLabel}
      label-position=${args.labelPosition}
      placeholder=${args.placeholder}
      value=${args.value}
      name=${args.name}
      status=${args.status}
      message=${args.message}
      icon=${args.icon}
      disabled=${args.disabled}
      readonly=${args.readonly}
      required=${args.required}
      checked=${args.checked}
      hasclearicon=${args.hasclearicon}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      autocomplete=${args.autocomplete}
      min=${args.min}
      minlength=${args.minlength}
      max=${args.max}
      maxlength=${args.maxlength}
      step=${args.step}
      pattern=${args.pattern}
      size=${args.size}
    ></z-input>
  `,

  name: "z-input - all props",
};

export const ZInputText = {
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
      icon=${args.icon}
      disabled=${args.disabled}
      readonly=${args.readonly}
      required=${args.required}
      hasclearicon=${args.hasclearicon}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      autocomplete=${args.autocomplete}
      size=${args.size}
      minlength=${args.minlength}
      maxlength=${args.maxlength}
    ></z-input>
  `,

  name: "z-input text",

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
      options: ["text", "password", "number", "email"],
    },
  },
};

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
      disabled=${args.disabled}
      readonly=${args.readonly}
      required=${args.required}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      size=${args.size}
    ></z-input>
  `,

  name: "z-input textarea",

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

  argTypes: {
    type: {
      options: ["textarea"],
    },
  },

  args: {
    type: "textarea",
  },
};

export const ZInputCheckbox = {
  render: (args) => html`
    <z-input
      type="${args.type}"
      label=${args.label}
      aria-label=${args.ariaLabel}
      label-position=${args.labelPosition}
      name=${args.name}
      disabled=${args.disabled}
      readonly=${args.readonly}
      required=${args.required}
      checked=${args.checked}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      size=${args.size}
    ></z-input>
  `,

  name: "z-input checkbox",

  parameters: {
    controls: {
      include: [
        "type",
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

  argTypes: {
    type: {
      options: ["checkbox"],
    },
  },

  args: {
    type: "checkbox",
  },
};

export const ZInputRadio = {
  render: (args) => html`
    <z-input
      type=${args.type}
      label=${args.label}
      aria-label=${args.ariaLabel}
      label-position=${args.labelPosition}
      name=${args.name}
      value=${args.value}
      disabled=${args.disabled}
      readonly=${args.readonly}
      required=${args.required}
      checked=${args.checked}
      htmlid=${args.htmlid}
      htmltitle=${args.htmltitle}
      size=${args.size}
    ></z-input>
  `,

  name: "z-input radio",

  parameters: {
    controls: {
      include: [
        "type",
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

  argTypes: {
    type: {
      options: ["radio"],
    },
  },

  args: {
    type: "radio",
  },
};

export const ZInputNumber = {
  render: (args) => html`
    <z-input
      type=${args.type}
      value=${args.value}
      min=${args.min}
      max=${args.max}
      step=${args.step}
      hasclearicon=${args.hasclearicon}
    ></z-input>
  `,

  name: "z-input number",

  parameters: {
    controls: {
      include: ["type", "min", "max", "step", "value", "hasclearicon"],
    },
  },

  argTypes: {
    type: {
      options: ["number"],
    },
  },

  args: {
    type: "number",
    value: "1",
    hasclearicon: false,
  },
};
