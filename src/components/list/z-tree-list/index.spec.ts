import {newSpecPage} from "@stencil/core/testing";
import {ZTreeList} from ".";
import {TreeListItem} from "../../../beans";

describe("Suite test ZTreeList", () => {
  it("renders without items", async () => {
    const page = await newSpecPage({
      components: [ZTreeList],
      html: `<z-tree-list></z-tree-list>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot.querySelectorAll("z-list-element")).toHaveLength(0);
  });

  it("renders a single item", async () => {
    const items: TreeListItem[] = [{id: "item1", name: "Item 1", url: "/item1", icon: "home"}];
    const page = await newSpecPage({
      components: [ZTreeList],
      html: `<z-tree-list></z-tree-list>`,
    });
    page.root.items = items;
    await page.waitForChanges();

    const listElements = page.root.shadowRoot.querySelectorAll("z-list-element");
    expect(listElements.length).toBe(1);
    // Utilizziamo 'span' perchè clickable non è settato
    const element = listElements[0].querySelector("span");
    expect(element.getAttribute("href")).toBe(null);
    expect(element.classList.contains("link-clickable")).toBe(false);
  });

  it("applies clickable class when clickable prop is true", async () => {
    const items: TreeListItem[] = [{id: "item2", name: "Clickable Item", url: "/click"}];
    const page = await newSpecPage({
      components: [ZTreeList],
      html: `<z-tree-list clickable></z-tree-list>`,
    });
    page.root.items = items;
    await page.waitForChanges();

    // Con clickable true il tag renderizzato sarà 'a'
    const element = page.root.shadowRoot.querySelector("a");
    expect(element.getAttribute("href")).toBe("/click");
    expect(element.classList.contains("link-clickable")).toBe(true);
  });

  it("applies clickable class when item has url", async () => {
    const items: TreeListItem[] = [{id: "item2", name: "Clickable Item", url: "/click"}];
    const page = await newSpecPage({
      components: [ZTreeList],
      html: `<z-tree-list></z-tree-list>`, // rimosso l'attributo clickable
    });
    page.root.items = items;
    await page.waitForChanges();

    const element = page.root.shadowRoot.querySelector("a");
    expect(element.getAttribute("href")).toBe("/click");
    expect(element.classList.contains("link-clickable")).toBe(true);
  });

  it("renders children items recursively", async () => {
    const items: TreeListItem[] = [
      {
        id: "parent",
        name: "Parent",
        url: "/parent",
        children: [
          {id: "child1", name: "Child 1", url: "/child1"},
          {
            id: "child2",
            name: "Child 2",
            url: "/child2",
            children: [{id: "grandchild", name: "Grandchild", url: "/grandchild"}],
          },
        ],
      },
    ];
    const page = await newSpecPage({
      components: [ZTreeList],
      html: `<z-tree-list></z-tree-list>`,
    });
    page.root.items = items;
    await page.waitForChanges();

    const listElements = page.root.shadowRoot.querySelectorAll("z-list-element");
    expect(listElements.length).toBe(4);
  });

  it("applies bold style to first level items when bold-items is true", async () => {
    const items: TreeListItem[] = [{id: "item3", name: "Parent", url: "/parent", bold: true}];
    const page = await newSpecPage({
      components: [ZTreeList],
      html: `<z-tree-list></z-tree-list>`,
    });
    page.root.items = items;
    await page.waitForChanges();

    const labelSpan = page.root.shadowRoot.querySelector(".item-label");
    expect(labelSpan.classList.contains("bold-item")).toBe(true);
  });

  it("does not apply bold style when bold-items is false", async () => {
    const items: TreeListItem[] = [{id: "item5", name: "No Bold", url: "/nobold", bold: false}];
    const page = await newSpecPage({
      components: [ZTreeList],
      html: `<z-tree-list></z-tree-list>`,
    });
    page.root.items = items;
    await page.waitForChanges();

    const labelSpan = page.root.shadowRoot.querySelector(".item-label");
    expect(labelSpan.classList.contains("bold-item")).toBe(false);
  });

  it("emits treeItemClicked event on link click", async () => {
    const items: TreeListItem[] = [{id: "item4", name: "Clickable Item", url: "/click"}];
    const page = await newSpecPage({
      components: [ZTreeList],
      html: `<z-tree-list></z-tree-list>`,
    });
    page.root.items = items;
    await page.waitForChanges();

    let eventEmitted = false;
    page.root.addEventListener("treeItemClicked", (event: CustomEvent) => {
      eventEmitted = true;
      expect(event.detail.name).toBe("Clickable Item");
    });

    const element = page.root.shadowRoot.querySelector("a");
    element.click();
    await page.waitForChanges();
    expect(eventEmitted).toBe(true);
  });
});
