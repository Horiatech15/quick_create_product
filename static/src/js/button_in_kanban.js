/** @odoo-module */
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { registry } from '@web/core/registry';
import { kanbanView } from "@web/views/kanban/kanban_view";
import { useService } from "@web/core/utils/hooks";
import { rpc } from "@web/core/network/rpc";

export class CustomKanbanController extends KanbanController {
   setup() {
       super.setup();
//       this.rpc = useService("rpc");
   }
   async QuickCreateOnClick() {
   console.log("Props data:", this.props);
      const result = await this.rpc("/web/dataset/call_kw/product.template/action_quick_edit_product", {
                      model: "product.template",
                      method: "action_quick_edit_product",
//                      args: [[this.props.record.resId]],  // Pass the record ID
      });

   }
}
registry.category("views").add("button_in_kanban", {
   ...kanbanView,
   Controller: CustomKanbanController,
   buttonTemplate: "button_sale.KanbanView.Buttons",
});
