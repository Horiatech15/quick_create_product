/** @odoo-module */
import { KanbanController } from "@web/views/kanban/kanban_controller";
import { registry } from '@web/core/registry';
import { kanbanView } from "@web/views/kanban/kanban_view";

export class CustomKanbanController extends KanbanController {
   setup() {
       super.setup();
   }
   QuickCreateOnClick() {

       this.actionService.doAction({
          type: 'ir.actions.act_window',
          res_model: 'product.product',
          name:'Quick Create',
          view_mode: 'form',
          view_type: 'form',
          views: [[479, 'form']],
          target: 'new',
          res_id: false,
      });
   }
}
registry.category("views").add("button_in_kanban", {
   ...kanbanView,
   Controller: CustomKanbanController,
   buttonTemplate: "button_sale.KanbanView.Buttons",
});