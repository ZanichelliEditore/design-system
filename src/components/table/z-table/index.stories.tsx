import {h} from "@stencil/core";
import type {Meta} from "@stencil/storybook-plugin";
import {ControlSize, PopoverPosition, SortDirection, VisibilityCondition} from "../../../beans";
import {CSSVarsArguments} from "../../../utils/storybook-utils";
import {boolean} from "../../../utils/utils";
import {ZTable} from "./index";
import "./index.stories.css";

type ZTableStoriesArgs = ZTable & CSSVarsArguments<"z-table--cells-padding">;

/**
 * ## Accessibility
 *
 * The `ZTable` and its related components comes with a set of roles and ARIA attributes to help screen readers to understand the table structure and its content.
 * The roles are mainly used to identify the table parts, since they are not the native HTML table elements.
 * The ARIA attributes used are the following:
 * - [`aria-sort`](https://www.w3.org/TR/wai-aria-1.1/#aria-sort) to identify the sorting direction of a column when sorting is enabled
 * - [`aria-expanded`](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded) to identify if a row is expanded or not when expandable rows are enabled. The attribute is set on the button that expands the row, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
 * - [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls) is used on the expandable row button to identify the content that is controlled by the button itself, as explained in the [docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls). Maybe the `aria-owns` attribute were more appropriate, but it is not supported on MacOS and iOS with VoiceOver, so we used `aria-controls` instead.
 * - [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) is used on the expandable row button to provide a label for the button, since the button doesn't have any text content.
 */
const StoryMeta = {
  title: "ZTable",
  component: ZTable,
  args: {
    "bordered": true,
    "--z-table--cells-padding": "16px",
  },
} satisfies Meta<ZTableStoriesArgs>;

export default StoryMeta;

const cellsTemplate = (count = 1) => [...new Array(count)].map(() => <z-td>Contenuto cella</z-td>);

export const Default = {
  render: (args) => (
    <z-table
      class="z-table-demo"
      {...args}
    >
      <z-thead>
        <z-tr>
          {[...new Array(8)].map(() => (
            <z-th>Titolo colonna</z-th>
          ))}
        </z-tr>
      </z-thead>
      <z-tbody>
        {[...new Array(5)].map(() => (
          <z-tr>{cellsTemplate(8)}</z-tr>
        ))}
      </z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan={8}>Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>
  ),
};

/**
 * Just set `expandable` prop on the `z-tr` element to make it expandable, then put an additional `z-td` as extended content.
 * If you put a clickable item as a child cell of a z-tr with `expandable` set to `true`, you need to set a "prevent-expand" class on that item, in order to prevent unwanted row expansions.
 */
