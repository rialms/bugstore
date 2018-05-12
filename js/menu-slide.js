jQuery(document).ready(function($) {
   $.fn.slideFromTop = function(options) {
      console.log('see the options here ', options);
      var options = $.extend({
         menu : this,
         menuBtn : $('#menuBtn'),       
         body : $(document.body),
         bodyOverlay: $('.overlay'),    
         navbar: $('.navbar'),          
         menuSpeed : 500,               
      }, options);
      
      var menuWidth = options.menu.width();
      var menuHeight = options.menu.height();
    
      $(document.body).css({
         'overflow-x' : 'hidden',
         'left' : 0,
      });
    
      options.menu.css({
         'position' : 'fixed',
         'top' : -( menuHeight * 5 ) + 'px',
         'left': 0,
         'width': menuWidth + 'px',
         'height' : 100 + '%',
      });
      
      options.navbar.css('z-index', '50');
    
      options.openMenu = function() {
         var menuMargin = options.navbar.height();
         $('.menu-slide').show();
         $('.menu-slide').animate({ 'top': menuMargin }, options.menuSpeed);
         $('.overlay').fadeIn(options.menuSpeed);
         $('.menu-slide').scrollTop(0);
         options.body.addClass('noscroll');
      };
    
      options.closeMenu = function() {
         $('.menu-slide, .overlay').fadeOut(options.menuSpeed);
         $('.menu-slide').css('top', '-1040px');
         options.body.removeClass('noscroll');
      };
    
      options.menuBtn.on('click', function(e) {
         e.preventDefault();
         options.body.toggleClass('menuOpen');
         if ( options.body.hasClass('menuOpen') ) {
            options.openMenu();
         } else {
            options.closeMenu();
         }
      });
      
      options.bodyOverlay.on('click', function() {
         options.body.toggleClass('menuOpen');
         if ( !options.body.hasClass('menuOpen') ) options.closeMenu();
      });
    
   };
  
});