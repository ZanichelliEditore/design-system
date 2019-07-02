import { Component, Prop, h, State, Watch } from '@stencil/core';
import { MenuDropdownItem } from "../../beans/index.js";

import {retrieveAsset} from "../../utils/utils";

@Component({
  tag: 'z-menu-dropdown',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZMenuDropdown {
  @Prop() iconuser: string;
  @Prop() icondropdownclosed: string;
  @Prop() icondropdownopened: string;
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
        <a onClick={() => this.ismenuopen=!this.ismenuopen}>
          <img src={this.ismenuopen?retrieveAsset(this.icondropdownopened):retrieveAsset(this.icondropdownclosed)}/>
        </a>
      );
  }

  retriveMenuClass(){
   if(this.ismenuopen){
    return "menuOpened"
  }
  }

  render() {
    return (
      <div class={this.retriveMenuClass()}>
        <div class="container">
          <img src={retrieveAsset(this.iconuser)}/>
          <span>{this.nomeutente}</span>
          {this.renderButtonMenu()}
        </div>
        {this.renderMenuOpen()}
      </div>
    );
  }
}
