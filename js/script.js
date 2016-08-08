$(function() {

	var counter = 0;
	var points = 0;

	$('.home').css({opacity:"1"});

	$('.start').on('click', function() {
		$(".home").fadeOut(1000).hide();
		$("form").fadeIn(1000).show();
	});

	$("input").on("change", function(e) {
		e.preventDefault();
		counter = counter + 1;
		console.log(this);
		$(".question" + counter).fadeOut(1000).hide();
		$(".answer" + counter).fadeIn(1000).show();

		var checkedVal = $(this).val();

		if (checkedVal === "correct") {
			$(".result").html("Correct! It's...");
			points = points + 20;
			console.log(points);
		} else {
			$(".result").html("Nope, it's actually...");
		}
	});

	$(".next").on("click", function(e) {
		e.preventDefault();
		$(".section" + counter).fadeOut(1000).hide();
		$(".section" + (counter + 1)).fadeIn(1000).show();
	});

	$(".submit").on("click", function(e) {
		e.preventDefault();
		$("form").fadeOut(1000).hide();
		$(".score").fadeIn(1000).show();
  		$(".score h3").html(points + "%").delay(750).effect("pulsate", {times:1}, 500);
	});

});