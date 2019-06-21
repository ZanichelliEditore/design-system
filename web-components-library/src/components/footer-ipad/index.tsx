import {Component, h} from '@stencil/core';

import data from './data.json';

import {Wrap} from './styles';
import {FooterGroupBean, FooterGroupItemBean} from '../../beans/index.js';

@Component({
  tag: 'footer-ipad',
})
export class FooterIpad {
  renderFooterSection(group: FooterGroupBean): HTMLElement {
    return (
      <nav class={group.id}>
        <h2>{group.title}</h2>
        <ul>
          {group.items.map(
            (item: FooterGroupItemBean): HTMLElement => (
              <li>
                <a href={item.link}>{item.label}</a>
              </li>
            ),
          )}
        </ul>
      </nav>
    );
  }

  render() {
    return (
      <Wrap>
        <section class="top">
          <div class="column">
            {this.renderFooterSection(data[0])}
            {this.renderFooterSection(data[1])}
          </div>
          <div class="column">
            {this.renderFooterSection(data[2])}
            {this.renderFooterSection(data[3])}
          </div>
          <div class="column">{this.renderFooterSection(data[4])}</div>
          <div class="column">{this.renderFooterSection(data[5])}</div>
        </section>
        <section class="bottom">
          <img src="../../assets/images/png/zanichelli-logo-footer.png" />
          <p>
            <small>Copyright – 2018 Zanichelli All rights reserved</small>
          </p>
        </section>
      </Wrap>
    );
  }
}
