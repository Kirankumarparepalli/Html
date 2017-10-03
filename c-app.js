$(document).ready(function(){
    
    $("#ex6").slider();
$("#ex6").on("slide", function(slideEvt) {
	$("#ex6SliderVal").val(slideEvt.value);
    e.preventDefault();
});
    
$("#ex6SliderVal").on("keyup", function(e) {
    console.log(e);
    
    console.log(e.target.value);
    
    $('#ex6').slider('setValue', e.target.value);
});
    
    
});

