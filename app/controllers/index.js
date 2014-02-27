Alloy.Globals.tabgroup = $.index;

function doOpen() {

	//Add a title to the tabgroup. We could also add menu items here if needed
	var activity = $.index.activity;

	if (activity.actionBar) {
		activity.actionBar.title = "Action Jackson";
	}

	activity.onCreateOptionsMenu = function(e) {
		var menuItem = e.menu.add({
			title : "Add Task",
			showAsAction : Ti.Android.SHOW_AS_ACTION_ALWAYS,
			icon : (Ti.Android.R.drawable.ic_menu_share ? Ti.Android.R.drawable.ic_menu_share : "my_search.png")
		});
		menuItem.addEventListener("click", function(e) {
			var txt = "Alloy Action Jackson. It's Time for Action. https://github.com/adampax/AlloyActionJackson";
			var intent = Ti.Android.createIntent({
				action : Ti.Android.ACTION_SEND,
				type : "text/plain"
			});

			intent.putExtra(Ti.Android.EXTRA_TEXT, txt);
			intent.addCategory(Ti.Android.CATEGORY_DEFAULT);
			try {
				Ti.Android.currentActivity.startActivity(intent);
			} catch (ex) {
				Ti.UI.createNotification({
					message : 'Complete action using -- Hey, install some sharing apps!'
				}).show();
			}
		});
	};
}

$.index.open();
