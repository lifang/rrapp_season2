var curr=null;
function changeCss(n)
{
    if (n==1||n<=3) {
        $('h1').removeClass();
        $('h1').addClass("h_title");
        $('h1').addClass("h_politics");
    }
    else if(n<6){
        $('h1').removeClass();
        $('h1').addClass("h_title");
        $('h1').addClass("h_english");
    }
    if(n>=6){
        $('h1').removeClass();
        $('h1').addClass("h_title");
        $('h1').addClass("h_math");
    }
}
function progress(){
    var p=parseInt((curr/getMaxNum())*100);
    $("div.jd").css("width",p.toString()+"%")
}
function toggleDiv(obj,action){
    var currentDiv=obj.parent().parent();
    currentDiv.hide();
    if(action=="next"){
        var nextDiv=currentDiv.next();
        if(nextDiv!=null&&curr<getMaxNum()){
            curr++;
            nextDiv.show();
        }else{
            window.location.href="/questions/share";
        }
    }
    else if(action=="prev"){
        var prevDiv=currentDiv.prev();
        if(prevDiv==null){
            alert("已经第一题了！")
        }else{
            curr--;
            prevDiv.show();
        }
    }
    changeCss(curr)
}
function getMaxNum(){
    return $("div.exam").size();
}

$(function(){
    //$("div[id*='divstep']").hide();
    if(getMaxNum()>1){
        $("div.exam").hide();
        $("div.exam").first().show();
        curr=1;
        changeCss(curr);
    }else{
        getResult();
        return false;
    }


    $(".next_btn").bind("click",function(){      
        toggleDiv($(this),"next");
        progress();
    });

    $(".prev_btn").bind("click",function(){
        toggleDiv($(this),"prev");
        progress();
    });

    $('li').bind("click",function(){
        $('li:visible').removeClass();
        $(this).toggleClass("dui");
    });
})


 
//result 页面
function getRandom()
{
    return Math.random()*40+30;
}
function getResult(){
    var politics=parseInt(getRandom());
    var english=parseInt(getRandom());
    var math=parseInt(getRandom());
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
}