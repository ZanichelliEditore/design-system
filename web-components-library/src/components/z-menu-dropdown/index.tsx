import { Component, Prop, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'z-menu-dropdown',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZMenuDropdown {
  @Prop() iconuser: string;
  @Prop() icondropdownclosed: string;
  @Prop() icondropdownopened: string;

  @Prop() menucontent: string;

  @State() linkarray:string[];
  @State() ismenuopen:boolean = false;

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
          <li>testo1</li>
          <li>testo2</li>
        </ul>
      );
    }
  }

  renderButtonMenu(){
    if(!this.ismenuopen){
      return(
        <a onClick={() => this.ismenuopen=!this.ismenuopen}><img src={this.icondropdownclosed}/></a>

      );
    }
    else{
      console.log(this.icondropdownopened)
      return(
        <a onClick={() => this.ismenuopen=!this.ismenuopen}><img src={this.icondropdownopened}/></a>

      );
    }
  }


  render() {
    return (
      <div>
        <div class="container">
          <img src={this.iconuser}/>
          <span>Dario Docente</span>
          {this.renderButtonMenu()}
        </div>
        {this.renderMenuOpen()}
      </div>
    );
  }
}
