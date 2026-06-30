import {h} from "@stencil/core";
import {extractCSSVars} from "../../../utils/storybook-utils";
import "./index.stories.css";

export default {
  title: "CSS Components/ZTable",
  parameters: {
    a11y: {
      disable: true,
    },
  },
  argTypes: {
    "z-table-bordered": {
      control: {
        type: "boolean",
      },
      description: "Add `.z-table-bordered` class to display vertical dividers between cells.",
    },
    "z-table-hover": {
      control: {
        type: "boolean",
      },
      description: "Add `.z-table-hover` class to highlight rows on hover.",
    },
    "--z-table--cells-padding": {
      control: {
        type: "text",
      },
      description: "Overrides the cell padding CSS custom property (e.g., `12px` or `12px 16px`).",
      table: {
        defaultValue: {summary: "16px"},
      },
    },
  },
  args: {
    "z-table-bordered": false,
    "z-table-hover": false,
    "--z-table--cells-padding": "",
  },
};

const getClasses = (args): {[key: string]: boolean} => ({
  "z-table": true,
  "z-table-bordered": args["z-table-bordered"],
  "z-table-hover": args["z-table-hover"],
});

const TableTemplate = (args) => (
  <div class="z-table-story">
    <table
      class={getClasses(args)}
      style={extractCSSVars(args)}
    >
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
        </tr>
        <tr>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
        </tr>
        <tr>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
          <td>Cell content</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={4}>Footer content</td>
        </tr>
      </tfoot>
    </table>
  </div>
);

/**
 * Native HTML table component styled with utility CSS classes.
 */
export const Default = {
  render: (args) => TableTemplate(args),
};