export const ExpandableRows = {
  render: (args) => (
    <z-table
      class="z-table-demo"
      {...args}
    >
      <z-thead>
        <z-tr>
          {[...new Array(8)].map((_, index) => (
            <z-th>Colonna {index + 1}</z-th>
          ))}
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td showMenu={VisibilityCondition.ALWAYS}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
          {cellsTemplate(5)}
        </z-tr>
        <z-tr>{cellsTemplate(8)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>
            <span>Contenuto cella</span>
            <z-button
              class="prevent-expand"
              onClick={() => alert("button clicked without expanding the row")}
              icon="plus"
              size={ControlSize.X_SMALL}
            ></z-button>
          </z-td>
          {cellsTemplate(5)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr>{cellsTemplate(8)}</z-tr>
        <z-tr expandable>
          <z-td>Contenuto cella</z-td>
          <z-td showMenu={VisibilityCondition.ALWAYS}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
          {cellsTemplate(6)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot>
        <z-tr>
          <z-td colspan={8}>Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>
  ),
};

/**
 * To make a column sticky, you need to set the `sticky` prop on the `z-th` and/or `z-td` elements of the same column.
 * For the header or footer, just set the `sticky` prop on the `z-thead` or `z-tfoot` element.
 */
export const Sticky = {
  args: {
    stickyHeader: true,
    stickyFooter: true,
    stickFirstColumn: true,
  },
  render: (args) => (
    <z-table
      class="z-table-demo"
      bordered={args.bordered}
      style={{
        "--z-table--cells-padding": args["--z-table--cells-padding"],
        "height": "400px",
      }}
    >
      <z-thead sticky={args.stickyHeader}>
        <z-tr>
          <z-th sticky={args.stickFirstColumn}>Colonna 1</z-th>
          {[...new Array(7)].map((_, index) => (
            <z-th>Colonna {index + 2}</z-th>
          ))}
        </z-tr>
      </z-thead>
      <z-tbody>
        <z-tr>
          <z-td sticky={args.stickFirstColumn}>Contenuto cella 1</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td>Contenuto cella</z-td>
          <z-td showMenu={VisibilityCondition.ALWAYS}>
            <span>Contenuto cella con menu</span>
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-td>
          {cellsTemplate(4)}
        </z-tr>
        {[...new Array(5)].map(() => (
          <z-tr>
            <z-td sticky={args.stickFirstColumn}>Contenuto cella 1</z-td>
            {cellsTemplate(7)}
          </z-tr>
        ))}
        <z-tr expandable>
          <z-td sticky={args.stickFirstColumn}>Contenuto cella 1</z-td>
          {cellsTemplate(6)}
          <z-td>
            <span>Contenuto cella</span>
            <z-button
              class="prevent-expand"
              onClick={() => alert("button clicked")}
              icon="plus"
              size={ControlSize.X_SMALL}
            ></z-button>
          </z-td>
          <z-td>Contenuto espanso</z-td>
        </z-tr>
        <z-tr expandable>
          <z-td sticky={args.stickFirstColumn}>Contenuto cella 1</z-td>
          {cellsTemplate(7)}
          <z-td>Contenuto espanso</z-td>
        </z-tr>
      </z-tbody>
      <z-tfoot sticky={args.stickyFooter}>
        <z-tr>
          <z-td colspan={8}>Table footer</z-td>
        </z-tr>
      </z-tfoot>
    </z-table>
  ),
};

/**
 * Use the `showMenu` prop on `z-td` or `z-th`, setting a value of the enum `VisibilityCondition` (`HOVER` or `ALWAYS`), to show a contextual menu button on the cell. The content of the menu must be placed using the slot `contextual-menu`.
 * Use `popoverPosition` prop on `z-th` to set the position of contextual menu, default is `auto`.
 */
export const CellsWithContextualMenu = {
  argTypes: {
    isFocusable: boolean,
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
      options: Object.values(VisibilityCondition),
    },
  },
  args: {
    isFocusable: true,
    showMenu: VisibilityCondition.HOVER,
    popoverPosition: PopoverPosition.AUTO,
  },
  render: (args) => (
    <z-table
      class="z-table-demo"
      bordered={args.bordered}
      style={{
        "--z-table--cells-padding": args["--z-table--cells-padding"],
      }}
    >
      <z-thead isFocusable={args.isFocusable}>
        <z-tr>
          <z-th>Colonna 1</z-th>
          <z-th
            showMenu={args.showMenu}
            popoverPosition={args.popoverPosition}
          >
            Heading con menu
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        {[...new Array(3)].map(() => (
          <z-tr>
            <z-td showMenu={args.showMenu}>
              <span>Contenuto cella con menu</span>
              <div slot="contextual-menu">Contenuto del popover</div>
            </z-td>
            <z-td>Contenuto cella</z-td>
            <z-td showMenu={args.showMenu}>
              <span>Contenuto cella con menu</span>
              <div slot="contextual-menu">Contenuto del popover</div>
            </z-td>
          </z-tr>
        ))}
      </z-tbody>
    </z-table>
  ),
};

/**
 * Set the `sortDirection` prop to `SortDirection.ASC` or `SortDirection.DESC` to enable sorting and show the sort button.
 * Clicking the button will fire the `sort` event with the `sortDirection` as detail.
 */
export const SortAction = {
  argTypes: {
    showSorting: {
      options: Object.values(VisibilityCondition),
      control: {
        type: "inline-radio",
      },
    },
  },
  args: {
    isFocusable: true,
    showSorting: VisibilityCondition.HOVER,
  },
  render: (args) => (
    <z-table
      class="z-table-demo"
      bordered={args.bordered}
      style={{
        "--z-table--cells-padding": args["--z-table--cells-padding"],
      }}
    >
      <z-thead isFocusable={args.isFocusable}>
        <z-tr>
          <z-th
            sortDirection={SortDirection.ASC}
            showMenu={VisibilityCondition.HOVER}
            showSorting={args.showSorting}
          >
            Colonna 1 con menu e sorting
            <div slot="contextual-menu">Contenuto del popover</div>
          </z-th>
          <z-th>Colonna 2</z-th>
          <z-th
            sortDirection={SortDirection.DESC}
            showSorting={args.showSorting}
          >
            Colonna 3 con sorting
          </z-th>
        </z-tr>
      </z-thead>
      <z-tbody>
        {[...new Array(3)].map(() => (
          <z-tr>{cellsTemplate(3)}</z-tr>
        ))}
      </z-tbody>
    </z-table>
  ),
};
