jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();


    // Smooth scrolling
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-20}, 500);
    });

    // contact form show
    $('#contactButton').click(function() {
        event.preventDefault();

        var width = $(window).width();

        console.log(width);
        if (width < 768) {
            window.open("https://goo.gl/forms/RkuiupQxLuwpWdVP2", "_blank");
        } else {
            $('#contactFormContainer').fadeToggle();
        }
        
    });

    // contact form hide
    $('#contactCloseButton').click(function() {
        event.preventDefault();
        $('#contactFormContainer').fadeOut();
    });
  
    // contact form hide
    $(document).mouseup(function (e) {
        var container = $("#contactFormContainer");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            container.fadeOut();
        }
    });
    
});