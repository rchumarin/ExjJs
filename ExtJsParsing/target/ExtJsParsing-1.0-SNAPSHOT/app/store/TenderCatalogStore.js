/*
Хранилище
'tender' имя, на которое будет замапен java-класс (контролер), 
который будет обрабатывать GET, POST, PUT, DELETE запросы с клиента;
 */
Ext.define('TenderCatalog.store.TenderCatalogStore', {
    extend: 'Ext.data.Store',
    requires : [
        'TenderCatalog.model.TenderCatalogModel'
    ],
    model: 'TenderCatalog.model.TenderCatalogModel',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'rest',
        api: {
            create: 'tender',
            read: 'tender',
            destroy: 'tender',
            update: 'tender'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }

    }
});