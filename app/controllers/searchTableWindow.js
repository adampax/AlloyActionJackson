var search = Alloy.createController("searchView").getView();
$.tableview.search = search;

function doOpen() {
	var activity = $.win.activity;

	//up window
	//http://docs.appcelerator.com/titanium/latest/#!/guide/Android_Action_Bar-section-36735509_AndroidActionBar-OtherActionBarFeatures
	activity.actionBar.displayHomeAsUp = true;
	activity.actionBar.onHomeIconItemSelected = function() {
		$.win.close();
	};

	//Add the searchview
	//http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Android.SearchView
	activity.onCreateOptionsMenu = function(e) {
		e.menu.add({
			title : "Table Search",
			icon : (Ti.Android.R.drawable.ic_menu_search ? Ti.Android.R.drawable.ic_menu_search : "my_search.png"),
			actionView : search,
			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS | Ti.Android.SHOW_AS_ACTION_COLLAPSE_ACTION_VIEW
		});
	};
	activity.invalidateOptionsMenu();

}
