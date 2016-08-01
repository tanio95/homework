/* 1va zadacha
	
	$(document).ready(function(){
    $('.btn1').click(function(){
    $('p').show();
    });
}); 

*/

/* 3-ta zadacha $(document).ready(function(){
    $('.btn2').click(function(){
        $('.yellow').fadeIn(200);
    });
}); */

 /* 4-ta zadacha $(document).ready(function(){
    $('.btn3').click(function(){
        $('.yellow').fadeOut(200);
    });
}); */

/* 5-ta zadacha $(document).ready(function(){
    $(".btn4").hover(function(){
    $(".red").slideToggle("slow");
    });
}); */

/* 6-ta zadacha
$(document).ready(function(){
    $(".btn-change").click(function(){
        $("p1").show();
    });
}); */

$(document).ready(function(){
    $(".box-red").click(function(){
        $(this).animate({width:"400px"});
    });
});
