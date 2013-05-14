Alloy.Globals.tabgroup = $.index;

function doOpen(){
	
//Add a title to the tabgroup. We could also add menu items here if needed
var activity = $.index.activity;

	if (activity.actionBar) {
		activity.actionBar.title = "Action Jackson"
	}	
}

$.index.open();
