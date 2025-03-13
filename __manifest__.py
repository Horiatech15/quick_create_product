# -*- coding: utf-8 -*-
{
    'name': "Quick Create Product in Stock",
    'version': '18.0.0.1',
    'category': 'stock/stock',
    'description': """ Quick Create Product in Stock """,
    'depends': ['stock', 'base', 'website_sale'],

    'data': [

        'views/product_product.xml',

    ],

    'assets': {
        'web.assets_backend': [
            'quick_create_product/static/src/xml/template.xml',
            'quick_create_product/static/src/js/button_in_kanban.js',
            'quick_create_product/static/src/js/button_in_list.js',
        ],
    },

    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'AGPL-3',

}

