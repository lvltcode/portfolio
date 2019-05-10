const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "HTML",
				weight: 10
			},
			{
				text: "Markdown",
				weight: 10
			}, {
				text: "CSS",
				weight: 10
			}, {
				text: "javascript",
				weight: 10
			}, {
				text: "Flask",
				weight: 10
			}, {
				text: "think like a programmer",
				weight: 8
			}, {
				text: "python",
				weight: 14
			}, {
				text: "Wordpress",
				weight: 9
			}, {
				text: "Sell your ideas",
				weight: 9
			}, {
				text: "SQL",
				weight: 11
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"Full-Stack Web Developer", "love to solve problems", "also love to teach programming to people", "eat banana"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
