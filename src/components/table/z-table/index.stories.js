import {html} from "lit";
import {styleMap} from "lit/directives/style-map.js";

import "./index.stories.css";
import {PopoverPosition, SortDirection, VisibilityCondition} from "../../../beans";

export default {
  title: "ZTable",
  component: "z-table",

  args: {
    "bordered": true,
    "--z-table--cells-padding": "16px",
  },
};

export const ZTable = {
  render: (args) =>
    html`<z-table
      class="z-table-demo"
      .bordered=${args.bordered}
      style=${styleMap({
        "--z-table--cells-padding": args["--z-table--cells-padding"],
      })}
    >
      <z-thead>
        <z-tr>
          <z-th>Titolo colonna</z-th>
          <z-th>Titolo colonna</z-th>
          <z-th>Titolo colonna</z-th>
          <z-th>Titolo colonna</z-th>
          <z-th>Titolo colonna</z-th>
          <z-th>Titolo colonna</z-th>
          <z-th>Titolo colonna</z-th>
          <z-th>Titolo colonna</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`,

  name: "ZTable",
};

export const ExpandableRows = {
  render: (args) =>
    html`<z-table
      class="z-table-demo"
      .bordered=${args.bordered}
      style=${styleMap({
        "--z-table--cells-padding": args["--z-table--cells-padding"],
      })}
    >
      <z-thead>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th>Colonna 2</z-th>
          <z-th>Colonna 3</z-th>
          <z-th>Colonna 4</z-th>
          <z-th>Colonna 5</z-th>
          <z-th>Colonna 6</z-th>
          <z-th>Colonna 7</z-th>
          <z-th>Colonna 8</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>
            <span>Contenuto cella</span>
            <z-button
              class="prevent-expand"
              onclick="alert('button clicked without expanding the row')"
              icon="plus"
              size="x-small"
            ></z-button
          ></z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu="always">
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`,

  name: "Expandable rows",
};

export const Sticky = {
  render: (args) =>
    html`<z-table
      class="z-table-demo"
      .bordered=${args.bordered}
      style=${styleMap({
        "--z-table--cells-padding": args["--z-table--cells-padding"],
        "height": "400px",
      })}
    >
      <z-thead .sticky=${args.stickyHeader}>
        <z-tr>
          <z-th .sticky=${args.stickFirstColumn}>Colonna 1</z-th>
          <z-th>Colonna 2</z-th>
          <z-th>Colonna 3</z-th>
          <z-th>Colonna 4</z-th>
          <z-th>Colonna 5</z-th>
          <z-th>Colonna 6</z-th>
          <z-th>Colonna 7</z-th>
          <z-th>Colonna 8</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td .sticky=${args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td show-menu>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div></z-td
          >
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td .sticky=${args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td .sticky=${args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td .sticky=${args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td .sticky=${args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td .sticky=${args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr expandable>
          <z-td .sticky=${args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>
            <span>Contenuto cella</span>
            <z-button
              class="prevent-expand"
              onclick="alert('button clicked')"
              icon="plus"
              size="x-small"
            ></z-button
          ></z-td>
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr expandable>
          <z-td .sticky=${args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot .sticky=${args.stickyFooter}>
        <z-tr>
          <z-td colspan="8">Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>`,

  name: "Sticky",

  args: {
    stickyHeader: true,
    stickyFooter: true,
    stickFirstColumn: true,
  },
};

export const CellsWithContextualMenu = {
  render: (args) =>
    html`<z-table
      class="z-table-demo"
      .bordered=${args.bordered}
      style=${styleMap({
        "--z-table--cells-padding": args["--z-table--cells-padding"],
      })}
    >
      <z-thead>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th
            .showMenu=${args.showMenu}
            .popoverPosition=${args.popoverPosition}
          >
            Heading con menu
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td .showMenu=${args.showMenu}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
          <z-td>Contenuto cella</z-td>
          <z-td .showMenu=${args.showMenu}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
        </z-tr>
        <z-tr>
          <z-td .showMenu=${args.showMenu}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
          <z-td>Contenuto cella</z-td>
          <z-td .showMenu=${args.showMenu}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
        </z-tr>
        <z-tr>
          <z-td .showMenu=${args.showMenu}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
          <z-td>Contenuto cella</z-td>
          <z-td .showMenu=${args.showMenu}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
        </z-tr>
      </z-tbody>
    </z-table>`,

  name: "Cells with contextual menu",

  argTypes: {
    showMenu: {
      control: {
        type: "inline-radio",

        labels: {
          null: "hidden",
        },
      },

      popoverPosition: {
        options: Object.values(PopoverPosition),

        control: {
          type: "select",
        },
      },

      options: [null, ...Object.values(VisibilityCondition)],
    },
  },

  args: {
    showMenu: VisibilityCondition.HOVER,
    popoverPosition: PopoverPosition.AUTO,
  },
};

export const SortAction = {
  render: (args) =>
    html`<z-table
      class="z-table-demo"
      .bordered=${args.bordered}
      style=${styleMap({
        "--z-table--cells-padding": args["--z-table--cells-padding"],
      })}
    >
      <z-thead>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th
            .sortDirection=${SortDirection.ASC}
            .showMenu=${VisibilityCondition.HOVER}
          >
            Colonna 2 con menu e sorting
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th .sortDirection=${SortDirection.DESC}>Colonna 3 con sorting</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
      </z-tbody>
    </z-table>`,

  name: "Sort action",
};
