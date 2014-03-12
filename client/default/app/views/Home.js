app.views.Home = Ext.extend(Ext.Panel, {
  title: 'Home',
  iconCls: 'home',
  style: 'background-color:#6d6e71;',

  items: [
    {
  		xtype: 'panel',
  		height: 130,
  		style: 'background-color:#FFF; -webkit-box-shadow: rgba(0,0,0,0.4) 2px 4px 1px 2px; overflow: visible; text-align: center',
  		html: '<img class="homeLogo" src="app/images/homeLogo.png" /><br/>'
  	},

  	{
  		xtype: 'panel',
  		height:10,
  		style: 'text-align:center',
  		html: '<img class="triangle" src="app/images/triangle.png" />'
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