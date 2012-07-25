var curr=null;
function changeCss(n)
{
    if (n==1) {
        $('h1').removeClass();
        $('h1').addClass("h_title");
        $('h1').addClass("h_politics");
    }
    if(n==4){
        $('h1').removeClass();
        $('h1').addClass("h_title");
        $('h1').addClass("h_english");
    }
    if(n==6){
        $('h1').removeClass();
        $('h1').addClass("h_title");
        $('h1').addClass("h_math");
    }
}


function nextStep()
{
    if(curr!=null)
    {
        $('#divstep'+curr.toString()).hide();
        curr++;
        $('#divstep'+curr.toString()).show();

    }else{
        $('#divstep1').show();
        curr=1;
    }
    changeCss(curr);
}
function prevStep(){
    if(curr!=null)
    {
        $('#divstep'+curr.toString()).hide();
        curr--;
        $('#divstep'+curr.toString()).show();
    }else{
        $('#divstep1').show();
        curr=1;
    }
    changeCss(curr);
}
function progress(){
   var p=parseInt((curr/6)*100);
   $("div.jd").css("width",p.toString()+"%")
}

$(function(){
    $("div[id*='divstep']").hide();
    nextStep();

    $(".next_btn").bind("click",function(){      
        nextStep();
        progress();
    });

    $(".prev_btn").bind("click",function(){
        prevStep();
        progress();
    });

    $('li').bind("click",function(){
        $('li:visible').removeClass();
        $(this).toggleClass("dui");
    });
})



