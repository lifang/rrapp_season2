function generate_flash_div(style) {
    var scolltop = document.body.scrollTop|document.documentElement.scrollTop;
    var win_height = document.documentElement.clientHeight;//jQuery(document).height();
    var win_width = jQuery(window).width();
    var z_layer_height = jQuery(style).height();
    var z_layer_width = jQuery(style).width();
    jQuery(style).css('top',(win_height-z_layer_height)/2 + scolltop);
    jQuery(style).css('left',(win_width-z_layer_width)/2);
    jQuery(style).show();
}

//判断是否空或者全部是空格
function checkspace(checkstr){
    var str = '';
    for(var i = 0; i < checkstr.length; i++) {
        str = str + ' ';
    }
    if (str == checkstr){
        return true;
    } else{
        return false;
    }
}

function submit_share() {
    if (checkspace($("#t_result").val())) {
        alert("请填写你分享的内容。");
        return false;
    }
    var share = ($("#share").attr("checked") == "checked") ? 1 : 0;
    $.ajax({
        async:true,
        dataType:'script',
        url:"/questions/share",
        
        data:{
            content : $("#t_result").val(),
            is_share : share,
            asse_t : $("#asse_t").val()
        },
        success:function(request){
            $(".mask").hide();
            $(".tab").hide();
        },
        type:'post'
    });
    return false;
}

//答题过程
$(document).ready(function(){
    if ($('.exam .q_list').length == 0) {
        $(".mask").show();
        generate_flash_div(".tab");
    } else {
        var sum = 0;
        $('li').bind("click",function(){
            $(this).siblings().removeClass("dui");
            $(this).toggleClass("dui");
            sum = sum + parseInt($(this).attr("value"));
        });
        $(".next_btn").bind("click",function(){
            var curr_p_div = $(this).parent().parent();
            curr_p_div.hide();
            var next_div = curr_p_div.next();
            if (next_div.attr("class") == "exam") {
                curr_p_div.next().show();
                progress(curr_p_div);
            } else {
                if($("li.dui").length <= 0){
                    next_div.prev().show();
                    progress(next_div.prev());
                    alert("请先回答问题");
                    return false;
                }
                if($("li.dui").length<5){
                    next_div.prev().show();
                    progress(next_div.prev());
                    alert("请回答所有问题");
                    return false;
                }
                window.location.href="/result?sum="+sum;
            }
        });
        $(".prev_btn").bind("click",function(){
            var curr_p_div = $(this).parent().parent();
            curr_p_div.hide();
            curr_p_div.prev().show();
            progress(curr_p_div.prev());
        });
    }
})

function show_result(is_yuwen) {
    var result_url = "/questions/result?is_yuwen=" + is_yuwen;
    if ($("#share").attr("checked") == "checked") {
        result_url += "&share=1";
    }
    window.location.href = result_url;
}
//显示进度
function progress(item) {
    var p = parseInt((($(".exam").index(item)+1)/$("div.exam").size())*100);
    $("div.jd").css("width",p.toString()+"%");
}
