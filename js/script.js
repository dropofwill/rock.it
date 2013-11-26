var $doc = $(document),
	$inputs = $(".btn--inputs"),
	$signup_btn = $("input[name='sigup']"),
	$login_btn = $("input[name='login']"),
	$signup_form = $("#signup_form"),
	$login_form = $("#login_form"),
	signup_open = false,
	login_open = false;

$doc.ready(function() {
	//$('.btn--inputs').hide();

	$signup_btn.click(function(event){
		if (signup_open === false) {
			event.preventDefault();
			$signup_form.preventDefault();
			$signup_form.$inputs.fadeIn();
		}
		else {

		}
	});
});
