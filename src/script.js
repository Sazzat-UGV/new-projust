const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle("hidden");
}


// scroll Animation
const initialTranslateLTR = -48 * 4;
const initialTranslateRTL = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
  function scrollHandler() {
    const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;
    let totalTranslate = 0;

    if (isLTR) {
      totalTranslate = translateX + initialTranslateLTR;
    } else {
      totalTranslate = -(translateX + initialTranslateRTL);
    }

    element.style.transform = `translateX(${totalTranslate}px)`;
  }

  const intersectionCallback = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    console.log(element, isIntersecting);
    if (isIntersecting) {
      document.addEventListener('scroll', scrollHandler);
    } else {
      document.removeEventListener('scroll', scrollHandler);
    }
  };

  const intersectionObserver = new IntersectionObserver(intersectionCallback);
  intersectionObserver.observe(element);
}

const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, true, 0.15);





// faq
const dtElements = document.querySelectorAll("dt");

dtElements.forEach((element) => {
  const toggleFAQ = () => {
    const ddId = element.getAttribute("aria-controls");
    const ddElement = document.getElementById(ddId);
    const arrowIcon = element.querySelector("i");

    ddElement.classList.toggle("hidden");
    arrowIcon?.classList.toggle("-rotate-180");
  };

  element.addEventListener("click", toggleFAQ);
  element.addEventListener("keypress", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ();
    }
  });
});
