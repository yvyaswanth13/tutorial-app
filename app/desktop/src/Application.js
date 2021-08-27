Ext.define('TutorialApp.Application', {
	extend: 'Ext.app.Application',
	name: 'TutorialApp',
	requires: ['TutorialApp.*'],
	defaultToken: 'homeview',

	removeSplash: function () {
		Ext.getBody().removeCls('launching')
		var elem = document.getElementById("splash")
		elem.parentNode.removeChild(elem)
	},

	launch: function () {
		this.removeSplash()
		var whichView = 'mainview'
		Ext.Viewport.add([{xtype: whichView}])
	},

	onAppUpdate: function () {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
			function (choice) {
				if (choice === 'yes') {
					window.location.reload();
				}
			}
		);
	}
});
/**
 * The main application class. An instance of this class is created by `app.js` when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
//  Ext.define('TutorialApp.Application', {
//     extend: 'Ext.app.Application',

//     name: 'TutorialApp',

//     stores: [
//         // TODO: add global / shared stores here
//     ],
//     views: [
//         'TutorialApp.view.login.Login',
//         'TutorialApp.view.main.Main'
        
//     ],
//     launch: function () {

//         // It's important to note that this type of application could use
//         // any type of storage, i.e., Cookies, LocalStorage, etc.
//         var loggedIn;

//         // Check to see the current value of the localStorage key
//         loggedIn = localStorage.getItem("TutorialLoggedIn");

//         // This ternary operator determines the value of the TutorialLoggedIn key.
//         // If TutorialLoggedIn isn't true, we display the login window,
//         // otherwise, we display the main view
//         Ext.widget(loggedIn ? 'app-main' : 'login');

//     }
// });