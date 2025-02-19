import {Component, Element, h, Host, Prop} from "@stencil/core";
import {TreeListItem} from "../../../beans";

@Component({
  tag: "z-tree-list",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZTreeList {
  @Element() host: HTMLZTreeListElement;

  /* Items to render */
  @Prop()
  items: TreeListItem[] = [];

  /* Items is clickable */
  @Prop()
  clickable: boolean;

  /* First parents was semi bold */
  @Prop()
  boldParents: boolean;

  private renderTreeList(item: TreeListItem, depth: number = 0): HTMLZListElementElement {
    return (
      <z-list-element
        disabled={item.disabled}
        hasTreeItems={true}
      >
        <a
          class={{
            "list-element": true,
            "link-clickable": this.clickable,
            "link-not-clickable": !this.clickable,
          }}
          tabIndex={0}
          onClick={() => console.log("clicked")}
          href={item.url}
        >
          <span class="item ellipsis">
            {item?.icon && (
              <z-icon
                width={16}
                height={16}
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
