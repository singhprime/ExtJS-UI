Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.userlist',

    title: 'All Users',
store: 'Users',
    initComponent: function() {
       
        this.columns = [
            {header: 'Release Date',  dataIndex: 'rdate',  flex: 1},
            {header: 'Gross Date', dataIndex: 'gdate', flex: 1},
            {header: 'Reported Gross', dataIndex: 'rgross', flex: 1},
            {header: 'Reported Loss', dataIndex: 'rloss', flex: 1},
            {header: 'Select Rep', dataIndex: 'cb',xtype: 'checkcolumn', flex: 1},
            {header: '3D Gross', dataIndex: 'dg', flex: 1},
            {header: '3D Loss', dataIndex: 'dl', flex: 1},
            {header: 'IMAX Gross', dataIndex: 'mg', flex: 1},
            {header: 'MAX Loss', dataIndex: 'ml', flex: 1},
            {header: 'Select IMAX', dataIndex: 'sm',xtype: 'checkcolumn', flex: 1},
            {header: 'PU Gross', dataIndex: 'pg', flex: 1},
            {header: 'PU Loss', dataIndex: 'pl', flex: 1},
            {header: 'Select PU', dataIndex: 'sp',xtype: 'checkcolumn', flex: 1},
            {header: 'Other formats', dataIndex: 'oft', flex: 1},
            {renderer: function(val,meta,rec) {
                   // generate unique id for an element
                   var id = Ext.id();
                   Ext.defer(function() {
                      Ext.widget('button', {
                         renderTo: Ext.query("#"+id)[0],
                         text: 'Approve',
                         scale: 'small',
                         handler: function() {
                            Ext.Msg.alert("Approved!")
                         }
                      });
                   }, 50);
                   return Ext.String.format('<div id="{0}"></div>', id);
                }
             },
             {renderer: function(val,meta,rec) {
                 // generate unique id for an element
                 var id = Ext.id();
                 Ext.defer(function() {
                    Ext.widget('button', {
                       renderTo: Ext.query("#"+id)[0],
                       text: 'Reject',
                       scale: 'small',
                       handler: function() {
                          Ext.Msg.alert("Rejected!")
                       }
                    });
                 }, 50);
                 return Ext.String.format('<div id="{0}"></div>', id);
              }
           }
            
        ];

        this.callParent(arguments);
    }
});