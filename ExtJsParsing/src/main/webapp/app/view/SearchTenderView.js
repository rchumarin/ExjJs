/*
вид поиска SearchTenderView.js
Укажим виды в app.js
Метод Ext.define('Имя', {параметры}) создает класс-компонент, 
который может быть унаследован от какого-нибудь компонента. 
Например в TenderGridView.js указали extend: 'Ext.grid.Panel', 
что будет представлять собой таблицу;
 */
Ext.define('TenderCatalog.view.SearchTenderView', {
    extend: 'Ext.form.Panel',
    alias: 'widget.searchTenderView',
    bodyPadding: 10,
    items: [
        {
            xtype: 'textfield',
            name: 'search',
            fieldLabel: 'Введите ключевое слово',
            maxLength: 200
        }
    ]
});
