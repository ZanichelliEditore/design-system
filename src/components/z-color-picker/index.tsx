import {Component, Element, Event, EventEmitter, Host, Listen, Prop, h} from "@stencil/core";
import {ColorPickerPalette} from "../../beans";
import {containsElement} from "../../utils/utils";

const LOCALES = {
  it: {
    "Select a color": "Seleziona un colore",
    "Color swatch": "Campione di colore",
  },
  en: {
    "Select a color": "Select a color",
    "Color swatch": "Color swatch",
  },
} as const;

/** Number of colors in each group (column) of the grid. */
const COLOR_GROUP_SIZE = 5;

/** Number of color groups (columns) in the grid. */
const COLOR_GROUPS = 9;

/**
 * Color picker component.
 * This component allows the user to pick a color from a predefined set.
 */
@Component({
  tag: "z-color-picker",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZColorPicker {
  @Element() host: HTMLZColorPickerElement;

  /**
   * The selected color to highlight.
   */
  @Prop({mutable: true})
  selectedColor: ColorPickerPalette;

  /**
   * The language for the aria labels inside the color picker.
   */
  @Prop()
  lng: "it" | "en" = "it";

  /**
   * The aria-label for the color picker, e.g. "Select a background color for the label".
   */
  @Prop()
  htmlAriaLabel: string;

  /**
   * Event emitted when a color is selected.
   */
  @Event()
  colorSelected: EventEmitter<ColorPickerPalette>;

  /**
   * The color keys arranged in row-major order for rendering and navigation.
   */
  private colorKeysByRow: ColorPickerPalette[] = [];

  private _colorButtons: HTMLButtonElement[] = [];

  private get colorButtons(): HTMLButtonElement[] {
    if (!this._colorButtons.length) {
      this._colorButtons = Array.from(this.host.shadowRoot.querySelectorAll("button")) as HTMLButtonElement[];
    }

    return this._colorButtons;
  }

  /**
   * Reorders color keys from column-major (the format of the `ColorPickerPalette` object) to row-major (visual/navigation order).
   * This ensures button indices in the DOM match their visual position in the grid.
   */
  private sortColorKeysByRow(): ColorPickerPalette[] {
    const allKeys = Object.keys(ColorPickerPalette) as ColorPickerPalette[];
    const ordered: ColorPickerPalette[] = [];

    // Iterate through visual positions (row by row, left to right)
    for (let row = 0; row < COLOR_GROUP_SIZE; row++) {
      for (let col = 0; col < COLOR_GROUPS; col++) {
        const columnMajorIndex = col * COLOR_GROUP_SIZE + row;
        if (columnMajorIndex < allKeys.length) {
          ordered.push(allKeys[columnMajorIndex]);
        }
      }
    }

    return ordered;
  }

  /**
   * When the container receives focus, move focus to the first color button and make the container non-tabbable.
   */
  @Listen("focus")
  handleContainerFocus(): void {
    if (!this.colorButtons.length) {
      return;
    }

    // Set first button as tabbable
    this.colorButtons[0].tabIndex = 0;
    this.colorButtons[0].focus();
    // Set container as non-tabbable
    this.host.tabIndex = -1;
  }

  /**
   * Handle keyboard navigation within the color picker.
   * Arrow keys move focus in the expected direction, wrapping around edges. The grid is navigated in row-major order.
   */
  @Listen("keydown")
  handleKeyDown(event: KeyboardEvent): void {
    const target = event.composedPath()[0] as HTMLElement;
    if (!target.dataset.color) {
      return;
    }

    const currentIndex = this.colorButtons.indexOf(target as HTMLButtonElement);
    const totalColors = this.colorButtons.length;
    const row = Math.floor(currentIndex / COLOR_GROUPS);
    const col = currentIndex % COLOR_GROUPS;
    let newIndex = currentIndex;

    switch (event.key) {
      case "ArrowRight": {
        const newCol = col + 1;
        const newRow = newCol >= COLOR_GROUPS ? (row + 1) % COLOR_GROUP_SIZE : row;
        newIndex = newRow * COLOR_GROUPS + (newCol % COLOR_GROUPS);
        if (newIndex >= totalColors) {
          newIndex = 0; // Wrap to first item
        }

        break;
      }
      case "ArrowLeft": {
        const newCol = col - 1;
        const newRow = newCol < 0 ? (row - 1 + COLOR_GROUP_SIZE) % COLOR_GROUP_SIZE : row;
        newIndex = newRow * COLOR_GROUPS + ((newCol + COLOR_GROUPS) % COLOR_GROUPS);
        if (newIndex >= totalColors) {
          newIndex = totalColors - 1; // Wrap to last item
        }

        break;
      }
      case "ArrowDown": {
        let newRow = row + 1;
        let newCol = col;
        if (newRow >= COLOR_GROUP_SIZE) {
          // Wrap to first item of next column
          newRow = 0;
          newCol = (col + 1) % COLOR_GROUPS;
        }
        newIndex = newRow * COLOR_GROUPS + newCol;
        if (newIndex >= totalColors) {
          newIndex = 0; // Wrap to first item
        }

        break;
      }
      case "ArrowUp": {
        let newRow = row - 1;
        let newCol = col;
        if (newRow < 0) {
          // Wrap to last item of previous column
          newRow = COLOR_GROUP_SIZE - 1;
          newCol = (col - 1 + COLOR_GROUPS) % COLOR_GROUPS;
        }
        newIndex = newRow * COLOR_GROUPS + newCol;
        if (newIndex >= totalColors) {
          newIndex = totalColors - 1; // Wrap to last item
        }

        break;
      }
      default:
        return;
    }

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalColors) {
      // Remove tabindex from current button
      this.colorButtons[currentIndex].tabIndex = -1;
      // Set tabindex on new button
      this.colorButtons[newIndex].tabIndex = 0;
      this.colorButtons[newIndex].focus();
      event.preventDefault();
    }
  }

  /**
   * When focus leaves the color picker (e.g. user tabs away), reset all buttons to non-tabbable and make the container tabbable again.
   */
  @Listen("blur")
  handleBlur(event: FocusEvent): void {
    const relatedTarget = event.relatedTarget as HTMLElement;
    if (!containsElement(this.host, relatedTarget)) {
      this.host.tabIndex = 0;
      this.colorButtons.forEach((btn) => (btn.tabIndex = -1));
    }
  }

  private selectColor(color: ColorPickerPalette): void {
    this.selectedColor = color;
    this.colorSelected.emit(color);
  }

  componentWillLoad(): void {
    this.colorKeysByRow = this.sortColorKeysByRow();
  }

  render(): HTMLZColorPickerElement {
    return (
      <Host
        role="listbox"
        aria-label={this.htmlAriaLabel || LOCALES[this.lng]["Select a color"]}
        tabIndex={0}
      >
        {this.colorKeysByRow.map((colorKey: ColorPickerPalette) => (
          <button
            class="color-swatch"
            data-color={colorKey}
            role="option"
            aria-selected={this.selectedColor?.toUpperCase() === colorKey.toUpperCase() ? "true" : "false"}
            tabIndex={-1}
            onClick={() => this.selectColor(colorKey)}
          >
            <div
              class="color-swatch"
              role="img"
              aria-roledescription={LOCALES[this.lng]["Color swatch"]}
              aria-label={ColorPickerPalette[colorKey][this.lng]}
              style={{backgroundColor: colorKey}}
            ></div>
          </button>
        ))}
      </Host>
    );
  }
}
