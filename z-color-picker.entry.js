import { r as registerInstance, c as createEvent, h, H as Host, d as getElement } from './index-SFwvdS4t.js';
import { a2 as ColorPickerPalette } from './index-DdetsoIY.js';
import { a as containsElement } from './utils-CJc3A9NX.js';
import './breakpoints-Q-tWjk7P.js';

const stylesCss = () => `:host{display:grid;width:fit-content;padding:calc(var(--space-unit) * 2);background:var(--color-surface01);gap:var(--space-unit);grid-template-columns:repeat(9, calc(var(--space-unit) * 3));grid-template-rows:repeat(5, calc(var(--space-unit) * 3))}:host,*{box-sizing:border-box}button{--border-color:var(--color-surface05);padding:0;border:none;appearance:none;background:none;border-radius:var(--border-radius);cursor:pointer}button[data-color="#FFFFFF00"]{position:relative}button[data-color="#FFFFFF00"]::after{position:absolute;top:0;right:0;width:100%;height:100%;background:linear-gradient(     -45deg,     transparent 48%,     var(--border-color) 48%,     var(--border-color) 52%,     transparent 52%   );border-radius:var(--border-radius);content:""}button[aria-selected="true"]{box-shadow:0 0 0 1px var(--color-white),     0 0 0 3px var(--color-active-primary)}button:focus-visible{box-shadow:var(--shadow-focus-primary)}button .color-swatch{width:calc(var(--space-unit) * 3);height:calc(var(--space-unit) * 3);border:var(--border-size-small) solid var(--border-color);border-radius:var(--border-radius)}button[data-color="#FFFFFF00"]:disabled{--border-color:var(--color-disabled01-icon);cursor:not-allowed}button[data-color="#FFFFFF00"]:disabled .color-swatch{background-color:var(--color-disabled02)}`;

