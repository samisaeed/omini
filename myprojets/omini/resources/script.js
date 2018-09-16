
$(document).ready(function(){
     
    // for sticky navigation 
    $('.js--section-features').waypoint(function(direction){
       if(direction == "down"){
           $('nav').addClass('sticky');
       } else {
        $('nav').removeClass('sticky');

       }
     }, {
          offset: '60px;'

    });

    // scroll on buttons 
    $('.js--scroll-to-plans').click(function(){
      $('html , body').animate({scrollTop: $('.js--section-plans').offset().top },1000);
    });


    $('.js--scroll-to-start').click(function(){
        $('html , body').animate({scrollTop: $('.js--section-features').offset().top },1000);
      });
  
    //  navigation scroll start 

      $( function(){
          $('a[href*=#]:not([href=#])').click(function(){
                    // On-page links
        if (
            location.pathname.replace( /^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) { 
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
                }
                }
            })
        })
            //  navigation scroll ends 


            // animation scroll start
            // 1 number
            $('.js--wp-1').waypoint(function(direction) {
                $('.js--wp-1').addClass('animated fadeIn');
            },{
                offset: '50%'
            });

            // 2 number
            $('.js--wp-2').waypoint(function(direction) {
                $('.js--wp-2').addClass('animated fadeInUp');
            },{
                offset: '50%'
            });
            // 3 num

            $('.js--wp-3').waypoint(function(direction) {
                $('.js--wp-3').addClass('animated fadeIn');
            },{
                offset: '50%'
            });
            // 4num

            $('.js--wp-4').waypoint(function(direction) {
                $('.js--wp-4').addClass('animated pulse');
            },{
                offset: '50%'
            });
    // mobile nav

    // $('.js--nav-icon').click(function(){
    //     var nav = $('.js--main-nav');
    //     // var icon = $('.js--nav-icon i');


    //     nav.slideToggle(200); 

    //     if(icon.hasClass('ion-navicon-round')){
    //         icon.addClass('ion-close-round');
    //         icon.removeClass('ion-navicon-round');

    //     } else{
    //         icon.addClass('ion-navicon-round');
    //         icon.removeClass('ion-close-round');

    //     }

    // })
     $('.js--nav-icon').click(function(){
         var nav = $('.js--main-nav');
         var icon = $('.js--nav-icon i');

          nav.slideToggle(200);

       if(icon.hasClass('ion-navicon-round')){
                icon.addClass('ion-close-round');
                icon.removeClass('ion-navicon-round');
    
           } else{
                 icon.addClass('ion-navicon-round');
                 icon.removeClass('ion-close-round');
    
             }
     });
//  end bracket start 
 });
 //end bracket ends
