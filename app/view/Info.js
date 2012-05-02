/*
 * File: app/view/Info.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Contact.view.Info', {
    extend: 'Ext.form.Panel',
    alias: 'widget.contactinfo',
    requires: [
        'Contact.view.Picture'
    ],

    config: {
        padding: '10px',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'infoBackBtn',
                        ui: 'back',
                        text: 'Back'
                    },
                    {
                        xtype: 'component',
                        html: 'First Name Last Name',
                        itemId: 'nameTxt',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        cls: 'x-button-pressing',
                        itemId: 'favoriteBtn',
                        iconCls: 'favorites',
                        iconMask: true,
                        text: ''
                    },
                    {
                        xtype: 'button',
                        id: '',
                        itemId: 'editContactBtn',
                        iconCls: 'compose',
                        iconMask: true,
                        text: ''
                    }
                ]
            },
            {
                xtype: 'contactpic'
            },
            {
                xtype: 'textfield',
                disabled: true,
                itemId: 'phoneNumber',
                clearIcon: false,
                label: 'Phone Number',
                labelAlign: 'top',
                name: 'phoneNumber',
                readOnly: true
            },
            {
                xtype: 'textfield',
                disabled: true,
                itemId: 'emailAddress',
                clearIcon: false,
                label: 'Email Address',
                labelAlign: 'top',
                name: 'emailAddress',
                placeHolder: 'Email address not provided',
                readOnly: true
            },
            {
                xtype: 'textfield',
                disabled: true,
                id: 'address',
                clearIcon: false,
                label: 'Address',
                labelAlign: 'top',
                name: 'address',
                placeHolder: 'Address not provided',
                readOnly: true
            }
        ],
        listeners: [
            {
                fn: 'onFavoriteBtnTap',
                event: 'tap',
                delegate: '#favoriteBtn'
            }
        ]
    },

    onFavoriteBtnTap: function(button, e, options) {
        var pressingCls = 'x-button-pressing';
        button.element.toggleCls(pressingCls);
        var isPressed = button.element.hasCls(pressingCls);
        this.getRecord().set('isFavorite', isPressed);
    },

    setInfo: function(record) {
        this.setRecord(record);
        var name = record.get('firstName') + ' ' + (record.get('lastName') || '');
        var isFavorite = record.get('isFavorite');
        this.down('#nameTxt').setHtml(name);
        // this.child('#contactPic').setPic(record.picture);
        this.down('#favoriteBtn')[isFavorite ? 'addCls' : 'removeCls']('x-button-pressing');
    }

});