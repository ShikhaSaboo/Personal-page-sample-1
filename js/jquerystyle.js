
$(document).ready(function(){
	var scroll_start = 0;
	
		$(document).scroll(function(){
		scroll_start = $(window).scrollTop();
		if(scroll_start > 200 ){
			$('.navbar').removeClass('navstyle');
			$('.navbar').addClass('change-navstyle');
		
		}
		else {
			$('.navbar').addClass('navstyle');
			$('.navbar').removeClass('change-navstyle');
		}	
		});
	
	// $('.skillbar').each(function(){
	// 	$(this).find('.skillbar-bar').animate({
	// 		width:$(this).attr('data-percent')},1000);
	// });

	var lastId, topMenu,topMenuHeight,menuItems,scrollItems;
	topMenu = $('.menu-scroll');
	topMenuHeight = topMenu.outerHeight();
	console.log("topMenuHeight",topMenuHeight);
	menuItems = topMenu.find('a[href^=\\#]');
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

	menuItems.click(function(e){
	  var href = $(this).attr("href");
	
	  var    offsetTopp = href === "#" ? 0 : $(href).offsetTop-topMenuHeight+15;
	 
	  jQuery('html, body').stop().animate({ 
	      scrollTop: offsetTopp
	  }, 900);
	  e.preventDefault();
	});
// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	 
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (id === "skill"){
	   	console.log("inside skill" ,id);
		$('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')},1000);
	});
	}       
	   if (lastId !== id) {
	       lastId = id;
	       
	       // Set/remove active class
	       menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=\\#"+id+"]").parent().addClass("active");
	   } 


	});

	
    $('.carousel').carousel({
      interval: 6000
    })

});