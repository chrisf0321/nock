var hasTouch = ('ontouchstart' in window);
var TOUCH_START = hasTouch ? "touchstart" : "mousedown";
var gamCnt = 0;
var imgCnt = 0;
var aCnt = 0;
var bCnt = 0;
var cCnt = 0;
var hide = false;
var choice1;
var choice2;
var prevSel;
var sound;
var audio = false;
var active = false;
var stTime;
var stopTime;
var points = 0;
var fnLoop = false;
var fnLand = false;
var inst = false;
var inst2 = false;
var played;
var reloadCnt = 3;
var matchArry = [];
var trialMtch = [];
var oldLng;

$("a").on(TOUCH_START, function() {
    var linkID = $(this).attr('id');
    var parID = '#' + $(this).parent().attr('id');

    
    if (linkID) {
        var num = parseInt(linkID);
        countClick(num, parID);
    }
});

function transLang() {
    $("span[data-translate]").html(function() {
        var trans = $(this).attr("data-translate");
        return language[trans];
    });
}

function langChg(lngs) {
    if (lngs !== oldLng) {
        played = 1;
        $("script[src='langs/" + oldLng + ".js']").remove();
        var translate = $("<script type='text/javascript' src='langs/" + lngs +".js'>");
        oldLng = lngs;
        window.localStorage.setItem("lang", oldLng);
        $("body").append(translate);
        transLang();
        getUserData();
    }
}

function getUserData() {
    if (window.localStorage.getItem(oldLng) !== null) {
        var player = JSON.parse(window.localStorage.getItem(oldLng));
        played = player.played;
        reloadCnt = player.reloads;
        matchArry[0] = player.mtch1;
        matchArry[1] = player.mtch2;
        matchArry[2] = player.mtch3;
        matchArry[3] = player.mtch4;
        matchArry[4] = player.mtch5;
        matchArry[5] = player.mtch6;
    }
    else {
        played = 1;
        reloadCnt = 3;
    }
}

$(document).on('pagebeforeshow', '#home', function() { 
    if (window.localStorage.getItem("score") === null) {
        window.localStorage.setItem("score", 0);
        window.localStorage.setItem("curScore", 0);
        window.localStorage.setItem("games", 0);
        window.localStorage.setItem("points", 0);
        window.localStorage.setItem("average", 0);
        window.localStorage.setItem("lang", "en");
    }
    $("#tot").html("<h2><span data-translate='Current Score: '>Current Score: </span><a href='#popupDialog' style='text-decoration: none' data-rel='popup' data-position-to='window' data-transition='slideup'>" + window.localStorage.getItem("curScore") + "</a></h2>");
    $("#scr").html("<h3><span data-translate='High Score: '>High Score: </span>" + window.localStorage.getItem("score") + "</h3>");
    $("#gam").html("<h3><span data-translate='Games Played: '>Games Played: </span>" + window.localStorage.getItem("games") + "</h3>");
    $("#totPts").html("<h3><span data-translate='Overall Points: '>Overall Points: </span>" + window.localStorage.getItem("points") + "</h3>");
    $("#avg").html("<h3><span data-translate='Average Points: '>Average Points: </span>" + window.localStorage.getItem("average") + "</h3>");
    
    transLang();
    getUserData();
});

$(document).on('pagebeforeshow', '#matches', function() {
    $('.ui-block-a, .ui-block-b').removeClass('inst_mod');
    $('img').css({'opacity': '0'});
    sizeA();
    
    if (!audio) {
        setAudio();
    }

    matchGen();
    imgDelay();
    
});

$(document).on('pagebeforeshow', '#game', function () {
    $('.ui-block-a, .ui-block-b').removeClass('inst_mod');
    timer = 0;
    points = 0;
    gameCnt = 0;
    imgCnt = 0;
    aCnt = 0;
    bCnt = 0;
    cCnt = 0;
    hide = false;
    $('#blk5, #blk6, #blk7, #blk8').hide();
    $('img').css({'opacity': '0'});
    sizeC();  
    imgSel();
    imgDelay();
});

