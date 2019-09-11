import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "z-panel-elem",
  styleUrl: "styles.css",
  shadow: true
})
export class ZPanelElem {
  @Prop() elemid?: string;
  @Prop() imgurl?: string;
  @Prop() imgalt?: string;
  @Prop() linkicon?: string;
  @Prop() linklabel: string;
  @Prop() url: string;
  @Prop() target?: string = "_blank";
  @Prop() isdisabled?: boolean = false;
  @Prop() descr_slot_name?: string;

  renderIcon() {
    if (this.isdisabled) {
      return <img src={this.imgurl} alt={this.imgalt} />;
    }
    return (
      <a class="elem-icon" href={this.url} target={this.target}>
        <img src={this.imgurl} alt={this.imgalt} />
      </a>
    );
  }

  render() {
    const elemId = this.elemid ? this.elemid : "";
    return (
      <div class="panel-elem-container">
        {(this.imgurl || this.imgalt) && (
          <div class="panel-elem-icon">{this.renderIcon()}</div>
        )}
        <div class="panel-elem-link">
          <z-link
            url={this.url}
            label={this.linklabel}
            icon={this.linkicon}
            isdisabled={this.isdisabled}
            target={this.target}
            linkid={elemId + "link_id"}
          />
        </div>
        {this.descr_slot_name && (
          <div class="panel-elem-desc body-long-01">
            <slot name={this.descr_slot_name} />
          </div>
        )}
      </div>
    );
  }
}
