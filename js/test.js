$(function() {
	let testResult = {
		fio: '',
		tel: '',
		answers: []
	}
	
	$('.test-btn_next').on('click', function(e) {

		let formFilled = true;
		if( !$('.test-form__input_fio').val() ) {
			$('.test-form__input_fio').addClass('error');
			formFilled = false;
		}

		if( !$('.test-form__input_tel').val() ) {
			$('.test-form__input_tel').addClass('error');
			formFilled = false;
		}

		if(!formFilled) return; 

		$('.test-step_0').removeClass('active');
		$('.test-step_1').addClass('active');

		testResult.fio = $('.test-form__input_fio').val();
		testResult.tel = $('.test-form__input_tel').val();

	});

	
	$('.test-step[data-step] .radios input').on('change', function(e) {
		let cont = $(this).parents('.test-step');
		let index = $(cont).data('step');
		let question = $('.test-step__heading' , cont).text();
		let answer = $(this).val();
		let totalSteps = $('.test-step[data-step]').length;

		testResult.answers[index - 1] = {
			question,
			answer
		};
		$(cont).removeClass('active');
		$(cont).next().addClass('active'); 

		if(totalSteps == index) {
			
			//Конец теста
			console.log(testResult);

		}
	});

	$('.test-btn_restart').on('click', function(e) {

		testResult = {
			fio: '',
			tel: '',
			answers: []
		};

		$('.test-form__input_fio').val('');
		$('.test-form__input_tel').val('');

		$('.test-step[data-step] .radios input:checked').prop('checked', false);

		$('.test-step_result').removeClass('active');
		$('.test-step_0').addClass('active');

	});

	$('.test-step__prev').on('click', function(e) {
		let cont = $(this).parents('.test-step');

		$(cont).removeClass('active');
		$(cont).prev().find('.radios input:checked').prop('checked', false); ///TODO
		$(cont).prev().addClass('active'); 
	});

});
