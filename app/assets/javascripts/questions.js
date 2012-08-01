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
//l为最低分数

//答题过程
$(document).ready(function(){

    $('li').bind("click",function(){
        $(this).siblings().removeClass("dui");
        $(this).toggleClass("dui");
    });
    $(".mask").show();
    generate_flash_div(".tab");

    $('.ck_btn').bind("click",function(){
        //计算成绩
        if($("li.dui").length <= 0){
            alert("请先回答问题");
            return false;
        }
        if($("li.dui").length<3){
            alert("请回答所有问题");
            return false;
        }
        var sum=0;
        $("li.dui").each(function(){
            sum=sum+parseInt($(this).attr("value"))
        });
        window.location.href="/result?sum="+sum;
    });
})