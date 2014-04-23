Ext.define('Xpoit.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    id: 'main',
    style: 'background-color:#6d6e71;',
    requires: [
        'Ext.Img',
        'Ext.layout.HBox',
    ],
    config: {
        scrollable: false,
        cls: 'home',
        iconCls: '',
        title: '',

        layout: 'vbox',

        items: [{
                xtype: 'panel',
                height: 130,
                style: 'background-color:#FFF; -webkit-box-shadow: rgba(0,0,0,0.4) 2px 4px 1px 2px; overflow: visible; text-align: center',
                html: '<img class="homeLogo" src="resources/images/homeLogo.png" /><br/>'
            },

            {
                xtype: 'image',
                height: 10,
                style: 'text-align:center',
                html: '<img class="triangle" src="resources/images/triangle.png" />'
            },

            {
                xtype: 'panel',
                height: 60,
            },

            //search
            {
                height: 45,
                id: 'searchBtn',
                cls: 'searchBtn',

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },

                items: [{
                        flex: 1,
                    }, {
                        flex: 1.5,
                        html: '<img class="icons" src="resources/images/icons/search.png" />'
                    }, {
                        cls: 'homeIcons',
                        height: 10,
                        width: 200,
                        html: 'Search<br /><hr />',

                    }, {
                        flex: 1
                    }

                ]
            },

            // Student Link
            {
                height: 45,
                id: 'studentBtn',
                cls: 'studentBtn',

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                        flex: 1,
                    }, {
                        flex: 1.5,
                        html: '<img class="icons" src="resources/images/icons/student.png" />'
                    }, {
                        cls: 'homeIcons',
                        height: 10,
                        width: 200,
                        html: '<a>Student List</a><br /><hr />',

                    }, {
                        flex: 1
                    }

                ]
            },
            //Project Link
            {
                height: 45,
                id: 'projectBtn',
                cls: 'projectBtn',

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/project.png" />'
                }, {
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>Project List</a><br /><hr />',


                }, {
                    flex: 1
                }]
            },

            //Maps Link
            {
                height: 45,
                id: 'mapBtn',
                cls: 'mapBtn',

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/map.png" />'
                }, {
                    id: 'mapBtn',
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>Location Maps</a><br /><hr />',


                }, {
                    flex: 1
                }]
            },

            //Visit It Link
            {
                height: 45,
                id: 'visitBtn',
                cls: 'visitBtn',

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/visit.png" />'
                }, {
                    id: 'visitBtn',
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>VisitIt!</a><br /><hr />',


                }, {
                    flex: 1
                }]
            },


            //NoteIt Link
            {
                height: 45,
                id: 'noteBtn',
                cls: 'noteBtn',

                layout: {
                    type: 'hbox',
                    pack: 'center',
                },
                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/note.png" />'
                }, {
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>NoteIt! Microblog</a><br /><hr />',
                }, {
                    flex: 1
                }]
            },


            //Info Link
            {
                height: 45,
                id: 'infoBtn',
                cls: 'infoBtn',


                layout: {
                    type: 'hbox',
                    pack: 'center',
                },

                items: [{
                    flex: 1,
                }, {
                    flex: 1.5,
                    html: '<img class="icons" src="resources/images/icons/info.png" />'
                }, {
                    cls: 'homeIcons',
                    height: 10,
                    width: 200,
                    html: '<a>Information</a>',

                }, {
                    flex: 1
                }]
            },

        ]
    }
});