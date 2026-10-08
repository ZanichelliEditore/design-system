import {h} from "@stencil/core";
import "./index.stories.css";

export default {
  title: "Spacing",
  tags: ["!autodocs"],
  parameters: {
    docs: {
      codePanel: false,
    },
    controls: {
      disable: true,
    },
  },
};

const renderSize = (type: "m" | "p", size: number) => (
  <div class="wrap body-5 z-mb-2">
    <div class="body-5-sb">
      {size}: --space-unit * {size}
    </div>
    <div class="ext">
      <div class={`int z-${type}-${size}`}>{`.z-${type}-${size}`}</div>
    </div>
    <div class="ext">
      <div class={`int z-${type}y-${size}`}>{`.z-${type}y-${size}`}</div>
    </div>
    <div class="ext">
      <div class={`int z-${type}x-${size}`}>{`.z-${type}x-${size}`}</div>
    </div>
    <div class="ext">
      <div class={`int z-${type}t-${size}`}>{`.z-${type}t-${size}`}</div>
    </div>
    <div class="ext">
      <div class={`int z-${type}r-${size}`}>{`.z-${type}r-${size}`}</div>
    </div>
    <div class="ext">
      <div class={`int z-${type}b-${size}`}>{`.z-${type}b-${size}`}</div>
    </div>
    <div class="ext">
      <div class={`int z-${type}l-${size}`}>{`.z-${type}l-${size}`}</div>
    </div>
  </div>
);

export const Margins = {
  render: () => (
    <div>
      {renderSize("m", 1)}
      {renderSize("m", 2)}
      {renderSize("m", 3)}
      {renderSize("m", 4)}
      {renderSize("m", 5)}
      {renderSize("m", 6)}
      {renderSize("m", 7)}
      {renderSize("m", 8)}
    </div>
  ),
};

export const Paddings = {
  render: () => (
    <div>
      {renderSize("p", 1)}
      {renderSize("p", 2)}
      {renderSize("p", 3)}
      {renderSize("p", 4)}
      {renderSize("p", 5)}
      {renderSize("p", 6)}
      {renderSize("p", 7)}
      {renderSize("p", 8)}
    </div>
  ),
};