$(document).on('pagebeforeshow', '#finish', function() {
    fnLoop = true;
    
    if ($(window).height() > $(window).width()) {
        $('#fn1, #fn2').hide();
        $('#fn3, #fn4, #hideBar').show();
        fnLand = false;
        $('.ui-block-a, .ui-block-b').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() <= 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() <= 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    else {
        $('#fn1, #fn2').show();
        $('#fn3, #fn4, #hideBar').hide();
        fnLand = true;
    }
    setFnImg();
    fnSwitcher() ;
});

$(window).on('orientationchange', function (e) {
    if (e.orientation == 'landscape') {
        $('#fn1, #fn2').show();
        $('#fn3, #fn4, #hideBar').hide();
        fnLand = true;
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
        $('.ui-grid-c').css({'padding-left': '1px', 'padding-right': '1px', 'padding-top': '0px'});
    }
    if (e.orientation == 'portrait') {
        $('#fn1, #fn2').hide();
        $('#fn3, #fn4, #hideBar').show();
        fnLand = false;
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() <= 480) {
             $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() <= 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
});

$(document).on('pagebeforeshow', '#inst', function(){
    sizeC();
});

$(document).on('pagebeforeshow', '#inst2', function(){
    sizeA();
});

$(document).on('pagebeforeshow', '#inst3', function(){
    inst = true;
    $('img').css({'opacity': '100'});
    
    sizeC();
    inAni();
});

$(document).on('pagebeforeshow', '#inst4', function(){
    inst2 = true;
    $('img').css({'opacity': '100'});
    
    sizeC();
    inAni2();
});

$(document).on('pagebeforeshow', '#inst5', function(){
    sizeC();
});

function sizeC() {
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() <= 480) {
            $('.ui-grid-c').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() <= 1024) {
            $('.ui-grid-c').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
    else {
        $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').removeClass('full_width');
    }
}

function sizeA() {
    if ($(window).height() > $(window).width()) {
        $('.ui-block-a, .ui-block-b').addClass('full_width');
        
        if ($(window).width() == 320 && $(window).height() <= 480) {
            $('.ui-grid-a').css({'padding-left': '17px', 'padding-right': '17px', 'padding-top': '0px'});
        }
        else if ($(window).width() == 768 && $(window).height() <= 1024) {
            $('.ui-grid-a').css({'padding-left': '60px', 'padding-right': '60px', 'padding-top': '0px'});
        }
    }
}

function inAni() {
    $('#inBlk1, #inBlk2').css({'border': '1px solid gray'});
    $('img').css({'opacity': '100'});
        
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                if (inst) {
                    inAni();
                }
                }, 4000);
            $('#inBlk2').css({'border': '1px solid blue'});
            }, 1000);
        $('#inBlk1').css({'border': '1px solid blue'});
    }, 3000);
}

function inAni2() {
    $('#inBlk3, #inBlk4').css({'border': '1px solid gray'});
    $('img').css({'opacity': '100'});
        
    setTimeout(function() {
        setTimeout(function() {
            setTimeout(function() {
                if (inst2) {
                    inAni2();
                }
                }, 4000);
            $('#inBlk4').css({'border': '1px solid blue'});
            }, 1000);
        $('#inBlk3').css({'border': '1px solid blue'});       
        $('#ing2, #ing3, #ing4').css({'opacity': '0'});
    }, 3000);
}

function setFnImg() {
    $("#a1").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a2").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a3").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a4").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a5").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $("#a6").attr('src', bArry[Math.floor(Math.random() * bArry.length)]);
    $('img').css({'opacity': '100'});
}

