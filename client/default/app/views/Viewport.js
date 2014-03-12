app.views.Viewport = Ext.extend(Ext.Panel, {
  fullscreen: true,
  ui: 'light',
  layout: 'card',
  id: 'viewport',

  cardSwitchAnimation: {
    type: 'slide',
    cover: true
  },

  initComponent: function() {
    // Put instances of cards into app.views namespace
    Ext.apply(app.views, {
      home:     new app.views.Home(),
      student:  new app.views.Student(),
      project:  new app.views.Project(),
      information: new app.views.Information(),
      menu:     new app.views.Menu(),
      map:      new app.views.MapView(),
      twitter:  new app.views.Twitter(),        
      payment:  new app.views.Payment(),
      stocks:   new app.views.Stocks(),
      settings: new app.views.Settings(),
      camera:   new app.views.Camera()
    });
    //put instances of cards into viewport
    Ext.apply(this, {
      items: [
        app.views.home,
        app.views.student,
        app.views.project,
        app.views.information,
        app.views.menu,
        app.views.payment,
        app.views.stocks,
        app.views.twitter,
        app.views.map,
        app.views.settings,
        app.views.camera
      ]
    });
    app.views.Viewport.superclass.initComponent.apply(this, arguments);
  }
});


// Loading Spinner
var mask = new Ext.LoadMask(Ext.getBody(), {
  msg: "Loading Data"
});
