/**
вид каркаса TenderCatalogView.js, куда поместим все виды
Укажим виды в app.js
Метод Ext.define('Имя', {параметры}) создает класс-компонент, 
который может быть унаследован от какого-нибудь компонента. 
Например в TenderGridView.js указали extend: 'Ext.grid.Panel', 
что будет представлять собой таблицу;
 */
Ext.define('TenderCatalog.view.TenderCatalogView', {
    extend: 'Ext.panel.Panel',
    width: 500,
    height: 360,
    padding: 10,
    alias: 'widget.tenderCatalogView',
    layout: 'border',
    items: [
        {
            xtype: 'tenderGridView',
            region: 'center'
        },
        {
            xtype: 'panel',
            html: '<div style="font: normal 18px cursive"><center><font size = "10">Каталог тендеров</font></center></div>',
            region: 'north',
            height: 80
        },
        {
            xtype: 'searchTenderView',
            title: 'Поиск',
            region: 'west',
            width: 300,
            collapsible: true,
            collapsed: false
        }
    ],
    renderTo: Ext.getBody()
});