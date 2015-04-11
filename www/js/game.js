$(function() {
    FastClick.attach(document.body);
});
var hasTouch = ('ontouchstart' in window);
var TOUCH_START = hasTouch ? "touchstart" : "mousedown";
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
var sstColor;
var active = false;
var iCorrect = true;
var iActive = true;
var sBlkMax = 56;
var iatBlk = 1;
var iatMax;
var b1Ever = 0;
var b2Year = 0;
var iStartTime;
var iStop;
var sStTime;
var sStop;
var sstWrd;
var txtID;
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
var depressotypic = ["Rejected", "Alone", "Stupid"];
var suicide = ["Dead", "Funeral", "Suicide"];
var positive = ["Success", "Happy", "Pleasure"];
var neutral = ["Paper", "Engine", "Museum"];
var iatArry = [];
var left = [];
var right = [];
var iatData = [];
var sstData = [];
var a9Exists = false;
var surArry = { a1 : "", a2 : "", a3_1 : "", a3_2 : "", a3_3 : "", a3_4 : "", a3_5 : "", a4_1 : "", a4_2 : "", a4_3 : "", a4_4 : "",
                a4_5 : "", a4_6 : "", a5 : "", a6 : "", a7 : "", a8_1 : "", a8_2 : "", a8_3 : "", a8_4 : "", a8_5 : "", a8_6 : "", 
                a8_7 : "", a8_8 : "", a9 : "", a9_flag : 0, a9a : "", a10 : "", b1a : "", b1b : "", b1c : "", b1d : "", b1e : "", b1f : "",
                b1g : "", b1h : "", b1i : "", b1j : "", b1k : "", b2 : "", b3 : "", c1 : "", c1a : "", c1b : "", c1c : "", c2 : "", c2a : "",
                c2b : "", c2c : "", c3 : "", c3a : "", c3b : "", c3c : "", c3d_1 : "", c3d_2 : "", c3d_3 : "", c3d_4 : "", c3d_5 : "", c3d_6 : "",
                c3d_7 : "", c3d_8 : "", c3d_9 : "", c3d_10 : "", c3d_11 : "", c4 : "", c4a : "", c4b : "", c4c : ""};
var navArry = [];
var navPos = 0;

//Remove for the final version.
var iOnly = false;
var s1Only = false;
var sstOnly = false;

$(document).on('pagebeforeshow', '#iData', function() {
    calcIAT();
});

$(document).on('pagebeforeshow', '#home', function() {
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
    sstColor = "";
    active = false;
    $("#sBlk2").hide();
    $("#sBlk1").show();
    $("#lft2").css({'background-color': 'rgba(255, 0, 0, 0.5)'});
    $("#rgt2").css({'background-color': 'rgba(0, 0, 255, 0.5)'});
});

$(document).on('pagebeforeshow', '#survey', function() {
    $("#a1Blk, #a2Blk, #a3Blk, #a4Blk, #a5Blk, #a6Blk, #a7Blk, #a8Blk, #a9Blk, #a9aBlk, #a10Blk").hide();
    $("#bBlk, #b1Blk, #b2Blk, #b3Blk, #b1Blkc, #b1Blkc1, #b1Blkc2").hide();
    $("#cBlk, #c1Blk, #c1Blka, #c1Blkb, #c1Blkc, #c2Blk, #c2Blka, #c2Blkb, #c2Blkc, #c3Blk, #c3Blka, #c3Blkb, #c3Blkc, #c3Blkd, #c4Blk, #c4Blka, #c4Blkb, #c4Blkc").hide();
    $("#aBlk").show();
});

$("#lft, #rgt, #lft1, #rgt1").on(TOUCH_START, function() {
    var side = $(this).attr('id');
    if (side === "lft" || side === "lft1") {
        calcScore(1);
    }
    else {
        calcScore(2);
    }
});

$("#lft2, #rgt2").on(TOUCH_START, function() {
    if (active) {
        active = false;
        $("#sWrd").css({'opacity': '0'});
        sStop = new Date().getTime();
        sTime = sStop - sStTime; // / 1000;
        //sTime = Math.round(sTime * 1000) / 1000;
        sCnt++;
        /*if (sCnt >= 56) {
            sCalc(sstWrd, $(this).attr('id'), sTime, sstColor);
            //$.mobile.changePage("#finish");
        }
        else {*/
            if (sCnt > 8) {
                sCalc(sstWrd, $(this).attr('id'), sTime, sstColor);
            }
            sTrial();
        //}
    }
});

// Custom numeric keyboard for ipad.
/*$("#atxt, #b2txt, #b3txt, #c1atxt, #c1btxt, #c2atxt, #c2btxt, #c3atxt, #c3btxt, #c4atxt").on(TOUCH_START, function() {
    txtID = "#" + $(this).attr('id');
    $("#numPad").show();
    $("#keypad").fadeToggle('fast');
});*/

function setID(id) {
    txtID = id;
}

$('.don').click(function(){
    $(txtID).val("");
});

$('.num').on(TOUCH_START, function(){
    if (!isNaN($(txtID).val())) {
        if (parseInt($(txtID).val()) === 0) {
            $(txtID).val($(this).text());
        } else {
            $(txtID).val($(txtID).val() + $(this).text());
        }
    }
});

$('.del').on(TOUCH_START, function(){
    $(txtID).val($(txtID).val().substring(0,$(txtID).val().length - 1));
});

$('.zero').on(TOUCH_START, function(){
    if (!isNaN($(txtID).val())) {
        if (parseInt($(txtID).val()) !== 0) {
            $(txtID).val($(txtID).val() + $(this).text());
        }
    }
});
// End custom numeric keypad for ipad.
      
// Remove for the final version.
function iaton() {
    iOnly = true;
}
function sur1on() {
    s1Only = true;
}

function sston() {
    sstOnly = true;
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
}

function reset() {
    iCnt = 0;
    iatArry = [];
    left = [];
    right = [];
    iatData = [];
    sstData = [];
    iatBlk = 1;
    iActive = true;
    surArry = { a1 : "", a2 : "", a3_1 : "", a3_2 : "", a3_3 : "", a3_4 : "", a3_5 : "", a4_1 : "", a4_2 : "", a4_3 : "", a4_4 : "",
                a4_5 : "", a4_6 : "", a5 : "", a6 : "", a7 : "", a8_1 : "", a8_2 : "", a8_3 : "", a8_4 : "", a8_5 : "", a8_6 : "", 
                a8_7 : "", a8_8 : "", a9 : "", a9_flag : 0, a9a : "", a10 : "", b1a : "", b1b : "", b1c : "", b1d : "", b1e : "", b1f : "",
                b1g : "", b1h : "", b1i : "", b1j : "", b1k : "", b2 : "", b3 : "", c1 : "", c1a : "", c1b : "", c1c : "", c2 : "", c2a : "",
                c2b : "", c2c : "", c3 : "", c3a : "", c3b : "", c3c : "", c3d_1 : "", c3d_2 : "", c3d_3 : "", c3d_4 : "", c3d_5 : "", c3d_6 : "",
                c3d_7 : "", c3d_8 : "", c3d_9 : "", c3d_10 : "", c3d_11 : "", c4 : "", c4a : "", c4b : "", c4c : ""};
    navArry = [];
    navPos = 0;
    $("input[type='radio']").prop("checked", false).checkboxradio("refresh");
    $("input[type='checkbox']").prop("checked", false).checkboxradio("refresh");
    $("input[type=text]").val("");
    //Remove for final version.
    iOnly = false;
    s1Only = false;
    sstOnly = false;
}

