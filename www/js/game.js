$(function() {
    FastClick.attach(document.body);
});
var saveURL = "http://nocksurvey.elasticbeanstalk.com/rest/nock";
var hasTouch = ('ontouchstart' in window);
var TOUCH_START = hasTouch ? "touchstart" : "mousedown";
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var stTime;
var stopTime;
var totTime;
var testDay;
var testDate;
var totSec;
var pId = "";
var iCnt = 0;
var iCurWrd;
var iBlkMax;
var sCnt = 0;
var sTrl = 0;
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
var size;
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
var finData = {};
var a9Exists = false;
var f1Exists = false;
var b3Exists = false;
var c2Exists = false;
var b1Exists = false;
var c1Exists = false;
var c1cExists = false;
var c2bExists = false;
var c3Exists = false;
var c4Exists = false;
var c4bExists = false;
var cExists = false;
var c25Exists = false;
var c4dExists = false;
var c4dExists2 = false;
var c4d0Exists = false;
var c4d0iExists = false;
var c4d1Exists = false;
var c4d2Exists = false;
var c4d3Exists = false;
var c4d4Exists = false;
var c4d5Exists = false;
var c4d6Exists = false;
var c4d7Exists = false;
var c6Exists = false;
var c3ser;
var iSwitch = false;
var blockcode;
var surArry = { a1 : "", a2 : "", a3_1 : "", a3_2 : "", a3_3 : "", a3_4 : "", a3_5 : "", a4_1 : "", a4_2 : "", a4_3 : "", a4_4 : "",
                a4_5 : "", a4_6 : "", a4_6_other : "", a5 : "", a6 : "", a7 : "", a8_1 : "", a8_2 : "", a8_3 : "", a8_4 : "", a8_5 : "", a8_6 : "", 
                a8_7 : "", a8_8 : "", a8_8_other : "", a9 : "", a9_other : "", a9_flag : 0, a9a : "", a10 : "", b1a : "", b1b : "", b1c : "", b1d : "", b1e : "", b1f : "",
                b1g : "", b1h : "", b1i : "", b1j : "", b1k : "", b2 : "", b3 : "", c1 : "", c1a : "", c1b : "", c1c : "", c2 : "", c2a : "",
                c2b : "", c2c : "", c3 : "", c3a : "", c3b : "", c3c : "", c4 : "", c4a : "", c4b : "", c4c : "", c4d_1 : "", c4d_2 : "", c4d_3 : "", c4d_4 : "", c4d_5 : "", c4d_6 : "",
                c4d_7 : "", c4d_8 : "", c4d_9 : "", c4d_10 : "", c4d_11 : "", c5 : "", c5a : "", c5b : "", c5c : "", a11 : "", b1v : "",
                c4d0_1 : "", c4d0_2 : "", c4d0_3 : "", c4d0_4 : "", c4d0_5 : "", c4d0_6 : "", c4d0_7 : "", c4d0_8 : "", c4d0_9 : "", c4d0_10 : "", c4d0_11 : "",
                c4d0i : "", c4d1 : "", c4d2 : "", c4d3 : "", c4d4 : "", c4d5 : "", c4d6 : "", c4d7 : "", c6 : "", c6cv : "", c6v : ""};
var sur2Arry = { d1a : "", d1b : "", d1c : "", d1d : "", d1e : "", d1f : "", d1g : "", d1h : "", e1a : "", e1b : "", e1c : "", e1d : "",
                 e1e : "", e1f : "", e1g : "", e2a : "", e2b : "", e2c : "", e3a : "", e3b : "", e3c : "", e3d : "", e3e : "", e3f : "",
                 e3g : "", e3h : "", e3i : "", e3j : "", e3k : "", e3l : "", f1a : "", f1b : "", f1c : "", f1d : "", f1e : "", g1 : "",
                 g2 : "", g3 : "", d1v : "", e3v : "", f1v : "", gv : ""};
var navArry = [];
var navPos = 0;

$(document).on('pagebeforeshow', '#home', function() {
    $("#idtxt").val("");
    $("#err0").hide();
    if (window.localStorage.getItem("stored") !== null) {
        $("#reBtn").show();
    }
    else {
        $("#reBtn").hide();
    }
});

$(document).on('pagebeforeshow', '#finish', function() {
    stopTime = new Date();
    $("#svOk").hide();
    $("#svErr").hide();
    saveData();
}); 

$(document).on('pagebeforeshow', '#wel', function() {
    $(":mobile-pagecontainer" ).pagecontainer( "load", "iat.html", { showLoadMsg: false } );
    $("#iatDiv").hide();
    $("#welDiv").show();
});

$(document).on('pagebeforeshow', '#iat', function() {
    //$(":mobile-pagecontainer" ).pagecontainer( "load", "sur1.html", { showLoadMsg: true } );
    FastClick.attach(document.body);
    iatBinds();
    $("#iBlk2, #iBlk3, #iBlk4, #iBlk5, #iBlk6, #iBlk7, #iBlk8").hide();
    $("#wng1").css({'opacity': '0'});
    $("#iBlk1").show();
    $("#lft1").css({'background-color': 'rgba(255, 0, 0, 0.5)'});
    $("#rgt1").css({'background-color': 'rgba(0, 0, 255, 0.5)'});
	if (iSwitch) {
		$("#lWrd3").text("Life");
		$("#rWrd3").text("Death");
	}
	else {
		$("#lWrd3").text("Death");
		$("#rWrd3").text("Life");
	}
    $("#lWrd3, #rWrd3").removeClass('green_font');
    $("#lWrd3, #rWrd3").addClass('gold_font');
    $("#or3, #or4, #lWrd4, #rWrd4").hide();
    blk1Gen();
});

$(document).on('pageshow', '#iat', function() {
    $(":mobile-pagecontainer" ).pagecontainer( "load", "sur1.html", { showLoadMsg: false } );
});

$(document).on('pageshow', '#sst', function() {
    $(":mobile-pagecontainer" ).pagecontainer( "load", "sur2.html", { showLoadMsg: false } );
});

$(document).on('pagebeforeshow', '#sst', function() {
    //$(":mobile-pagecontainer" ).pagecontainer( "load", "sur2.html", { showLoadMsg: true } );
    FastClick.attach(document.body);
    sstBinds();
    $("#wng2").css({'opacity': '0'});
    sstColor = "";
    active = false;
    $("#sBlk2").hide();
    $("#sBlk1").show();
    $("#lft2").css({'background-color': 'rgba(255, 0, 0, 0.5)'});
    $("#rgt2").css({'background-color': 'rgba(0, 0, 255, 0.5)'});
});

$(document).on('pagebeforeshow', '#survey', function() {
    FastClick.attach(document.body);
    /*document.getElementById('survey').addEventListener('touchmove', function(e) {
                    e.preventDefault();
                }, false);*/
    bindNumPad();
    bindSur1();
    a9Exists = false;
    b3Exists = false;
    c2Exists = false;
    b1Exists = false;
    c1Exists = false;
    c1cExists = false;
    c2bExists = false;
    c3Exists = false;
    c4Exists = false;
    c4bExists = false;
    navArry = [];
    navPos = 0;
    $("input[type='radio']").each(function() {
        if ($(this).is(":checked")) {
            $(this).prop("checked", false).checkboxradio('refresh');
        }
    });
    $("input[type='checkbox']").each(function() {
        if ($(this).is(":checked")) {
            $(this).prop("checked", false).checkboxradio('refresh');
        }
    });
    $("input[type=text]").val("");
    hideSur();
    $("#aBlk").show();
    $(":mobile-pagecontainer" ).pagecontainer( "load", "sst.html", { showLoadMsg: false } );
});

$(document).on('pagebeforeshow', '#survey2', function() {
    FastClick.attach(document.body);
    bindNumPad();
    sur2Binds();
    navArry = [];
    navPos = 0;
    f1Exists = false;
    $("input[type='radio']").each(function() {
        if ($(this).is(":checked")) {
            $(this).prop("checked", false).checkboxradio('refresh');
        }
    });
    $("input[type='checkbox']").each(function() {
        if ($(this).is(":checked")) {
            $(this).prop("checked", false).checkboxradio('refresh');
        }
    });
    $("input[type=text]").val("");
    $("#g1Slide").val("50").slider("refresh");
    hideSur();
    $("#dBlk").show();
});

function iatBinds() {
    $("#lft, #rgt, #lft1, #rgt1").on(TOUCH_START, function() {
        var side = $(this).attr('id');
        if (side === "lft" || side === "lft1") {
            calcScore(1);
        }
        else {
            calcScore(2);
        }
    });
}

function sstBinds() {
    $("#lft2, #rgt2").on(TOUCH_START, function() {
        if (active) {
            active = false;
            $("#sWrd").css({'opacity': '0'});
            sStop = new Date().getTime();
            sTime = sStop - sStTime; 
            if (sTime > 15000) {
                sTime = 15000;
            }
            sCnt++;
            if (sCnt > 8) {
                sCalc(sstWrd, $(this).attr('id'), sTime, sstColor);
            }
            sTrial();
        }
    });
}

// Custom numeric keyboard for ipad.

function setID(id, len) {
    txtID = id;
    size = len;
}

function bindNumPad() {
    $('.don').click(function(){
        $(txtID).val("");
    });

    $('.num').on(TOUCH_START, function(){
        if (!isNaN($(txtID).val()) && $(txtID).val().length < size) {
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
        if (!isNaN($(txtID).val()) && $(txtID).val().length < size) {
            if (parseInt($(txtID).val()) !== 0) {
                $(txtID).val($(txtID).val() + $(this).text());
            }
        }
    });
}
// End custom numeric keypad for ipad.

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

function idSt() {
    pId = $("#idtxt").val();
    
    if (pId === "" || pId.length > 15) {
        $("#err0").show();
    }
    else {
        stTime = new Date();
        $.mobile.changePage("#wel");
    }
}

function saveData() {
    $.ajax({
	type: 'POST',
	contentType: 'application/json',
	url: saveURL,
	dataType: "json",
	data: dataToJSON(),
	success: function(data, textStatus, jqXHR){
		$("#svOk").show();
	},
	error: function(jqXHR, textStatus, errorThrown){
                var storedItems = JSON.parse(window.localStorage.getItem("stored")) || [];
                storedItems.push(finData);
                window.localStorage.setItem("stored", JSON.stringify(storedItems));
		$("#svErr").show();
	}
    });
}

function cleanup(arr) {
    window.localStorage.removeItem("stored");
    
    if (arr.length > 0) {
        window.localStorage.setItem("stored", JSON.stringify(arr));
        $("#reBtn").show();
    }
    else {
        $("#reBtn").hide();
    }
}

function resendData() {
    var posi = 0;
    var newStore = [];
    var redata = JSON.parse(window.localStorage.getItem("stored"));
    console.log(redata);
    for (var i = 0; i < redata.length; i++) {
        var dataSend = redata[i];
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: saveURL,
            dataType: "json",
            data: JSON.stringify(dataSend),
            success: function(data, textStatus, jqXHR){
                    if (posi === redata.length - 1) {  
                        cleanup(newStore);
                    }
                    posi++;
            },
            error: function(jqXHR, textStatus, errorThrown){
                newStore.push(redata[posi]);
                if (posi === redata.length - 1) {  
                        cleanup(newStore);
                    }
                posi++;
            }
        });
    }
}

function dataToJSON() {
    finData["id"] = pId; 
    for (var i = 0; i < iatData.length; i++) {
        pos = i + 1;
        arr = iatData[i];
        if (i < iatData.length -1) {
            $.each(arr, function(key, value) {
                var title = key + pos;
                finData[title] = value;
            });
        }
        else {
            $.each(arr, function(key, value) {
                finData[key] = value;
            });
        }
    }
    for (var i = 0; i < sstData.length; i++) {
        pos = i + 1;
        arr = sstData[i];
        if (i < sstData.length - 1) {
            $.each(arr, function(key, value) {
                var title = key + pos;
                finData[title] = value;
            });
        }
        else {
            $.each(arr, function(key, value) {
                finData[key] = value;
            });
        }
    }
    $.each(surArry, function(key, value) {
        if (key !== "a9_flag") {
            finData[key] = value;
        }
    });
    $.each(sur2Arry, function(key, value) {
        finData[key] = value;
    });
    
    var testStart = formatAMPM(stTime);
    var testStop = formatAMPM(stopTime);
    testDay = days[stTime.getDay()];
    testDate = formatDate(stTime);
    var timers = formatTime(stTime, stopTime);
    totTime = timers[0];
    totSec = timers[1];
    
    finData["startTime"] = testStart;
    finData["stopTime"] = testStop;
    finData["testDay"] = testDay;
    finData["testDate"] = testDate;
    finData["totTime"] = totTime;
    finData["totSeconds"] = totSec;
    
    return JSON.stringify(finData);
}

function formatTime(start, stop) {
    var st = start.getTime();
    var sp = stop.getTime();
    var time = (sp - st) / 1000;
    var tSec = time.toFixed(0);
    var hours = Math.floor(time / 3600);
    time -= hours * 3600;
    var min = Math.floor(time / 60);
    time -= min * 60;
    time = time.toFixed(0);
    if (time === 60) {
        if (min > 58) {
            hours++;
            min = 0;
            time = 0;
        }
        else {
            min++;
            time = 0;
        }
    }
    hours = hours < 10 ? '0' + hours : hours;
    min = min < 10 ? '0' + min : min;
    time = time < 10 ? '0' + time : time;
    
    var timeArry = [];
    timeArry.push(hours + ":" + min + ":" + time);
    timeArry.push(tSec);
    
    return timeArry; 
}

