/*
 * In order for modal windows to use our custom theme, we have to define them in tiapp.xml, like:
 *             	<activity android:configChanges="keyboardHidden|orientation|screenSize" 
            		android:name="org.appcelerator.titanium.TiModalActivity" />
    
    For more info, see: http://docs.appcelerator.com/titanium/latest/#!/guide/Android_Themes
    
    1/8/14
    NOTE: Starting in Ti 3.2.0, TiModalActivity is no longer being used, however, TiTranslucentActivity is, and 
    it has a default theme applied to it (and modal windows), so the the above tiapp.xml entry needs to be changed to:
    
    <activity android:configChanges="keyboardHidden|orientation|screenSize" 
            		android:name="org.appcelerator.titanium.TiTranslucentActivity" />
     
 */