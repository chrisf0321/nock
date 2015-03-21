var hasTouch = ('ontouchstart' in window);
var TOUCH_START = hasTouch ? "touchstart" : "mousedown";
var fade;
var width;
var flash;
var iCnt = 0;
var iCurWrd;
var iBlkMax;
var sCnt = 0;
var rpNum = 0;
var bpNum = 0;
var pRed = false;
var pBlue = false;
var rNum = 0;
var bNum = 0;
var red = false;
var blue = false;
var active = false;
var iCorrect = true;
var sBlkMax = 56;
var iatBlk = 1;
var iatMax;
var iStartTime;
var iStop;
var death = ["Suicide", "Die", "Dead", "Deceased"];
var life = ["Alive", "Thrive", "Living", "Breathing"];
var notMe = ["They", "Them", "Their", "Other"];
var me = ["I", "Myself", "Self", "Mine"];
var pBlueArry = ["Bag", "Basket", "Tape", "Radio"];
var pRedArry = ["Cat", "Desk", "Ball", "Table"];
var redArry = ["Success", "Paper", "Dead", "Happy", "Funeral", "Rejected", "Engine", "Stupid", "Alone", "Pleasure", "Suicide", "Museum",
               "Success", "Paper", "Dead", "Happy", "Funeral", "Rejected", "Engine", "Stupid", "Alone", "Pleasure", "Suicide", "Museum"];
var blueArry = ["Success", "Paper", "Dead", "Happy", "Funeral", "Rejected", "Engine", "Stupid", "Alone", "Pleasure", "Suicide", "Museum",
               "Success", "Paper", "Dead", "Happy", "Funeral", "Rejected", "Engine", "Stupid", "Alone", "Pleasure", "Suicide", "Museum"];
var iatArry = [];
var left = [];
var right = [];
var iatData = [];
var surArry = { a1 : "", a2 : "", a3 : "", a4 : "", a5 : ""};

//Remove for the final version.
var iOnly = false;

/*$(document).on('touchmove', '#iat', function(e) {
    e.preventDefault();
});*/

$("#a2Op6").on('change', function() {
    if ($("#a2Op6").prop('checked')) {
        $("#a2inpt").show();
        $("#a2txt").focus();
    }
});

$(document).on('pagebeforeshow', '#iData', function() {
    displayIAT();
});

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
    $("#iBlk2, #iBlk3, #iBlk4, #iBlk5, #iBlk6, #iBlk7, #iBlk8").hide();
    $("#wng1").css({'opacity': '0'});
    $("#iBlk1").show();
    $("#lft1").css({'background-color': 'rgba(255, 0, 0, 0.5)'});
    $("#rgt1").css({'background-color': 'rgba(0, 0, 255, 0.5)'});
    $("#lWrd3").text("Death");
    $("#rWrd3").text("Life");
    $("#lWrd3, #rWrd3").removeClass('green_font');
    $("#lWrd3, #rWrd3").addClass('gold_font');
    $("#or3, #or4, #lWrd4, #rWrd4").hide();
    blk1Gen();
});

$(document).on('pagebeforeshow', '#sst', function() {
    $("#wng2").css({'opacity': '0'});
    active = false;
    $("#sBlk2").hide();
    $("#sBlk1").show();
    $("#lft2").css({'background-color': 'rgba(255, 0, 0, 0.5)'});
    $("#rgt2").css({'background-color': 'rgba(0, 0, 255, 0.5)'});
});

