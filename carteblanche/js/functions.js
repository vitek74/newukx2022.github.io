$(document).ready(function() {
   $('.navigation li a').mousedown(function() { $(this).addClass('pressed') }).mouseup(function() { $(this).removeClass('pressed') });    
});


$(document).ready(function() {
	$('#toggleButton').click(function(event) {
		
		//bind to body for click anywhere close
		$("body").one("click",function() {			
			$("#dropDownItems").animate({opacity: "hide"}, "fast");
		});		
		event.stopPropagation();
				
   		$("#dropDownItems").toggle('fast');
   });
   
   
   //option has been clicked
   /*
   1. Get the link text of the item and set the selected text to it
   2. Toggle the currently shown element in place with the chosen element
   3. Set the clicked link to the class 'visible'
   */
   $('#dropDownItems li a').click(function(e) {
   		  	
   		var target = e.target; //target of the link
   		var linkText = $(this).text();   		
   		var hash = $(this).attr('href').split('#')[1]; //should map to the id of the content to show
   		   		
   		$("#dropDownItems").animate({opacity: "hide"}, "fast");
   		$('#dropDownItems li a').removeClass('visible selected');
   		$(this).addClass('visible selected');   	
   		   		
   		//set the selected text	
   		$('#selectedText').html(linkText);
   		   		
   		//hide currently visible content   		
   		$(this).parent().parent().parent().nextAll(".visibleContent").animate({opacity: "hide"}, "fast").removeClass('visibleContent').addClass('invisible');
   		
   		//show the div we want
   		$('#' + hash).animate({opacity: "show"}, "fast").addClass('visibleContent').removeClass('invisible');
   		
   		return false;
   });   
});



