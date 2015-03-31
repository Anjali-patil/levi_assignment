
 $(document).ready(function() 
 { 
      $('.myMenu > li#men').bind('mouseover', openSubMenu); 
      $('.myMenu > li#men').bind('mouseout', closeSubMenu); 
      
      function openSubMenu() 
      { 
          $("#sub-menu-2").css('display', 'block');
          
         }; 
      function closeSubMenu() 
      { 
       
        $("#sub-menu-2").css('display', 'none');
        
        }; 
       
        
      $('.myMenu > li#women').bind('mouseover', openSubMenuwomen); 
      $('.myMenu > li#women').bind('mouseout', closeSubMenuwomen); 
      function openSubMenuwomen() 
      { 
          $("#sub-menu-3").css('display', 'block'); 
         }; 
      function closeSubMenuwomen() 
      { 
       
        $("#sub-menu-3").css('display', 'none'); 
        }; 
        
        
      
       $('.myMenu > li#accessories').bind('mouseover', openSubMenuacc); 
       $('.myMenu > li#accessories').bind('mouseout', closeSubMenuacc); 
       function openSubMenuacc() 
       { 
           $("#sub-menu-4").css('display', 'block'); 
          }; 
       function closeSubMenuacc() 
       { 
        
         $("#sub-menu-4").css('display', 'none'); 
         }; 
        
         
       $('.myMenu > li#501').bind('mouseover', openSubMenushop); 
       $('.myMenu > li#501').bind('mouseout', closeSubMenushop); 
       function openSubMenushop() 
       { 
           $("#sub-menu-5").css('display', 'block'); 
          }; 
       function closeSubMenushop() 
       { 
        
         $("#sub-menu-5").css('display', 'none'); 
         }; 
         
         
         $('.myMenu > li#madeandcrafted').bind('mouseover', openSubMenumade); 
       $('.myMenu > li#madeandcrafted').bind('mouseout', closeSubMenumade); 
       function openSubMenumade() 
       { 
           $("#sub-menu-6").css('display', 'block'); 
          }; 
       function closeSubMenumade() 
       { 
        
         $("#sub-menu-6").css('display', 'none'); 
         };  
        
        //script for carosule
         $('.carousel-controller ul li').mouseover(function(){
                $('.carousel-controller ul li').each(function(){
                    $(this).removeClass("active");
                });

                $(this).addClass("active");
                var index = $(this).index() + 1;
                $('.carousel-slides li').each(function(){
                    $(this).hide();
                });
                 $('.carousel-slides li:nth-child('+ index +')').show();

            });
            // script for more link
             // $(window).scroll(function () {
        // if ($(this).scrollBottom() > 100) {
            // $('.scrolldown').fadeIn();
        // } else {
            // $('.scrolldown').fadeOut();
        // }
    // });
// 
    // $('.scrolldown').click(function () {
        // $("html, body").animate({
            // scrollBottom: 0
        // }, 600);
        // return false;
    // });

            
         
  });
  

 	$(document).ready(function(){
 		$(function() {
 			$("#temp").click(function() {        
         return false;
     	});
 		});
 		 	
 		 	})
 		 	
