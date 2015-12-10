/*
 Добавим в контролер TenderCatalogController.js параметр refs и обработчики для компонентов;
    - ref ссылка на что-то в selector'e;
    - selector указывает на компоненты, для быстро обращения к ним через ref;
    - nSaveTender создается модель данных и сохраняется;
    - nAddTender создает виджет формы добавления;
    - nDelTender удаляет запись;
    - nChangeText загружает данные в соответствии со значением в поле поиска;
    - nLineGrid при выделении строки кнопка «Удалить» становится активной;
    - nValidation валидация полей формы добавления;

 С помощью параметра init инициализируются обработчики для компонентов 
 (кнопки, поля и т.д). Связать конпонент с обработчиком помогает 
 функция control;
 */
Ext.define('TenderCatalog.controller.TenderCatalogController', {
    extend: 'Ext.app.Controller',

    refs: [
        {selector: 'tenderGridView',
            ref: 'tenderGridView'},
        {selector: 'tenderGridView button[action="add"]',
            ref: 'tenderGridAdd'},
        {selector: 'tenderGridView button[action="delete"]',
            ref: 'tenderGridDelete'},
        {selector: 'searchTenderView button[action="search"]',
            ref: 'searchTender'},
        {selector: 'addTenderFormView',
            ref: 'addTenderFormView'},
        {selector: 'tenderCatalogView',
            ref: 'tenderCatalogView'},
        {selector: 'addTenderFormView textfield[name=company] ',
            ref: 'addTenderFormCompany'},
        {selector: 'addTenderFormView textfield[name=name_tender]',
            ref: 'addTenderFormName_tender'},
        {selector: 'addTenderFormView textfield[name=cost]',
            ref: 'addTenderFormCost'},
        {selector: 'addTenderFormView textfield[name=deadline] ',
            ref: 'addTenderFormDeadline'},
        {selector: 'addTenderFormView textfield[name=keyword] ',
            ref: 'addTenderFormKeyword'},
        {selector: 'addTenderFormView textfield[name=url_tender] ',
            ref: 'addTenderFormUrl_tender'},
        {selector: 'addTenderFormView textfield[name=id_tender] ',
            ref: 'addTenderFormId_tender'},
        {selector: 'addTenderFormView button[action=save]',
            ref: 'addTenderFormSave'}
    ],

    init: function () {
        this.control({
            'tenderGridView  button[action=add]': {
                click: this.onAddTender
            },
            'tenderGridView  button[action=delete]': {
                click: this.onDelTender
            },
            'searchTenderView  textfield[name="search"]': {
                change: this.onChangeText
            },
            'tenderGridView': {
                cellclick: this.onLineGrid
            },
            'addTenderFormView  button[action=save]': {
                click: this.onSaveTender
            },
            'addTenderFormView  textfield[name=company]': {
                change: this.onValidation
            },
            'addTenderFormView  textfield[name=name_tender]': {
                change: this.onValidation
            },
            'addTenderFormView  textfield[name=cost]': {
                change: this.onValidation
            },            
            'addTenderFormView  textfield[name=deadline]': {
                change: this.onValidation
            },
            'addTenderFormView  textfield[name=keyword]': {
                change: this.onValidation
            },
            'addTenderFormView  textfield[name=url_tender]': {
                change: this.onValidation
            },
            'addTenderFormView  textfield[name=id_tender]': {
                change: this.onValidation
            }
        });
    },

    onSaveTender: function (button) {
        var me = this;
        var tenderModel = Ext.create('TenderCatalog.model.TenderCatalogModel');
        tenderModel.set(this.getAddTenderFormView().down('form').getValues());
        tenderModel.save({
            success: function (operation, response) {
                var objAjax = operation.data;
                Ext.getStore('TenderCatalogStore').add(objAjax);
                me.getAddTenderFormView().close();
            },
            failure: function (dummy, result) {
                Ext.MessageBox.show({
                    title: 'Дубликат!',
                    msg: 'Такая информация уже существуют',
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }

        });
    },

    onAddTender: function () {
        Ext.widget('addTenderFormView');
    },

    onDelTender: function () {
        var sm = this.getTenderGridView().getSelectionModel();
        var rs = sm.getSelection();
        this.getTenderGridView().store.remove(rs[0]);
        this.getTenderGridView().store.commitChanges();
        this.getTenderGridDelete().disable();
    },

    onChangeText: function () {
        Ext.getStore('TenderCatalogStore').load({
            params: {
                search: this.getTenderCatalogView().down('searchTenderView').getValues()
            }
        });
    },

    onLineGrid: function () {
        this.getTenderGridDelete().enable();
    },

    onValidation: function () {
        if (this.getAddTenderFormCompany().validate() && this.getAddTenderFormName_tender().validate()
            && this.getAddTenderFormCost().validate() && this.getAddTenderFormDeadline().validate()
            && this.getAddTenderFormKeyword().validate() && this.getAddTenderFormUrl_tender().validate()
            && this.getAddTenderFormId_tender().validate()) {
            this.getAddTenderFormSave().enable();
        } else {
            this.getAddTenderFormSave().disable();
        }
    }

});