/*
Модель
'tender' имя, на которое будет замапен java-класс (контролер), 
который будет обрабатывать GET, POST, PUT, DELETE запросы с клиента;
 */
Ext.define('TenderCatalog.model.TenderCatalogModel', {
    extend: 'Ext.data.Model',
    fields: ['company', 'name_tender', 'cost', 'deadline', 'keyword', 'url_tender', 'id_tender'],
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
            writeAllFields: true,
            writeRecordId: false
        }

    }
});