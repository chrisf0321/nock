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
    $.support.cors = true;
    $.mobile.allowCrossDomainPages = true;
    
    document.addEventListener("backbutton", onBackKeyDown, false);
    function onBackKeyDown(e) {
        e.preventDefault();
    }
    
    setTimeout(function() {
        navigator.splashscreen.hide();
    }, 2000); 
}

function hideSur() {
    $("#keypad, #numPad, #numPad2, #keypad2, #success, #error").hide();
    $("#aBlk, #a1Blk, #a2Blk, #a3Blk, #a4Blk, #a5Blk, #a6Blk, #a7Blk, #a8Blk, #a9Blk, #a9aBlk, #a10Blk, #a11Blk").hide();
    $("#bBlk, #b1Blk, #b2Blk, #b3Blk, #b1Blkc, #b1Blkc1, #b1Blkc2").hide();
    $("#cBlk, #c1Blk, #c1Blka, #c1Blkb, #c1Blkc, #c2Blk, #c2Blka, #c2Blkb, #c2Blkc, #c3Blk, #c3Blka, #c3Blkb, #c3Blkc, #c3Blkd, #c4Blk, #c4Blka, #c4Blkb, #c4Blkc").hide();
    $("#dBlk, #d1Blk, #d1Blkb, #d1Blkc, #eBlk, #dBlk, #e1Blk, #e1Blkb, #e2Blk, #e2Blka, #e3Blk, #e3Blka, #e3Blkb").hide();
    $("#fBlk, #f1Blka, #f1Blkb, #f1Blkc, #f1Blkd, #f1Blke, #g1Blk, #g2Blk, #g3Blk, #gvBlk, #f1Blkv").hide();
    $("#c5Blk, #c5Blka, #c5Blkb, #c5Blkc, #c6Blk, #c6cvBlk, #c6vBlk, #c3d1Blk, #c3d2Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3d7Blk, #c3Blkd0, #c3Blkd0i").hide();
}