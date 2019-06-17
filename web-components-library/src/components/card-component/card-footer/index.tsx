import {Component, Prop, h} from '@stencil/core';

@Component({
tag: 'card-footer',
styleUrls: ['../../global-styles.css', 'card-footer.css'],
shadow: true
})

export class CardFooter {
@Prop() myProp: string;

render() {
return (
<div>
  This is yourcard-footercomponent
  This is your default prop: {this.myProp}
</div>
);
}
}
