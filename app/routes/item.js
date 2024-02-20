import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class ItemRoute extends Route {
  @service store;
  async model(parms) {
    const { item_id } = parms;
    // console.log(parms);

    const  data  = await this.store.findAll('product');
    const product = data.find(({ id }) => id === item_id);
    // console.log(product);
    // console.log(item_id);
    return product;
  }

  setupController(controller, model) {
    super.setupController(controller, model); //calling the setupController in Route class to setup the controller for the specific route
    controller.color = model.colors[0].color;
  }
}
