app.views.Menu = Ext.extend(Ext.Panel, {
  title: 'Menu',
  Cls: 'menu',
  style: 'background-color:#599195;',
  height: '40%',


  items: [
  	{
  		xtype: 'spacer',
  		height: 200,
  		style: 'background-color:#ffffff;'
  	},
    {
    	xtype: 'panel',
        height:10,
        style: 'text-align:center',
        html: '<a><img class="circle" src="app/images/circle.png" /></a>',

        listeners: {
            render: function(c){
                c.getEl().on('click', function(){
                  app.views.viewport.setActiveItem(app.views.information, {type: 'slide', direction: 'down'});
                }, c);
            }
          }
    },

    {
    	html: '<img class="menuIcon" src="app/images/icons/menu.png"/>',
          handler: function() {
            app.views.viewport.setActiveItem(app.views.home, {type: 'slide', direction: 'right'});
                app.stores.stocks.removeAll();
          }
    },


  	new Ext.Panel({
  		height: 40,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    ]
	}),

  	//search
	new Ext.Panel({
  		height: 40,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		flex: 1.5,
		  		html:'<img class="icons" src="app/images/icons/search.png" />'
		  	},
		  	{
          		id: 'studentBtn',
          		cls: 'homeIcons',
		  		height: 10,
		  		width: 200,
		  		html: '<a>Search</a><br /><hr />',

		  		listeners: {
		  			render: function(c){
      					c.getEl().on('click', function(){
        					app.views.viewport.setActiveItem(app.views.student, {type: 'slide', direction: 'left'});
      					}, c);
    				}
    			}
		  	},
		  	{
		  		flex:1
		  	}
		  	
		]
	}),

  	// Student Link
  	new Ext.Panel({
  		height: 40,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		flex: 1.5,
		  		html:'<img class="icons" src="app/images/icons/student.png" />'
		  	},
		  	{
          		id: 'studentBtn',
          		cls: 'homeIcons',
		  		height: 10,
		  		width: 200,
		  		html: '<a>Student List</a><br /><hr />',

		  		listeners: {
		  			render: function(c){
      					c.getEl().on('click', function(){
        					app.views.viewport.setActiveItem(app.views.student, {type: 'slide', direction: 'left'});
      					}, c);
    				}
    			}
		  	},
		  	{
		  		flex:1
		  	}
		  	
		]
	}),
  	//Project Link
  	new Ext.Panel({
  		height: 40,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		flex: 1.5,
		  		html:'<img class="icons" src="app/images/icons/project.png" />'
		  	},
		  	{
          		id: 'projectBtn',
          		cls: 'homeIcons',
		  		height: 10,
		  		width: 200,
		  		html: '<a>Project List</a><br /><hr />',

		  		listeners: {
		  			render: function(c){
      					c.getEl().on('click', function(){
        					app.views.viewport.setActiveItem(app.views.project, {type: 'slide', direction: 'left'});
		  				}, c);
    				}
    			}
		  	},
		  	{
		  		flex: 1
		  	}
		]
	}),

  	//Maps Link
  	new Ext.Panel({
  		height: 40,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		flex: 1.5,
		  		html:'<img class="icons" src="app/images/icons/map.png" />'
		  	},
		  	{
          		id: 'projectBtn',
          		cls: 'homeIcons',
		  		height: 10,
		  		width: 200,
		  		html: '<a>Location Maps</a><br /><hr />',

		  		listeners: {
		  			render: function(c){
      					c.getEl().on('click', function(){
        					app.views.viewport.setActiveItem(app.views.project, {type: 'slide', direction: 'left'});
		  				}, c);
    				}
    			}
		  	},
		  	{
		  		flex: 1
		  	}
		]
	}),

  	//Visit It Link
  	new Ext.Panel({
  		height: 40,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		flex: 1.5,
		  		html:'<img class="icons" src="app/images/icons/visit.png" />'
		  	},
		  	{
          		id: 'projectBtn',
          		cls: 'homeIcons',
		  		height: 10,
		  		width: 200,
		  		html: '<a>VisitIt!</a><br /><hr />',

		  		listeners: {
		  			render: function(c){
      					c.getEl().on('click', function(){
        					app.views.viewport.setActiveItem(app.views.project, {type: 'slide', direction: 'left'});
		  				}, c);
    				}
    			}
		  	},
		  	{
		  		flex: 1
		  	}
		]
	}),


  	//NoteIt Link
  	new Ext.Panel({
  		height: 40,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		flex: 1.5,
		  		html:'<img class="icons" src="app/images/icons/note.png" />'
		  	},
		  	{
          		id: 'projectBtn',
          		cls: 'homeIcons',
		  		height: 10,
		  		width: 200,
		  		html: '<a>NoteIt! Microblog</a><br /><hr />',

		  		listeners: {
		  			render: function(c){
      					c.getEl().on('click', function(){
        					app.views.viewport.setActiveItem(app.views.project, {type: 'slide', direction: 'left'});
		  				}, c);
    				}
    			}
		  	},
		  	{
		  		flex: 1
		  	}
		]
	}),


  	//Info Link
  	new Ext.Panel({
  		height: 40,

  		layout: {
	      type: 'hbox',
	      pack: 'center',  
	    },
	    items: [
	    	{
		  		flex: 1.5,
		  		html:'<img class="icons" src="app/images/icons/info.png" />'
		  	},
		  	{
          		id: 'infoBtn',
          		cls: 'homeIcons',
		  		height: 10,
		  		width: 200,
		  		html: '<a>Information</a>',

		  		listeners: {
		  			render: function(c){
      					c.getEl().on('click', function(){
        					app.views.viewport.setActiveItem(app.views.information, {type: 'slide', direction: 'left'});
		  				}, c);
    				}
    			}
		  	},
		  	{
		  		flex: 1
		  	}
		]
	}),
  ]
});