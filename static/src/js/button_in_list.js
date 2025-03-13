/** @odoo-module */
import { ListController } from "@web/views/list/list_controller";
import { registry } from '@web/core/registry';
import { listView } from '@web/views/list/list_view';
import { useService } from "@web/core/utils/hooks";

export class CustomListController extends ListController {
   setup() {
      super.setup();
      this.actionService = useService("action");
      this.orm = useService("orm");
   }

async QuickCreateOnClick(env) {
        const result = await this.orm.call("ir.model.data", "search_read", [[
                ["module", "=", "quick_create_product"],
                ["name", "=", "product_product_view_form_normalized_inherit"]
            ], ["res_id"]]);

            if (!Array.isArray(result) || result.length === 0 || !result[0].res_id) {
            console.error("Erreur : La vue demandée n'existe pas ou a été supprimée.");
            return;
        }
        const viewId = result[0].res_id;

        const checkView = await this.orm.call("ir.ui.view", "search_read", [[["id", "=", viewId]], ["id"]]);
        if (checkView.length === 0) {
            console.error("Erreur : La vue a été supprimée de la base de données.");
            return;
        }

       this.actionService.doAction({
          type: 'ir.actions.act_window',
          res_model: 'product.template',
          name:'Quick Create',
          view_mode: 'form',
          view_type: 'form',
          views: [[viewId, 'form']],
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
