function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

$(document).on('click', '.menu_lang', function() {
	var data = $(this).data('id');
	xhr = $.ajax({
		type: "POST",
		url: site_url("Languages/set_language"),
		data: { id: data },
		dataType:'json',
		success: function(result){
			if(result.status == 1){
				location.reload();
			}
		}
	});
});