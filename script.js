(function($){
    $(function(){
        /* Scroll to sections */
        $(".jq--scroll-st").click(function(){
           $("html, body").animate({scrollBottom: $(".jq--st").offset().Bottom}, 1050);
        }); 
        
        
        
      $(".jq--scroll-New-information").click(function(){
           $("html, body").animate({scrollTop: $(".jq--New-information").offset().top}, 1000);
        });    
   
 
   $(".jq--scroll-My-product").click(function(){
           $("html, body").animate({scrollTop: $(".jq--My-product").offset().top}, 1050);
        });    
     
       
    $(".jq--scroll-Color-Perfume").click(function(){
           $("html, body").animate({scrollTop: $(".jq--Color-Perfume").offset().top}, 1050);
        });        
        
        
        $(".jq--scroll-Price-list").click(function(){
           $("html, body").animate({scrollTop: $(".jq--Price-list").offset().top}, 1050);
        });
        
        $(".jq--scroll-Orders").click(function(){
            $("html, body").animate({scrollTop: $(".jq--Orders").offset().top}, 1050);
         });  
        
        
       
      //    mobile navigation
        $(".jq--nav-icon").click(function(){
     
    $(".nav-background").slideToggle(200);   
    $(".mobile-nav-back").slideToggle(200);
     $("nav ul").fadeToggle(100);
       
   }); 
     $(".jq--image-hamburger").click(function(){
                                    
     if($(".jq--image-hamburger").attr("src")  =="images/hamburgerMenu.png") {
           
         $( $(".jq--image-hamburger").attr("src","images/crossMenu.png"));
         
         } else{
             $( $(".jq--image-hamburger").attr("src","images/hamburgerMenu.png"));
         }                    
                                    
           }); 
      });
 })(jQuery);
 