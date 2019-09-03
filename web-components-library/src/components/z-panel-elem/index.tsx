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
  @Prop() description?: string;

  render() {
    return (
      <div class="panel-elem-container">
        <div class="panel-elem-logo">
          <z-logo
            imageurl={this.imgurl}
            imagealt={this.imgalt}
            link={this.url}
            targetblank={!!(this.target == "_blank")}
          />
        </div>
        <div class="panel-elem-link">
          <z-link
            url={this.url}
            label={this.linklabel}
            icon={this.linkicon}
            isdisabled={this.isdisabled}
            target={this.target}
            linkid={this.elemid + "link_id"}
          />
        </div>
        <div class="panel-elem-desc heading-01">{this.description}</div>
      </div>
    );
  }
}
