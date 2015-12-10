/*
вид формы добавления данных AddTenderFormView.js
Укажим виды в app.js
Метод Ext.define('Имя', {параметры}) создает класс-компонент, 
который может быть унаследован от какого-нибудь компонента. 
Например в TenderGridView.js указали extend: 'Ext.grid.Panel', 
что будет представлять собой таблицу;
 */
Ext.define('TenderCatalog.view.AddTenderFormView', {
    extend: 'Ext.window.Window',
    alias: 'widget.addTenderFormView',
    autoShow: true,
    layout: 'fit',
    modal: true,
    items: [
        {
            bodyPadding: 10,
            xtype: 'form',
            items: [
                {
                    xtype: 'textfield',
                    name: 'company',
                    fieldLabel: 'Организатор',
                    emptyText:'Введите название организации',
                    width:500,
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'name_tender',
                    fieldLabel: 'Название тендера',
                    width:500,
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'cost',
                    fieldLabel: 'Стоимость',
                    width:500,
                    regex: /^([0-9]{1,20})*$/,
//                    regeex:/^([0-9]*\.[0-9]+)$/,
                    regexText: 'Цена должна состоять из цифр',
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'datefield',
                    anchor: '100%',
                    fieldLabel: 'Крайний срок',
                    name: 'deadline',                    
                    format: 'd.m.Y',
                    minValue: new Date(),
                    width:500,
                    altFormats: 'd,m,Y|d.m.Y|d-m-Y',
                    allowBlank: false,  
                    blankText: 'Это поле должно быть заполнено'    
                },
                {
                    xtype: 'textfield',
                    name: 'keyword',
                    fieldLabel: 'Ключевое слово',
                    width:500,
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'url_tender',
                    fieldLabel: 'Веб-сайт', 
                    width:500,
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                },
                {
                    xtype: 'textfield',
                    name: 'id_tender',
                    fieldLabel: 'ID тендера',
                    width:500,
                    allowBlank: false,
                    blankText: 'Это поле должно быть заполнено'
                }
            ]
        }
    ],

    buttons: [
        {
            text: 'Сохранить',
            action: 'save',
            disabled: true
        },
        {
            text: 'Отменить',
            handler: function () {
                this.up('window').close();
            }

        }
    ]
});