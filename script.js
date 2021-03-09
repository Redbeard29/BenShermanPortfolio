/*$(document).ready(function(){
    $(window).scroll(function(){

    })
    //dynamically appearing elements on scroll
    $("#see_my_work_button").click(function(){
        for(let x = 0; x < 5; x++){
            $("#attribute_card_" + x).fadeIn("slow");
        }
    });
});
*/

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll(function(){
    
        /* Check the location of each desired element */
        $("#hidden_element").each(function(){
    
            const bottom_of_object = $(this).position().top + $(this).outerHeight();
            const bottom_of_window = $(window).scrollTop() + $(window).height();
    
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
    
                $(this).animate({'opacity':'1'},500);
    
            }    
        }); 
    }); 
});