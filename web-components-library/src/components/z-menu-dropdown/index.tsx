import { Component, Prop, h, State } from '@stencil/core';
import { MenuDropdownItem } from "../../beans/index.js";

@Component({
  tag: 'z-menu-dropdown',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZMenuDropdown {
  @Prop() nomeutente: string;
  @Prop() menucontent: string | MenuDropdownItem[];
  @Prop() buttonid: string

  @State() ismenuopen: boolean = false;

  linkarray: MenuDropdownItem[];

  componentWillRender() {
    this.linkarray = typeof this.menucontent === 'string' ? JSON.parse(this.menucontent) : this.menucontent;
  }

  renderMenuOpen() {
    if (this.ismenuopen) {
      return (
        <ul>
          {this.linkarray.map(bean => (
            <li>
              <a id={bean.linkid} href={bean.link}>
                {bean.text}
              </a>
            </li>
          ))}
        </ul>
      );
    }
  }

  renderButtonMenu() {
    return (
      <span class="arrow">
        <z-icon name="select-icon-stroked" width={14} height={14} />
      </span>
    );
  }

  retriveMenuClass() {
    if (this.ismenuopen) {
      return "menuOpened"
    }
  }

  render() {
    return (
      <div class={this.retriveMenuClass()} onClick={() => this.ismenuopen = !this.ismenuopen} tabindex="0">
        <div class="container">
          <z-icon name="profilo-icon-stroked" width={14} height={14} />
          <span class="user">{this.nomeutente}</span>
          {this.renderButtonMenu()}
        </div>
        {this.renderMenuOpen()}
      </div>
    );
  }
}
