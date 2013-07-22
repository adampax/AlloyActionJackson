var titleCount = 0;
var upArrow = false;
var actionDisplayed = true;
var activity;

function doOpen(){
	//saving the activity on window open here, just so we don't have to repeat it on the examples
	activity = $.win.activity;
}

function doChangeTitle(){
	if (activity.actionBar) {
		activity.actionBar.title = "New Title " + (titleCount === 0 ? '' : titleCount);
		titleCount++;
	}
}

function doToggleUpArrow(){
	//up window
	//http://docs.appcelerator.com/titanium/latest/#!/guide/Android_Action_Bar-section-36735509_AndroidActionBar-OtherActionBarFeatures

	if (activity.actionBar) {
		if(upArrow){
			activity.actionBar.displayHomeAsUp = false;
			activity.actionBar.onHomeIconItemSelected = null;
		} else {
			activity.actionBar.displayHomeAsUp = true;
			activity.actionBar.onHomeIconItemSelected = function() {
				$.win.close();
			};
		}
	}
	upArrow = !upArrow;
}

function doToggleActionBar(){
	if (activity.actionBar) {
		if(actionDisplayed){
			activity.actionBar.hide();
		} else {
			activity.actionBar.show();
		}
	}
	actionDisplayed = !actionDisplayed;
}
