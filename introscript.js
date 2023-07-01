// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to add animation class to the intro section
  function animateIntro() {
    const intro = document.querySelector('.intro');
    if (isInViewport(intro)) {
      intro.classList.add('animate');
    }
  }
  
  // Event listener for scrolling
  window.addEventListener('scroll', animateIntro);
  
  // Initial check for the intro section on page load
  window.addEventListener('load', animateIntro);
  