$(document).on('pagebeforeshow', '#survey', function() {
    $("#a3Blk").hide();
    $("#a2Blk").hide();
    $("#a1Blk").show();
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

$("#lft2, #rgt2").on(TOUCH_START, function() {
    if (active) {
        active = false;
        $("#sWrd").css({'opacity': '0'});
        sCnt++;
        if (sCnt >= 56) {
            $.mobile.changePage("#finish");
        }
        else {
            sTrial();
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

// Remove for the final version.
function iaton() {
    iOnly = true;
}

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
    left = [];
    right = [];
    iatData = [];
    iatBlk = 1;
    //Remove for final version.
    iOnly = false;
}

function calcScore(num) {
    if (num === 1) {
        $("#test").css({'color': 'red'});
        if ($.inArray(iCurWrd, left) !== -1) {
            iStop = new Date().getTime();
            iTime = (iStop - iStartTime) / 1000;
            iTime = Math.round(iTime * 100) / 100;
            iCnt++;
            recordTrial(iCurWrd, iTime, iCnt, iCorrect);
            $("#wng1").css({'opacity': '0'});
            iCorrect = true;
            iStart();
        }
        else {
            $("#wng1").css({'opacity': '100'});
            iCorrect = false;
        }
    }
    else {
        $("#test").css({'color': 'blue'});
        if ($.inArray(iCurWrd, right) !== -1) {
            iStop = new Date().getTime();
            iTime = (iStop - iStartTime) / 1000;
            iTime = Math.round(iTime * 100) / 100;
            iCnt++;
            recordTrial(iCurWrd, iTime, iCnt, iCorrect);
            $("#wng1").css({'opacity': '0'});
            iCorrect = true;
            iStart();
        }
        else {
            $("#wng1").css({'opacity': '100'});
            iCorrect = false;
        }
    }
}

function recordTrial(word, time, trial, correct) {
    iatData.push({"trial" : trial, "word" : word, "time" : time, "correct" : correct});
}

// Remove for final Version.
function displayIAT() {
    for (var i = 0; i < iatData.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + iatData[i].trial + "</td>");
        tr.append("<td>" + iatData[i].word + "</td>");
        tr.append("<td>" + iatData[i].time + "</td>");
        tr.append("<td>" + iatData[i].correct + "</td>");
        if ( i < 12) {
            $("#iTable1 tbody").append(tr);
        }
        else if (i < 24) {
            $("#iTable2 tbody").append(tr);
        }
        else if (i < 48) {
            $("#iTable3 tbody").append(tr);
        }
        else if (i < 72) {
            $("#iTable4 tbody").append(tr);
        }
        else if (i < 84) {
            $("#iTable5 tbody").append(tr);
        }
        else if (i < 108) {
            $("#iTable6 tbody").append(tr);
        }
        else if (i < 132) {
            $("#iTable7 tbody").append(tr);
        }
    }
    $("#iTable1, #iTable2, #iTable3, #iTable4, #iTable5, #iTable6, #iTable7").table("refresh");
}

function nextInst() {
    $("#welDiv").hide();
    $("#iatDiv").show();
}

function blk1Gen() {
    var prevWrd = "";
    var newWrd;
    var loopCntrl;
    if (iatBlk === 5) {
        left = life;
        right = death;
    }
    else {
        left = death;
        right = life;
    }
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
    iatArry.shuffle();
}

function blk2Gen() {
    var prevWrd = "";
    var newWrd;
    var loopCntrl;
    left = notMe;
    right = me;
    iatArry = notMe.concat(me);
    
    for (i = 0; i < 2; i++) {
        loopCntrl = 0;
        while (loopCntrl === 0) {
            newWrd = notMe[Math.floor(Math.random() * notMe.length)];
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
            newWrd = me[Math.floor(Math.random() * me.length)];
            if (newWrd !== prevWrd) {
                prevWrd = newWrd;
                iatArry.push(newWrd);
                loopCntrl = 1;
            }
        }
    }   
    iatArry.shuffle();
    iatArry.shuffle();
}

function blk3Gen() {
    var prevWrd = "";
    var newWrd;
    var loopCntrl;
    if (iatBlk >= 6) {
        left = notMe.concat(life);
        right = me.concat(death);
    }
    else {
        left = notMe.concat(death);
        right = me.concat(life);
    }
    iatArry = death.concat(life, notMe, me);
    
    for (i = 0; i < 2; i++) {
        loopCntrl = 0;
        while (loopCntrl === 0) {
            newWrd = notMe[Math.floor(Math.random() * notMe.length)];
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
            newWrd = me[Math.floor(Math.random() * me.length)];
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
    iatArry.shuffle();
}

function stIAT(maxTrial, trial) {
    iatMax = maxTrial;
    switch (trial) {
        case 1:
            $("#iBlk1").hide();
            $("#iBlk2").show();
            break;
        case 2:
            $("#iBlk3").hide();
            $("#iBlk2").show();
            break;
        case 3:
            $("#iBlk4").hide();
            $("#iBlk2").show();
            break;
        case 4:
            $("#iBlk5").hide();
            $("#iBlk2").show();
            break;
        case 5:
            $("#iBlk6").hide();
            $("#iBlk2").show();
            break;
        case 6:
            $("#iBlk7").hide();
            $("#iBlk2").show();
            break;
        case 7:
            $("#iBlk8").hide();
            $("#iBlk2").show();
            break;
    }
    $("#lft1").css({'background-color': 'rgba(255, 0, 0,' + fade + ')'});
    $("#rgt1").css({'background-color': 'rgba(0, 0, 255,' + fade + ')'});
    iCnt = 0;
    iStart();
}

function iStart() {
    if (iCnt < iatMax) {
        iCurWrd = iatArry[iCnt];
        $("#iWrd").css({'opacity': '0'});
        if ($.inArray(iCurWrd, death) !== -1 || $.inArray(iCurWrd, life) !== -1) {
            $("#iWrd").removeClass('green_font');
            $("#iWrd").addClass('gold_font');
        }
        else {
            $("#iWrd").removeClass('gold_font');
            $("#iWrd").addClass('green_font');
        }
        setTimeout(function() {
            $("#iWrd").text(iCurWrd);
            iStartTime = new Date().getTime();
            $("#iWrd").css({'opacity': '100'});
        }, 100);
    }
    else {
        switch(iatBlk) {
            case 1:
                iatBlk = 2;
                $("#iBlk2").hide();
                $("#iBlk3").show();
                $("#lWrd3").text("Not Me");
                $("#rWrd3").text("Me"); 
                $("#lWrd3, #rWrd3").removeClass('gold_font');
                $("#lWrd3, #rWrd3").addClass('green_font');
                blk2Gen();
                break;
            case 3:
                iatBlk = 4;
            case 2:
                if (iatBlk < 3) {
                    iatBlk = 3;
                }
                $("#iBlk2").hide();
                if (iatBlk === 4) {
                    $("#iBlk5").show();
                }
                else {
                    $("#iBlk4").show();
                }
                $("#lWrd3").text("Death");
                $("#rWrd3").text("Life"); 
                $("#or3, #or4").text("or");
                $("#lWrd4").text("Not Me");
                $("#rWrd4").text("Me");
                $("#lWrd3, #rWrd3, #lWrd4, #rWrd4").removeClass('gold_font');
                $("#lWrd3, #rWrd3, #lWrd4, #rWrd4").removeClass('green_font');
                $("#lWrd3, #rWrd3").addClass('gold_font');
                $("#lWrd4, #rWrd4").addClass('green_font');
                $("#or3, #or4, #lWrd4, #rWrd4").show();
                blk3Gen();
                break;
            case 4:
                iatBlk = 5;
                $("#iBlk2").hide();
                $("#iBlk6").show();
                $("#lWrd3").text("Life");
                $("#rWrd3").text("Death");
                $("#lWrd4, #rWrd4, #or3, #or4").hide();
                $("#lWrd3, #rWrd3").removeClass('green_font');
                $("#lWrd3, #rWrd3").addClass('gold_font');
                blk1Gen();
                break;
            case 6:
                iatBlk = 7;
            case 5:
                if (iatBlk < 6) {
                    iatBlk = 6;
                }
                $("#iBlk2").hide();
                if (iatBlk === 7) {
                    $("#iBlk8").show();
                }
                else {
                    $("#iBlk7").show();
                }
                $("#lWrd3").text("Life");
                $("#rWrd3").text("Death");
                $("#or3, #or4").text("or");
                $("#lWrd4").text("Not Me");
                $("#rWrd4").text("Me");
                $("#lWrd4, #rWrd4, #or3, #or4").show();
                $("#lWrd3, #rWrd3, #lWrd4, #rWrd4").removeClass('gold_font');
                $("#lWrd3, #rWrd3, #lWrd4, #rWrd4").removeClass('green_font');
                $("#lWrd3, #rWrd3").addClass('gold_font');
                $("#lWrd4, #rWrd4").addClass('green_font');
                blk3Gen();
                break;
            default:
                if (iOnly) {
                    $.mobile.changePage("#iData");
                }
                else {
                    $.mobile.changePage("#survey");
                }
        }
    }
}

function stSST() {
    $("#sBlk1").hide();
    $("#sBlk2").show();
    $("#lft2").css({'background-color': 'rgba(255, 0, 0,' + fade + ')'});
    $("#rgt2").css({'background-color': 'rgba(0, 0, 255,' + fade + ')'});
    pRedArry.shuffle();
    pBlueArry.shuffle();
    redArry.shuffle();
    blueArry.shuffle();
    sCnt = 0;
    rpNum = 0;
    bpNum = 0;
    pRed = false;
    pBlue = false;
    rNum = 0;
    bNum = 0;
    red = false;
    blue = false;
    active = false;
    sBlkMax = 56;
    sTrial();
}

function sTrial() {
    $("#sWrd").removeClass('blue_font');
    $("#sWrd").removeClass('red_font');
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                sStart();
            }, 1000);
            $("#sWrd").css({'opacity': '0'});
        }, 1000);
        $("#sWrd").text("+");
        $("#sWrd").css({'opacity': '100'});
    }, 1000);
}

