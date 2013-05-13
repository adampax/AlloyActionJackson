//http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.Android.Menu

function doOpen(e) {
	var activity = $.win.activity;

	if (activity.actionBar) {
		//up window
		//http://docs.appcelerator.com/titanium/latest/#!/guide/Android_Action_Bar-section-36735509_AndroidActionBar-OtherActionBarFeatures
		activity.actionBar.displayHomeAsUp = true;
		activity.actionBar.onHomeIconItemSelected = function() {
			e.source.close();
		};

		var LOGIN = 1, LOGOUT = 2;
		var loggedIn = false;

		activity.onCreateOptionsMenu = function(e) {
			var menu = e.menu;
			var login = menu.add({
				title : "Login",
				itemId : LOGIN
			});
			login.setIcon("login.png");
			login.addEventListener("click", function(e) {
				loggedIn = true;
				// In Android 3.0 and above we need to call invalidateOptionsMenu() for menu changes at runtime
				$.win.activity.invalidateOptionsMenu();
			});
			var logout = menu.add({
				title : "Logout",
				itemId : LOGOUT
			});
			logout.setIcon("logout.png");
			logout.addEventListener("click", function(e) {
				loggedIn = false;
				// In Android 3.0 and above we need to call invalidateOptionsMenu() for menu changes at runtime
				$.win.activity.invalidateOptionsMenu();
			});
		};

		activity.onPrepareOptionsMenu = function(e) {
			var menu = e.menu;
			menu.findItem(LOGIN).setVisible(!loggedIn);
			menu.findItem(LOGOUT).setVisible(loggedIn);
		};

		$.win.activity.invalidateOptionsMenu();
	}
}
