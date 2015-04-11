	$('.panel').each(function(){
		var img_url = $(this).find('img').attr('src');
		$(this).css("background", "url("+img_url+") no-repeat center center");
	});