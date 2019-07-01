import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-logo',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZLogo {
  @Prop() imageurl: string;
  @Prop() imagealt?: string;
  @Prop() link: string;

  render() {
    return (
      <div>
        {this.link &&
        <a href={this.link}>
          <img src={this.imageurl} alt={this.imagealt}/>
        </a>}
        {!this.link &&
          <img src={this.imageurl} alt={this.imagealt}/>}
      </div>
    );
  }
}
