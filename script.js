function loadinganimation(){
  var tl = gsap.timeline()
  tl.from("#page1", {
    transform: "scaleX(0.7) scale(0.2) translateY(80%)",
    borderRadius: "100px",
    duration: 2,
    ease: "expo.out"
  })
  tl.from("nav", {
    opacity: 0
  })
  tl.from("#page1 h1, #page1 p", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2
  })
}

var relem1 = document.querySelectorAll(".right-elem")
var img = document.querySelector(".right-elem img")
//navAnimation
function navAnimation() {
  var nav = document.querySelector("nav")

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline()

    tl.to("#nav-bottom", {
      height: "21vh",
      duration: 0.5
    })
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.1
    })
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.5
      }
    })
  })
  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline()
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2
      }
    })
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1
    })
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2
    })
  })
}

function mousecalling() {
  relem1.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1
      })
      elem.addEventListener("mouseleave", function () {
        gsap.to(elem.childNodes[3], {
          opacity: 0,
          scale: 0
        })
        elem.addEventListener("mousemove", function (dets) {
          gsap.to(elem.childNodes[3],
            {
              x: dets.x - elem.getBoundingClientRect().x - 50,
              y: dets.y - elem.getBoundingClientRect().y - 120
            })
        })
      })
    })
  })
}

function videoanimation(){
  var container = document.querySelector("#video-container")
var video1 = document.querySelector("#video-container video")

container.addEventListener("click", function () {
  video1.play()
  gsap.to(video1, {
    transform: "scaleX(1) scaleY(1)",
    opacity: 1,
    borderRadius: 0,
  })
})
video1.addEventListener("click", function () {
  video1.paused()
  gsap.to(video1, {
    transform: "scaleX(0.7) scaleY(0)",
    opacity: 0,
    borderRadius: "30px",
  })
})
}
function pictureanimation(){
  var picture = document.querySelectorAll(".page6-right img")
picture.forEach(function (elems) {
  elems.addEventListener("mouseenter", function () {
    gsap.to(".cursor2", {
      opacity: 1,
      scale: 1
    })
  })
  elems.addEventListener("mousemove", function (detts) {
    gsap.to(".cursor2", {
      x: detts.x - elems.getBoundingClientRect().x - 336,
      y: detts.y - elems.getBoundingClientRect().y - 336
    })
  })
  elems.addEventListener("mouseleave", function (detts) {
    gsap.to(".cursor2", {
      opacity: 0,
      scale: 0
    })
  })
})
}

function video2animation(){
  var page6right = document.querySelector(".page6-right")
var video2 = document.querySelector(".page6-right video")

page6right.addEventListener("mouseenter", function () {
  video2.play()
  gsap.to(video1, {
    transform: "scaleX(1) scaleY(1)",
    opacity: 1,
    borderRadius: 0,
  })
})
video2.addEventListener("mouseleave", function () {
  video2.paused()
  gsap.to(video1, {
    transform: "scaleX(0.7) scaleY(0)",
    opacity: 0,
    borderRadius: "30px",
  })
})
var elem = document.querySelectorAll("#page7-elem2")
elem.forEach(function (dets) {

  dets.addEventListener("mousemove", function () {
    gsap.to(".trans", {
      height: 170
    })
  })
  dets.addEventListener("mouseleave", function () {
    gsap.to(".trans", {
      height: 0
    })
  })
})
}


gsap.to(".da-part3 h4", {
  x: 130,
  duration: 1,
  stagger: {
    amount: -0.3
  },
  scrollTrigger: {
    trigger: ".divanimation",
    scroller: "body",
    start: "top 50%",

    scrub: true,
    // markers:true
  }
})
gsap.to(".da-part2 h4", {
  x: 130,
  duration: 1,
  stagger: {
    amount: -0.5
  },
  scrollTrigger: {
    trigger: ".divanimation",
    scroller: "body",
    start: "top 50%",
    scrub: true,
    // markers:true
  }
})
gsap.to(".da-part4 h4", {
  x: 130,
  duration: 1,
  stagger: {
    amount: -0.5
  },
  scrollTrigger: {
    trigger: ".divanimation",
    scroller: "body",
    start: "top 50%",
    scrub: true,
    // markers:true
  }
})


loadinganimation();
navAnimation();
videoanimation();
mousecalling();
pictureanimation();
video2animation();
