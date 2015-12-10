/**
вид таблицы TenderGridView.js
Укажим виды в app.js
Метод Ext.define('Имя', {параметры}) создает класс-компонент, 
который может быть унаследован от какого-нибудь компонента. 
Например в TenderGridView.js указали extend: 'Ext.grid.Panel', 
что будет представлять собой таблицу;
Добавим в TenderGridView.js параметр store: 'TenderCatalogStore', 
для отображения данных в таблице:
 */
Ext.define('TenderCatalog.view.TenderGridView', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tenderGridView',
    width: 400,
    height: 300,
    frame: true,
    store: 'TenderCatalogStore',
    iconCls: 'icon-user',
    viewConfig:{
        markDirty:false
    },
    columns: [
        {
            text: 'Организатор',
            flex: 1,
            sortable: true,
            dataIndex: 'company',
            align: 'center',
//            width:400,
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            text: 'Название тендера',
            flex: 2,
            sortable: true,
            dataIndex: 'name_tender',
            align: 'center',
//            width:400,
            editor: {
                xtype:'textfield',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            flex: 3,
            text: 'Стоимость',
            sortable: true,
            dataIndex: 'cost',
            align: 'center',
            width:200,
            editor: {
                xtype:'textfield',
                regex: /^([0-9]{1,10})*$/,
//                regeex:/^([0-9]*\.[0-9]+)$/,
                regexText: 'Цена должна состоять из цифр',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            flex: 4,
            text: 'Крайний срок',
            sortable: true,
            dataIndex: 'deadline',
            align: 'center',
            width:200,
            editor: {
                xtype:'textfield',
                regex: /(0[1-9]|[12][0-9]|3[01])[- ..](0[1-9]|1[012])[- ..](19|20)\d\d/,
                regexText: 'Дата должна быть в формате DD.MM.YYYY',
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            flex: 5,
            text: 'Ключевое слово',
            sortable: true,
            dataIndex: 'keyword',
            align: 'center',
            width:200,
            editor: {
                xtype:'textfield',                
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            flex: 6,
            text: 'Веб-сайт',
            sortable: true,
            dataIndex: 'url_tender',
            align: 'center',
            width:200,
            renderer: function(dataIndex){    
                     return '<a href=http://yandex.ru/yandsearch?text=dataIndex>'+dataIndex+'</a>';},                        
            editor: {
                xtype:'textfield',                
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        },
        {
            flex: 7,
            text: 'ID тендера',
            sortable: true,
            dataIndex: 'id_tender',
            align: 'center',
            width:200,
            editor: {
                xtype:'textfield',                
                allowBlank: false,
                blankText: 'Это поле должно быть заполнено'
            }
        }
    ],
    plugins: [
        Ext.create('Ext.grid.plugin.RowEditing', {
            clicksToEdit: 2,
            saveBtnText: 'Сохранить',
            cancelBtnText: 'Отменить'
        })
    ],
    selType: 'rowmodel',
    dockedItems: [
        {
            xtype: 'toolbar',
            items: [
                {
                    text: 'Добавить',
                    action: 'add',
                    iconCls: 'icon-add'
                },
                '-',
                {
                    action: 'delete',
                    text: 'Удалить',
                    iconCls: 'icon-delete',
                    disabled: true
                }
            ]
        }
    ]
});