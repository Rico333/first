$(document).ready(function() {
	$('.contact-form__form').submit(function(event){
		event.preventDefault();
		var form = new FormData(this);
		var action = $(this).attr('action');
		$('.contact-form__button').hide();
		$.ajax({
			type: "POST",
			url: action,
			data: form,
			//enctype: 'multipart/form-data',
			dataType: 'json',
			contentType: false,
			cache: false,
    		processData: false,
			success: function(data)
            {	
                //data = JSON.parse(data);
                alert(data['message']);
                console.log(data);
                if (data['status'] == 'ok') {
                	$('.contact-form__form').get(0).reset();
            	}
            	$('.contact-form__button').show();
            },
            error: function (jqXHR, textStatus, errorThrown) {
            	alert('Произошла ошибка, попробуйте ещё раз');
            	$('.contact-form__button').show();
            }
		}).done(function(){
			//alert("Спазибо за заявку! Скоро мы с вами свяжемся.");
		})
		return false;
	});

	$('#attach-file').change(function() {
	 	var value = $(this).attr('value');
	 	if (!value || value == ''){
	 		$('.contact-form__attach-file').html('прикрепить файл');
	 	} else {
	 		value = value.match(/[\/\\][^\/\\]+$/s);
	 		if (!value || value[0] == '' || value[0].length < 2) {
	 			$('.contact-form__attach-file').html(value[0]);
	 		} else {
	 			$('.contact-form__attach-file').html(value[0].substr(1, value[0].length));
	 		}
	 		
	 	}
	});
});
