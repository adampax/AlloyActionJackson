//http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Android.ProgressIndicator
function showModalIndicator(e) {
    $.progressIndicator.show();
    var value = 0;
    setInterval(function(){
        if (value > 10) {
            return;
        }
        $.progressIndicator.value = value;
        value ++;
    }, 200);
    // do some work that takes 3 seconds
    // ie. replace the following setTimeout block with your code
    setTimeout(function(){
        $.progressIndicator.hide();
    }, 3000);
}


function showStatusIndicator(e) {
    $.statusIndicator.show();
    var value = 0;
    setInterval(function(){
        if (value > 10) {
            return;
        }
        $.statusIndicator.value = value;
        value ++;
    }, 200);
    // do some work that takes 3 seconds
    // ie. replace the following setTimeout block with your code
    setTimeout(function(){
        $.statusIndicator.hide();
    }, 3000);
}