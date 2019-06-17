import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'base-component-layer',
  styleUrl: '../../global-styles.css'
})

export class BaseComponentLayer {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        <h1>Zanichelli Web-Component-Library</h1>
      </div>
    );
  }
}
