var $doc = $(document),
	$inputs = $(".btn--inputs"),
	$signup_btn = $("input[name='signup']"),
	$login_btn = $("input[name='login']"),
	$signup_form = $("#signup_form > .btn--inputs"),
	$login_form = $("#login_form > .btn--inputs");

$doc.ready(function() {
	$('.btn--inputs').hide();

	$signup_btn.click(function(event){
			$signup_form.slideToggle("slow");
		}
	);

	$login_btn.click(function(event){
			$login_form.slideToggle("slow");
		}
	);
});
