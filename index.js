var t1= gsap.timeline()
.to("#language", {
   duration: 0,
   zIndex: 9,
})

.to("#lan1", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan1", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan2", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan2", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan3", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan3", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan4", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan4", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan5", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan5", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan6", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan6", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan7", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan7", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan8", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan8", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan9", {
   opacity: 1,
   duration: 0.07,
})

.to("#lan9", {
   opacity: 0,
   duration: 0.07,
})

.to("#lan10", { 
   opacity: 1,
   duration: 3,
})
.to("#tag", { 
   opacity: 1,
   duration: 3,
})
const zoomText = document.querySelector('#lan10');

// GSAP Animation: Timed zoom in and out on a loop
gsap.to(zoomText, {
   scale: 2, 
   duration: 6, 
   ease: "power2.inOut", 
   repeat: 0,       // Repeat indefinitely
   yoyo: true        // Reverse animation (zoom out)
});