function fnSwitcher() {
    var num = 0;
 
    if(fnLoop) {
        num = Math.floor(Math.random() * 4);
        
        setTimeout(function () {
        if (num === 0) {
            $("#a1").animate({ opacity: 0}, 600).promise().done(function() {
                $("#a1").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                    opacity: 100}, 600).promise().done(function() { 
                    fnSwitcher();
                });
            });
        }
        else if (num === 1) {
            $("#a2").animate({ opacity: 0}, 600).promise().done(function() {
                $("#a2").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                    opacity: 100}, 600).promise().done(function() { 
                    fnSwitcher();
                });
            });
        }
        else if (num === 2) {
            if (fnLand) {
                $("#a5").animate({ opacity: 0}, 600).promise().done(function() {
                    $("#a5").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                        opacity: 100}, 600).promise().done(function() { 
                        fnSwitcher();
                    });
                });
            }
            else {
                $("#a3").animate({ opacity: 0}, 600).promise().done(function() {
                    $("#a3").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                        opacity: 100}, 600).promise().done(function() { 
                        fnSwitcher();
                    });
                });
            }
        }
        else if (num === 3) {
            if (fnLand) {
                $("#a6").animate({ opacity: 0}, 600).promise().done(function() {
                    $("#a6").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                        opacity: 100}, 600).promise().done(function() { 
                        fnSwitcher();
                    });
                });
            }
            else {
                $("#a4").animate({ opacity: 0}, 600).promise().done(function() {
                    $("#a4").attr('src', bArry[Math.floor(Math.random() * bArry.length)]).animate({
                        opacity: 100}, 600).promise().done(function() { 
                        fnSwitcher();
                    });
                });
            }
        }
    }, 1000);
    }
}

function setAudio() {
    if (device.platform === "Android") {
        sound = new Media("/android_asset/www/assets/click2.wav");
    }
    else {
        sound = new Media("assets/click2.wav");
    }
    audio = true;
}

function showMatch() {

    $("#mImg1").attr('src', matchArry[0]);
    $("#mImg2").attr('src', matchArry[1]);
    $("#mImg3").attr('src', matchArry[2]);
    $("#mImg4").attr('src', matchArry[3]);
    $("#mImg5").attr('src', matchArry[4]);
    $("#mImg6").attr('src', matchArry[5]);
    
    mtchStore(oldLng, played, reloadCnt);   
}

function mtchStore(lng, play, reload) {
    var lastMatch = {
        lang : lng,
        played : play,
        reloads : reload,
        mtch1 : matchArry[0],
        mtch2 : matchArry[1],
        mtch3 : matchArry[2],
        mtch4 : matchArry[3],
        mtch5 : matchArry[4],
        mtch6 : matchArry[5]
    };
    
    window.localStorage.setItem(lng, JSON.stringify(lastMatch));   
}

