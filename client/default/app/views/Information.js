app.views.Information = Ext.extend(Ext.Panel, {
  title: 'Information',
  scroll: 'vertical',
  height: '100%',
  layout: 'fit',

  listeners: {
    beforeshow: function() {
    },
  },

  dockedItems: [
  	{
  		dock: 'top',
  		xtype: 'toolbar',
      	title: 'Information',
  		items: [
  			{
  				html: '<img src="app/images/back.png"/>',
          		hidden: app.hideBack || false,
  				handler: function() {
  					app.views.viewport.setActiveItem(app.views.home, {type: 'slide', direction: 'right'});
            		app.stores.stocks.removeAll();
  				}
  			},
  		]
  	}
  ],
  
  items: [
    {
      html: 'Information Goes Here'
    }
  ]
});