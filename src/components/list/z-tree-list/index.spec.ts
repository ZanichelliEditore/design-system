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
    const anchor = listElements[0].querySelector("a");

    expect(anchor.getAttribute("href")).toBeNull();
    expect(anchor.classList.contains("link-clickable")).toBe(false);
  });

  it("applies clickable class when clickable prop is true", async () => {
    const items: TreeListItem[] = [{id: "item2", name: "Clickable Item", url: "/click"}];
    const page = await newSpecPage({
      components: [ZTreeList],
      html: `<z-tree-list clickable></z-tree-list>`,
    });
    page.root.items = items;
    await page.waitForChanges();

    const anchor = page.root.shadowRoot.querySelector("a");

    expect(anchor.getAttribute("href")).toBe("/click");
    expect(anchor.classList.contains("link-clickable")).toBe(true);
  });

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
      const anchor = listElements[0].querySelector("a");
      expect(anchor.getAttribute("href")).toBeNull();
      expect(anchor.classList.contains("link-clickable")).toBe(false);
    });

    it("applies clickable class when clickable prop is true", async () => {
      const items: TreeListItem[] = [{id: "item2", name: "Clickable Item", url: "/click"}];
      const page = await newSpecPage({
        components: [ZTreeList],
        html: `<z-tree-list clickable></z-tree-list>`,
      });
      page.root.items = items;
      await page.waitForChanges();

      const anchor = page.root.shadowRoot.querySelector("a");
      expect(anchor.getAttribute("href")).toBe("/click");
      expect(anchor.classList.contains("link-clickable")).toBe(true);
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

    it("applies bold style to first level items when bold-parents is true", async () => {
      const items: TreeListItem[] = [{id: "item3", name: "Parent", url: "/parent"}];
      const page = await newSpecPage({
        components: [ZTreeList],
        html: `<z-tree-list bold-parents></z-tree-list>`,
      });
      page.root.items = items;
      await page.waitForChanges();

      const labelSpan = page.root.shadowRoot.querySelector(".item-label");
      expect(labelSpan.classList.contains("bold-parent")).toBe(true);
    });

    it("applies bold style only to first level items when bold-parents is true", async () => {
      const items: TreeListItem[] = [
        {
          id: "parent1",
          name: "Parent 1",
          url: "/parent1",
          children: [{id: "child1", name: "Child 1", url: "/child1"}],
        },
        {
          id: "parent2",
          name: "Parent 2",
          url: "/parent2",
        },
      ];
      const page = await newSpecPage({
        components: [ZTreeList],
        html: `<z-tree-list bold-parents></z-tree-list>`,
      });
      page.root.items = items;
      await page.waitForChanges();

      // Query all item-label spans
      const labelSpans = page.root.shadowRoot.querySelectorAll(
        "z-list-element > a > span.item > span.item-label"
      ) as NodeListOf<HTMLElement>;
      // Expect two top-level items (Parent 1 and Parent 2) to have bold styling and
      // the nested Child 1 to not have bold styling.
      expect(labelSpans.length).toBe(3);
      expect(labelSpans[0].classList.contains("bold-parent")).toBe(true); // Parent 1
      expect(labelSpans[1].classList.contains("bold-parent")).toBe(false); // Child 1
      expect(labelSpans[2].classList.contains("bold-parent")).toBe(true); // Parent 2
    });

    it("does not apply bold style when bold-parents is false", async () => {
      const items: TreeListItem[] = [{id: "item5", name: "No Bold", url: "/nobold"}];
      const page = await newSpecPage({
        components: [ZTreeList],
        html: `<z-tree-list></z-tree-list>`,
      });
      page.root.items = items;
      await page.waitForChanges();

      const labelSpan = page.root.shadowRoot.querySelector(".item-label");
      expect(labelSpan.classList.contains("bold-parent")).toBe(false);
    });

    it("emits itemClicked event on anchor click", async () => {
      const items: TreeListItem[] = [{id: "item4", name: "Clickable Item", url: "/click"}];
      const page = await newSpecPage({
        components: [ZTreeList],
        html: `<z-tree-list clickable></z-tree-list>`,
      });
      page.root.items = items;
      await page.waitForChanges();

      let eventEmitted = false;
      page.root.addEventListener("itemClicked", (event: CustomEvent) => {
        eventEmitted = true;
        expect(event.detail.name).toBe("Clickable Item");
      });

      const anchor = page.root.shadowRoot.querySelector("a");
      anchor.click();
      await page.waitForChanges();
      expect(eventEmitted).toBe(true);
    });
  });
});
