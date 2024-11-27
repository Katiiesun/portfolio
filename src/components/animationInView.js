// scrollAnimation.js
export function initializeScrollAnimation() {
	document.addEventListener("DOMContentLoaded", () => {
	  const animatedElements = document.querySelectorAll(".animated");
  
	  const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
		  if (entry.isIntersecting) {
			entry.target.classList.add("show"); // Add the 'show' class
			observer.unobserve(entry.target); // Stop observing the element
		  }
		});
	  });
  
	  animatedElements.forEach((el) => observer.observe(el));
	});
  }
  