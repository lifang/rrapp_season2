 function get()
 {
     return Math.random()*40+30;
 }

 $(function(){
     $("#politics").html(get())
     $("#english").html(get())
     $("#math").html(get())
 })

