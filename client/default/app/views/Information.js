app.views.Information = Ext.extend(Ext.Panel, {
  title: 'Information',
  iconCls: 'info',
  style: 'background-color:#6d6e71;',
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
  			{
  				xtype: 'spacer'
  			},
  			{
  				html: '<img class="headerLogo" src="app/images/homeLogo.png"/>'
  			},
  		]
  	},

    {
      dock: 'bottom',
      xtype: 'panel',
      height: 30,
      align: 'center',
      pack: 'center',
      style: 'text-align:center',
      cls: 'btm-nav',
      items: [

        {
          xtype: 'panel',
          height:10,
          style: 'text-align:center',
          html: '<img class="circle" src="app/images/circle.png" />'
        },
        
        {
          html: '<img class="menuIcon" src="app/images/icons/menu.png"/>',
          //     hidden: app.hideBack || false,
          // handler: function() {
          //   app.views.viewport.setActiveItem(app.views.home, {type: 'slide', direction: 'right'});
          //       app.stores.stocks.removeAll();
          // }
        },
      ]
    },

  ],
  
  items: [
    {
    	floating: true,
      html: 'Information Goes Here'
    },
  ],

});