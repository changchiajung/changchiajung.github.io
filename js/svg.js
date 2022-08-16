var $fsvg = $("#firstSvg").drawsvg({
    duration: 200,
    stagger: 50,
    callback: function () {
    }
})
var $ssvg = $("#secondSvg").drawsvg({
    duration: 200,
    stagger: 50,
    callback: function () {
    }
})
var $tsvg = $("#thirdSvg").drawsvg({
    duration: 300,
    callback: function () {
    }
})
var $skillsvg = $("#skillSvg").drawsvg({
    duration: 300
})
var showSkillSvgBool = false;
var showSkillSvgHeight = $("#skills").offset().top - $("#mainNav").outerHeight() + 2


$(document).ready(function () {
    $fsvg.drawsvg("animate")
    setTimeout(function () {
        $ssvg.drawsvg("animate")
    }, 800)

    setTimeout(function () {
        $tsvg.drawsvg("animate")
        setTimeout(function () {
            $("#thirdSvg > path").css({fill: "white"})
        }, 400)
    }, 2100)

    $(document).on("scroll", function(){
        if(!showSkillSvgBool && $(document).scrollTop() >= showSkillSvgHeight){
            showSkillSvgBool = true;
            $skillsvg.drawsvg("animate")
            setTimeout(function () {
                $("#skillSvg > path").css({fill: "black"})
            }, 400)
        }
    })
})