/*
 * In order for modal windows to use our custom theme, we have to define them in tiapp.xml, like:
 *             	<activity android:configChanges="keyboardHidden|orientation|screenSize" 
            		android:name="org.appcelerator.titanium.TiModalActivity" />
    
    For more info, see: http://docs.appcelerator.com/titanium/latest/#!/guide/Android_Themes
 */

function doOpen(e){
	var actionBar = e.source.activity.actionBar;

	//up window
	//http://docs.appcelerator.com/titanium/latest/#!/guide/Android_Action_Bar-section-36735509_AndroidActionBar-OtherActionBarFeatures

	if (actionBar) {
		actionBar.displayHomeAsUp = true;
		actionBar.onHomeIconItemSelected = function() {
			e.source.close();
		};

		e.source.activity.invalidateOptionsMenu();
	}	
}