const LOCALES = {
    it: {
        "Select a color": "Seleziona un colore",
        "Color swatch": "Campione di colore",
    },
    en: {
        "Select a color": "Select a color",
        "Color swatch": "Color swatch",
    },
};
/** Number of colors in each group (column) of the grid. */
const COLOR_GROUP_SIZE = 5;
/** Number of color groups (columns) in the grid. */
const COLOR_GROUPS = 9;
const ZColorPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colorSelected = createEvent(this, "colorSelected", 7);
        /**
         * The language for the aria labels inside the color picker.
         */
        this.lng = "it";
        /**
         * Disables the transparent color option.
         * Setting `selectedColor` prop to `#FFFFFF00` while `disableTransparent` is true will default to `#333333` ("dark gray 2").
         */
        this.disableTransparent = false;
        /**
         * The color keys arranged in row-major order for rendering and navigation.
         */
        this.colorKeysByRow = [];
        this._colorButtons = [];
    }
    get colorButtons() {
        if (!this._colorButtons.length) {
            this._colorButtons = Array.from(this.host.shadowRoot.querySelectorAll("button"));
        }
        return this._colorButtons;
    }
    /**
     * Reorders color keys from column-major (the format of the `ColorPickerPalette` object) to row-major (visual/navigation order).
     * This ensures button indices in the DOM match their visual position in the grid.
     */
    sortColorKeysByRow() {
        const allKeys = Object.keys(ColorPickerPalette);
        const ordered = [];
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
    /** Move focus to the specified color button by index. */
    moveFocusTo(index) {
        // Reset tabindex of other buttons and set tabindex to 0 on selected button
        this.colorButtons.forEach((btn, i) => (btn.tabIndex = i === index ? 0 : -1));
        this.colorButtons[index].focus();
    }
    validateTransparentSelection() {
        if (this.disableTransparent && this.selectedColor === "#FFFFFF00") {
            this.selectedColor = "#333333"; // Default to dark gray 2 if transparent is disabled and currently selected
        }
    }
    emitColorSelected() {
        this.colorSelected.emit(this.selectedColor);
    }
    /**
     * Focuses the selected or first enabled color button and makes the container non-tabbable.
     */
    async setFocus() {
        // Reset tabindex of all buttons
        this.colorButtons.forEach((btn) => (btn.tabIndex = -1));
        const firstSelectedOrEnabled = this.colorButtons.find((btn) => btn.ariaSelected === "true") || this.colorButtons.find((btn) => !btn.disabled);
        if (!firstSelectedOrEnabled) {
            return;
        }
        firstSelectedOrEnabled.tabIndex = 0;
        setTimeout(() => {
            firstSelectedOrEnabled.focus();
        }, 50);
        // Set container as non-tabbable
        this.host.tabIndex = -1;
    }
    /**
     * Compute next index in row-major grid according to keyboard direction.
     */
    getNextIndexByKey(currentIndex, key, totalColors) {
        const row = Math.floor(currentIndex / COLOR_GROUPS);
        const col = currentIndex % COLOR_GROUPS;
        let newIndex = currentIndex;
        switch (key) {
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
        }
        return newIndex;
    }
    /**
     * Handle keyboard navigation within the color picker.
     * Arrow keys move focus in the expected direction, wrapping around edges. The grid is navigated in row-major order.
     */
    handleKeyDown(event) {
        var _a, _b;
        const target = event.composedPath()[0];
        if (!target.dataset.color) {
            return;
        }
        const currentIndex = this.colorButtons.indexOf(target);
        const totalColors = this.colorButtons.length;
        if (currentIndex < 0 || !["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(event.key)) {
            return;
        }
        let newIndex = currentIndex;
        let attempts = 0;
        do {
            newIndex = this.getNextIndexByKey(newIndex, event.key, totalColors);
            attempts++;
        } while (attempts < totalColors && ((_a = this.colorButtons[newIndex]) === null || _a === void 0 ? void 0 : _a.disabled));
        if (newIndex !== currentIndex &&
            newIndex >= 0 &&
            newIndex < totalColors &&
            !((_b = this.colorButtons[newIndex]) === null || _b === void 0 ? void 0 : _b.disabled)) {
            this.moveFocusTo(newIndex);
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * When focus leaves the color picker (e.g. user tabs away), reset all buttons to non-tabbable and make the container tabbable again.
     */
    handleBlur(event) {
        const relatedTarget = event.relatedTarget;
        if (!containsElement(this.host, relatedTarget)) {
            this.host.tabIndex = 0;
            this.colorButtons.forEach((btn) => (btn.tabIndex = -1));
        }
    }
    componentWillLoad() {
        this.colorKeysByRow = this.sortColorKeysByRow();
    }
    render() {
        return (h(Host, { key: '790b4417646b6902f68005a72cdc849a0269f3cb', role: "listbox", "aria-label": this.htmlAriaLabel || LOCALES[this.lng]["Select a color"], tabIndex: 0 }, this.colorKeysByRow.map((colorKey) => {
            var _a;
            return (h("button", { class: "color-swatch", "data-color": colorKey, role: "option", "aria-selected": ((_a = this.selectedColor) === null || _a === void 0 ? void 0 : _a.toUpperCase()) === colorKey.toUpperCase() ? "true" : "false", tabIndex: -1, onClick: () => (this.selectedColor = colorKey), disabled: this.disableTransparent && colorKey === "#FFFFFF00" }, h("div", { class: "color-swatch", role: "img", "aria-roledescription": LOCALES[this.lng]["Color swatch"], "aria-label": ColorPickerPalette[colorKey][this.lng], title: ColorPickerPalette[colorKey][this.lng], style: { backgroundColor: colorKey } })));
        })));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "disableTransparent": [{
                "validateTransparentSelection": 0
            }],
        "selectedColor": [{
                "validateTransparentSelection": 0
            }, {
                "emitColorSelected": 0
            }]
    }; }
};
ZColorPicker.style = stylesCss();

export { ZColorPicker as z_color_picker };
