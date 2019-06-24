import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-list-item",
  styleUrls: ["../../global-styles.css", "./styles.css"],
  shadow: true
})
export class ZListItem {
  @Prop() text: string;
  @Prop() link?: string;
  @Prop() icon?: string;

  constructor() {
    console.log(this.icon)
  }

  render() {
    return (
      <li>
        <span>
          {this.icon && <img src={this.icon}/>}
          {this.link ? <a href={this.link}>{this.text}</a> : this.text}
        </span>
      </li>
    );
  }
}