function imgDelay() {
    setTimeout(function() {
        $('img').css({'opacity': '100'});
        sound.stop();
        stTime = new Date().getTime();
        active = true;
    }, 300);
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

function matchReload() {
    if (reloadCnt > 0) {
        $('img').css({'opacity': '0'});
        reloadCnt--;
        played = 1;
        matchGen();
        imgDelay();
    }
}

function matchGen() {
    var mCnt = 0;
    
    $('#rld').text(language["rld"] + reloadCnt);
    
    if (played === 1 && reloadCnt > -1) {
        matchArry[0] = aArry[Math.floor(Math.random() * aArry.length)];
        matchArry[1] = dArry[Math.floor(Math.random() * dArry.length)];
        matchArry[2] = bArry[Math.floor(Math.random() * bArry.length)];
        matchArry[3] = eArry[Math.floor(Math.random() * eArry.length)];
        matchArry[4] = cArry[Math.floor(Math.random() * cArry.length)];
    
        while(mCnt < 1) {
            var cImg = cArry[Math.floor(Math.random() * cArry.length)];

            if (cImg !== matchArry[4]) {
                matchArry[5] = cImg;
                mCnt++;
            }
        }
        played = 0;
    }
    
    showMatch();
}

function imgSel() {
    var imgArry = [];
    trialMtch = [];
    var success = 0;
    
    $('.ui-block-a, .ui-block-b, .ui-block-c, .ui-block-d').css({'border': '1px solid gray'});
    
    if (gamCnt === 15) {
        hide = true;
    }
    else if (gamCnt === 30) {
        hide = false;
        $('#blk5, #blk6, #blk7, #blk8').show();
    }
    else if (gamCnt === 45) {
        hide = true;
    }
    
    if (gamCnt < 60) {
        while (success === 0) {
            var num = Math.floor(Math.random() * 3);
        
            if (num === 0 && aCnt < 20) {
                aList(imgArry);
                success = 1;
            }
            else if (num === 1 && bCnt < 20) {
                bList(imgArry);
                success = 1;
            }
            else if (num === 2 && cCnt < 20) {
                cList(imgArry);
                success = 1;
            }
        }
        imgDelay();
    }
    else {
        played = 1;
        reloadCnt = 3;
        var oldScore = window.localStorage.getItem("score");
        var totPoints = parseFloat(window.localStorage.getItem("points"));
        var totGames = parseInt(window.localStorage.getItem("games")) + 1;
        
        $("#gamScr").html("<h2>" + language["gmScr"] + points + "</h2>");
        $.mobile.changePage("#finish", {transition: "slide"});
        
        totPoints += points;
        totPoints = Math.round(totPoints * 10) / 10;
        
        var average = Math.round((totPoints / totGames) * 10) / 10;
        
        window.localStorage.setItem("curScore", points);
        window.localStorage.setItem("games", totGames);
        if (totPoints <= 9999999) {
            window.localStorage.setItem("points", totPoints);
            window.localStorage.setItem("average", average);
        }
        else {
            window.localStorage.setItem("points", 9999999);
        }
        
        if (oldScore < points) {
            window.localStorage.setItem("score", points);
        }
        mtchStore(oldLng, played, reloadCnt);
    }
}

function resetGame() {
    gamCnt = 0;
    points = 0;
    imgCnt = 0;
    aCnt = 0;
    bCnt = 0;
    cCnt = 0;
    totTime = 0;
    correct = 0;
    active = false;
    hide = false;
    fnLoop = false;
    sound.stop();
}

function aList(arry) {
    aCnt++;
    var tempArry = [];
    var aNdx;
    var img;
    
    if (gamCnt < 30) {
        aNdx = 2;
    }
    else {
        aNdx = 6;
    }
 
    tempArry = aArry.concat(dArry, cArry);
    
    arry.push(matchArry[0]);
    arry.push(matchArry[1]);
    
    for (i = 0; i < aNdx; i++) {
        var loopCntrl = 0;
        while (loopCntrl === 0) {
            img = tempArry[Math.floor(Math.random() * tempArry.length)];
            if ($.inArray(img, arry) === -1 && $.inArray(img, matchArry) === -1) {
                arry.push(img);
                loopCntrl = 1;
            }
        }       
    }

    arry.shuffle();
    trialMtch[0] = $.inArray(matchArry[0], arry);
    trialMtch[1] = $.inArray(matchArry[1], arry);
    
    if (gamCnt < 30) {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
    }
    else {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
        $("#img5").attr('src', arry[4]);
        $("#img6").attr('src', arry[5]);
        $("#img7").attr('src', arry[6]);
        $("#img8").attr('src', arry[7]);
    }    
}

function bList(arry) {
    bCnt++;
    var tempArry = [];
    var bNdx;
    var img;
    
    if (gamCnt < 30) {
        bNdx = 2;
    }
    else {
        bNdx = 6;
    }

    tempArry = bArry.concat(eArry, cArry);
    
    arry.push(matchArry[2]);
    arry.push(matchArry[3]);
    
    for (i = 0; i < bNdx; i++) {
        var loopCntrl = 0;
        while (loopCntrl === 0) {
            img = tempArry[Math.floor(Math.random() * tempArry.length)];
            if ($.inArray(img, arry) === -1 && $.inArray(img, matchArry) === -1) {
                arry.push(img);
                loopCntrl = 1;
            }
        }       
    }

    arry.shuffle();
    trialMtch[0] = $.inArray(matchArry[2], arry);
    trialMtch[1] = $.inArray(matchArry[3], arry);
    
    if (gamCnt < 30) {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
    }
    else {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
        $("#img5").attr('src', arry[4]);
        $("#img6").attr('src', arry[5]);
        $("#img7").attr('src', arry[6]);
        $("#img8").attr('src', arry[7]);
    }    
}

function cList(arry) {
    cCnt++;
    var tempArry = [];
    var cNdx;
    var img;
    
    if (gamCnt < 30) {
        cNdx = 2;
    }
    else {
        cNdx = 6;
    }

    tempArry = cArry;
    
    arry.push(matchArry[4]);
    arry.push(matchArry[5]);
    
    for (i = 0; i < cNdx; i++) {
        var loopCntrl = 0;
        while (loopCntrl === 0) {
            img = tempArry[Math.floor(Math.random() * tempArry.length)];
            if ($.inArray(img, arry) === -1 && $.inArray(img, matchArry) === -1) {
                arry.push(img);
                loopCntrl = 1;
            }
        }       
    }

    arry.shuffle();
    trialMtch[0] = $.inArray(matchArry[4], arry);
    trialMtch[1] = $.inArray(matchArry[5], arry);
    
    if (gamCnt < 30) {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
    }
    else {
        $("#img1").attr('src', arry[0]);
        $("#img2").attr('src', arry[1]);
        $("#img3").attr('src', arry[2]);
        $("#img4").attr('src', arry[3]);
        $("#img5").attr('src', arry[4]);
        $("#img6").attr('src', arry[5]);
        $("#img7").attr('src', arry[6]);
        $("#img8").attr('src', arry[7]);
    }    
}

function countClick(sel, parID) {
    if (active) {
        imgCnt++;
        $(parID).css({'border': '1px solid blue'});
        if (imgCnt === 1) {
            prevSel = sel;
            choice1 = sel;
        
            if (hide) {
                if (sel !== 0) {
                    $('#img1').css({'opacity': '0'});
                }
                if (sel !== 1) {
                    $('#img2').css({'opacity': '0'});
                }
                if (sel !== 2) {
                    $('#img3').css({'opacity': '0'});
                }
                if (sel !== 3) {
                    $('#img4').css({'opacity': '0'});
                }
                if (sel !== 4) {
                    $('#img5').css({'opacity': '0'});
                }
                if (sel !== 5) {
                    $('#img6').css({'opacity': '0'});
                }
                if (sel !== 6) {
                    $('#img7').css({'opacity': '0'});
                }
                if (sel !== 7) {
                    $('#img8').css({'opacity': '0'});
                }
            }
            return false;
        }
        else if (imgCnt === 2) {
            if (sel !== prevSel) {
                stopTime = new Date().getTime();
                choice2 = sel;
                gamCnt++;
                imgCnt = 0;
                active = false;
                if ($.inArray(prevSel, trialMtch) !== -1 && $.inArray(sel, trialMtch) !== -1) {
                    sound.play();
                    calcScore();
                }
                imgAnimate();
            }
            else {
                imgCnt--;
            }
        }
    }
}

function calcScore() {
    var tmp = 0;
    var timer = stopTime - stTime;
    timer = (timer / 1000);
    timer = Math.round(timer * 10) / 10;
    tmp = 4.0 - timer;
    
    if (tmp > 0) {
        tmp = tmp / 2;
        points += tmp;
        points = Math.round(points * 10) / 10;
    }
    
}

function imgAnimate() {
    var match1 = trialMtch[0];
    var match2 = trialMtch[1];
        
    if (match1 === 0 || match2 === 0) {
        $('#img1').css({'opacity': '100'});
    }
    else {
        $('#img1').css({'opacity': '0'});
    }
    if (match1 === 1 || match2 === 1) {
        $('#img2').css({'opacity': '100'});
    }
    else {
        $('#img2').css({'opacity': '0'});
    }
    if (match1 === 2 || match2 === 2) {
        $('#img3').css({'opacity': '100'});
    }
    else {
        $('#img3').css({'opacity': '0'});
    }
    if (match1 === 3 || match2 === 3) {
        $('#img4').css({'opacity': '100'});
    }
    else {
        $('#img4').css({'opacity': '0'});
    }
    if (match1 === 4 || match2 === 4) {
        $('#img5').css({'opacity': '100'});
    }
    else {
        $('#img5').css({'opacity': '0'});
    }
    if (match1 === 5 || match2 === 5) {
        $('#img6').css({'opacity': '100'});
    }
    else {
        $('#img6').css({'opacity': '0'});
    }
    if (match1 === 6 || match2 === 6) {
        $('#img7').css({'opacity': '100'});
    }
    else {
        $('#img7').css({'opacity': '0'});
    }
    if (match1 === 7 || match2 === 7) {
        $('#img8').css({'opacity': '100'});
    }
    else {
        $('#img8').css({'opacity': '0'});
    }
    
    $('img').animate({
        opacity: 0
    }, 400).promise().done(function() {
        imgSel();
    });
}