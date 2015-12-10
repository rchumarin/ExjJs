/**
'tenderCatalogView' алиас, который указали для вида TenderCatalogView.js
Укажим контролер TenderCatalogController.js 
и хранилище TenderCatalogStore.js в app.js:
 */
Ext.application({
    name: 'TenderCatalog',

    views: [
        'AddTenderFormView',
        'TenderCatalogView',
        'TenderGridView',
        'SearchTenderView'
    ],

    controllers : [
        'TenderCatalogController'
    ],

    stores : [
        'TenderCatalogStore'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype  : 'tenderCatalogView'
            }
        });
    }
});