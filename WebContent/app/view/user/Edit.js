Ext.define('AM.view.user.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.useredit',

    title: 'Edit User',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name : 'rdate',
                        fieldLabel: 'Release Date'
                    },
                    {
                        xtype: 'textfield',
                        name : 'gdate',
                        fieldLabel: 'Gross Date'
                    },
                    {
                        xtype: 'textfield',
                        name : 'rgross',
                        fieldLabel: 'Reported Gross'
                    },
                    {
                        xtype: 'textfield',
                        name : 'rloss',
                        fieldLabel: 'Reported Loss'
                    },
                    
                    {
                        xtype: 'textfield',
                        name : 'dg',
                        fieldLabel: '3D Gross'
                    },
                    {
                        xtype: 'textfield',
                        name : 'dl',
                        fieldLabel: '3D Loss'
                    },
                    {
                        xtype: 'textfield',
                        name : 'mg',
                        fieldLabel: 'IMAX Gross'
                    },
                    {
                        xtype: 'textfield',
                        name : 'ml',
                        fieldLabel: 'MAX Loss'
                    },
                    {
                        xtype: 'textfield',
                        name : 'pg',
                        fieldLabel: 'PU Gross'
                    },
                    {
                        xtype: 'textfield',
                        name : 'pl',
                        fieldLabel: 'PU Loss'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});