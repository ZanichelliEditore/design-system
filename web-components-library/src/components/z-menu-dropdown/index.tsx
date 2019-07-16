import { Component, Prop, h, State, Watch } from '@stencil/core';
import { MenuDropdownItem } from "../../beans/index.js";

import {retrieveAsset} from "../../utils/utils";

import  icons from "../../constants/icons";
@Component({
  tag: 'z-menu-dropdown',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZMenuDropdown {
  @Prop() nomeutente: string;
  @Prop() menucontent: string;

  @State() ismenuopen:boolean = false;

  linkarray:MenuDropdownItem[];

  componentDidLoad() {
      this.parseinputrawdata(this.menucontent);
  }

  parseinputrawdata(inputrawdata: string) {
    this.linkarray = [...JSON.parse(inputrawdata)];
  }

  @Watch("menucontent") //this will run everytime values are changed
  onmenucontentChange(newValue: string) {
    this.parseinputrawdata(newValue);
  }

  renderMenuOpen(){
    if(this.ismenuopen){
      return(
        <ul>
          {this.linkarray.map( bean => (
            <li><a href={bean.link}>{bean.text}</a></li>
          ))}
        </ul>
      );
    }
  }

  renderButtonMenu(){
      return(
          <span class="arrow">
            <img src={this.ismenuopen?retrieveAsset(icons.iconarrowup):retrieveAsset(icons.iconarrowdown)}/>
          </span>
      );
  }

  retriveMenuClass(){
   if(this.ismenuopen){
    return "menuOpened"
  }
  }

  render() {
    return (
      <div class={this.retriveMenuClass()} onClick={() => this.ismenuopen=!this.ismenuopen} tabindex="0">
        <div class="container">
          <img src={retrieveAsset(icons.iconuserlogo)}/>
          <span class="user">{this.nomeutente}</span>
          {this.renderButtonMenu()}
        </div>
        {this.renderMenuOpen()}
      </div>
    );
  }
}
