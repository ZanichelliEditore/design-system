import {Component, Prop, h} from '@stencil/core';

@Component({
tag: 'card-body',
styleUrls: ['../../global-styles.css', 'card-body.css'],
shadow: true
})

export class CardBody {
@Prop() myProp: string;

render() {
return (
<div>
  This is yourcard-bodycomponent
  This is your default prop: {this.myProp}
</div>
);
}
}
