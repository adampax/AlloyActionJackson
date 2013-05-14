// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};

//simple function for handling opening sub windows
//controller name is passed as an attribute of the calling control (button, etc)
Alloy.Globals.openSubWindow = function(e){
	if(e.source.controller){
		Ti.API.info(e.source.controller)
		Alloy.createController(e.source.controller).getView().open();
	} else {
		alert('Err, No Controller Specified');
	}
}