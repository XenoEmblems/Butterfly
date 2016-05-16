// Edit Mood
$('rect#Rectangle-22').click(function(){
    $("#1").hide();
    $("#2").show();
});

// Randomize div order on load
var questions = $(".question");
for(var i = 0; i < questions.length; i++){
    var target = Math.floor(Math.random() * questions.length -1) + 1;
    var target2 = Math.floor(Math.random() * questions.length -1) +1;
    questions.eq(target).before(questions.eq(target2));
}

// Show or hide Text Area

$(function() {

    $('input:radio').on('change', function(){
        // compare against string value of input
        if ($(this).val() === '1' )  {  
            // show textarea closest to $(this) 
            $(this).closest('div').find('textarea').show();
        }
        else if ($(this).val() === '2' )  {  
            // show textarea closest to $(this) 
            $(this).closest('div').find('textarea').show();
        }
        else {
            $(this).closest('div').find('textarea').hide();
        }
        
    });

});