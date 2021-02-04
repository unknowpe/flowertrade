HOST="http://127.0.0.1:5000";
$(document).ready(function() {

	$('#login').on('click', function(event) {

		$.ajax({
			data : {
				name : $('#username').val(),
				email : $('#password').val(),
				useragent : navigator.userAgent
			},
			type : 'POST',
			url : HOST+'/login'
		})
		.done(function(data) {

			if (data.error) {
				$('#errorAlert').text(data.error).show();
				$('#successAlert').hide();
			}
			else {
				//document.cookie="session=john doe";
				login = "<p>Welcome, "+data.name+"</p>"+
				"<br>"+"Balance: "+data.login["Doge"]["Balance"])/(10 ** 8)
				$('#successAlert').text(login).show();
				$('#errorAlert').hide();
			}

		});

		event.preventDefault();

	});

});