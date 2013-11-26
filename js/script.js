var $doc = $(document),
	$inputs = $(".btn--inputs"),
	$signup_btn = $("input[name='signup']"),
	$login_btn = $("input[name='login']"),
	$signup_form = $("#signup_form > .btn--inputs"),
	$login_form = $("#login_form");

$doc.ready(function() {
	$('.btn--inputs').hide();

	$signup_btn.click(function(event){
			console.log('yolo');
			$signup_form.slideToggle();
		}
	);
});