function sStart() {
    if (sCnt < 56) {
        if (sCnt < 8) {
            if (!pRed && !pBlue) {
                num = Math.floor(Math.random() * 2);
                if (rpNum < pRedArry.length && num === 0) {
                    sstWrd = pRedArry[rpNum];
                    $("#sWrd").removeClass('blue_font');
                    $("#sWrd").addClass('red_font');
                    $("#sWrd").text(sstWrd);
                    $("#sWrd").css({'opacity': '0.2'});
                    rpNum++;
                    if (rpNum === pRedArry.length) {
                        pRed = true;
                    }
                }
                else if (bpNum < pBlueArry.length && num === 1) {
                    sstWrd = pBlueArry[bpNum];
                    $("#sWrd").removeClass('red_font');
                    $("#sWrd").addClass('blue_font');
                    $("#sWrd").text(sstWrd);
                    $("#sWrd").css({'opacity': '0.2'});
                    bpNum++;
                    if (bpNum === pBlueArry.length) {
                        pBlue = true;
                    }
                }
            }
            else if (!pRed) {
                sstWrd = pRedArry[rpNum];
                $("#sWrd").removeClass('blue_font');
                $("#sWrd").addClass('red_font');
                $("#sWrd").text(sstWrd);
                $("#sWrd").css({'opacity': '0.2'});
                rpNum++;
                if (rpNum === pRedArry.length) {
                    pRed = true;
                }
            }
            else if (!pBlue) {
                sstWrd = pBlueArry[bpNum];
                $("#sWrd").removeClass('red_font');
                $("#sWrd").addClass('blue_font');
                $("#sWrd").text(sstWrd);
                $("#sWrd").css({'opacity': '0.2'});
                bpNum++;
                if (bpNum === pBlueArry.length) {
                    pBlue = true;
                }
            }
        }
        else {
            if (!red && !blue) {
                num = Math.floor(Math.random() * 2);
                if (rNum < redArry.length && num === 0) {
                    sstWrd = redArry[rNum];
                    $("#sWrd").removeClass('blue_font');
                    $("#sWrd").addClass('red_font');
                    $("#sWrd").text(sstWrd);
                    $("#sWrd").css({'opacity': '100'});
                    rNum++;
                    if (rNum === redArry.length) {
                        red = true;
                    }
                }
                else if (bNum < blueArry.length && num === 1) {
                    sstWrd = blueArry[bNum];
                    $("#sWrd").removeClass('red_font');
                    $("#sWrd").addClass('blue_font');
                    $("#sWrd").text(sstWrd);
                    $("#sWrd").css({'opacity': '100'});
                    bNum++;
                    if (bNum === blueArry.length) {
                        blue = true;
                    }
                }
            }
            else if (!red) {
                sstWrd = redArry[rNum];
                $("#sWrd").removeClass('blue_font');
                $("#sWrd").addClass('red_font');
                $("#sWrd").text(sstWrd);
                $("#sWrd").css({'opacity': '100'});
                rNum++;
                if (rNum === redArry.length) {
                    red = true;
                }
            }
            else if (!blue) {
                sstWrd = blueArry[bNum];
                $("#sWrd").removeClass('red_font');
                $("#sWrd").addClass('blue_font');
                $("#sWrd").text(sstWrd);
                $("#sWrd").css({'opacity': '100'});
                bNum++;
                if (bNum === blueArry.length) {
                    blue = true;
                }
            }
        }
    }
    active = true;
}

function a1() {
    surArry.a1 = $("#atxt").val();
    $("#a1Blk").hide();
    $("#a2inpt").hide();
    $("#a2Blk").show();
}

function a2() {
    $("#a2Blk").hide();
    $("#a3Blk").show();
}

function a3() {
    $("a3Blk").hide();
    $.mobile.changePage("#sst");
}

