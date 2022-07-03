var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		this.classList.toggle("bottom-border");
		var panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
		} else {
			panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

// ! Faqs
let question = document.querySelectorAll(".question");

question.forEach((qsitem) => {
	qsitem.addEventListener("click", function (e) {
		//   store the .answer div containing the answer
		let sibling = qsitem.nextElementSibling;

		// Nested loop for removing active class from all and set answer height to 0
		question.forEach((item) => {
			item.nextElementSibling.style.height = "0px";
			//   remove class "active" except for the currently clicked item
			item != qsitem && item.parentNode.classList.remove("active");
		});
		//then toggle the "active" class of clicked item's parent ".qna"
		this.parentNode.classList.toggle("active");

		// set actual height for .answer div if .qna has the class "active"
		if (qsitem.parentNode.classList.contains("active")) {
			sibling.style.height = sibling.scrollHeight + "px";
		} else {
			sibling.style.height = "0px";
		}
	});
});

// Nested Links

/**
 * Nested Links
 * Allows for links nested inside a block level link wrap
 * via a data attribute of the link location.
 */
var NestedLinks = (function () {
	var nestedLinks = document.querySelectorAll("[data-nested-link]");

	return {
		/**
		 * Init
		 */
		init: function () {
			this.buildLink();
		},

		/**
		 * Build Link
		 * Constructs our nested link from our data attribute
		 */
		buildLink: function () {
			Array.from(nestedLinks).forEach(function (nestedLink) {
				nestedLink.addEventListener("click", function (e) {
					var fakieLink = this.dataset.nestedLink;
					fakieLink &&
						(e.preventDefault(),
						e.stopPropagation(),
						window.open && e.metaKey
							? window.open(fakieLink)
							: window.location.assign(fakieLink));
				});
			});
		},
	};
})();
NestedLinks.init();
