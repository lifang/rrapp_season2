//显示结果
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

//显示标题内容
function show_title(item) {
    var index = $(".exam").index(item);
    if (index > 1 && index < 4) {
        $('h1').removeClass().addClass("h_title h_politics");
    } else if (index == 4) {
        $('h1').removeClass().addClass("h_math");
    }
}

//答题过程
$(document).ready(function(){
    $('li').bind("click",function(){
        $('li').removeClass("dui");
        $(this).toggleClass("dui");
    });
    
    $(".next_btn").bind("click",function(){
        var curr_p_div = $(this).parent().parent();
        curr_p_div.hide();
        var next_div = curr_p_div.next();
        if (next_div.attr("class") == "exam") {
            curr_p_div.next().show();
            show_title(next_div);
            progress(curr_p_div);
        } else {
            var li_index = $(this).parent().prev().children().index($(".dui"));
            window.location.href = li_index == 3 ? "/questions/share?yuwen=1" : "/questions/share?yuwen=0";
        }        
    });
    $(".prev_btn").bind("click",function(){
        var curr_p_div = $(this).parent().parent();
        curr_p_div.hide();
        curr_p_div.prev().show();
        show_title(curr_p_div.prev());
        progress(curr_p_div);
    });

    if ($(".exam .q_list").length > 0) {
        $('h1').removeClass().addClass("h_title h_english");
    } else {
        $('h1:first').removeClass().addClass("h_title h_ky");
    }
})