import { inject } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  store: inject(),
  model(params) {
    return this.store.find('verkiezingsresultaat-gevolg-code', params.id);
  }
});
