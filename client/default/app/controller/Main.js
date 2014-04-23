Ext.define('Xpoit.controller.Main', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			search: 'searchBtn',
			student: 'studentBtn',
			project: 'projectBtn',
			map: 'mapBtn',
			visit: 'vitisBtn',
			note: 'noteBtn',
			info: 'infoBtn'
		},
		control: {
			search: {
				itemtap: "searchPressed"
			},
			student: {
				itemtap: "studentPressed"
			},
			project: {
				itemtap: "projectPressed"
			},
			map: {
				itemtap: "mapPressed"
			},
			visit: {
				itemtap: "visitPressed"
			},
			note: {
				itemtap: "notePressed"
			},
			info: {
				itemtap: "infoPressed"
			},
		},

	},

	init: function() {
		$fh.act({
			"act": "findAll"
		}, function(res) {
			console.log('Getting stuff!', res);
			var records = [];
			for (var i = 0; i < res.length; i++) {
				var item = res[i];
				records.push({
					project: item.project,
					fname: item.fname,
					lname: item.lname,
					email: item.email,
					course: item.course,
					title: item.title,
					commercial: item.commercial,
					desc: item.description,
					disciplines: item.disciplines
				});

				localStorage.setItem('records', records);
			}
		}, function(msg, err) {
			console.log('Could not get stuff', msg);
		})

	},

	notePressed: function() {
		Ext.Msg.confirm("External Url", "Are you sure you want to leave the app?", function(btn) {
			if (btn == 'yes') {
				window.open('https://pure-badlands-7549.herokuapp.com/home'); // which page wants to redirect
			}
		});
	},



});