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
    //resume nav link scroll
    $("#resume_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#resume_section").offset().top}, 2000);
    });
    //Contact nav link scroll
    $("#contact_nav_link").click(function(){
        $('html, body').animate({
            scrollTop: $("#contact_section").offset().top}, 2000);
    });
});