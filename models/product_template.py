# -*- coding: utf-8 -*-

from odoo import fields, models, api, _

class ProductTemplate(models.Model):
    _inherit = 'product.template'

    def action_quick_edit_product(self):
        self.ensure_one()
        return {
            'type': 'ir.actions.act_window',
            'view_mode': 'form',
            'res_model': 'product.template',
            'target': 'new',
            'views': [[self.env.ref('quick_create_product.product_product_view_form_normalized_inherit').id, 'form']],
            'res_id': self.id,
        }
