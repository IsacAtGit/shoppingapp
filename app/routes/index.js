import Route from '@ember/routing/route';
import {inject as service} from "@ember/service";
export default class IndexRoute extends Route {
  @service store
  async model() {
   
   console.log(await this.store.findAll('product'))
    return  this.store.findAll('product');
  }
}
