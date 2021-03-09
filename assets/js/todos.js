$("ul").on("click", "li", function(){
//svaki put kada je li kliknut unutar ul
    //Prvi nacin
    /*if($(this).css("color") != "rgb(128, 128, 128)"){
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        });
    }else{
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }*/

    //Drugi nacin, pomocu klase
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().slideToggle(170, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        if($("input").val() != ""){
            var todoText = $(this).val();
            $(this).val("");
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        }
    }
});

$(".fa-plus").on("click", function(event){
    $("addInput").slideToggle(170);
})

$(".fa-file").on("click", function(){
    $("li").slideUp(400, function(){
        $("li").remove();
    });
});