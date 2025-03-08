/** @odoo-module */
import { ListController } from "@web/views/list/list_controller";
import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';

export class CustomListController extends ListController {
   setup() {
       super.setup();
   }

   QuickCreateOnClick(env) {

       this.actionService.doAction({
          type: 'ir.actions.act_window',
          res_model: 'product.template',
          name:'Quick Create',
          view_mode: 'form',
          view_type: 'form',
          views: [[479, 'form']],
          target: 'new',
          res_id: false,
      });
   }
}
registry.category("views").add("button_in_tree", {
   ...listView,
   Controller: CustomListController,
   buttonTemplate: "button_sale.ListView.Buttons",
});
