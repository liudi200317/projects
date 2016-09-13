

/**
 * loading 进度计算
 * @param resolve
 */
function loaded(resolve) {
    console.log("loaded...");
    complete++;
    resolve();
    $percent.text(Math.min(Math.floor(complete / total * 100), 100) + '%');
}

/**
 * timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果
 * @param time
 * @param obj
 * @returns {*}
 */
function timeout(time,obj){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve(obj);
        },time)
    })
}


/**
 * 音频的播放
 * @param id
 * @param loop
 * @returns {Element}
 */
function play(id,loop){
    var audio = document.getElementById(id);
    if(audio){
        if(loop){
            audio.loop = true;
        }
        audio.play();
    }
    return audio;
}
/**
 * 停止音频播放
 * @param id
 * @returns {Element}
 */
function stop(id){
    var audio = document.getElementById(id);
    if(audio){
        audio.currentTime = 0 ;
        audio.loop = false;
        audio.pause();
    }
    return audio;
}

function toZero(num){
    if(num<10){
        return '0' + num;
    }
    else{
        return '' + num;
    }
}

function change(num){
    num = parseInt(num);
    var iM = toZero(Math.floor(num%3600/60));
    var iS = toZero(Math.floor(num%60));
    return iM + ':' + iS;
}

/**
 * loading
 */
//    记录图片加载完成个数;
var complete = 0,st = null;
var allResources = $('img').toArray();
var total = allResources.length;
var h = $("#messageList.step1 li:nth-of-type(2)").height();
var $audio_time = $("#audio_time");
var $messageList = $("#messageList");
var $tapz = $("#s_2_z");
//    loading 进度元素
var $percent = $(".preload-percent");
timeout(500).then(function(){
    return Promise.all(
        allResources.map(function(res) {
            return new Promise(function(resolve){
                if(res.nodeName === 'IMG'){
                    if(res.complete){
                        loaded(resolve);
                    }else {
                        res.onload = function() {
                            loaded(resolve);
                        };
                    }
                }
            })
        })
    );
}).then(function(){
    return timeout(500)
}).then(function(val){
    $("#scene_1").show();
    play('bell');
    $("#preload").fadeOut();
    return timeout(0);
}).then(function(){

    return new Promise(function(resolve){
        $("#s_1_btn").tap(function(){
            stop('bell');
            $("#phone_btn").fadeOut();
            $("#phone_key").css({
                "-webkit-transform":"translateY(0px)"
            });
            $audio_time.html("00:00");
            play('say');
            var say = document.getElementById("say");
            st = setInterval(function(){
                console.log("timer");
                var t = say.currentTime;
                $audio_time.html(change(t));
                if(t == say.duration){
                    console.log(say.duration);
                    clearInterval(st);
                    stop('say');
                    $("#s_1_detail_btn").trigger('tap');

                }

            },1000);
            resolve();
        })

    })

}).then(function(){
    return new Promise(function(resolve){
        $("#s_1_detail_btn").tap(function(){
            console.log(">>>>>>>");
            play('music');
            stop('say');
            clearInterval(st);
            $("#scene_1").css({"-webkit-transform":"translateY(100%)"});
            $("#scene_2").show();
            timeout(500).then(function(){
                $("#scene_1").hide();
            });
            resolve();

        });
    })

}).then(function(){
    $messageList.addClass("step1");
    return timeout(500);
}).then(function(){
    $messageList.addClass("step2");
    return timeout(500);

}).then(function(){
    $messageList.addClass("step3");
    return timeout(500);

}).then(function(){
    $messageList.addClass("step4");
    return timeout(500);
}).then(function() {
    $messageList.addClass("step5").css({"-webkit-transform":"translateY(-"+40+"px)"});
    return timeout(500);
}).then(function() {
    $messageList.addClass("step6").css({"-webkit-transform":"translateY(-"+80+"px)"});
    return timeout(500);
}).then(function() {
    $messageList.addClass("step7").css({"-webkit-transform":"translateY(-"+120+"px)"});
    return timeout(1200);
})
    .then(function(){
        $tapz.text("你");
        return timeout(200);
    }).then(function(){
        $tapz.text("你好");
        return timeout(200)
}).then(function(){
        $tapz.text("你好,");
        return timeout(200)
}).then(function(){
        $tapz.text("你好,我");
        return timeout(200)
}).then(function(){
        $tapz.text("你好,我看");
        return timeout(200)
}).then(function(){
        $tapz.text("你好,我看看");
        return timeout(200)
}).then(function(){
        $tapz.text("你好,我看看~");
        return timeout(500)
})



    .then(function(){
    stop('music');
    $("#scene_2").css({"-webkit-transform":"translateY(100%)"});
    $messageList.attr("class","");
    return timeout(200);
}).then(function(){
    $("#scene_3").fadeIn();
    $("#scene_2").hide();
    return timeout(500);

}).then(function(){
    $(".s_3_p").css({"-webkit-transform":"translateY(0)"});
    $(".s_3_p > img").fadeIn();
});
