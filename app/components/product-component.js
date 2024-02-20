import Component from '@glimmer/component';
export default class ProductComponentComponent extends Component {
  
  productImage = this.args.product.colors[0].image;
}
