import {h} from "@stencil/core";
import type {Meta} from "@stencil/storybook-plugin";
import {PopoverPosition, SortDirection, VisibilityCondition} from "../../../beans";
import {CSSVarsArguments} from "../../../utils/storybook-utils";
import {boolean} from "../../../utils/utils";
import {ZTable} from "./index";
import "./index.stories.css";

type ZTableStoriesArgs = ZTable & CSSVarsArguments<"z-table--cells-padding">;

const StoryMeta = {
  title: "ZTable",
  component: ZTable,
  args: {
    "bordered": true,
    "--z-table--cells-padding": "16px",
  },
} satisfies Meta<ZTableStoriesArgs>;

export default StoryMeta;

export const Default = {
  render: (args) => (
    <z-table
      class="z-table-demo"
      style={{"--z-table--cells-padding": args["--z-table--cells-padding"]}}
    >
      <z-thead>
        <z-tr>
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
        </z-tr>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
      </z-tbody>
    </z-table>
  ),
};

export const ExpandableRows = {
  render: (args) => (
    <z-table
      class="z-table-demo"
      style={{"--z-table--cells-padding": args["--z-table--cells-padding"]}}
    >
      <z-thead>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th>Colonna 2</z-th>
          <z-th>Colonna 3</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
    </z-table>
  ),
};

export const Sticky = {
  args: {
    stickyHeader: true,
    stickyFooter: true,
    stickFirstColumn: true,
  },
  render: (args) => (
    <z-table
      class="z-table-demo"
      style={{"--z-table--cells-padding": args["--z-table--cells-padding"], "height": "400px"}}
    >
      <z-thead sticky>
        <z-tr>
          <z-th sticky>Colonna 1</z-th>
          <z-th>Colonna 2</z-th>
          <z-th>Colonna 3</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td sticky>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot sticky>
        <z-tr>
          <z-td colspan={3}>Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>
  ),
};

export const CellsWithContextualMenu = {
  argTypes: {
    isFocusable: boolean,
    showMenu: {
      control: {type: "inline-radio", labels: {null: "hidden"}},
      popoverPosition: {
        options: Object.values(PopoverPosition),
        control: {type: "select"},
      },
      options: [null, ...Object.values(VisibilityCondition)],
    },
  },
  args: {
    isFocusable: true,
    showMenu: VisibilityCondition.HOVER,
    popoverPosition: PopoverPosition.AUTO,
  },
  render: () => (
    <z-table class="z-table-demo">
      <z-thead>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th>
            Heading con menu <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
        </z-tr>
      </z-thead>
    </z-table>
  ),
};

export const SortAction = {
  argTypes: {
    isFocusable: boolean,
    showSorting: {
      options: Object.values(VisibilityCondition),
      control: {type: "inline-radio"},
    },
  },
  args: {
    isFocusable: true,
    showSorting: VisibilityCondition.HOVER,
  },
  render: (args) => (
    <z-table class="z-table-demo">
      <z-thead>
        <z-tr>
          <z-th
            sortDirection={SortDirection.ASC}
            showSorting={args.showSorting}
          >
            Colonna 1 con sorting
          </z-th>
          <z-th>Colonna 2</z-th>
          <z-th sortDirection={SortDirection.DESC}>Colonna 3 con sorting</z-th>
        </z-tr>
      </z-thead>
    </z-table>
  ),
};
