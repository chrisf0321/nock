var hasTouch = ('ontouchstart' in window);
var TOUCH_START = hasTouch ? "touchstart" : "mousedown";
var fade;
var width;
var flash;
var iCnt = 0;
var iCurWrd;
var iBlkMax;
var death = ["Suicide", "Die", "Dead", "Deceased"];
var life = ["Alive", "Thrive", "Living", "Breathing"];
var iatArry = [];

/*$(document).on('touchmove', '#iat', function(e) {
    e.preventDefault();
});*/

$(document).on('pagebeforeshow', '#home', function() {
    if (window.localStorage.getItem("fade") === null) {
        window.localStorage.setItem("fade", 0.2);
        window.localStorage.setItem("width", 20);
        window.localStorage.setItem("flash", 0);
    }
    fade = window.localStorage.getItem("fade");
    width = window.localStorage.getItem("width");
    flash = window.localStorage.getItem("flash");
}); 

$(document).on('pagebeforeshow', '#settings', function() {
    refreshSlide();
});

$(document).on('pagebeforeshow', '#wel', function() {
    $("#iatDiv").hide();
    $("#welDiv").show();
});

$(document).on('pagebeforeshow', '#iat', function() {
    $("#iBlk2").hide();
    $("#wng1").css({'opacity': '0'});
    $("#iBlk1").show();
    $("#lft1").css({'background-color': 'rgba(255, 0, 0, 0.5)'});
    $("#rgt1").css({'background-color': 'rgba(0, 0, 255, 0.5)'});
    $("#lWrd3").text("Death");
    $("#rWrd3").text("Life");
    blk1Gen();
});

$("#lft, #rgt, #lft1, #rgt1").on(TOUCH_START, function() {
    var side = $(this).attr('id');
    if (side === "lft" || side === "lft1") {
        calcScore(1);
        if (flash > 0) {
           $("#lft, #lft1").css({'background-color': 'rgba(255, 0, 0,' + flash + ')'});
            setTimeout(function() {
                $("#lft, #lft1").css({'background-color': 'rgba(255, 0, 0,' + fade + ')'});
            }, 100);
        }
    }
    else {
        calcScore(2);
        if (flash > 0) {
            $("#rgt, #rgt1").css({'background-color': 'rgba(0, 0, 255,' + flash + ')'});
            setTimeout(function() {
                $("#rgt, #rgt1").css({'background-color': 'rgba(0, 0, 255,' + fade + ')'});
            }, 100);
        }
    }
});

$("#fdSld").change(function() {
    fade = $("#slide1").val();
    $("#lft, #lft1").css({'background-color': 'rgba(255, 0, 0,' + fade + ')'});
    $("#rgt, #rgt1").css({'background-color': 'rgba(0, 0, 255,' + fade + ')'});
});

$("#wdSld").change(function() {
    width = $("#slide2").val();
    $('#lft, #rgt, #rgt1, #lft1').css({'width': width + '%'});
});

$("#flSld").change(function() {
    flash = $("#slide3").val();
});

Array.prototype.shuffle = function() {
    var i = this.length, j, temp;
    if ( i === 0 ) return;
    while ( --i ) {
        j = Math.floor( Math.random() * ( i + 1 ) );
        temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
};

function saveData() {
    window.localStorage.setItem("fade", fade);
    window.localStorage.setItem("width", width);
    window.localStorage.setItem("flash", flash);
}

function defaults() {
    fade = 0.2;
    width = 20;
    flash = 0;
    
    refreshSlide();
}

function refreshSlide() {
    $("#slide1").val(fade);
    $("#slide2").val(width);
    $("#slide3").val(flash);
    
    $("#slide1").slider("refresh");
    $("#slide2").slider("refresh");
    $("#slide3").slider("refresh");
    
    $("#fdSld").change();
    $("#wdSld").change();
    $("#flSld").change();
}

function reset() {
    iCnt = 0;
    iatArry = [];
}

function calcScore(num) {
    if (num === 1) {
        $("#test").css({'color': 'red'});
        if ($.inArray(iCurWrd, death) !== -1) {
            iCnt++;
            $("#wng1").css({'opacity': '0'});
            iStart();
        }
        else {
            $("#wng1").css({'opacity': '100'});
        }
    }
    else {
        $("#test").css({'color': 'blue'});
        if ($.inArray(iCurWrd, life) !== -1) {
            iCnt++;
            $("#wng1").css({'opacity': '0'});
            iStart();
        }
        else {
            $("#wng1").css({'opacity': '100'});
        }
    }
}

function nextInst() {
    $("#welDiv").hide();
    $("#iatDiv").show();
}

function blk1Gen() {
    var prevWrd = "";
    var newWrd;
    var loopCntrl;
    iatArry = death.concat(life);
    
    for (i = 0; i < 2; i++) {
        loopCntrl = 0;
        while (loopCntrl === 0) {
            newWrd = death[Math.floor(Math.random() * death.length)];
            if (newWrd !== prevWrd) {
                prevWrd = newWrd;
                iatArry.push(newWrd);
                loopCntrl = 1;
            }
        }
    }
        
    for (i = 0; i < 2; i++) {
        loopCntrl = 0;
        while (loopCntrl === 0) {
            newWrd = life[Math.floor(Math.random() * life.length)];
            if (newWrd !== prevWrd) {
                prevWrd = newWrd;
                iatArry.push(newWrd);
                loopCntrl = 1;
            }
        }
    }   
    iatArry.shuffle();    
}

function stIAT() {
    $("#iBlk1").hide();
    $("#iBlk2").show();
    $("#lft1").css({'background-color': 'rgba(255, 0, 0,' + fade + ')'});
    $("#rgt1").css({'background-color': 'rgba(0, 0, 255,' + fade + ')'});
    iCnt = 0;
    iBlkMax = 12;
    iStart();
}

function iStart() {
    if (iCnt < 12) {
        iCurWrd = iatArry[iCnt];
        $("#iWrd").css({'opacity': '0'});
        setTimeout(function() {
            $("#iWrd").text(iCurWrd);
            $("#iWrd").css({'opacity': '100'});
        }, 100);
    }
    else {
        $.mobile.changePage("#finish");
    }
}