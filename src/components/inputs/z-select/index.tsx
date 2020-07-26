import {
  Component,
  Prop,
  State,
  h,
  Event,
  EventEmitter,
  Watch,
  Element,
  Method
} from "@stencil/core";
import {
  InputStatusBean,
  SelectItemBean,
  keybordKeyCodeEnum,
  InputStatusEnum
} from "../../../beans";
import {
  randomId,
  handleKeyboardSubmit,
  getClickedElement,
  getElementTree
} from "../../../utils/utils";

@Component({
  tag: "z-select",
  styleUrl: "styles.css",
  shadow: true
})
export class ZSelect {
  @Element() hostElement: HTMLElement;

  /** the id of the input element */
  @Prop() htmlid: string = randomId();
  /** the input name */
  @Prop() name?: string;
  /** the input label */
  @Prop() label?: string;
  /** the input is disabled */
  @Prop() disabled?: boolean = false;
  /** the input is readonly */
  @Prop() readonly?: boolean = false;
  /** the input placeholder (optional) */
  @Prop() placeholder?: string;
  /** the input html title (optional) */
  @Prop() htmltitle?: string;
  /** the input status (optional): available for text, password, number, email, textarea, select */
  @Prop() status?: InputStatusBean;
  /** show input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop() hasmessage?: boolean = true;
  /** input helper message (optional): available for text, password, number, email, textarea, select */
  @Prop() message?: string;
  /** items: available for select */
  @Prop() items?: SelectItemBean[] | string;

  @Prop() autocomplete?: boolean = false;

  @State() isOpen: boolean = false;

  @State() renderItemsList: SelectItemBean[];
  @State() selectedItem: null | SelectItemBean;
  @State() searchString: null | string;

  // private statusIcons = {
  //   success: "circle-check",
  //   error: "circle-cross-stroke",
  //   warning: "circle-warning"
  // };
  private itemsList: SelectItemBean[] = [];

  constructor() {
    this.toggleSelectUl = this.toggleSelectUl.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleSelectFocus = this.handleSelectFocus.bind(this);
  }

  @Watch("items")
  watchItems() {
    this.itemsList =
      typeof this.items === "string" ? JSON.parse(this.items) : this.items;
    this.selectedItem = this.itemsList.find(
      (item: SelectItemBean) => item.selected
    );
  }

  /** get the input value */
  @Method()
  async getValue(): Promise<string> {
    return this.selectedItem ? this.selectedItem.id : null;
  }

  /** Emitted on select option selection, returns select id, selected option id */
  @Event() optionSelect: EventEmitter;
  emitOptionSelect(item: null | SelectItemBean) {
    this.selectedItem = item;
    this.optionSelect.emit({
      id: this.htmlid,
      selected: item ? item.id : null
    });
  }

  componentWillLoad() {
    // console.log("componentWillLoad");
    this.watchItems();
  }

  componentWillRender() {
    // console.log("componentWillRender");
    this.resetRenderItemsList();
    if (this.searchString) this.filterItems(this.searchString);
  }

  resetRenderItemsList(): void {
    // console.log("resetRenderItemsList");
    const renderItemsList = [];
    this.itemsList.forEach((item: any) => {
      renderItemsList.push({ ...item });
    });
    this.renderItemsList = renderItemsList;
  }

  filterItems(searchString: string) {
    this.renderItemsList = this.renderItemsList.filter(item => {
      const start = item.name.toUpperCase().indexOf(searchString.toUpperCase());
      const end = start + searchString.length;
      const newName =
        item.name.substring(0, start) +
        item.name.substring(start, end).bold() +
        item.name.substring(end, item.name.length);

      item.name = newName;
      return start >= 0;
    });
  }

  handleInputChange(e: CustomEvent) {
    const searchString = e.detail.value;

    // if (!searchString) this.emitOptionSelect(null);
    if (!searchString) this.selectItem(null);

    this.searchString = searchString;
    if (!this.isOpen) this.toggleSelectUl();
  }

  selectItem(item: null | SelectItemBean) {
    // console.log("selectItem", item.id);
    if (item && item.disabled) return;

    this.itemsList = this.itemsList.map((i: SelectItemBean) => {
      if (i.selected) i.selected = false;
      if (i.id === (item ? item.id : null)) i.selected = true;
      return i;
    });

    this.emitOptionSelect(item);

    if (this.searchString) this.searchString = null;
  }

  arrowsSelectNav(e: KeyboardEvent, key: number) {
    const arrows = [keybordKeyCodeEnum.ARROW_DOWN, keybordKeyCodeEnum.ARROW_UP];
    if (!arrows.includes(e.keyCode)) return;

    e.preventDefault();
    e.stopPropagation();

    if (!this.isOpen) this.toggleSelectUl();

    let index: number;
    if (e.keyCode === keybordKeyCodeEnum.ARROW_DOWN) {
      index = key + 1 === this.itemsList.length ? 0 : key + 1;
    } else if (e.keyCode === keybordKeyCodeEnum.ARROW_UP) {
      index = key <= 0 ? this.itemsList.length - 1 : key - 1;
    }

    this.focusSelectItem(index);
  }

