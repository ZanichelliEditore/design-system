import {Component, Element, Event, EventEmitter, Host, Prop, h} from "@stencil/core";
import {TreeListItem} from "../../../beans";

@Component({
  tag: "z-tree-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTreeList {
  @Element() host: HTMLZTreeListElement;

  /** Items to render */
  @Prop()
  items: TreeListItem[] = [];

  /** Emitted on item click */
  @Event()
  treeItemClicked: EventEmitter<TreeListItem>;

  private htmlTag: string;

  private handleClick(item: TreeListItem): void {
    this.treeItemClicked.emit({id: item.id, name: item.name, url: item.url});
  }

  private renderTreeList(item: TreeListItem): HTMLZListElementElement {
    this.htmlTag = item.url ? "a" : "span";

    return (
      <z-list-element
        clickable={!!item.url}
        hasTreeItems={true}
      >
        <this.htmlTag
          class={{
            "list-element": true,
            "z-link": !!item.url,
            "link-clickable": !!item.url,
          }}
          tabIndex={0}
          onClick={() => this.handleClick(item)}
          href={item.url ? item.url : undefined}
        >
          <span class="item ellipsis">
            {item?.icon && (
              <z-icon
                width={16}
                height={16}
                fill={item.url ? "color-primary01" : "color-default-icon"}
                class="item-icon"
                name={item.icon}
              />
            )}
            <span
              class={{
                "item-label": true,
                "bold-item": item.bold,
              }}
              title={item.name}
            >
              {item.name}
            </span>
          </span>
        </this.htmlTag>
        {item.children && item.children.length > 0 ? (
          <z-list>
            <div class="children-node">{item.children.map((child) => this.renderTreeList(child))}</div>
          </z-list>
        ) : null}
      </z-list-element>
    );
  }

  render(): HTMLZTreeListElement {
    return <Host class="tree-list">{this.items.map((item) => this.renderTreeList(item))}</Host>;
  }
}
