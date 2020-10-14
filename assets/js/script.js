$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
})
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});
$("input[type='text']").keypress(function(e){
    if(e.which === 13)
    {
        var text = $(this).val()
        $(this).val("")
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+text+"</li>")
    }
})
$("h1 i").click(function(){
    $("input").slideToggle();
    $(this).toggleClass("fa-plus")
    $(this).toggleClass("fa-minus")
})