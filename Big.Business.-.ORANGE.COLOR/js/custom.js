jQuery(function(){
			jQuery('ul.sf-menu').superfish();
});
		
//set up search toggle 
	$("#search-container").hide(); 
     $(document).ready(function() {
          $('.search-trigger').click(function() {
               $('#search-container').toggle();
          });
     });
