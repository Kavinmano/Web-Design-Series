$(document).ready(function() {
 $('#click').click(function() {
    // alert('Hello Guys');
    $('.box').fadeToggle(2000);
 });
$('.box').mouseenter(function(){
    $(this).css({"background-color" : "red"});
});

$('.box').mouseleave(function(){
    $(this).css({"background-color" : "green"});
});

$('#name').blur(function(){
    var userInput = $(this).val();

    if(userInput.length < 4){
        $('.error').show();
        
    }
})
});