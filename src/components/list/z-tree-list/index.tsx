import {Component, Element, h, Host, Prop, State} from "@stencil/core";
import {KeyboardCode, ListDividerType, ListSize, SelectItem} from "../../../beans";

@Component({
  tag: "z-tree-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTreeList {
  @Element() host: HTMLZTreeListElement;

  /** The id of the input element */
  @Prop()
  htmlid: string;

  /** Map of item IDs to their keys */
  @Prop()
  itemIdKeyMap: Record<string, number> = {};

  /** Whether items are grouped by category */
  @Prop()
  hasGroupItems?: boolean;

  /** Whether items have a tree structure */
  @Prop()
  hasTreeItems?: boolean;

  /** List of items to display */
  @Prop()
  items: SelectItem[] = [];

  /** Function to determine list size */
  @Prop()
  listSizeType: () => ListSize;

  /** Handler for item selection */
  @Prop()
  handleItemSelect: (selected: null | SelectItem) => void;

  /** Handler for arrow navigation */
  @Prop()
  handleArrowKeyNav: (e: KeyboardEvent, idOrReset: string | number) => void;

  /** Optional no results message */
  @Prop()
  noResultsLabel?: string = "Nessun risultato";

  @State()
  searchString: null | string;

  private renderTreeList(
    item: SelectItem,
    isLastChild: boolean,
    parentHasSiblings: boolean,
    isTopLevel?: boolean
  ): HTMLZListElementElement {
    const thisItemKey = this.itemIdKeyMap[item.id];

    const hasDivider = this.hasGroupItems
      ? undefined
      : isTopLevel && parentHasSiblings && !isLastChild
        ? ListDividerType.ELEMENT
        : undefined;

    return (
      <z-list-element
        clickable={!item.disabled}
        disabled={item.disabled}
        class={{
          "grouped-tree-parent-node": this.hasGroupItems && !!item.children?.length,
          "tree-search-item": this.hasGroupItems && isTopLevel && !item.children?.length && !!this.searchString,
        }}
        size={this.listSizeType()}
        dividerType={hasDivider}
        hasTreeItems={this.hasTreeItems}
      >
        <div
          id={`${this.htmlid}_key_${thisItemKey}`}
          role="option"
          class="list-element"
          tabIndex={0}
          onClick={() => this.handleItemSelect(item)}
          onKeyDown={(e: KeyboardEvent) => {
            this.handleArrowKeyNav(e, thisItemKey);
            if (e.key === KeyboardCode.ENTER) {
              this.handleItemSelect(item);
            }
          }}
        >
          <span class="item ellipsis">
            {item?.icon && (
              <z-icon
                class="item-icon"
                name={item.icon}
              />
            )}
            <span
              class={{
                "item-label": true,
                "selected": !!item.selected,
              }}
              title={item.name}
              innerHTML={item.selected ? `<strong>${item.name}</strong>` : item.name}
            />
          </span>
          {item.icon && <z-tag icon={item.icon}></z-tag>}
        </div>
        {item.children && item.children.length > 0 ? (
          <z-list>
            <div class="children-node">
              {item.children.map((child, index, arr) =>
                this.renderTreeList(child, index === arr.length - 1, arr.length > 1, false)
              )}
            </div>
          </z-list>
        ) : null}
      </z-list-element>
    );
  }

  private renderGroupedTree(): HTMLZListGroupElement[] {
    const grouped = this.items.reduce(
      (acc, item) => {
        const category = item.category || "Altra categoria";
        acc[category] = acc[category] || [];
        acc[category].push(item);

        return acc;
      },
      {} as Record<string, SelectItem[]>
    );

    return Object.entries(grouped).map(([category, items], index, entries) => {
      const parentHasSiblings = Object.values(grouped).some((groupItems) => groupItems.length > 1);

      return (
        <z-list-group
          divider-type={index === entries.length - 1 ? undefined : ListDividerType.ELEMENT}
          hasTreeItems={true}
        >
          <span
            class="body-3-sb z-list-group-title"
            slot="header-title"
          >
            {category}
          </span>
          <z-list>
            {items.map((item, i, arr) => [
              this.renderTreeList(item, i === arr.length - 1, parentHasSiblings, true),
              i < arr.length - 1 ? (
                <z-divider
                  key={`divider-${i}`}
                  style={{zIndex: "100", height: "var(--border-size-small)"}}
                />
              ) : null,
            ])}
          </z-list>
          {index !== entries.length - 1 && <z-divider style={{zIndex: "100", height: "var(--border-size-small)"}} />}
        </z-list-group>
      );
    });
  }

  private renderNoResults(): HTMLZListElementElement {
    return (
      <z-list-element
        color="color-primary01"
        class="no-results"
        size={this.hasTreeItems ? ListSize.MEDIUM : this.listSizeType()}
      >
        <z-icon
          name="multiply-circle"
          fill="color-primary01-icon"
        />
        {this.noResultsLabel}
      </z-list-element>
    );
  }

  render(): HTMLZListElementElement | HTMLZListGroupElement {
    if (!this.items.length) {
      return this.renderNoResults();
    }

    if (this.hasGroupItems && this.hasTreeItems) {
      return <Host>{this.renderGroupedTree()}</Host>;
    }

    return (
      <Host>
        {this.items.map((item: SelectItem, index, array) => {
          const isLastItem = index === array.length - 1;
          const parentHasSiblings = array.length > 1;

          return this.renderTreeList(item, isLastItem, parentHasSiblings, true);
        })}
      </Host>
    );
  }
}