function formatDate(tDate) {
    var day = tDate.getDate();
    var month = tDate.getMonth() + 1;
    var year = tDate.getFullYear();
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    
    return month + "/" + day + "/" + year;
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? '0'+hours : hours;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function reset() {
    pId = "";
    iCnt = 0;
    iatArry = [];
    left = [];
    right = [];
    iatData = [];
    sstData = [];
    iatBlk = 1;
    iActive = true;
    surArry = { a1 : "", a2 : "", a3_1 : "", a3_2 : "", a3_3 : "", a3_4 : "", a3_5 : "", a4_1 : "", a4_2 : "", a4_3 : "", a4_4 : "",
                a4_5 : "", a4_6 : "", a4_6_other : "", a5 : "", a6 : "", a7 : "", a8_1 : "", a8_2 : "", a8_3 : "", a8_4 : "", a8_5 : "", a8_6 : "", 
                a8_7 : "", a8_8 : "", a8_8_other : "", a9 : "", a9_other : "", a9_flag : 0, a9a : "", a10 : "", b1a : "", b1b : "", b1c : "", b1d : "", b1e : "", b1f : "",
                b1g : "", b1h : "", b1i : "", b1j : "", b1k : "", b2 : "", b3 : "", c1 : "", c1a : "", c1b : "", c1c : "", c2 : "", c2a : "",
                c2b : "", c2c : "", c3 : "", c3a : "", c3b : "", c3c : "", c4 : "", c4a : "", c4b : "", c4c : "", c4d_1 : "", c4d_2 : "", c4d_3 : "", c4d_4 : "", c4d_5 : "", c4d_6 : "",
                c4d_7 : "", c4d_8 : "", c4d_9 : "", c4d_10 : "", c4d_11 : "", c5 : "", c5a : "", c5b : "", c5c : "", a11 : "", b1v : "",
                c4d0_1 : "", c4d0_2 : "", c4d0_3 : "", c4d0_4 : "", c4d0_5 : "", c4d0_6 : "", c4d0_7 : "", c4d0_8 : "", c4d0_9 : "", c4d0_10 : "", c4d0_11 : "",
                c4d0i : "", c4d1 : "", c4d2 : "", c4d3 : "", c4d4 : "", c4d5 : "", c4d6 : "", c4d7 : "", c6 : "", c6cv : "", c6v : ""};
    sur2Arry = { d1a : "", d1b : "", d1c : "", d1d : "", d1e : "", d1f : "", d1g : "", d1h : "", e1a : "", e1b : "", e1c : "", e1d : "",
                 e1e : "", e1f : "", e1g : "", e2a : "", e2b : "", e2c : "", e3a : "", e3b : "", e3c : "", e3d : "", e3e : "", e3f : "",
                 e3g : "", e3h : "", e3i : "", e3j : "", e3k : "", e3l : "", f1a : "", f1b : "", f1c : "", f1d : "", f1e : "", g1 : "",
                 g2 : "", g3 : "", d1v : "", e3v : "", f1v : "", gv : ""};
    navArry = [];
    finData = {};
    navPos = 0;
    $("input[type=text]").val("");
    hideSur();
}

function calcScore(num) {
    if(iActive) {
        if (num === 1) {
            if ($.inArray(iCurWrd, left) !== -1) {
                iActive = false;
                iStop = new Date().getTime();
                iTime = iStop - iStartTime;
                if (iTime > 15000) {
                    iTime = 15000;
                }
                iCnt++;
                recordTrial(iCurWrd, iTime, iCnt, iCorrect, iatBlk, blockcode);
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
                iTime = iStop - iStartTime;
                if (iTime > 15000) {
                    iTime = 15000;
                }
                iCnt++;
                recordTrial(iCurWrd, iTime, iCnt, iCorrect, iatBlk, blockcode);
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

function recordTrial(word, time, trial, correct, block, blockcode) {
    iatData.push({"trial" : trial, "word" : word, "time" : time, "correct" : correct, "block" : block, "blockcode" : blockcode});
}

function calcIAT() {
    var totScores = [];
    var totScores1 = [];
    var totScores2 = [];
    var errorTrials = 0;
    var errorLat400 = 0;
    var errorLat10 = 0;
    var err3 = 0;
    var err4 = 0;
    var err6 = 0;
    var err7 = 0;
    var iScore = 0;
    var iScore1 = 0;
    var iScore2 = 0;
    var iScoreStd = 0;
    var sum3 = 0;
    var sum4 = 0;
    var sum6 = 0;
    var sum7 = 0;
    var cMean = 0;
    var nMean = 0;
    var cMeanStd1 = 0;
    var nMeanStd1 = 0;
    var cMeanStd2 = 0;
    var nMeanStd2 = 0;
    var iSdStd1 = 0;
    var iSdSumStd1 = 0;
    var iSdStd2 = 0;
    var iSdSumStd2 = 0;
    var iSd = 0;
    var iSdSum = 0;
    var allMean = 0;
    var allMeanStd1 = 0;
    var allMeanStd2 = 0;
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
        totScores1.push(iatData[i].time);
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
        totScores2.push(iatData[i].time);
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
        totScores1.push(iatData[i].time);
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
        totScores2.push(iatData[i].time);
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
    
    cMeanStd1 = sum3 / 24;
    nMeanStd1 = sum6 / 24;
    cMeanStd2 = sum4 / 24;
    nMeanStd2 = sum7 / 24;
    
    allMeanStd1 = (sum3 + sum6) / 48;
    allMeanStd2 = (sum4 + sum7) / 48;
    
    for (var i = 0; i < totScores.length; i++) {
        iSdSum += Math.pow((allMean - totScores[i]), 2);
    }
    
    for (var i = 0; i < totScores1.length; i++) {
        iSdSumStd1 += Math.pow((allMeanStd1 - totScores1[i]), 2);
    }
    
    for (var i = 0; i < totScores2.length; i++) {
        iSdSumStd2 += Math.pow((allMeanStd2 - totScores2[i]), 2);
    }
    
    iSd = iSdSum / 96;
    iSd = Math.sqrt(iSd);
    
    iSdStd1 = iSdSumStd1 / 48;
    iSdStd1 = Math.sqrt(iSdStd1);
    
    iSdStd2 = iSdSumStd2 / 48;
    iSdStd2 = Math.sqrt(iSdStd2);
    
	if (iSwitch) {
		iScore = (nMean - cMean) / iSd;
                iScore1 = (nMeanStd1 - cMeanStd1) / iSdStd1;
                iScore2 = (nMeanStd2 - cMeanStd2) / iSdStd2;              
	}
	else {
		iScore = (cMean - nMean) / iSd;
                iScore1 = (cMeanStd1 - nMeanStd1) / iSdStd1;
                iScore2 = (cMeanStd2 - nMeanStd2) / iSdStd2; 
	}
    iScore = Math.round(iScore * 1000) / 1000;
    
    iScoreStd = (iScore1 + iScore2) / 2;
    iScoreStd = Math.round(iScoreStd * 1000)/ 1000;
    
    iatData.push({"wrong" : errorTrials, "below_400" : errorLat400, "above_10000" : errorLat10, "critical_blks_40_err" : blks_40_err,
                  "session_30_err" : session_30_err, "iat_score" : iScore, "iat_score_std" : iScoreStd});
}

function nextInst() {
    $("#welDiv").hide();
	var swtch = Math.floor((Math.random() * 100) + 1);
	if (swtch > 50) {
		$("#i1").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>LIFE</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>DEATH</span> related words.");
		$("#i3").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>LIFE</span> and for <span style='color:green'>NOT ME</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>DEATH</span> and for <span style='color:green'>ME</span> related words.");
		$("#i4").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>LIFE</span> and for <span style='color:green'>NOT ME</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>DEATH</span> and for <span style='color:green'>ME</span> related words.");
		$("#i5").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>DEATH</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>LIFE</span> related words.");
		$("#i6").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>DEATH</span> and for <span style='color:green'>NOT ME</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>LIFE</span> and for <span style='color:green'>ME</span> related words.");
		$("#i7").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>DEATH</span> and for <span style='color:green'>NOT ME</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>LIFE</span> and for <span style='color:green'>ME</span> related words.");
		blockcode = "Life/Death";
                iSwitch = true;
	}
	else {
		$("#i1").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>DEATH</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>LIFE</span> related words.");
		$("#i3").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>DEATH</span> and for <span style='color:green'>NOT ME</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>LIFE</span> and for <span style='color:green'>ME</span> related words.");
		$("#i4").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>DEATH</span> and for <span style='color:green'>NOT ME</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>LIFE</span> and for <span style='color:green'>ME</span> related words.");
		$("#i5").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>LIFE</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>DEATH</span> related words.");
		$("#i6").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>LIFE</span> and for <span style='color:green'>NOT ME</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>DEATH</span> and for <span style='color:green'>ME</span> related words.");
		$("#i7").html("During this part of the task, tap the LEFT side of the screen for <span style='color:gold'>LIFE</span> and for <span style='color:green'>NOT ME</span> related words.  Tap the RIGHT side of the screen for <span style='color:gold'>DEATH</span> and for <span style='color:green'>ME</span> related words.");
		blockcode = "Death/Life";
                iSwitch = false;
	}
    $("#iatDiv").show();
}

function blk1Gen() {
    var prevWrd = "";
    var newWrd;
    var loopCntrl;
    var loopSize;
    if (iatBlk === 5) {
        loopSize = 4;
        if (iSwitch) {
			left = death;
			right = life;
		}
		else {
			left = life;
			right = death;
		}
        iatArry = death.concat(life, left, right);
    }
    else {
        loopSize = 2;
		if (iSwitch) {
			left = life;
			right = death;
		}
		else {
			left = death;
			right = life;
		}
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
		if (iSwitch) {
			left = notMe.concat(death);
			right = me.concat(life);
		}
		else {
			left = notMe.concat(life);
			right = me.concat(death);
		}
    }
    else {
		if (iSwitch) {
			left = notMe.concat(life);
			right = me.concat(death);
		}
		else {
			left = notMe.concat(death);
			right = me.concat(life);
		}
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
     // Mark to take out after testing
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
				blockcode = "NotMe/Me";
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
				if (iSwitch) {
					$("#lWrd3").text("Life");
					$("#rWrd3").text("Death");
					blockcode = "NotMe,Life/Me,Death";
				}
				else {
					$("#lWrd3").text("Death");
					$("#rWrd3").text("Life");
					blockcode = "NotMe,Death/Me,Life";
				}
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
				if (iSwitch) {
					$("#lWrd3").text("Death");
					$("#rWrd3").text("Life");
					blockcode = "Death/Life";
				}
				else {
					$("#lWrd3").text("Life");
					$("#rWrd3").text("Death");
					blockcode = "life/Death";
				}
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
				if (iSwitch) {
					$("#lWrd3").text("Death");
					$("#rWrd3").text("Life");
					blockcode = "NotMe,Death/Me,Life";
				}
				else {
					$("#lWrd3").text("Life");
					$("#rWrd3").text("Death");
					blockcode = "NotMe,Life/Me,Death";
				}
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
                calcIAT();
                $.mobile.changePage("#survey");
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
    sTrl = 0;
    sTrial();
}

function sTrial() {
     // Mark to change later after testing
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
        sstScore();
        $.mobile.changePage("#survey2");
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
    sTrl++;
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
    sRecord(word, choiceSide, time, sColor, correct, type, sTrl);
}

function sRecord(word, side, time, color, correct, type, sTrl) {
    sstData.push({"stim" : word, "type" : type, "color" : color, "side" : side, "sTime" : time, "sCorrect" : correct, "sTrial" : sTrl});
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
        if (sstData[i].sCorrect === false) {
            errors++;
        }
        else {
            corArry.push(sstData[i]);
        }       
    }
    for (var x = 0; x < corArry.length; x++) {
        sum += corArry[x].sTime;
    }
    mean = sum / corArry.length;
    
    for (var i = 0; i < corArry.length; i++) {
        sumSd += Math.pow((mean - corArry[i].sTime), 2);
    }
    sd = sumSd / corArry.length;
    sd = Math.sqrt(sd);
    low = mean - (sd * 2);
    high = mean + (sd * 2);
    
    for (var i = 0; i < corArry.length; i++) {
        if (corArry[i].sTime < high && corArry[i].sTime > low) {
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
            meanDep += depArry[i].sTime;
        }
        meanDep = meanDep / depArry.length;
    }
    if (validPos > 0) {
        for (var i = 0; i < posArry.length; i++) {
            meanPos += posArry[i].sTime;
        }
        meanPos = meanPos / posArry.length;
    }
    if (validNeut > 0) {
        for (var i = 0; i < neutArry.length; i++) {
            meanNeut += neutArry[i].sTime;
        }
        meanNeut = meanNeut / neutArry.length;
    }
    if (validSui > 0) {
        for (var i = 0; i < suiArry.length; i++) {
            meanSui += suiArry[i].sTime;
        }
        meanSui = meanSui / suiArry.length;
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

// Survey logic
function bindSur1() {
$("#a2Op1, #a2Op2, #a2Op3, #a2Op4, #a2Op5").on('change', function() {
    surArry.a2 = $(this).val();
    a2();
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
    a5();
});

$("#a6Op1, #a6Op2, #a6Op3, #a6Op4, #a6Op5").on('change', function() {
    surArry.a6 = $(this).val();
    a6();
});

$("#a7Op1, #a7Op2, #a7Op3, #a7Op4").on('change', function() {
    surArry.a7 = $(this).val();
    a7();
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
        $("#a8Op6").prop('checked', false).checkboxradio("refresh");
        $("#a8inpt").show();
        $("#a8txt").focus();
    }
    else {
        $("#a8inpt").hide();
    }
});

    $("#a8Op1, #a8Op2, #a8Op3, #a8Op4, #a8Op5, #a8Op6, #a8Op7").on('change', function() {
        if ($(this).attr('id') !== "a8Op6" && $("#a8Op6").prop('checked')) {
            $("#a8Op6").prop('checked', false).checkboxradio("refresh");
        }
        else if ($(this).attr('id') === "a8Op6") {
            $("#a8Op2, #a8Op3, #a8Op4, #a8Op5, #a8Op1, #a8Op7, #a8Op8").prop('checked', false).checkboxradio("refresh");
            $("#a8txt").val("");
            $("#a8inpt").hide();
        }
    });

$("#a9Op2, #a9Op3, #a9Op4, #a9Op5").on('change', function() {
    surArry.a9 = $(this).val();
    surArry.a9_flag = 1;
    $("#a9inpt").hide();
});

$("#a9Op1, #a9Op6, #a9Op7").on('change', function() {  
    surArry.a9 = $(this).val();
    surArry.a9_flag = 0;
    $("#a9inpt").hide();
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
    a9a();
});

$("#a10Op1, #a10Op2, #a10Op3, #a10Op4, #a10Op5, #a10Op6").on('change', function() {
    surArry.a10 = $(this).val();
    a10();
});

    $("#a11Op1, #a11Op2, #a11Op3, #a11Op4, #a11Op5, #a11Op6").on('change', function() {
        surArry.a11 = $(this).val();
        a11();
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
    $("#b1Op45, #b1Op46, #b1Op47, #b1Op48").on('change', function() {
        surArry.b1v = $(this).val();
    });

// Handle radio button grids
$('td').on(TOUCH_START, function() {
    if ($(this).find("input").attr('id') !== undefined) {
        var idNum = "#" + $(this).find("input").attr('id');
        $(idNum).prop("checked", true).trigger("change");
    }
});

$("#c1Op1, #c1Op2").on('change', function() {
    surArry.c1 = $(this).val();
    c1();
});

$("#c1cOp1, #c1cOp2, #c1cOp3, #c1cOp4, #c1cOp5").on('change', function() {
    surArry.c1c = $(this).val();
    c1c();
});

$("#c2Op1, #c2Op2").on('change', function() {
    surArry.c3 = $(this).val();
    c2();
});

$("#c2cOp1, #c2cOp2, #c2cOp3, #c2cOp4, #c2cOp5").on('change', function() {
    surArry.c3c = $(this).val();
    c2c();
});

$("#c5Op1, #c5Op2").on('change', function() {
    surArry.c2 = $(this).val();
    c5();
});

$("#c5cOp1, #c5cOp2, #c5cOp3, #c5cOp4, #c5cOp5").on('change', function() {
    surArry.c2c = $(this).val();
    c5c();
});

$("#c3Op1, #c3Op2").on('change', function() {
    surArry.c4 = $(this).val();
    c3();
});

$("#c3cOp1, #c3cOp2, #c3cOp3, #c3cOp4, #c3cOp5, #c3cOp6").on('change', function() {
    surArry.c4c = $(this).val();
    c3c();
});

$("#c4Op1, #c4Op2").on('change', function() {
    surArry.c5 = $(this).val();
    c4();
});

$("#c4bOp1, #c4bOp2, #c4bOp3, #c4bOp4, #c4bOp5, #c4bOp6, #c4bOp7, #c4bOp8").on('change', function() {
    surArry.c5b = $(this).val();
    c4b();
});

$("#c4cOp1, #c4cOp2, #c4cOp3, #c4cOp4, #c4cOp5, #c4cOp6").on('change', function() {
    surArry.c5c = $(this).val();
    c4c();
});
    $("#c3d0iOp1, #c3d0iOp2, #c3d0iOp3, #c3d0iOp4, #c3d0iOp5, #c3d0iOp6, #c3d0iOp7, #c3d0iOp8, #c3d0iOp9, #c3d0iOp10, #c3d0iOp11").on('change', function() {
        surArry.c4d0i = $(this).val();
        c3d0i();
    });
    $("#c3d1Op1, #c3d1Op2, #c3d1Op3, #c3d1Op4, #c3d1Op5, #c3d1Op6").on('change', function() {
        surArry.c4d1 = $(this).val();
        c3d1();
    });
    $("#c3d2Op1, #c3d2Op2, #c3d2Op3, #c3d2Op4, #c3d2Op5, #c3d2Op6").on('change', function() {
        surArry.c4d2 = $(this).val();
        c3d2();
    });
    $("#c3d3Op1, #c3d3Op2, #c3d3Op3, #c3d3Op4, #c3d3Op5, #c3d3Op6").on('change', function() {
        surArry.c4d3 = $(this).val();
        c3d3();
    });
    $("#c3d4Op1, #c3d4Op2, #c3d4Op3, #c3d4Op4, #c3d4Op5, #c3d4Op6").on('change', function() {
        surArry.c4d4 = $(this).val();
        c3d4();
    });
    $("#c3d5Op1, #c3d5Op2, #c3d5Op3, #c3d5Op4, #c3d5Op5, #c3d5Op6").on('change', function() {
        surArry.c4d5 = $(this).val();
        c3d5();
    });
    $("#c3d6Op1, #c3d6Op2, #c3d6Op3, #c3d6Op4, #c3d6Op5, #c3d6Op6").on('change', function() {
        surArry.c4d6 = $(this).val();
        c3d6();
    });
    $("#c6Op1, #c6Op2").on('change', function() {
        surArry.c6v = $(this).val();
        c6();
    });
    $("#c6cvOp1, #c6cvOp2, #c6cvOp3, #c6cvOp4, #c6cvOp5, #c6cvOp6").on('change', function() {
        surArry.c6cv = $(this).val();
        c6cv();
    });
    $("#c6bOp1, #c6bOp2, #c6bOp3, #c6bOp4, #c6bOp5, #c6bOp6").on('change', function() {
        surArry.c6 = $(this).val();
        c6v();
    });
}

function aDis() {
    $("#aBlk").show();
}

function aSt() {
    $("#aBlk").hide();
    $("#err1").hide();
    $("#a1Blk").show();
    $("#keypad").show();
    $("#numPad").show();
    $("#atxt").focus();
    setID("#atxt", 2);
    addArry(aDis);
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
    else {
        surArry.a3_1 = "";
    }
    if ($("#a3Op2").prop('checked')) {
        surArry.a3_2 = $("#a3Op2").val();
    }
    else {
        surArry.a3_2 = "";
    }
    if ($("#a3Op3").prop('checked')) {
        surArry.a3_3 = $("#a3Op3").val();
    }
    else {
        surArry.a3_3 = "";
    }
    if ($("#a3Op4").prop('checked')) {
        surArry.a3_4 = $("#a3Op4").val();
    }
    else {
        surArry.a3_4 = "";
    }
    if ($("#a3Op5").prop('checked')) {
        surArry.a3_5 = $("#a3Op5").val();
    }
    else {
        surArry.a3_5 = "";
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
    }
    else {
        surArry.a4_1 = "";
    }
    if ($("#a4Op2").prop('checked')) {
        surArry.a4_2 = $("#a4Op2").val();
    }
    else {
        surArry.a4_2 = "";
    }
    if ($("#a4Op3").prop('checked')) {
        surArry.a4_3 = $("#a4Op3").val();
    }
    else {
        surArry.a4_3 = "";
    }
    if ($("#a4Op4").prop('checked')) {
        surArry.a4_4 = $("#a4Op4").val();
    }
    else {
        surArry.a4_4 = "";
    }
    if ($("#a4Op5").prop('checked')) {
        surArry.a4_5 = $("#a4Op5").val();
    }
    else {
        surArry.a4_5 = "";
    }
    if ($("#a4Op6").prop('checked')) {
        if ($("#a4txt").val().length < 2000) {
            surArry.a4_6 = "1";
            surArry.a4_6_other = $("#a4txt").val();
        }
        else if ($("#a4txt").val() !== "") {
            $("#err4").show();
        }
    }
    else {
        surArry.a4_6 = "";
        surArry.a4_6_other = "";
        $("#a4txt").val("");
    }
    if (surArry.a4_1 !== "" || surArry.a4_2 !== "" || surArry.a4_3 !== "" || surArry.a4_4 !== "" || surArry.a4_5 !== "" || 
            surArry.a4_6 !== "") {
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
        if (surArry.a6 === "1") {
            $("#a10q").text("What is your best estimate of your and your spouse's total income from all sources, before taxes, in 2014?");
        }
        else {
            $("#a10q").text("What is your best estimate of your total income from all sources, before taxes, in 2014?");
        }
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
    else {
        surArry.a8_1 = "";
    }
    if ($("#a8Op2").prop('checked')) {
        surArry.a8_2 = $("#a8Op2").val();
    }
    else {
        surArry.a8_2 = "";
    }
    if ($("#a8Op3").prop('checked')) {
        surArry.a8_3 = $("#a8Op3").val();
    }
    else {
        surArry.a8_3 = "";
    }
    if ($("#a8Op4").prop('checked')) {
        surArry.a8_4 = $("#a8Op4").val();
    }
    else {
        surArry.a8_4 = "";
    }
    if ($("#a8Op5").prop('checked')) {
        surArry.a8_5 = $("#a8Op5").val();
    }
    else {
        surArry.a8_5 = "";
    }
    if ($("#a8Op6").prop('checked')) {
        surArry.a8_6 = $("#a8Op6").val();
    }
    else {
        surArry.a8_6 = "";
    }
    if ($("#a8Op7").prop('checked')) {
        surArry.a8_7 = $("#a8Op7").val();
    }
    else {
        surArry.a8_7 = "";
    }
    if ($("#a8Op8").prop('checked')) {
        if ($("#a8txt").val().length < 2000) {
            surArry.a8_8 = "1";
            surArry.a8_8_other = $("#a8txt").val();
        }
        else if ($("#a8txt").val() !== "") {
            $("#err8").show();
        }
    }
    else {
        surArry.a8_8 = "";
        surArry.a8_8_other = "";
        $("#a8txt").val("");
    }
    if (surArry.a8_1 !== "" || surArry.a8_2 !== "" || surArry.a8_3 !== "" || surArry.a8_4 !== "" || surArry.a8_5 !== "" || 
             surArry.a8_6 !== "" || surArry.a8_7 !== "" || surArry.a8_8 !== "") {
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
            surArry.a9 = "8";
            surArry.a9_other = $("#a9txt").val();
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
            $("#a9aBlk").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
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
        $("#err11").hide();
        $("#a11Blk").show();
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

function a11() {
    if (surArry.a11 !== "") {
        $("#a11Blk").hide();
        $("#err11").hide();
        $("#bBlk").show();
        addArry(a10);
    }
    else {
        $("#err11").show();
    }
}

function bSt() {
    $("#bBlk").hide();
    $("#erb1").hide();
    $("#b1Blk").show();
    addArry(a11);
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
    if (surArry.b1e !== "" && surArry.b1f !== "" && surArry.b1g !== "" && surArry.b1v !== "") {
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
    if (surArry.b1k !== "") {
        if (b1Checks()) {
            $("#b1Blkc2").hide();
            $("#erb4").hide();
            $("#erb5").hide();
            $("#erb5_1").hide();
            addArry(b1c2);
            if (b1Ever > 0) {
                $("#b2Blk").show();
                $("#keypad").show();
                $("#numPad").show();
                setID("#b2txt", 2);
            }
            else {
                surArry.b2 = "";
                surArry.b3 = "";
                $("#b2txt").val("");
                $("#b3txt").val("");
                b1Exists = true;
                b3Exists = false;
                removeArry(b2);
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
    
    if (surArry.b1a !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.a);
        if (surArry.b1a !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1b !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.b);
        if (surArry.b1b !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1c !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.c);
        if (surArry.b1c !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1d !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.d);
        if (surArry.b1d !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1e !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.e);
        if (surArry.b1e !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1f !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.f);
        if (surArry.b1f !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1g !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.g);
        if (surArry.b1g !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1h !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.h);
        if (surArry.b1h !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1i !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.i);
        if (surArry.b1i !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1j !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.j);
        if (surArry.b1j !== "3") {
            b1Year++;
        }
    }
    if (surArry.b1k !== "4") {
        b1Ever++;
        b1Fill.push(b1Fillers.k);
        if (surArry.b1k !== "3") {
            b1Year++;
        }
    }
    
    if (b1Ever > 0) {
        switch(b1Ever) {
            case 1:
                $("#b2q").text("You reported " + b1Fill[0] + ".  About how old were you when this problem first started?");
                break;
            case 2:
                $("#b2q").text("You reported " + b1Fill[0] + " and " + b1Fill[1] + ".  About how old were you when any of these problems first started?");
                break;
            case 3:
                $("#b2q").text("You reported " + b1Fill[0] + " and " + b1Fill[1] + " and " + b1Fill[2] + ".  About how old were you when any of these problems first started?");
                break;
            default:
                $("#b2q").text("You reported some of the above problems, like " + b1Fill[0] + ", " + b1Fill[1] + " and " + b1Fill[2] + ".  About how old were you when any of these problems first started?");
                break;
        }
    }
    
    if (b1Ever > 0) {
        switch(b1Ever) {
            case 1:
                $("#b3q").html("<b>About how many months out of 12 in the past year did you have this problem?</b><br><span class='smallTitle'><i>(Your best estimate is fine.)</i></span>");
                break;
            case 2:
                $("#b3q").html("<b>About how many months out of 12 in the past year did you have any of these problems?</b><br><span class='smallTitle'><i>(Your best estimate is fine.)</i></span>");
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
        $("#erb5_1").hide();
        $("#erb6").hide();
        $("#erb6_1").hide();
        addArry(b1);
        if (b1Year > 0) {
            $("#b3Blk").show();
            b3Exists = true;
            $("#keypad").show();
            $("#numPad").show();
            setID("#b3txt", 2);
        }
        else {
            surArry.b3 = "";
            $("#b3txt").val("");
            removeArry(b3);
            b3Exists = false;
            $("#cBlk").show();
            $("#keypad").hide();
            $("#numPad").hide();
        }
    }
    else if (surArry.b2 === "") {
        $("#erb5").hide();
        $("#erb5_1").show();
    }
    else {
        $("#erb5_1").hide();
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
        $("#erb6_1").hide();
        $("#cBlk").show();
        addArry(b2);
    }
    else if (surArry.b3 === "") {
        $("#erb6").hide();
        $("#erb6_1").show();
    }
    else {
        $("#erb6_1").hide();
        $("#erb6").show();
    }
}

function cSt() {
    $("#cBlk").hide();
    $("#erc1").hide();
    $("#c1Blk").show();
    if (b3Exists) {
        addArry(b3);
    }
    else if (b1Exists) {
        addArry(b1);
    }
    else {
        addArry(b2);
    }
}

function c1() {
    if (surArry.c1 !== "") {
        $("#c1Blk").hide();
        $("#erc1").hide();
        $("#erc2").hide();
        $("#erc2_1").hide();
        $("#erc18").hide();
        addArry(cSt);
        if (surArry.c1 === "1") {
            c1Exists = true;
            $("#c1Blka").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#c1atxt", 2);
            surArry.c2 = "";
            surArry.c2a = "";
            surArry.c2b = "";
            surArry.c2c = "";
            $("#c5atxt, #c5btxt").val("");
            $("#c5Blk, #c5Blkc").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        else {
            c1Exists = false;
            surArry.c1a = "";
            surArry.c1b = "";
            surArry.c1c = "";
            $("#c1atxt, #c1btxt").val("");
            $("#c1cOp1, #c1cOp2, #c1cOp3, #c1cOp4, #c1cOp5").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            removeArry(c1a);
            $("#c5Blk").show();
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
        setID("#c1btxt", 2);
        $("#erc2").hide();
        $("#erc2_1").hide();
        $("#erc3").hide();
        $("#erc3_1").hide();
        $("#c1Blkb").show();
        addArry(c1);
    }
    else if (surArry.c1a === "") {
        $("#erc2").hide();
        $("#erc2_1").show();
    }
    else {
        $("#erc2_1").hide();
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
        $("#erc3_1").hide();
        $("#erc4").hide();
        addArry(c1a);
        if (num > 0) {
            c1cExists = true;
            $("#c1Blkc").show();
        }
        else {
            c1cExists = false;
            c3ser = "c1b";
            surArry.c1c = "";
            surArry.c2 = "";
            surArry.c2a = "";
            surArry.c2b = "";
            surArry.c2c = "";
            $("#c5atxt, #c5btxt").val("");
            $("#c1Blkc, #c5Blk, #c5Blkc").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
            removeArry(c2);
            $("#erc5").hide();
            $("#c2Blk").show();
        }
    }
    else if (surArry.c1b === "") {
        $("#erc3").hide();
        $("#erc3_1").show();
    }
    else {
        $("#erc3_1").hide();
        $("#erc3").show();
    }
}

function c1c() {
    if (surArry.c1c !== "") {
        c1cExists = true;
        c2Exists = false;
        c2bExists = false;
        c3ser = "c1c";
        $("#c1Blkc").hide();
        $("#erc4").hide();
        $("#erc5").hide();
        $("#c2Blk").show();
        surArry.c2 = "";
        surArry.c2a = "";
        surArry.c2b = "";
        surArry.c2c = "";
        $("#c5atxt, #c5btxt").val("");
        $("#c5Blk, #c5Blkc").find("input").each(function() {
            if ($(this).is(":checked")) {
                $(this).prop("checked", false).checkboxradio("refresh");
            }
        });
        addArry(c1b);
    }
    else {
        $("#erc4").show();
    }
}

function c5() {
    if (surArry.c2 !== "") {
        $("#c5Blk").hide();
        $("#erc18").hide();
        $("#erc19").hide();
        $("#erc19_1").hide();
        $("#erc14").hide();
        addArry(c1);
        if (surArry.c2 === "1") {
            c2Exists = true;
            c25Exists = false;
            $("#c5Blka").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#c5atxt", 2);
        }
        else {
            c2Exists = false;
            c25Exists = true;
            c4Exists = true;;
            c4bExists = false;
            surArry.c2a = "";
            surArry.c2b = "";
            surArry.c2c = "";
            surArry.c4d0_1 = "";
            surArry.c4d0_2 = "";
            surArry.c4d0_3 = "";
            surArry.c4d0_4 = "";
            surArry.c4d0_5 = "";
            surArry.c4d0_6 = "";
            surArry.c4d0_7 = "";
            surArry.c4d0_8 = "";
            surArry.c4d0_9 = "";
            surArry.c4d0_10 = "";
            surArry.c4d0_11 = "";
            surArry.c4d0i = "";
            surArry.c4d7 = "";
            surArry.c4d6 = "";
            surArry.c4d5 = "";
            surArry.c4d4 = "";
            surArry.c4d3 = "";
            surArry.c4d2 = "";
            surArry.c4d1 = "";
            surArry.c3 = "";
            surArry.c3a = "";
            surArry.c3b = "";
            surArry.c3c = "";
            surArry.c4 = "";
            surArry.c4a = "";
            surArry.c4b = "";
            surArry.c4c = "";
            surArry.c4d_1 = "";
            surArry.c4d_2 = "";
            surArry.c4d_3 = "";
            surArry.c4d_4 = "";
            surArry.c4d_5 = "";
            surArry.c4d_6 = "";
            surArry.c4d_7 = "";
            surArry.c4d_8 = "";
            surArry.c4d_9 = "";
            surArry.c4d_10 = "";
            surArry.c4d_11 = "";
            $("#c5atxt, #c5btxt, #c2atxt, #c2btxt, #c3atxt, #c3btxt, #c3d7txt").val("");
            $("#c2Blk, #c2Blkc, #c3Blk, #c3Blkc, #c3Blkd, #c5Blkc, #c3d1Blk, #c3d2Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
            });
            $("#c4Blk").show();
        }
    }
    else {
        $("#erc18").show();
    }
}

function c5a() {
    surArry.c2a = $("#c5atxt").val();
    num = parseInt($("#c5atxt").val());
    
    if (parseInt(surArry.a1) >= num) {
        $("#c5Blka").hide();
        $("#keypad").show();
        $("#numPad").show();
        setID("#c5btxt", 2);
        $("#erc19").hide();
        $("#erc19_1").hide();
        $("#erc20").hide();
        $("#erc20_1").hide();
        $("#c5Blkb").show();
        addArry(c5);
    }
    else if (surArry.c2a === "") {
        $("#erc19").hide();
        $("#erc19_1").show();
    }
    else {
        $("#erc19_1").hide();
        $("#erc19").show();
    }
}

function c5b() {
    surArry.c2b = $("#c5btxt").val();
    num = parseInt($("#c5btxt").val());

    if (num <= 52) {
        $("#c5Blkb").hide();
        $("#keypad").hide();
        $("#numPad").hide();
        $("#erc20").hide();
        $("#erc20_1").hide();
        $("#erc21").hide();
        addArry(c5a);
        if (num === 0) {
            $("#erc5").hide();
            surArry.c2c = "";
            c2Exists = false;
            c2bExists = true;
            c1cExists = false;
            c3ser = "c5b";
            $("#c5Blkc").find("input").each(function() {
                if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
            });
            $("#c2Blk").show();
            removeArry(c5c);
        }
        else {
            c2bExists = false;
            c2Exists = false;
            $("#c5Blkc").show();
        }
    }
    else if (surArry.c2b === "") {
        $("#erc20").hide();
        $("#erc20_1").show();
    }
    else {
        $("#erc20_1").hide();
        $("#erc20").show();
    }
}

function c5c() {
    if (surArry.c2c !== "") {
        $("#c5Blkc").hide();
        $("#erc21").hide();
        $("#erc5").hide();
        $("#c2Blk").show();
        c3ser = "c5c";
        c2Exists = true;
        c2bExists = false;
        c1cExists = false;
        addArry(c5b);
    }
    else {
        $("#erc21").show();
    }
}

function c2() {
    if (surArry.c3 !== "") {
        $("#c2Blk").hide();
        $("#erc5").hide();
        $("#erc6").hide();
        $("#erc6_1").hide();
        $("#erc9").hide();
        if (c3ser === "c5c") {
            addArry(c5c);
        }
        else if (c3ser === "c5b") {
            addArry(c5b);
        }
        else if (c3ser === "c1c") {
            addArry(c1c);
        }
        else {
            addArry(c1b);
        }
        if (surArry.c3 === "1") {
            cExists = false;
            $("#c2Blka").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#c2atxt", 2);
        }
        else {
            cExists = true;
            c3Exists = false;
            surArry.c3a = "";
            surArry.c3b = "";
            surArry.c3c = "";
            $("#c2atxt, #c2btxt").val("");
            $("#c2Blkc").find("input").each(function() {
            if ($(this).is(":checked")) {
                $(this).prop("checked", false).checkboxradio("refresh");
            }
        });
            $("#c3Blk").show();
        }
    }
    else {
        $("#erc5").show();
    }
}

function c2a() {
    surArry.c3a = $("#c2atxt").val();
    num = parseInt($("#c2atxt").val());
    
    if (parseInt(surArry.a1) >= num) {
        $("#c2Blka").hide();
        $("#keypad").show();
        $("#numPad").show();
        setID("#c2btxt", 2);
        $("#erc6").hide();
        $("#erc6_1").hide();
        $("#erc7").hide();
        $("#erc7_1").hide();
        $("#c2Blkb").show();
        addArry(c2);
    }
    else if (surArry.c3a === "") {
        $("#erc6").hide();
        $("#erc6_1").show();
    }
    else {
        $("#erc6_1").hide();
        $("#erc6").show();
    }
}

function c2b() {
    surArry.c3b = $("#c2btxt").val();
    num = parseInt($("#c2btxt").val());

    if (num <= 52) {
        $("#c2Blkb").hide();
        $("#keypad").hide();
        $("#numPad").hide();
        $("#erc7").hide();
        $("#erc7_1").hide();
        $("#erc8").hide();
        addArry(c2a);
        if (num > 0) {
            $("#erc9").hide();
            c3Exists = true;
            $("#c2Blkc").show();
        }
        else {
            c3Exists = false;
            cExists = false;
            removeArry(c2c);
            $("#c3Blk").show();
            surArry.c3c = "";
            $("#c2Blkc").find("input").each(function() {
                if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
            });
        }
    }
    else if (surArry.c3b === "") {
        $("#erc7").hide();
        $("#erc7_1").show();
    }
    else {
        $("#erc7_1").hide();
        $("#erc7").show();
    }
}

function c2c() {
    if (surArry.c3c !== "") {
        $("#c2Blkc").hide();
        $("#erc8").hide();
        $("#erc9").hide();
        $("#c3Blk").show();
        c3Exists = true;
        cExists = false;
        addArry(c2b);
    }
    else {
        $("#erc8").show();
    }
}

function c3() {
    if (surArry.c4 !== "") {
        $("#c3Blk").hide();
        $("#erc9").hide();
        $("#erc10").hide();
        $("#erc10_1").hide();
        $("#erc14").hide();
        if (cExists) {
            addArry(c2);
        }
        else if (c3Exists) {
            addArry(c2c);
        }
        else {
            addArry(c2b);
        }
        if (surArry.c4 === "1") {
            c4Exists = true;
            $("#c3Blka").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#c3atxt", 2);
        }
        else {
            c4Exists = false;
            c25Exists = false;
            c4bExists = false;
            c4d1Exists = false;
            c4d2Exists = false;
            c4d3Exists = false;
            c4d4Exists = false;
            c4d5Exists = false;
            c4d6Exists = false;
            c4d7Exists = false;
            c4d0Exists = false;
            c4d0iExists = false;
            c4dExists = false;
            surArry.c4a = "";
            surArry.c4b = "";
            surArry.c4c = "";
            surArry.c4d_1 = "";
            surArry.c4d_2 = "";
            surArry.c4d_3 = "";
            surArry.c4d_4 = "";
            surArry.c4d_5 = "";
            surArry.c4d_6 = "";
            surArry.c4d_7 = "";
            surArry.c4d_8 = "";
            surArry.c4d_9 = "";
            surArry.c4d_10 = "";
            surArry.c4d_11 = "";
            surArry.c4d0_1 = "";
            surArry.c4d0_2 = "";
            surArry.c4d0_3 = "";
            surArry.c4d0_4 = "";
            surArry.c4d0_5 = "";
            surArry.c4d0_6 = "";
            surArry.c4d0_7 = "";
            surArry.c4d0_8 = "";
            surArry.c4d0_9 = "";
            surArry.c4d0_10 = "";
            surArry.c4d0_11 = "";
            surArry.c4d0i = "";
            surArry.c4d7 = "";
            surArry.c4d6 = "";
            surArry.c4d5 = "";
            surArry.c4d4 = "";
            surArry.c4d3 = "";
            surArry.c4d2 = "";
            surArry.c4d1 = "";
            $("#c3atxt, #c3btxt, #c3d7txt").val("");
            $("#c3Blkc, #c3Blkd, #c3d1Blk, #c3d2Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
            });
            removeArry(c3a);
            $("#c4Blk").show();
        }
    }
    else {
        $("#erc9").show();
    }
}

function c3a() {
    surArry.c4a = $("#c3atxt").val();
    num = parseInt($("#c3atxt").val());
    
    if (parseInt(surArry.a1) >= num) {
        $("#c3Blka").hide();
        $("#keypad").show();
        $("#numPad").show();
        setID("#c3btxt", 4);
        $("#erc10").hide();
        $("#erc10_1").hide();
        $("#erc11_1").hide();
        $("#erc11").hide();
        $("#c3Blkb").show();
        addArry(c3);
    }
    else if (surArry.c4a === "") {
        $("#erc10").hide();
        $("#erc10_1").show();
    }
    else {
        $("#erc10_1").hide();
        $("#erc10").show();
    }
}

function c3b() {
    surArry.c4b = $("#c3btxt").val();
    num = parseInt($("#c3btxt").val());
    numC3a = parseInt(surArry.c4a);
    numA1 = parseInt(surArry.a1);
    
    if (surArry.c4b !== "") {
        if (num >= 1) {
            $("#c3Blkb").hide();
            $("#keypad").hide();
            $("#numPad").hide();
            $("#erc11").hide();
            $("#erc11_1").hide();
            $("#erc12").hide();
            $("#erc13").hide();
            $("#erc14").hide();
            $("#erc15").hide();
            addArry(c3a);
            c4bExists = false;
            c4bLocal = false;
            if (num === 1) {
                $("#c3dq").html("<b>Which method did you use for your suicide attempt?</b><br><span class='smallTitle'><i>(Check all that apply.)</i></span>");
            }
            else if (num > 1) {
                $("#c3dq").html("<b>Which methods did you use for your suicide attempts?</b><br><span class='smallTitle'><i>(Check all that apply.)</i></span>");
            }
        
            if (numC3a === numA1 || numC3a === (numA1 - 1)) {
                $("#c3Blkc").show();
            }
            else if ((numC3a < (numA1 - 1)) && (num > 1)) {
                $("#c3Blkc").show();
            }
            else if ((numC3a < (numA1 - 1)) && (num === 1)) {
                surArry.c3c = "";
                c4bLocal = true;
                $("#c3Blkc").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
                removeArry(c3c);
                $("#c3Blkd").show();
            }
            else {
                c4bExists = true;
                c25Exists = false;
                c4Exists = true;;
                surArry.c4c = "";
                surArry.c4d_1 = "";
                surArry.c4d_2 = "";
                surArry.c4d_3 = "";
                surArry.c4d_4 = "";
                surArry.c4d_5 = "";
                surArry.c4d_6 = "";
                surArry.c4d_7 = "";
                surArry.c4d_8 = "";
                surArry.c4d_9 = "";
                surArry.c4d_10 = "";
                surArry.c4d_11 = "";
                surArry.c4d0_1 = "";
                surArry.c4d0_2 = "";
                surArry.c4d0_3 = "";
                surArry.c4d0_4 = "";
                surArry.c4d0_5 = "";
                surArry.c4d0_6 = "";
                surArry.c4d0_7 = "";
                surArry.c4d0_8 = "";
                surArry.c4d0_9 = "";
                surArry.c4d0_10 = "";
                surArry.c4d0_11 = "";
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                $("#c3d7txt").val("");
                $("#c3Blkc, #c3Blkd, #c3d1Blk, #c3d2Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
                removeArry(c3d);
                $("#c4Blk").show();
            }
        }
        else {
            $("#erc11_1").hide();
            $("#erc11").show();
        }
    }
    else {
        $("#erc11").hide();
        $("#erc11_1").show();
    }
}

function c3c() {
    if (surArry.c4c !== "") {
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
    num = parseInt(surArry.c4b);
    num2 = parseInt(surArry.c4c);
    r1 = false;
    r2 = false;
    r3 = false;
    r4 = false;
    r5 = false;
    r6 = false;
    r7 = false;
    r8 = false;
    r9 = false;
    r10 = false;
    r11 = false;
    rsp = 0;
    
    if ($("#c3dOp1").prop('checked')) {
        ans = true;
        r1 = true;
        rsp++;
        surArry.c4d_1 = $("#c3dOp1").val();
    }
    else {
        surArry.c4d_1 = "";
    }
    if ($("#c3dOp2").prop('checked')) {
        ans = true;
        r2 = true;
        rsp++;
        surArry.c4d_2 = $("#c3dOp2").val();
    }
    else {
        surArry.c4d_2 = "";
    }
    if ($("#c3dOp3").prop('checked')) {
        ans = true;
        r3 = true;
        rsp++;
        surArry.c4d_3 = $("#c3dOp3").val();
    }
    else {
        surArry.c4d_3 = "";
    }
    if ($("#c3dOp4").prop('checked')) {
        ans = true;
        r4 = true;
        rsp++;
        surArry.c4d_4 = $("#c3dOp4").val();
    }
    else {
        surArry.c4d_4 = "";
    }
    if ($("#c3dOp5").prop('checked')) {
        ans = true;
        r5 = true;
        rsp++;
        surArry.c4d_5 = $("#c3dOp5").val();
    }
    else {
        surArry.c4d_5 = "";
    }
    if ($("#c3dOp6").prop('checked')) {
        ans = true;
        r6 = true;
        rsp++;
        surArry.c4d_6 = $("#c3dOp6").val();
    }
    else {
        surArry.c4d_6 = "";
    }
    if ($("#c3dOp7").prop('checked')) {
        ans = true;
        r7 = true;
        rsp++;
        surArry.c4d_7 = $("#c3dOp7").val();
    }
    else {
        surArry.c4d_7 = "";
    }
    if ($("#c3dOp8").prop('checked')) {
        ans = true;
        r8 = true;
        rsp++;
        surArry.c4d_8 = $("#c3dOp8").val();
    }
    else {
        surArry.c4d_8 = "";
    }
    if ($("#c3dOp9").prop('checked')) {
        ans = true;
        r9 = true;
        rsp++;
        surArry.c4d_9 = $("#c3dOp9").val();
    }
    else {
        surArry.c4d_9 = "";
    }
    if ($("#c3dOp10").prop('checked')) {
        ans = true;
        r10 = true;
        rsp++;
        surArry.c4d_10 = $("#c3dOp10").val();
    }
    else {
        surArry.c4d_10 = "";
    }
    if ($("#c3dOp11").prop('checked')) {
        ans = true;
        r11 = true;
        rsp++;
        surArry.c4d_11 = $("#c3dOp11").val();
    }
    else {
        surArry.c4d_11 = "";
    }
    if (ans) {
        $("#c3Blkd").hide();
        $("#erc13").hide();
        $("#erc14").hide();
        //$("#c4Blk").show();
        //c25Exists = false;
        //c4Exists = true;
        //c4bExists = false;
        if ((num == 1 && num2 <= 2 && rsp == 1) || (num > 1 && num2 <= 2 && rsp == 1)) {
            c4dExists = true;
            c4dExists2 = false;
            c25Exists = false;
            c4Exists = false;
            c4bExists = false;
            c4d0Exists = false;
            c4d0iExists = false;
            removeArry(c3d0);
            removeArry(c3d0i);
            if (surArry.c4d_1 !== "" || surArry.c4d_2 !== "" || surArry.c4d_3 !== "") {
                $("#erc24").hide();
                $("#c3d1Blk").show();
                surArry.c4d0_1 = "";
                surArry.c4d0_2 = "";
                surArry.c4d0_3 = "";
                surArry.c4d0_4 = "";
                surArry.c4d0_5 = "";
                surArry.c4d0_6 = "";
                surArry.c4d0_7 = "";
                surArry.c4d0_8 = "";
                surArry.c4d0_9 = "";
                surArry.c4d0_10 = "";
                surArry.c4d0_11 = "";
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                $("#c3d7txt").val("");
                $("#c3d2Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d_4 !== "") {
                $("#erc25").hide();
                $("#c3d2Blk").show();
                surArry.c4d0_1 = "";
                surArry.c4d0_2 = "";
                surArry.c4d0_3 = "";
                surArry.c4d0_4 = "";
                surArry.c4d0_5 = "";
                surArry.c4d0_6 = "";
                surArry.c4d0_7 = "";
                surArry.c4d0_8 = "";
                surArry.c4d0_9 = "";
                surArry.c4d0_10 = "";
                surArry.c4d0_11 = "";
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d1 = "";
                $("#c3d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d_5 !== "" || surArry.c4d_6 !== "") {
                $("#erc26").hide();
                $("#c3d3Blk").show();
                surArry.c4d0_1 = "";
                surArry.c4d0_2 = "";
                surArry.c4d0_3 = "";
                surArry.c4d0_4 = "";
                surArry.c4d0_5 = "";
                surArry.c4d0_6 = "";
                surArry.c4d0_7 = "";
                surArry.c4d0_8 = "";
                surArry.c4d0_9 = "";
                surArry.c4d0_10 = "";
                surArry.c4d0_11 = "";
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                $("#c4d7txt").val("");
                $("#c3d1Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d_7 !== "") {
                $("#erc27").hide();
                $("#c3d4Blk").show();
                surArry.c4d0_1 = "";
                surArry.c4d0_2 = "";
                surArry.c4d0_3 = "";
                surArry.c4d0_4 = "";
                surArry.c4d0_5 = "";
                surArry.c4d0_6 = "";
                surArry.c4d0_7 = "";
                surArry.c4d0_8 = "";
                surArry.c4d0_9 = "";
                surArry.c4d0_10 = "";
                surArry.c4d0_11 = "";
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                $("#c4d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d_8 !== "") {
                $("#erc28").hide();
                $("#c3d5Blk").show();
                surArry.c4d0_1 = "";
                surArry.c4d0_2 = "";
                surArry.c4d0_3 = "";
                surArry.c4d0_4 = "";
                surArry.c4d0_5 = "";
                surArry.c4d0_6 = "";
                surArry.c4d0_7 = "";
                surArry.c4d0_8 = "";
                surArry.c4d0_9 = "";
                surArry.c4d0_10 = "";
                surArry.c4d0_11 = "";
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                $("#c4d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d_9 !== "" || surArry.c4d_10 != "") {
                $("#erc29").hide();
                $("#c3d6Blk").show();
                surArry.c4d0_1 = "";
                surArry.c4d0_2 = "";
                surArry.c4d0_3 = "";
                surArry.c4d0_4 = "";
                surArry.c4d0_5 = "";
                surArry.c4d0_6 = "";
                surArry.c4d0_7 = "";
                surArry.c4d0_8 = "";
                surArry.c4d0_9 = "";
                surArry.c4d0_10 = "";
                surArry.c4d0_11 = "";
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                $("#c4d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d_11 !== "") {
                $("#erc30").hide();
                $("#c3d7Blk").show();
                $("#c3d7txt").focus();
                surArry.c4d0_1 = "";
                surArry.c4d0_2 = "";
                surArry.c4d0_3 = "";
                surArry.c4d0_4 = "";
                surArry.c4d0_5 = "";
                surArry.c4d0_6 = "";
                surArry.c4d0_7 = "";
                surArry.c4d0_8 = "";
                surArry.c4d0_9 = "";
                surArry.c4d0_10 = "";
                surArry.c4d0_11 = "";
                surArry.c4d0i = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                //$("#c4d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
        }
        else if (num == 1 && num2 <= 2 && rsp > 1) {
            c4Exists = false;
            c4dExists = false;
            c4dExists2 = true;
            $("#erc23").hide();
            $("#c3Blkd0i").show();
            if (!r1) {
                $("#c3d0iOp1, #c3d0iOp1_1").hide();
                if (surArry.c4d0i == "1") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp1, #c3d0iOp1_1").show();
            }
            if (!r2) {
                $("#c3d0iOp2, #c3d0iOp2_2").hide();
                if (surArry.c4d0i == "2") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp2, #c3d0iOp2_2").show();
            }
            if (!r3) {
                $("#c3d0iOp3, #c3d0iOp3_3").hide();
                if (surArry.c4d0i == "3") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp3, #c3d0iOp3_3").show();
            }
            if (!r4) {
                $("#c3d0iOp4, #c3d0iOp4_4").hide();
                if (surArry.c4d0i == "4") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp4, #c3d0iOp4_4").show();
            }
            if (!r5) {
                $("#c3d0iOp5, #c3d0iOp5_5").hide();
                if (surArry.c4d0i == "4") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp5, #c3d0iOp5_5").show();
            }
            if (!r6) {
                $("#c3d0iOp6, #c3d0iOp6_6").hide();
                if (surArry.c4d0i == "6") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp6, #c3d0iOp6_6").show();
            }
            if (!r7) {
                $("#c3d0iOp7, #c3d0iOp7_7").hide();
                if (surArry.c4d0i == "7") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp7, #c3d0iOp7_7").show();
            }
            if (!r8) {
                $("#c3d0iOp8, #c3d0iOp8_8").hide();
                if (surArry.c4d0i == "8") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp8, #c3d0iOp8_8").show();
            }
            if (!r9) {
                $("#c3d0iOp9, #c3d0iOp9_9").hide();
                if (surArry.c4d0i == "9") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp9, #c3d0iOp9_9").show();
            }
            if (!r10) {
                $("#c3d0iOp10, #c3d0iOp10_10").hide();
                if (surArry.c4d0i == "10") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp10, #c3d0iOp10_10").show();
            }
            if (!r11) {
                $("#c3d0iOp11, #c3d0iOp11_11").hide();
                if (surArry.c4d0i == "11") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp11, #c3d0iOp11_11").show();
            }
            surArry.c4d0_1 = "";
            surArry.c4d0_2 = "";
            surArry.c4d0_3 = "";
            surArry.c4d0_4 = "";
            surArry.c4d0_5 = "";
            surArry.c4d0_6 = "";
            surArry.c4d0_7 = "";
            surArry.c4d0_8 = "";
            surArry.c4d0_9 = "";
            surArry.c4d0_10 = "";
            surArry.c4d0_11 = "";
            $("#c3Blkd0").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        else if (num > 1 && num2 <= 2) {
            c4Exists = false;
            c4dExists = false;
            c4dExists2 = false;
            c25Exists = false;
            c4bExists = false;
            $("#erc22").hide();
            $("#c3Blkd0").show();
            if (!r1) {
                $("#c3d0Op1, #c3d0Op1_1").hide();
                surArry.c4d0_1 = "";
                $("#c3d0Op1").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op1, #c3d0Op1_1").show();
            }
            if (!r2) {
                $("#c3d0Op2, #c3d0Op2_2").hide();
                surArry.c4d0_2 = "";
                $("#c3d0Op2").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op2, #c3d0Op2_2").show();
            }
            if (!r3) {
                $("#c3d0Op3, #c3d0Op3_3").hide();
                surArry.c4d0_3 = "";
                $("#c3d0Op3").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op3, #c3d0Op3_3").show();
            }
            if (!r4) {
                $("#c3d0Op4, #c3d0Op4_4").hide();
                surArry.c4d0_4 = "";
                $("#c3d0Op4").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op4, #c3d0Op4_4").show();
            }
            if (!r5) {
                $("#c3d0Op5, #c3d0Op5_5").hide();
                surArry.c4d0_5 = "";
                $("#c3d0Op5").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op5, #c3d0Op5_5").show();
            }
            if (!r6) {
                $("#c3d0Op6, #c3d0Op6_6").hide();
                surArry.c4d0_6 = "";
                $("#c3d0Op6").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op6, #c3d0Op6_6").show();
            }
            if (!r7) {
                $("#c3d0Op7, #c3d0Op7_7").hide();
                surArry.c4d0_7 = "";
                $("#c3d0Op7").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op7, #c3d0Op7_7").show();
            }
            if (!r8) {
                $("#c3d0Op8, #c3d0Op8_8").hide();
                surArry.c4d0_8 = "";
                $("#c3d0Op8").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op8, #c3d0Op8_8").show();
            }
            if (!r9) {
                $("#c3d0Op9, #c3d0Op9_9").hide();
                surArry.c4d0_9 = "";
                $("#c3d0Op9").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op9, #c3d0Op9_9").show();
            }
            if (!r10) {
                $("#c3d0Op10, #c3d0Op10_10").hide();
                surArry.c4d0_10 = "";
                $("#c3d0Op10").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op10, #c3d0Op10_10").show();
            }
            if (!r11) {
                $("#c3d0Op11, #c3d0Op11_11").hide();
                surArry.c4d0_11 = "";
                $("#c3d0Op11").prop("checked", false).checkboxradio("refresh");
            }
            else {
                $("#c3d0Op11, #c3d0Op11_11").show();
            }
        }
        else {
            c25Exists = false;
            c4Exists = true;
            c4dExists2 = false;
            c4dExists = false;
            c4bExists = false;
            c4d1Exists = false;
            c4d2Exists = false;
            c4d3Exists = false;
            c4d4Exists = false;
            c4d5Exists = false;
            c4d6Exists = false;
            c4d7Exists = false;
            $("#erc14").hide();
            $("#c4Blk").show();
            surArry.c4d0_1 = "";
            surArry.c4d0_2 = "";
            surArry.c4d0_3 = "";
            surArry.c4d0_4 = "";
            surArry.c4d0_5 = "";
            surArry.c4d0_6 = "";
            surArry.c4d0_7 = "";
            surArry.c4d0_8 = "";
            surArry.c4d0_9 = "";
            surArry.c4d0_10 = "";
            surArry.c4d0_11 = "";
            surArry.c4d0i = "";
            surArry.c4d7 = "";
            surArry.c4d6 = "";
            surArry.c4d5 = "";
            surArry.c4d4 = "";
            surArry.c4d3 = "";
            surArry.c4d2 = "";
            surArry.c4d1 = "";
            $("#c4d7txt").val("");
            $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0, #c3Blkd0i").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        if (c4bLocal) {
            addArry(c3b);
        }
        else {
            addArry(c3c);
        }
    }
    else {
        $("#erc13").show();
    }
}

function c3d0() {
    var ans = false;
    var q1 = false;
    var q2 = false;
    var q3 = false;
    var q4 = false;
    var q5 = false;
    var q6 = false;
    var q7 = false;
    var q8 = false;
    var q9 = false;
    var q10 = false;
    var q11 = false;
    var num = 0;

    if ($("#c3d0Op1").prop('checked')) {
        ans = true;
        q1 = true;
        num++;
        surArry.c4d0_1 = $("#c3d0Op1").val();
    }
    else {
        surArry.c4d0_1 = "";
    }
    if ($("#c3d0Op2").prop('checked')) {
        ans = true;
        q2 = true;
        num++;
        surArry.c4d0_2 = $("#c3d0Op2").val();
    }
    else {
        surArry.c4d0_2 = "";
    }
    if ($("#c3d0Op3").prop('checked')) {
        ans = true;
        q3 = true;
        num++;
        surArry.c4d0_3 = $("#c3d0Op3").val();
    }
    else {
        surArry.c4d0_3 = "";
    }
    if ($("#c3d0Op4").prop('checked')) {
        ans = true;
        q4 = true;
        num++;
        surArry.c4d0_4 = $("#c3d0Op4").val();
    }
    else {
        surArry.c4d0_4 = "";
    }
    if ($("#c3d0Op5").prop('checked')) {
        ans = true;
        q5 = true;
        num++;
        surArry.c4d0_5 = $("#c3d0Op5").val();
    }
    else {
        surArry.c4d0_5 = "";
    }
    if ($("#c3d0Op6").prop('checked')) {
        ans = true;
        q6 = true;
        num++;
        surArry.c4d0_6 = $("#c3d0Op6").val();
    }
    else {
        surArry.c4d0_6 = "";
    }
    if ($("#c3d0Op7").prop('checked')) {
        ans = true;
        q7 = true;
        num++;
        surArry.c4d0_7 = $("#c3d0Op7").val();
    }
    else {
        surArry.c4d0_7 = "";
    }
    if ($("#c3d0Op8").prop('checked')) {
        ans = true;
        q8 = true;
        num++;
        surArry.c4d0_8 = $("#c3d0Op8").val();
    }
    else {
        surArry.c4d0_8 = "";
    }
    if ($("#c3d0Op9").prop('checked')) {
        ans = true;
        q9 = true;
        num++;
        surArry.c4d0_9 = $("#c3d0Op9").val();
    }
    else {
        surArry.c4d0_9 = "";
    }
    if ($("#c3d0Op10").prop('checked')) {
        ans = true;
        q10 = true;
        num++;
        surArry.c4d0_10 = $("#c3d0Op10").val();
    }
    else {
        surArry.c4d0_10 = "";
    }
    if ($("#c3d0Op11").prop('checked')) {
        ans = true;
        q11 = true;
        num++;
        surArry.c4d0_11 = $("#c3d0Op11").val();
    }
    else {
        surArry.c4d0_11 = "";
    }
    if (ans) {
        $("#c3Blkd0").hide();
        $("#erc22").hide();
        if (num > 1) {
            $("#erc23").hide();
            $("#c3Blkd0i").show();
            if (!q1) {
                $("#c3d0iOp1, #c3d0iOp1_1").hide();
                if (surArry.c4d0i == "1") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp1, #c3d0iOp1_1").show();
            }
            if (!q2) {
                $("#c3d0iOp2, #c3d0iOp2_2").hide();
                if (surArry.c4d0i == "2") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp2, #c3d0iOp2_2").show();
            }
            if (!q3) {
                $("#c3d0iOp3, #c3d0iOp3_3").hide();
                if (surArry.c4d0i == "3") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp3, #c3d0iOp3_3").show();
            }
            if (!q4) {
                $("#c3d0iOp4, #c3d0iOp4_4").hide();
                if (surArry.c4d0i == "4") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp4, #c3d0iOp4_4").show();
            }
            if (!q5) {
                $("#c3d0iOp5, #c3d0iOp5_5").hide();
                if (surArry.c4d0i == "5") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp5, #c3d0iOp5_5").show();
            }
            if (!q6) {
                $("#c3d0iOp6, #c3d0iOp6_6").hide();
                if (surArry.c4d0i == "6") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp6, #c3d0iOp6_6").show();
            }
            if (!q7) {
                $("#c3d0iOp7, #c3d0iOp7_7").hide();
                if (surArry.c4d0i == "7") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp7, #c3d0iOp7_7").show();
            }
            if (!q8) {
                $("#c3d0iOp8, #c3d0iOp8_8").hide();
                if (surArry.c4d0i == "8") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp8, #c3d0iOp8_8").show();
            }
            if (!q9) {
                $("#c3d0iOp9, #c3d0iOp9_9").hide();
                if (surArry.c4d0i == "9") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp9, #c3d0iOp9_9").show();
            }
            if (!q10) {
                $("#c3d0iOp10, #c3d0iOp10_10").hide();
                if (surArry.c4d0i == "10") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp10, #c3d0iOp10_10").show();
            }
            if (!q11) {
                $("#c3d0iOp11, #c3d0iOp11_11").hide();
                if (surArry.c4d0i == "11") {
                    surArry.c4d0i = "";
                }
            }
            else {
                $("#c3d0iOp11, #c3d0iOp11_11").show();
            }
        }
        else {
            c4d0Exists = true;
            c4d0iExists = false;
            c4dExists = false;
            if (surArry.c4d0_1 !== "" || surArry.c4d0_2 !== "" || surArry.c4d0_3 !== "") {
                $("#erc24").hide();
                $("#c3d1Blk").show();
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                $("#c4d7txt").val("");
                $("#c3d2Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d0_4 !== "") {
                $("#erc25").hide();
                $("#c3d2Blk").show();
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d1 = "";
                $("#c4d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d0_5 !== "" || surArry.c4d0_6 !== "") {
                $("#erc26").hide();
                $("#c3d3Blk").show();
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                $("#c4d7txt").val("");
                $("#c3d1Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d0_7 !== "") {
                $("#erc27").hide();
                $("#c3d4Blk").show();
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                $("#c4d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d0_8 !== "") {
                $("#erc28").hide();
                $("#c3d5Blk").show();
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d6 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                $("#c4d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d6Blk, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d0_9 !== "" || surArry.c4d0_10 != "") {
                $("#erc29").hide();
                $("#c3d6Blk").show();
                surArry.c4d0i = "";
                surArry.c4d7 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                $("#c4d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
            else if (surArry.c4d0_11 !== "") {
                $("#erc30").hide();
                $("#c3d7Blk").show();
                $("#c3d7txt").focus();
                surArry.c4d0i = "";
                surArry.c4d6 = "";
                surArry.c4d5 = "";
                surArry.c4d4 = "";
                surArry.c4d3 = "";
                surArry.c4d2 = "";
                surArry.c4d1 = "";
                //$("#c4d7txt").val("");
                $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3Blkd0i").find("input").each(function() {
                    if ($(this).is(":checked")) {
                        $(this).prop("checked", false).checkboxradio("refresh");
                    }
                });
            }
        }
        addArry(c3d);
    }
    else {
        $("#erc22").show();
    }
}

function c3d0i() {
    if (surArry.c4d0i !== "") {
        aws = parseInt(surArry.c4d0i);
        $("#c3Blkd0i").hide();
        $("#erc23").hide();
        c4d0iExists = true;
        c4dExists = false;
        c4d0Exists = false;
        if (aws == 1 || aws == 2 || aws == 3) {
            $("#erc24").hide();
            $("#c3d1Blk").show();
            surArry.c4d7 = "";
            surArry.c4d6 = "";
            surArry.c4d5 = "";
            surArry.c4d4 = "";
            surArry.c4d3 = "";
            surArry.c4d2 = "";
            $("#c4d7txt").val("");
            $("#c3d2Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        else if (aws == 4) {
            $("#erc25").hide();
            $("#c3d2Blk").show();
            surArry.c4d7 = "";
            surArry.c4d6 = "";
            surArry.c4d5 = "";
            surArry.c4d4 = "";
            surArry.c4d3 = "";
            surArry.c4d1 = "";
            $("#c4d7txt").val("");
            $("#c3d1Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        else if (aws == 5 || aws == 6) {
            $("#erc26").hide();
            $("#c3d3Blk").show();
            surArry.c4d7 = "";
            surArry.c4d6 = "";
            surArry.c4d5 = "";
            surArry.c4d4 = "";
            surArry.c4d2 = "";
            surArry.c4d1 = "";
            $("#c4d7txt").val("");
            $("#c3d1Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        else if (aws == 7) {
            $("#erc27").hide();
            $("#c3d4Blk").show();
            surArry.c4d7 = "";
            surArry.c4d6 = "";
            surArry.c4d5 = "";
            surArry.c4d3 = "";
            surArry.c4d2 = "";
            surArry.c4d1 = "";
            $("#c4d7txt").val("");
            $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d5Blk, #c3d6Blk").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        else if (aws == 8) {
            $("#erc28").hide();
            $("#c3d5Blk").show();
            surArry.c4d7 = "";
            surArry.c4d6 = "";
            surArry.c4d4 = "";
            surArry.c4d3 = "";
            surArry.c4d2 = "";
            surArry.c4d1 = "";
            $("#c4d7txt").val("");
            $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d6Blk").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        else if (aws == 9 || aws == 10) {
            $("#erc29").hide();
            $("#c3d6Blk").show();
            surArry.c4d7 = "";
            surArry.c4d5 = "";
            surArry.c4d4 = "";
            surArry.c4d3 = "";
            surArry.c4d2 = "";
            surArry.c4d1 = "";
            $("#c4d7txt").val("");
            $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        else if (aws == 11) {
            $("#erc30").hide();
            $("#c3d7Blk").show();
            $("#c3d7txt").focus();
            surArry.c4d6 = "";
            surArry.c4d5 = "";
            surArry.c4d4 = "";
            surArry.c4d3 = "";
            surArry.c4d2 = "";
            surArry.c4d1 = "";
            //$("#c4d7txt").val("");
            $("#c3d1Blk, #c3d3Blk, #c3d2Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk").find("input").each(function() {
                if ($(this).is(":checked")) {
                    $(this).prop("checked", false).checkboxradio("refresh");
                }
            });
        }
        if (c4dExists2) {
            addArry(c3d);
        }
        else {
            addArry(c3d0);
        }
    }
    else {
        $("#erc23").show();
    }
}

function c3d1() {
    if (surArry.c4d1 !== "") {
        c4d1Exists = true;
        c4d2Exists = false;
        c4d3Exists = false;
        c4d4Exists = false;
        c4d5Exists = false;
        c4d6Exists = false;
        c4d7Exists = false;
        $("#c3d1Blk").hide();
        $("#erc24").hide();
        $("#erc14").hide();
        $("#c4Blk").show();
        if (c4dExists) {
            addArry(c3d);
        }
        else if (c4d0Exists) {
            addArry(c3d0);
        }
        else {
            addArry(c3d0i);
        }
    }
    else {
        $("#erc24").show();
    }
}

function c3d2() {
    if (surArry.c4d2 !== "") {
        c4d1Exists = false;
        c4d2Exists = true;
        c4d3Exists = false;
        c4d4Exists = false;
        c4d5Exists = false;
        c4d6Exists = false;
        c4d7Exists = false;
        $("#c3d2Blk").hide();
        $("#erc25").hide();
        $("#erc14").hide();
        $("#c4Blk").show();
        if (c4dExists) {
            addArry(c3d);
        }
        else if (c4d0Exists) {
            addArry(c3d0);
        }
        else {
            addArry(c3d0i);
        }
    }
    else {
        $("#erc25").show();
    }
}

function c3d3() {
    if (surArry.c4d3 !== "") {
        c4d1Exists = false;
        c4d2Exists = false;
        c4d3Exists = true;
        c4d4Exists = false;
        c4d5Exists = false;
        c4d6Exists = false;
        c4d7Exists = false;
        $("#c3d3Blk").hide();
        $("#erc26").hide();
        $("#erc14").hide();
        $("#c4Blk").show();
        if (c4dExists) {
            addArry(c3d);
        }
        else if (c4d0Exists) {
            addArry(c3d0);
        }
        else {
            addArry(c3d0i);
        }
    }
    else {
        $("#erc26").show();
    }
}

function c3d4() {
    if (surArry.c4d4 !== "") {
        c4d1Exists = false;
        c4d2Exists = false;
        c4d3Exists = false;
        c4d4Exists = true;
        c4d5Exists = false;
        c4d6Exists = false;
        c4d7Exists = false;
        $("#c3d4Blk").hide();
        $("#erc27").hide();
        $("#erc14").hide();
        $("#c4Blk").show();
        if (c4dExists) {
            addArry(c3d);
        }
        else if (c4d0Exists) {
            addArry(c3d0);
        }
        else {
            addArry(c3d0i);
        }
    }
    else {
        $("#erc27").show();
    }
}

function c3d5() {
    if (surArry.c4d5 !== "") {
        c4d1Exists = false;
        c4d2Exists = false;
        c4d3Exists = false;
        c4d4Exists = false;
        c4d5Exists = true;
        c4d6Exists = false;
        c4d7Exists = false;
        $("#c3d5Blk").hide();
        $("#erc28").hide();
        $("#erc14").hide();
        $("#c4Blk").show();
        if (c4dExists) {
            addArry(c3d);
        }
        else if (c4d0Exists) {
            addArry(c3d0);
        }
        else {
            addArry(c3d0i);
        }
    }
    else {
        $("#erc28").show();
    }
}

function c3d6() {
    if (surArry.c4d6 !== "") {
        c4d1Exists = false;
        c4d2Exists = false;
        c4d3Exists = false;
        c4d4Exists = false;
        c4d5Exists = false;
        c4d6Exists = true;
        c4d7Exists = false;
        $("#c3d6Blk").hide();
        $("#erc29").hide();
        $("#erc14").hide();
        $("#c4Blk").show();
        if (c4dExists) {
            addArry(c3d);
        }
        else if (c4d0Exists) {
            addArry(c3d0);
        }
        else {
            addArry(c3d0i);
        }
    }
    else {
        $("#erc29").show();
    }
}

function c3d7() {
    if ($("#c3d7txt").val().length < 2000 && $("#c3d7txt").val() !== "") {
        surArry.c4d7 = $("#c3d7txt").val()
        c4d1Exists = false;
        c4d2Exists = false;
        c4d3Exists = false;
        c4d4Exists = false;
        c4d5Exists = false;
        c4d6Exists = false;
        c4d7Exists = true;
        $("#c3d7Blk").hide();
        $("#erc30").hide();
        $("#erc14").hide();
        $("#c4Blk").show();
        if (c4dExists) {
            addArry(c3d);
        }
        else if (c4d0Exists) {
            addArry(c3d0);
        }
        else {
            addArry(c3d0i);
        }
    }
    else {
        $("#erc30").show();
    }
}

function c4() {
    if (surArry.c5 !== "") {
        $("#c4Blk").hide();
        $("#erc14").hide();
        $("#erc15").hide();
        $("#erc15_1").hide();
        if (c25Exists) {
            addArry(c5);
        }
        else if (c4Exists) {
            addArry(c3d);
        }
        else if (c4bExists) {
            addArry(c3b);
        }
        else if (c4d1Exists) {
            addArry(c3d1);
        }
        else if (c4d2Exists) {
            addArry(c3d2);
        }
        else if (c4d3Exists) {
            addArry(c3d3);
        }
        else if (c4d4Exists) {
            addArry(c3d4);
        }
        else if (c4d5Exists) {
            addArry(c3d5);
        }
        else if (c4d6Exists) {
            addArry(c3d6);
        }
        else if (c4d7Exists) {
            addArry(c3d7);
        }
        else {
            addArry(c3);
        }
        if (surArry.c5 === "1") {
            c6Exists = false;
            $("#c4Blka").show();
            $("#keypad").show();
            $("#numPad").show();
            setID("#c4atxt", 2);
        }
        else {
            surArry.c5a = "";
            surArry.c5b = "";
            surArry.c5c = "";
            c6Exists = true;
            //genSurData();
            $("#erc31").hide();
            $("#c6Blk").show();
        }
    }
    else {
        $("#erc14").show();
    }
}

function c4a() {
    surArry.c5a = $("#c4atxt").val();
    num = parseInt($("#c4atxt").val());
    
    if (parseInt(surArry.a1) >= num) {
        $("#c4Blka").hide();
        $("#keypad").hide();
        $("#numPad").hide();
        $("#erc15").hide();
        $("#erc15_1").hide();
        $("#erc16").hide();
        $("#c4Blkb").show();
        addArry(c4);
    }
    else if (surArry.c5a === "") {
        $("#erc15").hide();
        $("#erc15_1").show();
    }
    else {
        $("#erc15_1").hide();
        $("#erc15").show();
    }
}

function c4b() {
    if (surArry.c5b !== "") {
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
    if (surArry.c5c !== "") {
        $("#c4Blkc").hide();
        $("#erc17").hide();
        addArry(c4b);
        //genSurData();
        //$.mobile.changePage("#sst");
        $("#erc31").hide();
        $("#c6Blk").show();
    }
    else {
        $("#erc17").show();
    }
}

function c6() {
    if (surArry.c6v !== "") {
        $("#c6Blk").hide();
        $("#erc31").hide();
        $("#erc32").hide();
        if (surArry.c6v === "1") {
            $("#c6cvBlk").show();
        }
        else {
            surArry.c6cv = "";
            //genSurData();
            $("#erc33").hide();
            $("#c6vBlk").show();
        }
        if (c6Exists) {
            addArry(c4);
        }
        else {
            addArry(c4c);
        }
    }
    else {
        $("#erc31").show();
    }
}

function c6cv() {
    if (surArry.c6cv !== "") {
        $("#c6cvBlk").hide();
        $("#erc32").hide();
        $("#erc33").hide();
        $("#c6vBlk").show();
        addArry(c6);
    }
    else {
        $("#erc32").show();
    }
}

function c6v() {
    if (surArry.c6 !== "") {
        $("#c6vBlk").hide();
        $("#erc33").hide();
        genSurData();
        $.mobile.changePage("#sst");
    }
    else {
        $("#erc33").show();
    }
}

function sur2Binds() {
    // Handle radio button grids
$('td').on(TOUCH_START, function() {
    if ($(this).find("input").attr('id') !== undefined) {
        var idNum = "#" + $(this).find("input").attr('id');
        $(idNum).prop("checked", true).trigger("change");
    }
});

// Survey 2 start
$("#d1Op1, #d1Op2, #d1Op3").on('change', function() {
    sur2Arry.d1a = $(this).val();
});

$("#d1Op5, #d1Op6, #d1Op7").on('change', function() {
    sur2Arry.d1b = $(this).val();
});

$("#d1Op9, #d1Op10, #d1Op11").on('change', function() {
    sur2Arry.d1c = $(this).val();
});

$("#d1Op12, #d1Op13, #d1Op14").on('change', function() {
    sur2Arry.d1d = $(this).val();
});

$("#d1Op15, #d1Op16, #d1Op17").on('change', function() {
    sur2Arry.d1e = $(this).val();
});

$("#d1Op18, #d1Op19, #d1Op20").on('change', function() {
    sur2Arry.d1f = $(this).val();
});

$("#d1Op21, #d1Op22, #d1Op23").on('change', function() {
    sur2Arry.d1g = $(this).val();
});

$("#d1Op24, #d1Op25, #d1Op26").on('change', function() {
    sur2Arry.d1h = $(this).val();
});
    $("#d1Op27, #d1Op28, #d1Op29").on('change', function() {
        sur2Arry.d1v = $(this).val();
    });

$("#e1Op1, #e1Op2, #e1Op3, #e1Op4, #e1Op5").on('change', function() {
    sur2Arry.e1a = $(this).val();
});

$("#e1Op6, #e1Op7, #e1Op8, #e1Op9, #e1Op10").on('change', function() {
    sur2Arry.e1b = $(this).val();
});

$("#e1Op11, #e1Op12, #e1Op13, #e1Op14, #e1Op15").on('change', function() {
    sur2Arry.e1c = $(this).val();
});

$("#e1Op16, #e1Op17, #e1Op18, #e1Op19, #e1Op20").on('change', function() {
    sur2Arry.e1d = $(this).val();
});

$("#e1Op21, #e1Op22, #e1Op23, #e1Op24, #e1Op25").on('change', function() {
    sur2Arry.e1e = $(this).val();
});

$("#e1Op26, #e1Op27, #e1Op28, #e1Op29, #e1Op30").on('change', function() {
    sur2Arry.e1f = $(this).val();
});

$("#e1Op31, #e1Op32, #e1Op33, #e1Op34, #e1Op35").on('change', function() {
    sur2Arry.e1g = $(this).val();
});

$("#e2Op1, #e2Op2, #e2Op3, #e2Op4, #e2Op5").on('change', function() {
    sur2Arry.e2a = $(this).val();
});

$("#e2Op6, #e2Op7, #e2Op8, #e2Op9, #e2Op10").on('change', function() {
    sur2Arry.e2b = $(this).val();
});

$("#e2Op11, #e2Op12, #e2Op13, #e2Op14, #e2Op15").on('change', function() {
    sur2Arry.e2c = $(this).val();
});

$("#e3Op1, #e3Op2, #e3Op3, #e3Op4, #e3Op5").on('change', function() {
    sur2Arry.e3a = $(this).val();
});

$("#e3Op6, #e3Op7, #e3Op8, #e3Op9, #e3Op10").on('change', function() {
    sur2Arry.e3b = $(this).val();
});

$("#e3Op11, #e3Op12, #e3Op13, #e3Op14, #e3Op15").on('change', function() {
    sur2Arry.e3c = $(this).val();
});

$("#e3Op16, #e3Op17, #e3Op18, #e3Op19, #e3Op20").on('change', function() {
    sur2Arry.e3d = $(this).val();
});

$("#e3Op21, #e3Op22, #e3Op23, #e3Op24, #e3Op25").on('change', function() {
    sur2Arry.e3e = $(this).val();
});

$("#e3Op26, #e3Op27, #e3Op28, #e3Op29, #e3Op30").on('change', function() {
    sur2Arry.e3f = $(this).val();
});

$("#e3Op31, #e3Op32, #e3Op33, #e3Op34, #e3Op35").on('change', function() {
    sur2Arry.e3g = $(this).val();
});

$("#e3Op36, #e3Op37, #e3Op38, #e3Op39, #e3Op40").on('change', function() {
    sur2Arry.e3h = $(this).val();
});

$("#e3Op41, #e3Op42, #e3Op43, #e3Op44, #e3Op45").on('change', function() {
    sur2Arry.e3i = $(this).val();
});

$("#e3Op46, #e3Op47, #e3Op48, #e3Op49, #e3Op50").on('change', function() {
    sur2Arry.e3j = $(this).val();
});

$("#e3Op51, #e3Op52, #e3Op53, #e3Op54, #e3Op55").on('change', function() {
    sur2Arry.e3k = $(this).val();
});

$("#e3Op56, #e3Op57, #e3Op58, #e3Op59, #e3Op60").on('change', function() {
    sur2Arry.e3l = $(this).val();
});
    $("#e3Op61, #e3Op62, #e3Op63, #e3Op64, #e3Op65").on('change', function() {
        sur2Arry.e3v = $(this).val();
    });

$("#g2bOp1, #g2bOp2, #g2bOp3, #g2bOp4, #g2bOp5, #g2bOp6, #g2bOp7, #g2bOp8, #g2bOp9, #g2bOp10, #g2bOp11").on('change', function() {
    sur2Arry.g2 = $(this).val();
    g2();
});

$("#g3bOp1, #g3bOp2, #g3bOp3, #g3bOp4, #g3bOp5, #g3bOp6, #g3bOp7, #g3bOp8, #g3bOp9, #g3bOp10, #g3bOp11").on('change', function() {
    sur2Arry.g3 = $(this).val();
    g3();
});
    $("#gvbOp1, #gvbOp2, #gvbOp3, #gvbOp4, #gvbOp5, #gvbOp6, #gvbOp7, #gvbOp8, #gvbOp9, #gvbOp10, #gvbOp11").on('change', function() {
        sur2Arry.gv = $(this).val();
        gv();
    });
}

function dDis() {
    $("#dBlk").show();
}

function dSt() {
    $("#dBlk").hide();
    $("#erd1").hide();
    $("#d1Blk").show();
    addArry(dDis);
}

function d1c() {
    if (sur2Arry.d1a !== "" && sur2Arry.d1b !== "" && sur2Arry.d1c !== "" && sur2Arry.d1v !== "") {
        $("#d1Blk").hide();
        $("#erd1").hide();
        $("#erd2").hide();
        $("#d1Blkb").show();
        addArry(dSt);
    }
    else {
        $("#erd1").show();
    }
}

function d1b() {
    if (sur2Arry.d1d !== "" && sur2Arry.d1e !== "" && sur2Arry.d1f !== "") {
        $("#d1Blkb").hide();
        $("#erd2").hide();
        $("#erd3").hide();
        $("#d1Blkc").show();
        addArry(d1c);
    }
    else {
        $("#erd2").show();
    }
}

function d1() {
    if (sur2Arry.d1g !== "" && sur2Arry.d1h !== "") {
        $("#d1Blkc").hide();
        $("#erd3").hide();
        $("#eBlk").show();
        addArry(d1b);
    }
    else {
        $("#erd3").show();
    }
}

function eSt() {
    $("#eBlk").hide();
    $("#ere1").hide();
    $("#e1Blk").show();
    addArry(d1);
}

function e1b() {
    if (sur2Arry.e1a !== "" && sur2Arry.e1b !== "" && sur2Arry.e1c !== "") {
        $("#e1Blk").hide();
        $("#ere1").hide();
        $("#ere2").hide();
        $("#e1Blkb").show();
        addArry(eSt);
    }
    else {
        $("#ere1").show();
    }
}

function e1() {
    if (sur2Arry.e1d !== "" && sur2Arry.e1e !== "" && sur2Arry.e1f !== "" && sur2Arry.e1g !== "") {
        $("#e1Blkb").hide();
        $("#ere2").hide();
        $("#e2Blk").show();
        addArry(e1b);
    }
    else {
        $("#ere2").show();
    }
}

function e2St() {
    $("#e2Blk").hide();
    $("#ere4").hide();
    $("#e2Blka").show();
    addArry(e1);
}

function e2() {
    if (sur2Arry.e2a !== "" && sur2Arry.e2b !== "" && sur2Arry.e2c !== "") {
        $("#e2Blka").hide();
        $("#ere4").hide();
        $("#e3Blk").show();
        addArry(e2St);
    }
    else {
        $("#ere4").show();
    }
}

function e3St() {
    $("#e3Blk").hide();
    $("#ere6").hide();
    $("#e3Blka").show();
    addArry(e2);
}

function e3b() {
    if (sur2Arry.e3a !== "" && sur2Arry.e3b !== "" && sur2Arry.e3c !== "" && sur2Arry.e3d !== ""
            && sur2Arry.e3e !== "" && sur2Arry.e3f !== "") {
        $("#e3Blka").hide();
        $("#ere6").hide();
        $("#ere7").hide();
        $("#numPad2").hide();
        $("#keypad2").hide();
        $("#e3Blkb").show();
        addArry(e3St);
    }
    else {
        $("#ere6").show();
    }
}

function e3() {
    if (sur2Arry.e3g !== "" && sur2Arry.e3h !== "" && sur2Arry.e3i !== "" && sur2Arry.e3j !== ""
            && sur2Arry.e3k !== "" && sur2Arry.e3l !== "" && sur2Arry.e3v !== "") {
        $("#e3Blkb").hide();
        $("#ere7").hide();
        $("#fBlk").show();
        addArry(e3b);
    }
    else {
        $("#ere7").show();
    }
}

function fSt() {
    $("#fBlk").hide();
    $("#erf1").hide();
    $("#numPad2").show();
    $("#keypad2").show();
    setID("#f1atxt", 4);
    $("#f1Blka").show();
    addArry(e3);
}

function f1a() {
    sur2Arry.f1a = $("#f1atxt").val();
    
    if (sur2Arry.f1a !== "") {
        $("#f1Blka").hide();
        $("#erf1").hide();
        $("#erf2").hide();
        $("#numPad2").show();
        $("#keypad2").show();
        setID("#f1btxt", 4);
        $("#f1Blkb").show();
        addArry(fSt);
    }
    else {
        $("#erf1").show();
    }
}

function f1b() {
    sur2Arry.f1b = $("#f1btxt").val();
    
    if (sur2Arry.f1b !== "") {
        $("#f1Blkb").hide();
        $("#erf2").hide();
        $("#erf3").hide();
        $("#numPad2").show();
        $("#keypad2").show();
        setID("#f1ctxt", 4);
        $("#f1Blkc").show();
        addArry(f1a);
    }
    else {
        $("#erf2").show();
    }
}

function f1c() {
    sur2Arry.f1c = $("#f1ctxt").val();
    
    if (sur2Arry.f1c !== "") {
        $("#f1Blkc").hide();
        $("#erf3").hide();
        $("#erf7").hide();
        $("#numPad2").show();
        $("#keypad2").show();
        setID("#f1vtxt", 4);
        $("#f1Blkv").show();
        addArry(f1b);
    }
    else {
        $("#erf3").show();
    }
}

function f1v() {
    sur2Arry.f1v = $("#f1vtxt").val();

    if (sur2Arry.f1v !== "") {
        $("#f1Blkv").hide();
        $("#erf7").hide();
        $("#erf4").hide();
        $("#numPad2").show();
        $("#keypad2").show();
        setID("#f1dtxt", 4);
        $("#f1Blkd").show();
        addArry(f1c);
    }
    else {
        $("#erf7").show();
    }
}

function f1d() {
    sur2Arry.f1d = $("#f1dtxt").val();
    
    if (sur2Arry.f1d !== "") {
        num = parseInt(sur2Arry.f1d);
        $("#f1Blkd").hide();
        $("#erf4").hide();
        $("#erf5").hide();
        $("#erf6").hide();
        if (num > 0) {
            $("#numPad2").show();
            $("#keypad2").show();
            setID("#f1etxt", 4);
            $("#f1Blke").show();
        }
        else {
            removeArry(f1e);
            f1Exists = false;
            $("#f1etxt").val("");
            sur2Arry.f1e = "8888";
            $("#numPad2").hide();
            $("#keypad2").hide();
            $("#g1Blk").show();
        }
        addArry(f1v);
    }
    else {
        $("#erf4").show();
    }
}

function f1e() {
    sur2Arry.f1e = $("#f1etxt").val();
    numf1 = parseInt($("#f1etxt").val());
    
    if (sur2Arry.f1e !== "") {
        if (numf1 > 0) {
            $("#f1Blke").hide();
            $("#erf5").hide();
            $("#erf6").show();
            $("#numPad2").hide();
            $("#keypad2").hide();
            $("#g1Blk").show();
            f1Exists = true;
            addArry(f1d);
        }
        else {
            $("#erf6").show();
        }
    }
    else {
        $("#erf5").show();
    }
}

function g1() {
    sur2Arry.g1 = $("#g1Slide").val();
    
    $("#g1Blk").hide();
    $("#erg2").hide();
    if (f1Exists) {
        addArry(f1e);
    }
    else {
        addArry(f1d);
    }
    $("#g2Blk").show();
}

function g2() {
    if (sur2Arry.g2 !== "") {
        $("#g2Blk").hide();
        $("#erg2").hide();
        $("#erg4").hide();
        setTimeout(function() {
            $("#gvBlk").show();
        }, 500);
        addArry(g1);
    }
    else {
        $("#erg2").show();
    }
}

function gv() {
    if (sur2Arry.gv !== "") {
        $("#gvBlk").hide();
        $("#erg4").hide();
        $("#erg3").hide();
        setTimeout(function() {
            $("#g3Blk").show();
        }, 500);
        addArry(g2);
    }
    else {
        $("#erg4").show();
    }
}

function g3() {
    if (sur2Arry.g3 !== "") {
        $("#g3Blk").hide();
        $("#erg3").hide();
        $.mobile.changePage("#finish");
    }
    else {
        $("#erg3").show();
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
        navArry.splice(pos, navArry.length - pos);
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
           "#asb11", "#bsb", "#bsb1", "#bsb2", "#bsb3", "#bsb4", "#bsb5", "#bsb6", "#csb", "#csb1", "#csb2", "#csb3", "#csb4",
           "#csb5", "#csb6", "#csb7", "#csb8", "#csb9", "#csb10", "#csb11", "#csb12", "#csb13", "#csb14", "#csb15",
           "#csb16", "#csb17", "#csb18", "#csb19", "#csb20", "#csb21", "#csb22", "#csb23", "#csb24", "#csb25", "#csb26", "#csb27",
           "#csb28", "#csb29", "#csb30", "#csb31", "#csb32", "#csb33"];
       
    for (i = 0; i < vis.length; i++) {
        if ($(vis[i]).is(':visible')) {
            $(vis[i]).click();
            break;
        }
    }
}

function forward2() {
    vis = ["#dsb", "#dsb1", "#dsb2", "#dsb3", "#esb", "#esb1", "#esb2", "#esb3", "#esb4", "#esb5", "#esb6", "#esb7",
           "#fsb", "#fsb1", "#fsb2", "#fsb3", "#fsb4", "#fsb5", "#gsb1", "#gsb2", "#gsb3", "#fsb6", "#gsb4"];
       
    for (i = 0; i < vis.length; i++) {
        if ($(vis[i]).is(':visible')) {
            $(vis[i]).click();
            break;
        }
    }
}

function hideAll() {
    $("#keypad, #numPad, #numPad2, #keypad2, #success, #error").hide();
    $("#aBlk, #a1Blk, #a2Blk, #a3Blk, #a4Blk, #a5Blk, #a6Blk, #a7Blk, #a8Blk, #a9Blk, #a9aBlk, #a10Blk, #a11Blk").hide();
    $("#bBlk, #b1Blk, #b2Blk, #b3Blk, #b1Blkc, #b1Blkc1, #b1Blkc2").hide();
    $("#cBlk, #c1Blk, #c1Blka, #c1Blkb, #c1Blkc, #c2Blk, #c2Blka, #c2Blkb, #c2Blkc, #c3Blk, #c3Blka, #c3Blkb, #c3Blkc, #c3Blkd, #c4Blk, #c4Blka, #c4Blkb, #c4Blkc").hide();
    $("#dBlk, #d1Blk, #d1Blkb, #d1Blkc, #eBlk, #dBlk, #e1Blk, #e1Blkb, #e2Blk, #e2Blka, #e3Blk, #e3Blka, #e3Blkb").hide();
    $("#fBlk, #f1Blka, #f1Blkb, #f1Blkc, #f1Blkd, #f1Blke, #g1Blk, #g2Blk, #g3Blk, #gvBlk, #f1Blkv").hide();
    $("#c5Blk, #c5Blka, #c5Blkb, #c5Blkc, #c6Blk, #c6cvBlk, #c6vBlk, #c3d1Blk, #c3d2Blk, #c3d3Blk, #c3d4Blk, #c3d5Blk, #c3d6Blk, #c3d7Blk, #c3Blkd0, #c3Blkd0i").hide();
    return true;
}

function genSurData() {
    $.each(surArry, function(key, value) {
        if (key !== "a9_flag") {
            if (value === "") {
                surArry[key] = "8888";
            }
        }
    });
}

