import { r as registerInstance, h } from './index-a2ca4b97.js';

const stylesCss = "ul{font-family:var(--font-family-sans);color:var(--color-primary02);margin:0 calc(var(--space-unit) * 2);padding:0px;overflow:hidden;list-style:none;width:auto;height:auto}ul>li{padding-left:10px;text-indent:-10px}ul>li>a{display:block;font-size:14px;font-weight:var(--font-sb);text-decoration:none;color:var(--color-primary01);letter-spacing:0.16px;line-height:calc(var(--space-unit) * 2.5);padding-top:calc(var(--space-unit) * .5)}ul>li>a:before{content:\"•\";padding-right:5px}ul>li>span{font-size:14px;font-weight:var(--font-rg);text-decoration:none;color:var(--color-surface04);padding:0 calc(var(--space-unit) * 2);letter-spacing:0.16px;line-height:calc(var(--space-unit) * 2.5)}";

const ZMyzCardList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.renderList = this.renderList.bind(this);
  }
  handleSpaceKeyPress(e, url) {
    if (e.keyCode == 32 || e.keyCode == 13) {
      e.preventDefault();
      window.open(url, "_blank");
    }
  }
  formatListContent(data) {
    const { value, isLink, url } = data;
    if (!isLink)
      return h("span", null, value);
    return (h("a", { role: "button", onKeyPress: (e) => this.handleSpaceKeyPress(e, url), href: url, target: "_blank" }, value));
  }
  renderList(dataArray) {
    return dataArray.map((data) => {
      return h("li", null, this.formatListContent(data));
    });
  }
  render() {
    return h("ul", null, this.renderList(JSON.parse(this.listdata)));
  }
};
ZMyzCardList.style = stylesCss;

export { ZMyzCardList as z_myz_card_list };
