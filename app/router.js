import EmberRouter from '@ember/routing/router';
import config from 'shoppingapp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('cart', { path: 'shopping-cart' });
  this.route('item', { path: 'item/:item_id' }); //{item-id:1}
  this.route('notfound', { path: '/*path' });
});
