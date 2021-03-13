$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hidden_element').each(function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},700);
                    
            }
      
        }); 

    });
    /* Scrolling to sections */

    //See my work button scroll 
    $("#see_my_work_button").click(function(){
        $('html, body').animate({
            scrollTop: $("#portfolio_section").offset().top}, 2000);
    });

    //View projects button scroll
    $("#view_projects_button").click(function(){
        $('html, body').animate({
            scrollTop: $("#portfolio_section").offset().top}, 2000);
    });

    //Let's connect button scroll
    $("#lets_connect_button").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact_section").offset().top}, 2000);
    });

    //About nav link scroll
    $("#about_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#about_section").offset().top}, 2000);
    });

    //Portfolio nav link scroll
    $("#portfolio_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#portfolio_section").offset().top}, 2000);
    });

    //Resume nav link scroll
    $("#resume_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#resume_section").offset().top}, 2000);
    });

    //Contact nav link scroll
    $("#contact_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact_section").offset().top}, 2000);
    });

    //Back to top scroll
    $("#back_to_top_button").click(function(){
        $('html, body').animate({
            scrollTop: $("#showcase").offset().top}, 1000);
    });


    /* Filtering by language */

    //Click portfolio container items
    $('#portfolio_container h5').click(function(){

        $("#portfolio_container h5").removeClass("text-danger").addClass("text-white");

        $(this).addClass("text-danger");

        var language = $(this).attr('data-filter');
        
        if(language === 'All'){
            $("#project_container").children('div').slideDown(700);
        }
        else{
            $('#project_container').children('div:not([data-filter=' + language + '])').slideUp(700);
            $('#project_container').children('div[data-filter=' + language + ']').slideDown(700);
        }
    });
    return false;
});