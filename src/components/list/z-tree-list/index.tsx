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

  /** Items is clickable */
  @Prop()
  clickable: boolean;

  /** First parents was semi bold */
  @Prop()
  boldParents: boolean;

  /** Emitted on item click */
  @Event()
  itemClicked: EventEmitter<TreeListItem>;

  private handleClick(item: TreeListItem): void {
    this.itemClicked.emit(item);
    // eslint-disable-next-line no-console
    console.log("clicked");
  }

  private renderTreeList(item: TreeListItem, depth?: number): HTMLZListElementElement {
    depth = depth || 0;

    return (
      <z-list-element
        disabled={item.disabled}
        hasTreeItems={true}
      >
        <a
          class={{
            "list-element": true,
            "link-clickable": this.clickable,
          }}
          tabIndex={0}
          onClick={() => this.handleClick(item)}
          href={item.url}
        >
          <span class="item ellipsis">
            {item?.icon && (
              <z-icon
                width={16}
                height={16}
                fill={this.clickable ? "color-primary01" : ""}
                class="item-icon"
                name={item.icon}
              />
            )}
            <span
              class={{
                "item-label": true,
                "bold-parent": this.boldParents && depth === 0,
              }}
              title={item.name}
              innerHTML={item.name}
            />
          </span>
        </a>
        {item.children && item.children.length > 0 ? (
          <z-list>
            <div class="children-node">{item.children.map((child) => this.renderTreeList(child, depth + 1))}</div>
          </z-list>
        ) : null}
      </z-list-element>
    );
  }

  render(): HTMLZTreeListElement {
    return <Host class="tree-list">{this.items.map((item) => this.renderTreeList(item))}</Host>;
  }
}