function calcScore(num) {
    if(iActive) {
        if (num === 1) {
            if ($.inArray(iCurWrd, left) !== -1) {
                iActive = false;
                iStop = new Date().getTime();
                iTime = iStop - iStartTime; // / 1000;
                //iTime = Math.round(iTime * 1000) / 1000;
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
            if ($.inArray(iCurWrd, right) !== -1) {
                iActive = false;
                iStop = new Date().getTime();
                iTime = iStop - iStartTime; // / 1000;
                //iTime = Math.round(iTime * 1000) / 1000;
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
}

function recordTrial(word, time, trial, correct) {
    iatData.push({"trial" : trial, "word" : word, "time" : time, "correct" : correct});
}

// Remove for final Version.
function displayIAT() {
    var iPos = iatData.length - 1;
    var iScrData = iatData[iPos];
    for (var i = 0; i < iPos; i++) {
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
        else if (i < 96) {
            $("#iTable5 tbody").append(tr);
        }
        else if (i < 120) {
            $("#iTable6 tbody").append(tr);
        }
        else if (i < 144) {
            $("#iTable7 tbody").append(tr);
        }
    }
    $("#iTable1, #iTable2, #iTable3, #iTable4, #iTable5, #iTable6, #iTable7").table("refresh");
    
    $.each(iScrData, function(key, value) {
        var scr = '<p><b>' + key + '</b> ' + value + '</p>';
        $("#iScr").append(scr);
    });
}

function calcIAT() {
    var totScores = [];
    var errorTrials = 0;
    var errorLat400 = 0;
    var errorLat10 = 0;
    var err3 = 0;
    var err4 = 0;
    var err6 = 0;
    var err7 = 0;
    var iScore = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum6 = 0;
    var sum7 = 0;
    var cMean = 0;
    var nMean = 0;
    var iSd = 0;
    var iSdSum = 0;
    var allMean = 0;
    var blks_40_err = 0;
    var session_30_err = false;
    
    for (var i = 24; i < 48; i++) {
        if (!iatData[i].correct) {
            errorTrials++;
        }
        if (iatData[i].time <= 400) {
            errorLat400++;
            err3++;
        }
        if (iatData[i].time >= 10000) {
            errorLat10++;
            err3++;
        }
        sum3 += iatData[i].time;
        totScores.push(iatData[i].time);
    }
    for (var i = 48; i < 72; i++) {
        if (!iatData[i].correct) {
            errorTrials++;
        }
        if (iatData[i].time <= 400) {
            errorLat400++;
            err4++;
        }
        if (iatData[i].time >= 10000) {
            errorLat10++;
            err4++;
        }
        sum4 += iatData[i].time;
        totScores.push(iatData[i].time);
    }
    for (var i = 96; i < 120; i++) {
        if (!iatData[i].correct) {
            errorTrials++;
        }
        if (iatData[i].time <= 400) {
            errorLat400++;
            err6++;
        }
        if (iatData[i].time >= 10000) {
            errorLat10++;
            err6++;
        }
        sum6 += iatData[i].time;
        totScores.push(iatData[i].time);
    }
    for (var i = 120; i < 144; i++) {
        if (!iatData[i].correct) {
            errorTrials++;
        }
        if (iatData[i].time <= 400) {
            errorLat400++;
            err7++;
        }
        if (iatData[i].time >= 10000) {
            errorLat10++;
            err7++;
        }
        sum7 += iatData[i].time;
        totScores.push(iatData[i].time);
    }
    if (err3 > 9) {
        blks_40_err++;
    }
    if (err4 > 9) {
        blks_40_err++;
    }
    if (err6 > 9) {
        blks_40_err++;
    }
    if (err7 > 9) {
        blks_40_err++;
    }
    if ((errorLat400 + errorLat10) > 28) {
        session_30_err = true;
    }
    cMean = (sum3 + sum4) / 48;
    nMean = (sum6 + sum7) / 48;
    allMean = (sum3 + sum4 + sum6 + sum7) / 96;
    
    for (var i = 0; i < totScores.length; i++) {
        iSdSum += Math.pow((allMean - totScores[i]), 2);
    }
    iSd = iSdSum / 96;
    iSd = Math.sqrt(iSd);
    
    iScore = (cMean - nMean) / iSd;
    iScore = Math.round(iScore * 1000) / 1000;
    
    iatData.push({"Wrong" : errorTrials, "Below_400" : errorLat400, "Above_10000" : errorLat10, "Critical_blks_40_err" : blks_40_err,
                  "Session_30_err" : session_30_err, "IAT_Score" : iScore});
    displayIAT();
}

function nextInst() {
    $("#welDiv").hide();
    $("#iatDiv").show();
}

function blk1Gen() {
    var prevWrd = "";
    var newWrd;
    var loopCntrl;
    var loopSize;
    if (iatBlk === 5) {
        loopSize = 4;
        left = life;
        right = death;
        iatArry = death.concat(life, left, right);
    }
    else {
        loopSize = 2;
        left = death;
        right = life;
        iatArry = death.concat(life);
    }
    
    for (i = 0; i < loopSize; i++) {
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
        
    for (i = 0; i < loopSize; i++) {
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
    $("#lft1").css({'background-color': 'rgba(255, 0, 0, 0.1)'});
    $("#rgt1").css({'background-color': 'rgba(0, 0, 255, 0.1)'});
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
            iActive = true;
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
    if (sCnt < 56) {
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
    else {
        if (sstOnly) {
            if (sstScore()) {
                genSData();
            }
        }
        else {
            $.mobile.changePage("#finish");
        }
    }
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
                    $("#sWrd").css({'opacity': '0.5'});
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
                    $("#sWrd").css({'opacity': '0.5'});
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
                $("#sWrd").css({'opacity': '0.5'});
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
                $("#sWrd").css({'opacity': '0.5'});
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
                    $("#sWrd").css({'opacity': '0.5'});
                    sstColor = "red";
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
                    $("#sWrd").css({'opacity': '0.5'});
                    sstColor = "blue";
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
                $("#sWrd").css({'opacity': '0.5'});
                sstColor = "red";
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
                $("#sWrd").css({'opacity': '0.5'});
                sstColor = "blue";
                bNum++;
                if (bNum === blueArry.length) {
                    blue = true;
                }
            }
        }
    }
    sStTime = new Date().getTime();
    active = true;
}

function sCalc(word, side, time, sColor) {
    var choiceSide = "";
    var correct = false;
    var type = "";
    if (side === "lft2") {
        choiceSide = "left";
        if (sColor === "red") {
            correct = true;
        }
        else {
            correct = false;
        }       
    }
    else {
        choiceSide = "right";
        if (sColor === "blue") {
            correct = true;
        }
        else {
            correct = false;
        }
    }
    if ($.inArray(word, depressotypic) !== -1) {
        type = "depressotypic";
    }
    else if ($.inArray(word, suicide) !== -1) {
        type = "suicide";
    }
    else if ($.inArray(word, neutral) !== -1) {
        type = "neutral";
    }
    else if ($.inArray(word, positive) !== -1) {
        type = "positive";
    }
    sRecord(word, choiceSide, time, sColor, correct, type);
}

function sRecord(word, side, time, color, correct, type) {
    sstData.push({"stim" : word, "type" : type, "color" : color, "side" : side, "time" : time, "correct" : correct});
}

function sstScore() {
    corArry = [];
    depArry = [];
    posArry = [];
    suiArry = [];
    neutArry = [];
    low = 0;
    high = 0;
    errors = 0;
    outliers = 0;
    sum = 0;
    sumSd = 0;
    mean = 0;
    sd = 0;
    validDep = 0;
    validPos = 0;
    validNeut = 0;
    validSui = 0;
    meanDep = 0;
    meanPos = 0;
    meanNeut = 0;
    meanSui = 0;
    intDep = 0;
    intPos = 0;
    intSui = 0;
    
    for (var i = 0; i < sstData.length; i++) {
        if (sstData[i].correct === false) {
            errors++;
        }
        else {
            corArry.push(sstData[i]);
        }       
    }
    for (var x = 0; x < corArry.length; x++) {
        sum += corArry[x].time;
    }
    mean = sum / corArry.length;
    mean = Math.round(mean * 1000) / 1000;
    
    for (var i = 0; i < corArry.length; i++) {
        sumSd += Math.pow((mean - corArry[i].time), 2);
    }
    sd = sumSd / corArry.length;
    sd = Math.sqrt(sd);
    sd = Math.round(sd * 1000) / 1000;
    low = mean - (sd * 2);
    high = mean + (sd * 2);
    
    for (var i = 0; i < corArry.length; i++) {
        if (corArry[i].time < high && corArry[i].time > low) {
            if (corArry[i].type === "depressotypic") {
                validDep++;
                depArry.push(corArry[i]);
            }
            else if (corArry[i].type === "positive") {
                validPos++;
                posArry.push(corArry[i]);
            }
            else if (corArry[i].type === "suicide") {
                validSui++;
                suiArry.push(corArry[i]);
            }
            else if (corArry[i].type === "neutral") {
                validNeut++;
                neutArry.push(corArry[i]);
            }
        }
        else {
            outliers++;
        }
    }
    if (validDep > 0) {
        for (var i = 0; i < depArry.length; i++) {
            meanDep += depArry[i].time;
        }
        meanDep = meanDep / depArry.length;
        meanDep = Math.round(meanDep * 1000) / 1000;
    }
    if (validPos > 0) {
        for (var i = 0; i < posArry.length; i++) {
            meanPos += posArry[i].time;
        }
        meanPos = meanPos / posArry.length;
        meanPos = Math.round(meanPos * 1000) / 1000;
    }
    if (validNeut > 0) {
        for (var i = 0; i < neutArry.length; i++) {
            meanNeut += neutArry[i].time;
        }
        meanNeut = meanNeut / neutArry.length;
        meanNeut = Math.round(meanNeut * 1000) / 1000;
    }
    if (validSui > 0) {
        for (var i = 0; i < suiArry.length; i++) {
            meanSui += suiArry[i].time;
        }
        meanSui = meanSui / suiArry.length;
        meanSui = Math.round(meanSui * 1000) / 1000;
    }
    intDep = meanDep - meanNeut;
    intPos = meanPos - meanNeut;
    intSui = meanSui - meanNeut;
    intDep = Math.round(intDep * 1000) / 1000;
    intPos = Math.round(intPos * 1000) / 1000;
    intSui = Math.round(intSui * 1000) / 1000;
    
    sstData.push({"errors" : errors, "outliers" : outliers, "mean" : mean, "sd" : sd, "valid_dep" : validDep,
                  "mean_dep" : meanDep, "valid_pos" : validPos, "mean_pos" : meanPos, "valid_sui" : validSui,
                  "mean_sui" : meanSui, "valid_neut" : validNeut, "mean_neut" : meanNeut, "int_dep" : intDep,
                  "int_pos" : intPos, "int_sui" : intSui});
    return true;
}

//Remove for final version.
function genSData() {
    pos = sstData.length - 1;
    score = sstData[pos];
    for (var i = 0; i < pos; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + sstData[i].stim + "</td>");
        tr.append("<td>" + sstData[i].type + "</td>");
        tr.append("<td>" + sstData[i].color + "</td>");
        tr.append("<td>" + sstData[i].side + "</td>");
        tr.append("<td>" + sstData[i].time + "</td>");
        tr.append("<td>" + sstData[i].correct + "</td>");
        $("#sTable1 tbody").append(tr);
    }
    $.each(score, function(key, value) {
        var ssData = '<p><b>' + key + '</b> ' + value + '</p>';
        $("#sstDiv").append(ssData);
    });
    
    $.mobile.changePage("#sstDataRes");
}

// Survey logic
$("#a2Op1, #a2Op2, #a2Op3, #a2Op4, #a2Op5").on('change', function() {
    surArry.a2 = $(this).val();
});

$("#a3Op1, #a3Op2, #a3Op3, #a3Op4, #a3Op5").on('change', function() {
    if ($(this).attr('id') !== "a3Op1" && $("#a3Op1").prop('checked')) {
        $("#a3Op1").prop('checked', false).checkboxradio("refresh");
    }
    else if ($(this).attr('id') === "a3Op1") {
        $("#a3Op2, #a3Op3, #a3Op4, #a3Op5").prop('checked', false).checkboxradio("refresh");
    }
});

$("#a5Op1, #a5Op2, #a5Op3, #a5Op4, #a5Op5, #a5Op6, #a5Op7").on('change', function() {
    surArry.a5 = $(this).val();
});

$("#a6Op1, #a6Op2, #a6Op3, #a6Op4, #a6Op5").on('change', function() {
    surArry.a6 = $(this).val();
});

$("#a7Op1, #a7Op2, #a7Op3, #a7Op4").on('change', function() {
    surArry.a7 = $(this).val();
});

$("#a4Op6").on('change', function() {
    if ($("#a4Op6").prop('checked')) {
        $("#a4inpt").show();
        $("#a4txt").focus();
    }
    else {
        $("#a4inpt").hide();
    }
});

$("#a8Op8").on('change', function() {
    if ($("#a8Op8").prop('checked')) {
        $("#a8inpt").show();
        $("#a8txt").focus();
    }
    else {
        $("#a8inpt").hide();
    }
});

$("#a9Op2, #a9Op3, #a9Op4, #a9Op5").on('change', function() {
    surArry.a9 = $(this).val();
    surArry.a9_flag = 1;
});

$("#a9Op1, #a9Op6, #a9Op7").on('change', function() {  
    surArry.a9 = $(this).val();
    surArry.a9_flag = 0;
});

$("#a9Op8").on('change', function() {
    if ($("#a9Op8").prop('checked')) {
        $("#a9inpt").show();
        $("#a9txt").focus();
    }
    else {
        $("#a9inpt").hide();
    }
});

$("#a9aOp1, #a9aOp2, #a9aOp3, #a9aOp4").on('change', function() {
    surArry.a9a = $(this).val();
});

$("#a10Op1, #a10Op2, #a10Op3, #a10Op4, #a10Op5, #a10Op6").on('change', function() {
    surArry.a10 = $(this).val();
});

$("#b1Op1, #b1Op2, #b1Op3, #b1Op4").on('change', function() {
    surArry.b1a = $(this).val();
});
$("#b1Op5, #b1Op6, #b1Op7, #b1Op8").on('change', function() {
    surArry.b1b = $(this).val();
});
$("#b1Op9, #b1Op10, #b1Op11, #b1Op12").on('change', function() {
    surArry.b1c = $(this).val();
});
$("#b1Op13, #b1Op14, #b1Op15, #b1Op16").on('change', function() {
    surArry.b1d = $(this).val();
});
$("#b1Op17, #b1Op18, #b1Op19, #b1Op20").on('change', function() {
    surArry.b1e = $(this).val();
});
$("#b1Op21, #b1Op22, #b1Op23, #b1Op24").on('change', function() {
    surArry.b1f = $(this).val();
});
$("#b1Op25, #b1Op26, #b1Op27, #b1Op28").on('change', function() {
    surArry.b1g = $(this).val();
});
$("#b1Op29, #b1Op30, #b1Op31, #b1Op32").on('change', function() {
    surArry.b1h = $(this).val();
});
$("#b1Op33, #b1Op34, #b1Op35, #b1Op36").on('change', function() {
    surArry.b1i = $(this).val();
});
$("#b1Op37, #b1Op38, #b1Op39, #b1Op40").on('change', function() {
    surArry.b1j = $(this).val();
});
$("#b1Op41, #b1Op42, #b1Op43, #b1Op44").on('change', function() {
    surArry.b1k = $(this).val();
});

$("#1").on(TOUCH_START, function() {
    $("#b1Op1").prop("checked", true).trigger("change");
});

$("#2").on(TOUCH_START, function() {
    $("#b1Op2").prop("checked", true).trigger("change");
});

$("#3").on(TOUCH_START, function() {
    $("#b1Op3").prop("checked", true).trigger("change");
});

$("#4").on(TOUCH_START, function() {
    $("#b1Op4").prop("checked", true).trigger("change");
});

$("#5").on(TOUCH_START, function() {
    $("#b1Op5").prop("checked", true).trigger("change");
});

$("#6").on(TOUCH_START, function() {
    $("#b1Op6").prop("checked", true).trigger("change");
});

$("#7").on(TOUCH_START, function() {
    $("#b1Op7").prop("checked", true).trigger("change");
});

$("#8").on(TOUCH_START, function() {
    $("#b1Op8").prop("checked", true).trigger("change");
});

$("#9").on(TOUCH_START, function() {
    $("#b1Op9").prop("checked", true).trigger("change");
});

$("#10").on(TOUCH_START, function() {
    $("#b1Op10").prop("checked", true).trigger("change");
});

$("#11").on(TOUCH_START, function() {
    $("#b1Op11").prop("checked", true).trigger("change");
});

$("#12").on(TOUCH_START, function() {
    $("#b1Op12").prop("checked", true).trigger("change");
});

$("#13").on(TOUCH_START, function() {
    $("#b1Op13").prop("checked", true).trigger("change");
});

$("#14").on(TOUCH_START, function() {
    $("#b1Op14").prop("checked", true).trigger("change");
});

$("#15").on(TOUCH_START, function() {
    $("#b1Op15").prop("checked", true).trigger("change");
});

$("#16").on(TOUCH_START, function() {
    $("#b1Op16").prop("checked", true).trigger("change");
});

$("#17").on(TOUCH_START, function() {
    $("#b1Op17").prop("checked", true).trigger("change");
});

$("#18").on(TOUCH_START, function() {
    $("#b1Op18").prop("checked", true).trigger("change");
});

$("#19").on(TOUCH_START, function() {
    $("#b1Op19").prop("checked", true).trigger("change");
});

$("#20").on(TOUCH_START, function() {
    $("#b1Op20").prop("checked", true).trigger("change");
});

$("#21").on(TOUCH_START, function() {
    $("#b1Op21").prop("checked", true).trigger("change");
});

$("#22").on(TOUCH_START, function() {
    $("#b1Op22").prop("checked", true).trigger("change");
});

$("#23").on(TOUCH_START, function() {
    $("#b1Op23").prop("checked", true).trigger("change");
});

$("#24").on(TOUCH_START, function() {
    $("#b1Op24").prop("checked", true).trigger("change");
});

$("#25").on(TOUCH_START, function() {
    $("#b1Op25").prop("checked", true).trigger("change");
});

$("#26").on(TOUCH_START, function() {
    $("#b1Op26").prop("checked", true).trigger("change");
});

$("#27").on(TOUCH_START, function() {
    $("#b1Op27").prop("checked", true).trigger("change");
});

$("#28").on(TOUCH_START, function() {
    $("#b1Op28").prop("checked", true).trigger("change");
});

$("#29").on(TOUCH_START, function() {
    $("#b1Op29").prop("checked", true).trigger("change");
});

$("#30").on(TOUCH_START, function() {
    $("#b1Op30").prop("checked", true).trigger("change");
});

$("#31").on(TOUCH_START, function() {
    $("#b1Op31").prop("checked", true).trigger("change");
});

$("#32").on(TOUCH_START, function() {
    $("#b1Op32").prop("checked", true).trigger("change");
});

$("#33").on(TOUCH_START, function() {
    $("#b1Op33").prop("checked", true).trigger("change");
});

$("#34").on(TOUCH_START, function() {
    $("#b1Op34").prop("checked", true).trigger("change");
});

$("#35").on(TOUCH_START, function() {
    $("#b1Op35").prop("checked", true).trigger("change");
});

$("#36").on(TOUCH_START, function() {
    $("#b1Op36").prop("checked", true).trigger("change");
});

$("#37").on(TOUCH_START, function() {
    $("#b1Op37").prop("checked", true).trigger("change");
});

$("#38").on(TOUCH_START, function() {
    $("#b1Op38").prop("checked", true).trigger("change");
});

$("#39").on(TOUCH_START, function() {
    $("#b1Op39").prop("checked", true).trigger("change");
});

$("#40").on(TOUCH_START, function() {
    $("#b1Op40").prop("checked", true).trigger("change");
});

$("#41").on(TOUCH_START, function() {
    $("#b1Op41").prop("checked", true).trigger("change");
});

$("#42").on(TOUCH_START, function() {
    $("#b1Op42").prop("checked", true).trigger("change");
});

$("#43").on(TOUCH_START, function() {
    $("#b1Op43").prop("checked", true).trigger("change");
});

$("#44").on(TOUCH_START, function() {
    $("#b1Op44").prop("checked", true).trigger("change");
});

$("#c1Op1, #c1Op2").on('change', function() {
    surArry.c1 = $(this).val();
});

$("#c1cOp1, #c1cOp2, #c1cOp3, #c1cOp4, #c1cOp5").on('change', function() {
    surArry.c1c = $(this).val();
});

$("#c2Op1, #c2Op2").on('change', function() {
    surArry.c2 = $(this).val();
});

$("#c2cOp1, #c2cOp2, #c2cOp3, #c2cOp4, #c2cOp5").on('change', function() {
    surArry.c2c = $(this).val();
});

$("#c3Op1, #c3Op2").on('change', function() {
    surArry.c3 = $(this).val();
});

$("#c3cOp1, #c3cOp2, #c3cOp3, #c3cOp4, #c3cOp5, #c3cOp6").on('change', function() {
    surArry.c3c = $(this).val();
});

$("#c4Op1, #c4Op2").on('change', function() {
    surArry.c4 = $(this).val();
});

$("#c4bOp1, #c4bOp2, #c4bOp3, #c4bOp4, #c4bOp5, #c4bOp6, #c4bOp7, #c4bOp8").on('change', function() {
    surArry.c4b = $(this).val();
});

$("#c4cOp1, #c4cOp2, #c4cOp3, #c4cOp4, #c4cOp5, #c4cOp6").on('change', function() {
    surArry.c4c = $(this).val();
});

function aSt() {
    $("#aBlk").hide();
    $("#err1").hide();
    $("#a1Blk").show();
    $("#keypad").show();
    $("#numPad").show();
    $("#atxt").focus();
    setID("#atxt");
}


function a1() {
    surArry.a1 = $("#atxt").val();
    num = parseInt($("#atxt").val());
    
    if (num > 17 && num < 100) {
        $("#a1Blk").hide();
        $("#keypad").hide();
        $("#numPad").hide();
        $("#err1").hide();
        $("#err2").hide();
        $("#a2Blk").show();
        addArry(aSt);
    }
    else {
        $("#err1").show();
    }
}

function a2() {
    if (surArry.a2 !== "") {
        $("#a2Blk").hide();
        $("#err2").hide();
        $("#err3").hide();
        $("#a3Blk").show();
        addArry(a1);
    }
    else {
        $("#err2").show();
    }
}

function a3() {
    if ($("#a3Op1").prop('checked')) {
        surArry.a3_1 = $("#a3Op1").val();
    }
    if ($("#a3Op2").prop('checked')) {
        surArry.a3_2 = $("#a3Op2").val();
    }
    if ($("#a3Op3").prop('checked')) {
        surArry.a3_3 = $("#a3Op3").val();
    }
    if ($("#a3Op4").prop('checked')) {
        surArry.a3_4 = $("#a3Op4").val();
    }
    if ($("#a3Op5").prop('checked')) {
        surArry.a3_5 = $("#a3Op5").val();
    }
    if (surArry.a3_1 !== "" || surArry.a3_2 !== "" || surArry.a3_3 !== ""
            || surArry.a3_4 !== "" || surArry.a3_5 !== "") {
        $("#a3Blk").hide();
        $("#a4inpt").hide();
        $("#err3").hide();
        $("#err4").hide();
        $("#err4_1").hide();
        $("#a4Blk").show();
        addArry(a2);
    }
    else {
        $("#err3").show();
    }
}

function a4() {
    if ($("#a4Op1").prop('checked')) {
        surArry.a4_1 = $("#a4Op1").val();
        alert(surArry.a4_1);
    }
    if ($("#a4Op2").prop('checked')) {
        surArry.a4_2 = $("#a4Op2").val();
    }
    if ($("#a4Op3").prop('checked')) {
        surArry.a4_3 = $("#a4Op3").val();
    }
    if ($("#a4Op4").prop('checked')) {
        surArry.a4_4 = $("#a4Op4").val();
    }
    if ($("#a4Op5").prop('checked')) {
        surArry.a4_5 = $("#a4Op5").val();
    }
    if ($("#a4Op6").prop('checked')) {
        if ($("#a4txt").val().length < 2000) {
            surArry.a4_6 = $("#a4txt").val();
        }
        else if ($("#a4txt").val() !== "") {
            $("#err4").show();
        }
    }
    if (surArry.a4_1 !== "" || surArry.a4_2 !== "" || surArry.a4_3 !== "" || surArry.a4_4 !== "" || surArry.a4_5 !== "" || 
            ($("#a4Op6").prop('checked') && surArry.a4_6 !== "")) {
        $("#a4Blk").hide();
        $("#a4inpt").hide();
        $("#err4").hide();
        $("#err4_1").hide();
        $("#err5").hide();
        $("#a5Blk").show();
        addArry(a3);
    }
    else {
        $("#err4_1").show();
    }
}

function a5() {
    if (surArry.a5 !== "") {
        $("#a5Blk").hide();
        $("#err5").hide();
        $("#err6").hide();
        $("#a6Blk").show();
        addArry(a4);
    }
    else {
        $("#err5").show();
    }
}

function a6() {
    if (surArry.a6 !== "") {
        $("#a6Blk").hide();
        $("#err6").hide();
        $("#err7").hide();
        $("#a7Blk").show();
        addArry(a5);
    }
    else {
        $("#err6").show();
    }
}

function a7() {
    if (surArry.a7 !== "") {
        $("#a7Blk").hide();
        $("#err7").hide();
        $("#err8").hide();
        $("#err8_1").hide();
        $("#a8inpt").hide();
        $("#a8Blk").show();
        addArry(a6);
    }
    else {
        $("#err7").show();
    }
}

function a8() {
    if ($("#a8Op1").prop('checked')) {
        surArry.a8_1 = $("#a8Op1").val();
    }
    if ($("#a8Op2").prop('checked')) {
        surArry.a8_2 = $("#a8Op2").val();
    }
    if ($("#a8Op3").prop('checked')) {
        surArry.a8_3 = $("#a8Op3").val();
    }
    if ($("#a8Op4").prop('checked')) {
        surArry.a8_4 = $("#a8Op4").val();
    }
    if ($("#a8Op5").prop('checked')) {
        surArry.a8_5 = $("#a8Op5").val();
    }
    if ($("#a8Op6").prop('checked')) {
        surArry.a8_6 = $("#a8Op6").val();
    }
    if ($("#a8Op7").prop('checked')) {
        surArry.a8_7 = $("#a8Op7").val();
    }
    if ($("#a8Op8").prop('checked')) {
        if ($("#a8txt").val().length < 2000) {
            surArry.a8_8 = $("#a8txt").val();
        }
        else if ($("#a8txt").val() !== "") {
            $("#err8").show();
        }
    }
    if (surArry.a8_1 !== "" || surArry.a8_2 !== "" || surArry.a8_3 !== "" || surArry.a8_4 !== "" || surArry.a8_5 !== "" || 
             surArry.a8_6 !== "" || surArry.a8_7 !== "" || ($("#a8Op8").prop('checked') && surArry.a8_8 !== "")) {
        $("#a8Blk").hide();
        $("#a8inpt").hide();
        $("#err8").hide();
        $("#err8_1").hide();
        $("#err9").hide();
        $("#err9_1").hide();
        $("#a9inpt").hide();
        $("#a9Blk").show();
        addArry(a7);
    }
    else {
        $("#err8_1").show();
    }
}

function a9() {
    if ($("#a9Op8").prop('checked')) {
        if ($("#a9txt").val().length < 2000) {
            surArry.a9 = $("#a9txt").val();
            surArry.a9_flag = 1;
        }
        else if ($("#a9txt").val() !== "") {
            $("#err9").show();
        }
    }
    if (surArry.a9 !== "") {
        $("#a9Blk").hide();
        $("#a9inpt").hide();
        $("#err9").hide();
        $("#err9_1").hide();
        $("#err9a").hide();
        $("#err10").hide();
        addArry(a8);
        if (surArry.a9_flag === 1) {
            $("#a9aBlk").show();
        }
        else {
            surArry.a9a = "";
            $("#a9aOp1, #a9aOp2, #a9aOp3, #a9aOp4").removeAttr("checked").checkboxradio("refresh");
            removeArry(a9a);
            a9Exists = false;
            $("#a10Blk").show();
        }
    }
    else {
        $("#err9_1").show();
    }
}

function a9a() {
    if (surArry.a9a !== "") {
        $("#a9aBlk").hide();
        $("#err9a").hide();
        $("#err10").hide();
        $("#a10Blk").show();
        a9Exists = true;
        addArry(a9);  //need to check this in other areas for questions that skip.
    }
    else {
        $("#err9a").show();
    }
}

function a10() {
    if (surArry.a10 !== "") {
        $("#a10Blk").hide();
        $("#err10").hide();
        $("#bBlk").show();
        if (a9Exists) {
            addArry(a9a);
        }
        else {
            addArry(a9);
        }
    }
    else {
        $("#err10").show();
    }
}

function bSt() {
    $("#bBlk").hide();
    $("#erb1").hide();
    $("#b1Blk").show();
}

function b1c() {
    if (surArry.b1a !== "" && surArry.b1b !== "" && surArry.b1c !== "" && surArry.b1d !== "") {
        $("#b1Blk").hide();
        $("#erb1").hide();
        $("#erb2").hide();
        $("#b1Blkc").show();
        addArry(bSt);
    }
    else {
        $("#erb1").show();
    }
}

function b1c1() {
    if (surArry.b1e !== "" && surArry.b1f !== "" && surArry.b1g !== "") {
        $("#b1Blkc").hide();
        $("#erb2").hide();
        $("#erb3").hide();
        $("#b1Blkc1").show();
        addArry(b1c);
    }
    else {
        $("#erb2").show();
    }
}

function b1c2() {
    if (surArry.b1h !== "" && surArry.b1i !== "" && surArry.b1j !== "") {
        $("#b1Blkc1").hide();
        $("#erb3").hide();
        $("#erb4").hide();
        $("#b1Blkc2").show();
        addArry(b1c1);
    }
    else {
        $("#erb3").show();
    }
}

function b1() {
    if (surArry.b1h !== "" && surArry.b1i !== "" && surArry.b1j !== "") {
        if (b1Checks()) {
            $("#b1Blkc2").hide();
            $("#erb4").hide();
            $("#erb5").hide();
            addArry(b1c2);
            if (b1Ever > 0) {
                $("#b2Blk").show();
                $("#keypad").show();
                $("#numPad").show();
                setID("#b2txt");
            }
            else {
                surArry.b2 = "";
                surArry.b3 = "";
                $("#cBlk").show();
            }
        }
    }
    else {
        $("#erb4").show();
    }
}

function b1Checks() {
    b1Ever = 0;
    b1Year = 0;
    b1Fill = [];
    b1Fillers = {a : "having depression", b : "being hyper or manic", c : "having insomnia", d : "having attacks of fear or panic",
                 e : "having attacks of anger", f : "having trouble after a traumatic experience", g : "having anxiety", h : "trouble with alcohol",
                 i : "trouble with drugs", j : "seeing or hearing strange things", k : "having strange thoughts"};
    
    if (surArry.b1a !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.a);
        if (surArry.b1a !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1b !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.b);
        if (surArry.b1b !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1c !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.c);
        if (surArry.b1c !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1d !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.d);
        if (surArry.b1d !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1e !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.e);
        if (surArry.b1e !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1f !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.f);
        if (surArry.b1f !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1g !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.g);
        if (surArry.b1g !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1h !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.h);
        if (surArry.b1h !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1i !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.i);
        if (surArry.b1i !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1j !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.j);
        if (surArry.b1j !== "More than a year ago") {
            b1Year++;
        }
    }
    if (surArry.b1k !== "Never") {
        b1Ever++;
        b1Fill.push(b1Fillers.k);
        if (surArry.b1k !== "More than a year ago") {
            b1Year++;
        }
    }
    
    if (b1Ever > 0) {
        switch(b1Ever) {
            case 1:
                $("#b2q").text("You reported " + b1Fill[0] + ".  About how old were you when this problem started?");
                break;
            case 2:
                $("#b2q").text("You reported " + b1Fill[0] + " and " + b1Fill[1] + ".  About how old were you when either of these problems started?");
                break;
            case 3:
                $("#b2q").text("You reported " + b1Fill[0] + " and " + b1Fill[1] + " and " + b1Fill[2] + ".  About how old were you when any of these problems started?");
                break;
            default:
                $("#b2q").text("You reported quite a few of the above problems, like " + b1Fill[0] + ", " + b1Fill[1] + " and " + b1Fill[2] + ".  About how old were you when any of these problems started?");
                break;
        }
    }
    
    if (b1Year > 0) {
        switch(b1Year) {
            case 1:
                $("#b3q").html("<b>About how many months out of 12 in the past year did you have this problem?</b><br><span class='smallTitle'><i>(Your best estimate is fine.)</i></span>");
                break;
            case 2:
                $("#b3q").html("<b>About how many months out of 12 in the past year did you have either of these problems?</b><br><span class='smallTitle'><i>(Your best estimate is fine.)</i></span>");
                break;
            default:
                $("#b3q").html("<b>About how many months out of 12 in the past year did you have any of these problems?</b><br><span class='smallTitle'><i>(Your best estimate is fine.)</i></span>");
                break;
        }
    }
    
    return true;
}

function b2() {
    surArry.b2 = $("#b2txt").val();
    num = parseInt($("#b2txt").val());
    
    if (parseInt(surArry.a1) >= num) {
        $("#b2Blk").hide();
        $("#erb5").hide();
        $("#erb6").hide();
        addArry(b1);
        if (b1Year > 0) {
            $("#b3Blk").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#b3txt");
        }
        else {
            surArry.b3 = "";
            $("#cBlk").show();
            $("#keypad").hide();
            $("#numPad").hide();
        }
    }
    else {
        $("#erb5").show();
    }
}

function b3() {
    surArry.b3 = $("#b3txt").val();
    num = parseInt($("#b3txt").val());
    
    if (num <= 12) {
        $("#b3Blk").hide();
        $("#keypad").hide();
        $("#numPad").hide();
        $("#erb6").hide();
        $("#cBlk").show();
        addArry(b2);
    }
    else {
        $("#erb6").show();
    }
}

function cSt() {
    $("#cBlk").hide();
    $("#erc1").hide();
    $("#c1Blk").show();
}

function c1() {
    if (surArry.c1 !== "") {
        $("#c1Blk").hide();
        $("#erc1").hide();
        $("#erc2").hide();
        $("#erc14").hide();
        addArry(cSt);
        if (surArry.c1 === "Yes") {
            $("#c1Blka").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#c1atxt");
        }
        else {
            surArry.c1a = "";
            surArry.c1b = "";
            surArry.c1c = "";
            surArry.c2  = "";
            surArry.c2a = "";
            surArry.c2b = "";
            surArry.c2c = "";
            surArry.c3  = "";
            surArry.c3a = "";
            surArry.c3b = "";
            surArry.c3c = "";
            surArry.c3d_1 = "";
            surArry.c3d_2 = "";
            surArry.c3d_3 = "";
            surArry.c3d_4 = "";
            surArry.c3d_5 = "";
            surArry.c3d_6 = "";
            surArry.c3d_7 = "";
            surArry.c3d_8 = "";
            surArry.c3d_9 = "";
            surArry.c3d_10 = "";
            surArry.c3d_11 = "";
            $("#c4Blk").show();
        }
    }
    else {
        $("#erc1").show();
    }
}

function c1a() {
    surArry.c1a = $("#c1atxt").val();
    num = parseInt($("#c1atxt").val());
    
    if (parseInt(surArry.a1) >= num) {
        $("#c1Blka").hide();
        $("#keypad").show();
        $("#numPad").show();
        setID("#c1btxt");
        $("#erc2").hide();
        $("#erc3").hide();
        $("#c1Blkb").show();
        addArry(c1);
    }
    else {
        $("#erc2").show();
    }
}

function c1b() {
    surArry.c1b = $("#c1btxt").val();
    num = parseInt($("#c1btxt").val());
    
    if (num <= 52) {
        $("#c1Blkb").hide();
        $("#keypad").hide();
        $("#numPad").hide();
        $("#erc3").hide();
        $("#erc4").hide();
        addArry(c1a);
        if (num > 0) {
            $("#c1Blkc").show();
        }
        else {
            surArry.c1c = "";
            $("#erc6").hide();
            $("#c2Blk").show();
        }
    }
    else {
        $("#erc3").show();
    }
}

function c1c() {
    if (surArry.c1c !== "") {
        $("#c1Blkc").hide();
        $("#erc4").hide();
        $("#erc5").hide();
        $("#c2Blk").show();
        addArry(c1b);
    }
    else {
        $("#erc4").show();
    }
}

function c2() {
    if (surArry.c2 !== "") {
        $("#c2Blk").hide();
        $("#erc5").hide();
        $("#erc6").hide();
        $("#erc9").hide();
        addArry(c1c);
        if (surArry.c2 === "Yes") {
            $("#c2Blka").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#c2atxt");
        }
        else {
            surArry.c2a = "";
            surArry.c2b = "";
            surArry.c2c = "";
            $("#c3Blk").show();
        }
    }
    else {
        $("#erc5").show();
    }
}

function c2a() {
    surArry.c2a = $("#c2atxt").val();
    num = parseInt($("#c2atxt").val());
    
    if (parseInt(surArry.a1) >= num) {
        $("#c2Blka").hide();
        $("#keypad").show();
        $("#numPad").show();
        setID("#c2btxt");
        $("#erc6").hide();
        $("#erc7").hide();
        $("#c2Blkb").show();
        addArry(c2);
    }
    else {
        $("#erc6").show();
    }
}

function c2b() {
    surArry.c2b = $("#c2btxt").val();
    num = parseInt($("#c2btxt").val());

    if (num <= 52) {
        $("#c2Blkb").hide();
        $("#keypad").hide();
        $("#numPad").hide();
        $("#erc7").hide();
        $("#erc8").hide();
        addArry(c2a);
        if (num > 0) {
            $("#erc9").hide();
            surArry.c2c = "";
            $("#c3Blk").show();
        }
        else {
            $("#c2Blkc").show();
        }
    }
    else {
        $("#erc7").show();
    }
}

function c2c() {
    if (surArry.c2c !== "") {
        $("#c2cBlk").hide();
        $("#erc8").hide();
        $("#erc9").hide();
        $("#c3Blk").show();
        addArry(c2b);
    }
    else {
        $("#erc8").show();
    }
}

function c3() {
    if (surArry.c3 !== "") {
        $("#c3Blk").hide();
        $("#erc9").hide();
        $("#erc10").hide();
        $("#erc14").hide();  
        addArry(c2c);
        if (surArry.c3 === "Yes") {
            $("#c3Blka").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#c3atxt");
        }
        else {
            surArry.c3a = "";
            surArry.c3b = "";
            surArry.c3c = "";
            surArry.c3d_1 = "";
            surArry.c3d_2 = "";
            surArry.c3d_3 = "";
            surArry.c3d_4 = "";
            surArry.c3d_5 = "";
            surArry.c3d_6 = "";
            surArry.c3d_7 = "";
            surArry.c3d_8 = "";
            surArry.c3d_9 = "";
            surArry.c3d_10 = "";
            surArry.c3d_11 = "";
            $("#c4Blk").show();
        }
    }
    else {
        $("#erc9").show();
    }
}

function c3a() {
    surArry.c3a = $("#c3atxt").val();
    num = parseInt($("#c3atxt").val());
    
    if (parseInt(surArry.a1) >= num) {
        $("#c3Blka").hide();
        $("#keypad").show();
        $("#numPad").show();
        setID("#c3btxt");
        $("#erc10").hide();
        $("#erc11").hide();
        $("#c3Blkb").show();
        addArry(c3);
    }
    else {
        $("#erc10").show();
    }
}

function c3b() {
    surArry.c3b = $("#c3btxt").val();
    num = parseInt($("#c3btxt").val());
    numC3a = parseInt(surArry.c3a);
    numA1 = parseInt(surArry.a1);
    
    if (surArry.c3b !== "") {
        if (surArry.c3b >= 1) {
            $("#c3Blkb").hide();
            $("#keypad").hide();
            $("#numPad").hide();
            $("#erc11").hide();
            $("#erc12").hide();
            $("#erc13").hide();
            $("#erc14").hide();
            $("#erc15").hide();
            addArry(c3a);
            if (num === 1) {
                $("#c3dq").html("<b>Which method did you use for your suicide attempt?</b><br><span class='smallTitle'><i>(Check all that apply.)</i></span>");
            }
            else if (num > 1) {
                $("#c3dq").html("<b>Which methods did you use for your suicide attempts?</b><br><span class='smallTitle'><i>(Check all that apply.)</i></span>");
            }
        
            if (numC3a === numA1 || numC3a === (numA1 - 1)) {
                $("#c3Blkc").show();
            }
            else if (numC3a < (numA1 - 1) && num > 1) {
                $("#c3Blkc").show();
            }
            else if (numC3a < (numA1 - 1) && num === 1) {
                surArry.c3c = "";
                $("#c3Blkd").show();
            }
            else {
                surArry.c3c = "";
                surArry.c3d_1 = "";
                surArry.c3d_2 = "";
                surArry.c3d_3 = "";
                surArry.c3d_4 = "";
                surArry.c3d_5 = "";
                surArry.c3d_6 = "";
                surArry.c3d_7 = "";
                surArry.c3d_8 = "";
                surArry.c3d_9 = "";
                surArry.c3d_10 = "";
                surArry.c3d_11 = "";
                $("#c4Blk").show();
            }
        }
        else {
            $("#erc11").show();
        }
    }
    else {
        $("#erc11").show();
    }
}

function c3c() {
    if (surArry.c3c !== "") {
        $("#c3Blkc").hide();
        $("#erc12").hide();
        $("#erc13").hide();
        $("#c3Blkd").show();
        addArry(c3b);
    }
    else {
        $("#erc12").show();
    }
}

function c3d() {
    ans = false;
    
    if ($("#c3dOp1").prop('checked')) {
        ans = true;
        surArry.c3d_1 = $("#c3dOp1").val();
    }
    if ($("#c3dOp2").prop('checked')) {
        ans = true;
        surArry.c3d_2 = $("#c3dOp2").val();
    }
    if ($("#c3dOp3").prop('checked')) {
        ans = true;
        surArry.c3d_3 = $("#c3dOp3").val();
    }
    if ($("#c3dOp4").prop('checked')) {
        ans = true;
        surArry.c3d_4 = $("#c3dOp4").val();
    }
    if ($("#c3dOp5").prop('checked')) {
        ans = true;
        surArry.c3d_5 = $("#c3dOp5").val();
    }
    if ($("#c3dOp6").prop('checked')) {
        ans = true;
        surArry.c3d_6 = $("#c3dOp6").val();
    }
    if ($("#c3dOp7").prop('checked')) {
        ans = true;
        surArry.c3d_7 = $("#c3dOp7").val();
    }
    if ($("#c3dOp8").prop('checked')) {
        ans = true;
        surArry.c3d_8 = $("#c3dOp8").val();
    }
    if ($("#c3dOp9").prop('checked')) {
        ans = true;
        surArry.c3d_9 = $("#c3dOp9").val();
    }
    if ($("#c3dOp10").prop('checked')) {
        ans = true;
        surArry.c3d_10 = $("#c3dOp10").val();
    }
    if ($("#c3dOp11").prop('checked')) {
        ans = true;
        surArry.c3d_11 = $("#c3dOp11").val();
    }
    if (ans) {
        $("#c3Blkd").hide();
        $("#erc13").hide();
        $("#erc14").hide();
        $("#c4Blk").show();
        addArry(c3c);
    }
    else {
        $("#erc13").show();
    }
}

function c4() {
    if (surArry.c4 !== "") {
        $("#c4Blk").hide();
        $("#erc14").hide();
        $("#erc15").hide();
        addArry(c3d);
        if (surArry.c4 === "Yes") {
            $("#c4Blka").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#c4atxt");
        }
        else {
            surArry.c4a = "";
            surArry.c4b = "";
            surArry.c4c = "";
            if (s1Only) {
                genSurData();
                $.mobile.changePage("#sData");
            }
            else {
                $.mobile.changePage("#sst");
            }
        }
    }
    else {
        $("#erc14").show();
    }
}

function c4a() {
    surArry.c4a = $("#c4atxt").val();
    num = parseInt($("#c4atxt").val());
    
    if (parseInt(surArry.a1) >= num) {
        $("#c4Blka").hide();
        $("#keypad").hide();
        $("#numPad").hide();
        $("#erc15").hide();
        $("#erc16").hide();
        $("#c4Blkb").show();
        addArry(c4);
    }
    else {
        $("#erc15").show();
    }
}

function c4b() {
    if (surArry.c4b !== "") {
        $("#c4Blkb").hide();
        $("#erc16").hide();
        $("#erc17").hide();
        $("#c4Blkc").show();
        addArry(c4a);
    }
    else {
        $("#erc16").show();
    }
}

function c4c() {
    if (surArry.c4c !== "") {
        $("#c4Blkc").hide();
        $("#erc17").hide();
        addArry(c4b);
        if (s1Only) {
            genSurData();
            $.mobile.changePage("#sData");
        }
        else {
            $.mobile.changePage("#sst");
        }
    }
    else {
        $("#erc17").show();
    }
}

function addArry(blk) {
    if ($.inArray(blk, navArry) === -1) {
        navArry.push(blk);
        navPos = navArry.length;
    }
    else {
        navPos = $.inArray(blk, navArry) + 1;
    }
}

function removeArry(blk) {
    pos = $.inArray(blk, navArry);
    if (pos !== -1) {
        navArry.splice(pos, 1);
    }
}

function back() {
    if (navPos > 0) {
        if (hideAll()) {
            navPos--;
            navArry[navPos]();
        }
    }
}

function forward() {
    vis = ["#asb", "#asb1", "#asb2", "#asb3", "#asb4", "#asb5", "#asb6", "#asb7", "#asb8", "#asb9", "#asb9a", "#asb10",
           "#bsb", "#bsb1", "#bsb2", "#bsb3", "#bsb4", "#bsb5", "#bsb6", "#csb", "#csb1", "#csb2", "#csb3", "#csb4",
           "#csb5", "#csb6", "#csb7", "#csb8", "#csb9", "#csb10", "#csb11", "#csb12", "#csb13", "#csb14", "#csb15",
           "#csb16", "#csb17"];
       
       for (i = 0; i < vis.length; i++) {
           if ($(vis[i]).is(':visible')) {
               $(vis[i]).click();
               break;
           }
       }

}

function hideAll() {
    $("#aBlk, #a1Blk, #a2Blk, #a3Blk, #a4Blk, #a5Blk, #a6Blk, #a7Blk, #a8Blk, #a9Blk, #a9aBlk, #a10Blk").hide();
    $("#bBlk, #b1Blk, #b2Blk, #b3Blk, #b1Blkc, #b1Blkc1, #b1Blkc2").hide();
    $("#cBlk, #c1Blk, #c1Blka, #c1Blkb, #c1Blkc, #c2Blk, #c2Blka, #c2Blkb, #c2Blkc, #c3Blk, #c3Blka, #c3Blkb, #c3Blkc, #c3Blkd, #c4Blk, #c4Blka, #c4Blkb, #c4Blkc").hide();
    $("#keypad, #numpad").hide();
    return true;
}

function genSurData() {
    $.each(surArry, function(key, value) {
        if (key !== "a9_flag") {
            var surData = '<p><b>' + key + ':</b>  ' + value + '</p>';
            $("#dataDiv").append(surData);
        }
    });
}
