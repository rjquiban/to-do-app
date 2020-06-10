//Check off to-dos when clicked
$("ul").on("click", "li", function() {      //have to add on parent element, then specify child so it works on future elements
    $(this).toggleClass("completed");
});

//delete to-do when X/trash is clicked
$("ul").on("click", ".delete", function(event) {    //added to parent element
    $(this).parent().fadeOut(600, function() { //.parent() gives parent element of li
        $(this).remove();
    });  
    event.stopPropagation();    //stops parent click functions from running
});

//adding new to-dos from input
$("input").on("keypress", function(event) {
    //when enter is clicked (enter = 13)
    if(event.which === 13) {
        //get value of input
        let newItem = $(this).val();
        //add item to list
        $("ul").append("<li><span class=\"delete\"><i class=\"fa fa-trash\"></i></span> " + newItem + "</li>");
        //clear input
        $("input").val("");
    }
});

$(".fa-plus").on("click", function() {
    $("input").fadeToggle();
});