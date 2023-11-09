let tl = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#page-2",
      start: "0% 50%", 
      end: "50% 50%", 
      scrub: 1, 
    //   markers: true,
    },
  });
  

  tl.to("#three",
   { 
    bottom : "-10vh",
   })
  tl.to("#two , #four",
   { 
    bottom : "-20vh",
   })
  tl.to("#one , #five",
   { 
    bottom : "-30vh",
   })
   



   let tl2 = gsap.timeline({
    // yes, we can add it to an entire timeline!
    scrollTrigger: {
      trigger: "#page-6",
      start: "50% 50%", 
      pin : true,
      end: "300% 50%", 
      scrub: 3,
      // markers: true,
    },
  });
  

  tl2.to("#scroll-1",
   { 
    bottom : "65vh",
   })
  tl2.to("#scroll-1",
   { 
    opacity : 0,
   })
  tl2.to("#scroll-2",
   { 
    opacity : 1,
   },'a')
  tl2.to("#phone-img",
   { 
    x:"-25%",
   },'a')
  tl2.to("#scroll-2",
   { 
    bottom : "60vh",
   })
   tl2.to("#scroll-2",
   { 
    opacity : 0,
   })
  tl2.to("#scroll-3",
   { 
    opacity : 1,
   },'ab')
   tl2.to("#phone-img",
   { 
    x:"-51%",
   },'ab')
  tl2.to("#scroll-3",
   { 
    bottom : "60vh",
   })
   tl2.to("#scroll-3",
   { 
    opacity : 0,
   })
  tl2.to("#scroll-4",
   { 
    opacity : 1,
   },'abc')
   tl2.to("#phone-img",
   { 
    x:"-76%",
   },'abc')
 



   var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });