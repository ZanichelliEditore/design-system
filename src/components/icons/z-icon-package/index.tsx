import {Component, h} from "@stencil/core";
import {ICONS} from "../icons";

@Component({
  tag: "z-icon-package",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZIconPackage {
  render(): HTMLDivElement {
    return (
      <div>
        {Object.keys(ICONS).map((icon) => {
          return (
            <div>
              <z-icon name={icon} />
              <label>{icon}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
