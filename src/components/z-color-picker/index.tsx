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

/** Number of colors in each group/column of the grid. */
const COLOR_GROUP_SIZE = 5;

/**
 * Color picker component.
 * This component allow the user to pick a color from a predefined set.
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

  private get colorButtons(): HTMLButtonElement[] {
    return Array.from(this.host.shadowRoot.querySelectorAll("button")) as HTMLButtonElement[];
  }

  @Listen("focus")
  handleContainerFocus(): void {
    if (this.colorButtons.length > 0) {
      // Set first button as tabbable
      this.colorButtons[0].tabIndex = 0;
      this.colorButtons[0].focus();
      // Set container as non-tabbable
      this.host.tabIndex = -1;
    }
  }

  /**
   * Handle keyboard navigation within the color picker.
   */
  @Listen("keydown")
  handleKeyDown(event: KeyboardEvent): void {
    const target = event.composedPath()[0] as HTMLElement;
    if (!target.dataset.color) {
      return;
    }

    const currentIndex = this.colorButtons.indexOf(target as HTMLButtonElement);
    let newIndex = currentIndex;

    switch (event.key) {
      case "ArrowDown":
        newIndex = (currentIndex + 1) % this.colorButtons.length;
        break;
      case "ArrowUp":
        newIndex = (currentIndex - 1 + this.colorButtons.length) % this.colorButtons.length;
        break;
      case "ArrowRight":
        newIndex = (currentIndex + COLOR_GROUP_SIZE) % this.colorButtons.length;
        break;
      case "ArrowLeft":
        newIndex = (currentIndex - COLOR_GROUP_SIZE + this.colorButtons.length) % this.colorButtons.length;
        break;
      default:
        return;
    }

    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < this.colorButtons.length) {
      // Remove tabindex from current button
      this.colorButtons[currentIndex].tabIndex = -1;
      // Set tabindex on new button
      this.colorButtons[newIndex].tabIndex = 0;
      this.colorButtons[newIndex].focus();
      event.preventDefault();
    }
  }

  @Listen("blur")
  handleBlur(event: FocusEvent): void {
    const relatedTarget = event.relatedTarget as HTMLElement;
    // If focus is leaving the component, reset to container tabbable
    if (!containsElement(this.host, relatedTarget)) {
      this.host.tabIndex = 0;
      this.colorButtons.forEach((btn) => (btn.tabIndex = -1));
    }
  }

  private handleColorSelect(color: ColorPickerPalette): void {
    this.selectedColor = color;
    this.colorSelected.emit(color);
  }

  render(): HTMLZColorPickerElement {
    return (
      <Host
        role="listbox"
        aria-label={this.htmlAriaLabel || LOCALES[this.lng]["Select a color"]}
        tabIndex={0}
      >
        {Object.keys(ColorPickerPalette).map((colorKey: ColorPickerPalette) => (
          <button
            class="color-swatch"
            data-color={colorKey}
            role="option"
            aria-selected={this.selectedColor?.toUpperCase() === colorKey.toUpperCase() ? "true" : "false"}
            tabIndex={-1}
            onClick={() => this.handleColorSelect(colorKey)}
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
