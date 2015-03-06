var gapReady = $.Deferred();
var jqmReady = $.Deferred();

//Catch "deviceready" event which is fired when PhoneGap is ready
document.addEventListener("deviceReady", deviceReady, false);

//Resolve gapReady in reponse to deviceReady event
function deviceReady()
{
	gapReady.resolve();
}

/**
* Catch "mobileinit" event which is fired when a jQueryMobile is loaded.
* Ensure that we respond to this event only once.
*/
$(document).one("mobileinit", function(){
	jqmReady.resolve();
});

/**
* Run App Logic only when both frameworks have loaded
*/
$.when(gapReady, jqmReady).then(appLogic);

// App Logic -- add back disable and hide splash screen.
function appLogic() {  
    
    document.addEventListener("backbutton", onBackKeyDown, false);
    function onBackKeyDown(e) {
        e.preventDefault();
    }
    
    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 2000); 
}