  focusSelectItem(index: number) {
    const focusElem = this.hostElement.shadowRoot.getElementById(
      `${this.htmlid}_${index}`
    );
    if (focusElem) focusElem.focus();
  }

  toggleSelectUl(selfFocusOnClose: boolean = false) {
    if (!this.isOpen) {
      document.addEventListener("click", this.handleSelectFocus);
      document.addEventListener("keyup", this.handleSelectFocus);
      // this.focusSelectItem(0);
      // il focus va messo dopo altrimenti non mi catcha il click
    } else {
      document.removeEventListener("click", this.handleSelectFocus);
      document.removeEventListener("keyup", this.handleSelectFocus);
      if (selfFocusOnClose) {
        this.hostElement.shadowRoot
          .getElementById(`${this.htmlid}_input`)
          .focus();
      }
    }

    this.isOpen = !this.isOpen;
  }

  handleSelectFocus(e: MouseEvent | KeyboardEvent) {
    if (e instanceof KeyboardEvent && e.keyCode === keybordKeyCodeEnum.ESC) {
      e.stopPropagation();
      return this.toggleSelectUl(true);
    }

    if (
      e instanceof KeyboardEvent &&
      e.keyCode !== keybordKeyCodeEnum.TAB &&
      e.keyCode !== keybordKeyCodeEnum.ENTER
    ) {
      console.log("handleSelectFocus NO TAB");
      return;
    }

    const tree = getElementTree(getClickedElement());
    const parent = tree.find(
      (elem: any) =>
        elem.nodeName.toLowerCase() === "z-input" &&
        elem.id === `${this.htmlid}_input`
    );

    if (!parent) {
      this.toggleSelectUl(e instanceof MouseEvent ? true : false);
    }
  }

  renderInput() {
    return (
      <z-input
        id={`${this.htmlid}_input`}
        placeholder={this.placeholder}
        label={this.label}
        value={
          this.selectedItem
            ? this.selectedItem.name.replace(/<[^>]+>/g, "")
            : null
        }
        icon="drop-down" // TODO: drop-up icon
        clearIcon={this.autocomplete}
        readonly={!this.autocomplete && this.isOpen} // TODO: gestire, col tab ci scrivi dentro anche se non puoi
        hasmessage={false}
        status={this.isOpen ? InputStatusEnum.selecting : undefined}
        onClick={() => this.toggleSelectUl()}
        onKeyUp={(e: KeyboardEvent) =>
          handleKeyboardSubmit(e, this.toggleSelectUl)
        }
        onKeyDown={(e: KeyboardEvent) =>
          this.arrowsSelectNav(
            e,
            this.selectedItem ? this.itemsList.indexOf(this.selectedItem) : -1
          )
        }
        onInputChange={(e: CustomEvent) => {
          this.handleInputChange(e);
        }}
      />
    );
  }

  renderSelectUl() {
    return (
      <div class={this.isOpen ? "open" : "closed"}>
        <div class="ulScrollWrapper">
          <ul
            role="listbox"
            tabindex={this.disabled || this.readonly || !this.isOpen ? -1 : 0}
            id={this.htmlid}
            aria-activedescendant={
              this.selectedItem ? this.selectedItem.id : null
            }
            class={`
            ${this.disabled && " disabled"}
            ${this.readonly && " readonly"}
            ${this.status ? " input_" + this.status : " input_default"}
            ${this.selectedItem ? " filled" : ""}
          `}
          >
            {this.renderSelectUlItems()}
          </ul>
        </div>
      </div>
    );
  }

  renderSelectUlItems() {
    // console.log("render", this.renderItemsList, this.searchString);

    return this.renderItemsList.map((item: SelectItemBean, key) => (
      <li
        role="option"
        tabindex={item.disabled || !this.isOpen ? -1 : 0}
        aria-selected={!!item.selected}
        class={item.disabled && "disabled"}
        id={`${this.htmlid}_${key}`}
        onClick={() => this.selectItem(item)}
        onKeyUp={(e: KeyboardEvent) =>
          handleKeyboardSubmit(e, this.selectItem, item)
        }
        onKeyDown={(e: KeyboardEvent) => this.arrowsSelectNav(e, key)}
      >
        <span innerHTML={item.name} />
      </li>
    ));
  }

  // TODO: componente message

  // renderMessage() {
  //   if (!this.hasmessage) return;

  //   return (
  //     <span class={`statusMsg msg_${this.status}`}>
  //       {this.status && this.message ? (
  //         <z-icon name={this.statusIcons[this.status]} width={14} height={14} />
  //       ) : null}
  //       <span innerHTML={this.message}></span>
  //     </span>
  //   );
  // }

  render() {
    return (
      <div class="selectWrapper">
        {this.renderInput()}
        {this.renderSelectUl()}
        {/* {this.renderMessage()} */}
      </div>
    );
  }
}
