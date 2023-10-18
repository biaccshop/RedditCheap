// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());
function ctrlShiftKey(e, keyCode) {
    return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}
// Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
document.onkeydown = (e) => {
    if (
        event.keyCode === 123 ||
        ctrlShiftKey(e, 'I') ||
        ctrlShiftKey(e, 'J') ||
        ctrlShiftKey(e, 'C') ||
        (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
    )
        return false;
};



// Scroll Reveal
ScrollReveal({
  reset: false,
  distance: '200px',
  duration: 1500,
  delay: 200
});

ScrollReveal().reveal('.hero-content', { origin: 'left', distance: '0px', delay: 200 });
ScrollReveal().reveal('.hero-img', { origin: 'right', distance: '0px', delay: 200 });
ScrollReveal().reveal('.whyus', { origin: 'right', distance: '0px', delay: 200, duration: 2000 });
ScrollReveal().reveal('.features-img', { origin: 'right', distance: '0px', delay: 200, duration: 3500 });
ScrollReveal().reveal('.features-content .feature-title', { origin: 'right', distance: '0px', delay: 200, duration: 2000 });
ScrollReveal().reveal('.features-content .feature-1', { origin: 'right', distance: '50px', delay: 200 });
ScrollReveal().reveal('.features-content .feature-2', { origin: 'right', distance: '50px', delay: 300 });
ScrollReveal().reveal('.features-content .feature-3', { origin: 'right', distance: '50px', delay: 400 });
ScrollReveal().reveal('.features-content .feature-4', { origin: 'right', distance: '50px', delay: 500 });
ScrollReveal().reveal('.features-content .feature-5', { origin: 'right', distance: '50px', delay: 600 });
ScrollReveal().reveal('.features-content .feature-6', { origin: 'right', distance: '50px', delay: 700 });
ScrollReveal().reveal('.reasons .reasons-title', { origin: 'right', distance: '0px', delay: 200, duration: 2000 });
ScrollReveal().reveal('.reasons-content .card-1', { origin: 'left', distance: '500px', delay: 400 });
ScrollReveal().reveal('.reasons-content .card-2', { origin: 'left', distance: '500px', delay: 400 });
ScrollReveal().reveal('.reasons-content .card-3', { origin: 'right', distance: '500px', delay: 400 });
ScrollReveal().reveal('.reasons-content .card-4', { origin: 'right', distance: '500px', delay: 400 });
ScrollReveal().reveal('.results .reasons-title', { origin: 'right', distance: '0px', delay: 200, duration: 2000 });
ScrollReveal().reveal('.feedbacks .feedbacks-title', { origin: 'right', distance: '0px', delay: 200, duration: 2000 });
ScrollReveal().reveal('.feedbacks .feedbacks-subtitle', { origin: 'right', distance: '0px', delay: 300, duration: 2500 });
ScrollReveal().reveal('.feedbacks .slider', { origin: 'right', distance: '0px', delay: 200, duration: 2500 });
ScrollReveal().reveal('.pricing .pricing-title', { origin: 'right', distance: '0px', delay: 200, duration: 2000 });
ScrollReveal().reveal('.pricing .pricing-subtitle', { origin: 'right', distance: '0px', delay: 300, duration: 2500 });
ScrollReveal().reveal('.pricing-content', { origin: 'right', distance: '0px', delay: 200, duration: 3500 });
ScrollReveal().reveal('.faq .faq-title', { origin: 'right', distance: '0px', delay: 200, duration: 2000 });
ScrollReveal().reveal('.faq-container', { origin: 'left', distance: '0px', delay: 400 });
ScrollReveal().reveal('.contact', { origin: 'right', distance: '0px', delay: 300, duration: 2500 });

// Navbar anchor + hiding # in URL
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top - 5 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    }, 300);
  }
});



// Black Bar toggle
$(document).ready(function () {
  var menuOpen = false;

  $("#btn-blackbar, .nav-blackbar-item").click(function () {
    if (!menuOpen) {
      $("body").css("overflow", "hidden");
      $("#black-bar").slideDown();
      $("#btn-blackbar").addClass("active");
      $("#blackbarbutton-icon").removeClass("fa-bars").addClass("fa-xmark");
      menuOpen = true;
    } else {
      $("body").css("overflow", "auto");
      $("#black-bar").slideUp();
      $("#btn-blackbar").removeClass("active");
      $("#blackbarbutton-icon").removeClass("fa-xmark").addClass("fa-bars");
      menuOpen = false;
    }
  });
});



// FAQ section
const faqQuestions = document.querySelectorAll(".faq-container .question");

faqQuestions.forEach((faqQuestion) => {
  faqQuestion.addEventListener("click", () => {
    faqQuestions.forEach((otherQuestion) => {
      if (otherQuestion !== faqQuestion && otherQuestion.classList.contains("active")) {
        const otherAnswer = otherQuestion.nextElementSibling;
        otherAnswer.classList.remove("active");
        otherQuestion.classList.remove("active");
      }
    });

    const answer = faqQuestion.nextElementSibling;
    answer.classList.toggle("active");
    faqQuestion.classList.toggle("active");
  });
});



// Announcement
const announcementClose = document.querySelector(".announcement-close");
const announcementSection = document.querySelector("#announcement");

announcementClose.addEventListener("click", () => {
  announcementSection.classList.add("hidden");
  sessionStorage.setItem("announcementHidden", "true");
});

// Checking of refresh
window.addEventListener("load", () => {
  const isAnnouncementHidden = sessionStorage.getItem("announcementHidden");
  if (isAnnouncementHidden === "true") {
    announcementSection.classList.add("hidden");
  }
});