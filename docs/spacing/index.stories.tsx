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

const renderLegend = () => (
  <div class="legend body-5 z-mb-3">
    <span>
      <span
        class="swatch margin"
        aria-hidden="true"
      />
      margin
    </span>
    <span>
      <span
        class="swatch padding"
        aria-hidden="true"
      />
      padding
    </span>
    <span>
      <span
        class="swatch content"
        aria-hidden="true"
      />
      content
    </span>
  </div>
);

const renderSize = (type: "m" | "p", size: number) => (
  <div class="wrap body-5 z-mb-2">
    <div class="body-5-sb">
      {size}: --space-unit-{size}
    </div>
    <div class="ext">
      <div class={`int z-${type}-${size}`}>
        <span class="content">{`.z-${type}-${size}`}</span>
      </div>
    </div>
    <div class="ext">
      <div class={`int z-${type}y-${size}`}>
        <span class="content">{`.z-${type}y-${size}`}</span>
      </div>
    </div>
    <div class="ext">
      <div class={`int z-${type}x-${size}`}>
        <span class="content">{`.z-${type}x-${size}`}</span>
      </div>
    </div>
    <div class="ext">
      <div class={`int z-${type}t-${size}`}>
        <span class="content">{`.z-${type}t-${size}`}</span>
      </div>
    </div>
    <div class="ext">
      <div class={`int z-${type}r-${size}`}>
        <span class="content">{`.z-${type}r-${size}`}</span>
      </div>
    </div>
    <div class="ext">
      <div class={`int z-${type}b-${size}`}>
        <span class="content">{`.z-${type}b-${size}`}</span>
      </div>
    </div>
    <div class="ext">
      <div class={`int z-${type}l-${size}`}>
        <span class="content">{`.z-${type}l-${size}`}</span>
      </div>
    </div>
  </div>
);

export const Margins = {
  render: () => (
    <div>
      {renderLegend()}
      {renderSize("m", 0)}
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
      {renderLegend()}
      {renderSize("p", 0)}
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
