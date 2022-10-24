// Defining all variables at start

// ============== navigation  =============== //

// When the user scrolls doen = hide, when scroll up = show the navigation.
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
};

// 'Navbar' REFERENCE: hide and show nav bar from w3schools - https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp */

// ======= START SECTION 1 SCROLL TRIGGER ANIMATION (HOME VIDEO) ========= //

gsap.registerPlugin(ScrollTrigger);

const coolVideo = document.querySelector("video");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "video",
    start: "top top",
    end: "bottom+=420% bottom",
    scrub: true,
    markers: true,
  },
});

// wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
coolVideo.onloadedmetadata = function () {
  tl.to(coolVideo, { currentTime: coolVideo.duration });
};

// Dealing with devices
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (isTouchDevice()) {
  coolVideo.play();
  coolVideo.pause();
}
// REFERENCE: scroll down to scrub through video (codepen link) https://codepen.io/wisearts/pen/ExZGrbZ and utilises gsap.min library from (scroll trigger plugin) https://greensock.com/docs/v3/Installation?checked=core,scrollTrigger)

// ======= START SECTION 2 SCROLL TRIGGER ANIMATION (SECOND VIDEO) ========= //
