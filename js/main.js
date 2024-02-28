(function ($) {
	"use strict";

	// Spinner
	var spinner = function () {
		setTimeout(function () {
			if ($("#spinner").length > 0) {
				$("#spinner").removeClass("show");
			}
		}, 1);
	};
	spinner(0);

	document.querySelectorAll(".nav-pills a").forEach(function (element) {
		element.addEventListener("click", function (event) {
			event.preventDefault();
			var targetTab = document.querySelector(event.target.getAttribute("href"));
			var activeTab = document.querySelector(".tab-pane.active");
			if (activeTab) {
				activeTab.classList.remove("active", "show");
			}
			if (targetTab) {
				targetTab.classList.add("active", "show");
			}
		});
	});

	// Fixed Navbar
	$(window).scroll(function () {
		if ($(window).width() < 992) {
			if ($(this).scrollTop() > 55) {
				$(".fixed-top").addClass("shadow");
			} else {
				$(".fixed-top").removeClass("shadow");
			}
		} else {
			if ($(this).scrollTop() > 55) {
				$(".fixed-top").addClass("shadow").css("top", -55);
			} else {
				$(".fixed-top").removeClass("shadow").css("top", 0);
			}
		}
	});
	// Product Quantity
	$(".quantity button").on("click", function () {
		var button = $(this);
		var oldValue = button.parent().parent().find("input").val();
		if (button.hasClass("btn-plus")) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		button.parent().parent().find("input").val(newVal);
	});

	// Testimonials data
	var testimonials = [
		{
			image: "img/testimonial-1.jpg",
			name: "John Doe",
			stars: 4,
			message:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
		},
		{
			image: "img/client-1.png",
			name: "John Doe",
			stars: 3,
			message:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
		},
		{
			image: "img/client-2.png",
			name: "John Doe",
			stars: 5,
			message:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
		},
		{
			image: "img/client-3.png",
			name: "John Doe",
			stars: 4,
			message:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
		},
		{
			image: "img/testimonial-1.jpg",
			name: "John Doe",
			stars: 5,
			message:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt voluptatem alias ut provident sapiente repellendus.",
		},
		// Add more testimonials as needed
	];

	// Populate testimonial carousel
	$.each(testimonials, function (index, testimonial) {
		var item = $("<div>").addClass(
			"testimonial-item img-border-radius bg-transparent rounded p-4"
		);
		var positionRelative = $("<div>").addClass("position-relative");
		var quoteIcon = $("<i>")
			.addClass(
				"fa fa-quote-right fa-2x text-secondary position-absolute d-none d-sm-block"
			)
			.css({ bottom: "30px", right: "0" });
		var contentWrapper = $("<div>").addClass(
			"mb-4 pb-4 border-bottom border-secondary"
		);
		var message = $("<p>").addClass("mb-0").text(testimonial.message);
		var authorInfo = $("<div>").addClass(
			"d-flex align-items-center flex-nowrap"
		);
		var imageWrapper = $("<div>").addClass("bg-transparent rounded");
		var img = $("<img>")
			.attr("src", testimonial.image)
			.addClass("img-fluid  rounded-circle")
			.css({ width: "100px", height: "100px" })
			.attr("alt", "");
		var textWrapper = $("<div>").addClass("ms-4 d-block");
		var authorName = $("<h4>").addClass("text-dark").text(testimonial.name);
		var authorTitle = $("<p>").addClass("m-0 pb-3").text(testimonial.title);
		var starWrapper = $("<div>").addClass("d-flex pe-5");

		// Add stars if provided in the testimonial object
		if (testimonial.stars) {
			for (var i = 0; i < 5; i++) {
				var starIcon = $("<i>").addClass(
					"fas fa-star" + (i < testimonial.stars ? " text-primary" : "")
				);
				starWrapper.append(starIcon);
			}
		}

		// Appending elements to build the structure
		imageWrapper.append(img);
		contentWrapper.append(message);
		textWrapper.append(authorName, authorTitle, starWrapper);
		authorInfo.append(imageWrapper, textWrapper);
		positionRelative.append(quoteIcon, contentWrapper, authorInfo);
		item.append(positionRelative);

		$(".owl-carousel").append(item);
	});

	// Initialize Owl Carousel with autoplay and mousewheel options
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		autoplay: true,
		autoplayTimeout: 1000, // Autoplay interval in milliseconds
		autoplayHoverPause: true, // Pause autoplay on hover
		mouseDrag: true, // Enable mouse drag
		touchDrag: true, // Enable touch drag
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			},
		},
	});
	document.addEventListener("DOMContentLoaded", function () {
		// Define marker positions and details
		var markerData = [
			{
				lat: 22.58907753805742,
				lng: 88.36656611541852,
				title: "Marker 1",
				details: "Details for Marker 1",
			},
			{
				lat: 22.6,
				lng: 88.4,
				title: "Marker 2",
				details: "Details for Marker 2",
			},
			// Add more markers as needed
		];

		// Create markers for each position
		markerData.forEach(function (data) {
			var marker = document.createElement("img");
			marker.src = "marker.png"; // Replace 'marker.png' with your marker image URL
			marker.alt = data.title;
			marker.width = 32;
			marker.height = 32;
			marker.style.position = "absolute";
			marker.style.transform = "translate(-50%, -50%)"; // Center marker on position
			marker.style.top = (data.lat - 22.58907753805742) / 0.0001 + "%"; // Adjust position relative to map
			marker.style.left = (data.lng - 88.36656611541852) / 0.0001 + "%"; // Adjust position relative to map
			marker.dataset.details = data.details;

			// Append marker to map container
			document.querySelector(".map-container").appendChild(marker);

			// Add event listeners for marker hover
			marker.addEventListener("mouseover", function (event) {
				showMarkerPopup(event.target, data.title, data.details);
			});

			marker.addEventListener("mouseout", function () {
				hideMarkerPopup();
			});
		});

		// Function to show marker popup
		function showMarkerPopup(marker, title, details) {
			var popup = document.getElementById("marker-popup");
			popup.innerHTML = "<h4>" + title + "</h4><p>" + details + "</p>";
			popup.style.top = marker.offsetTop + 20 + "px"; // Adjust popup position
			popup.style.left = marker.offsetLeft + 20 + "px"; // Adjust popup position
			popup.classList.add("active");
		}

		// Function to hide marker popup
		function hideMarkerPopup() {
			var popup = document.getElementById("marker-popup");
			popup.classList.remove("active");
		}
	});

	const togglefun = () => {
		const sidebar = document.querySelector("#side");

		sidebar.style.display = sidebar.style.display === "none" ? "flex" : "none";
		console.log(sidebar.style.display);
	};
	togglefun();
	document
		.querySelector(".menu-icn-container")
		.addEventListener("click", togglefun);
})(jQuery);
