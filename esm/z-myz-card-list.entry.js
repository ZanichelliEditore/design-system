import { r as registerInstance, h } from './index-ab5f1eaa.js';

const stylesCss = "*:focus{-webkit-box-shadow:var(--shadow-focus-primary);box-shadow:var(--shadow-focus-primary);outline:none !important}ul{overflow:hidden;width:auto;height:auto;padding:0;margin:0 calc(var(--space-unit) * 2);color:var(--color-primary01);font-family:var(--font-family-sans);list-style:none}ul>li{padding-left:10px;text-indent:-10px}ul>li>a{display:block;padding-top:calc(var(--space-unit) * 0.5);color:var(--color-primary01);font-size:14px;font-weight:var(--font-sb);letter-spacing:0.16px;line-height:calc(var(--space-unit) * 2.5);text-decoration:none}ul>li>a::before{padding-right:5px;content:\"•\"}ul>li>span{padding:0 calc(var(--space-unit) * 2);color:var(--color-surface04);font-size:14px;font-weight:var(--font-rg);letter-spacing:0.16px;line-height:calc(var(--space-unit) * 2.5);text-decoration:none}";
const ZMyzCardListStyle0 = stylesCss;

const ZMyzCardList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.listdata = undefined;
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
        if (!isLink) {
            return h("span", null, value);
        }
        return (h("a", { role: "button", onKeyPress: (e) => this.handleSpaceKeyPress(e, url), href: url, target: "_blank" }, value));
    }
    renderList(dataArray) {
        return dataArray.map((data) => {
            return h("li", null, this.formatListContent(data));
        });
    }
    render() {
        return h("ul", { key: '04fd2a50aca23fe43cb8126e7325dda58393cb7b' }, this.renderList(JSON.parse(this.listdata)));
    }
};
ZMyzCardList.style = ZMyzCardListStyle0;

export { ZMyzCardList as z_myz_card_list };

//# sourceMappingURL=z-myz-card-list.entry.js.map