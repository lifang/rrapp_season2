function get()
{
    return Math.random()*40+30;
}

$(function(){
    var politics=parseInt(get());
    var english=parseInt(get());
    var math=parseInt(get());
    $("#politics").html(politics);
    $("#english").html(english);
    $("#math").html(math);
    if(politics>=60&&english>=60&&math>=60)
    {
        $("#result").html("亲~有戏哦！COME ON！");
    }else{
        $("#result").html("亲~你需要努力哦!");
    }


    $(".join_btn").bind("click",function(){
       window.location.href="http://page.renren.com/601411057";
    });
});

