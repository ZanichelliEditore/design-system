import {Component, Prop, h} from "@stencil/core";

/**
 * @slot `descr_slot_name` - description content
 */
@Component({
  tag: "z-panel-elem",
  styleUrl: "styles.css",
  shadow: true,
})
export class ZPanelElem {
  /** html element id (optional) */
  @Prop() elemid?: string;
  /** image url source (optional) */
  @Prop() imgurl?: string;
  /** alternative image text (optional) */
  @Prop() imgalt?: string;
  /** icon link name (optional) */
  @Prop() linkicon?: string;
  /** link label text*/
  @Prop() linklabel: string;
  /** link url */
  @Prop() url: string;
  /** link target (optional) */
  @Prop() target?: string = "_blank";
  /** disabled status flag (optional) */
  @Prop() isdisabled?: boolean = false;
  /** name of slot container (optional) */
  @Prop() descr_slot_name?: string;

  renderIcon() {
    if (this.isdisabled) {
      return (
        <img
          src={this.imgurl}
          alt={this.imgalt}
        />
      );
    }
    return (
      <a
        class="elem-icon"
        href={this.url}
        target={this.target}
      >
        <img
          src={this.imgurl}
          alt={this.imgalt}
        />
      </a>
    );
  }

  render() {
    const elemId = this.elemid ? this.elemid : "";
    return (
      <div class="panel-elem-container">
        {(this.imgurl || this.imgalt) && <div class="panel-elem-icon">{this.renderIcon()}</div>}
        <div class="panel-elem-link">
          <z-link
            href={this.url}
            icon={this.linkicon}
            isdisabled={this.isdisabled}
            target={this.target}
            htmlid={elemId + "link_id"}
          >
            {this.linklabel}
          </z-link>
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
