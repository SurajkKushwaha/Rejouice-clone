function locomotivescrolltriggertrigger(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});







// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

locomotivescrolltriggertrigger()






let t = gsap.timeline()

function loaderanimation(){
   
    t.from(".loader h3",{
        x:40,
        opacity:0,
        duration:.8,
        stagger:.1
    })
    t.to(".loader h3",{
        x:-40,
        opacity:0,
        duration:1,
        stagger:.1
    })

    t.to(".loader",{
        opacity:0,
         
    })
    t.to(".loader",{
        display:"none"
    })
}
   loaderanimation()   

   function rejouice(){
    t.from(".page1content h1 span",{
        opacity:0,
        y:100,
        stagger:.1,
        duration:.5,
    })
   }

   rejouice()
function cursoranimation(){
    let cursor = document.querySelector(".cursor");


document.querySelector(".page1content").addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        top:dets.clientY,
        left:dets.clientX,
        

    })
})

document.querySelector(".page1content").addEventListener("mouseenter",()=>{
    gsap.to(cursor,{
        scale:1,
opacity:1
    })
})


document.querySelector(".page1content").addEventListener("mouseleave",()=>{
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursoranimation()



function page2animation(){
    gsap.from(".top h3",{
        y:70,
        duration:1,
        scrollTrigger:{
       trigger:".page2",
       scroller:".main",
      
       start:"top 40%",
       end:"top 37%",
       scrub:2
        }
    
    })
    
    
    gsap.from(".elem h1",{
        y:120,
        opacity:0,
        stagger:.6,
        duration:1.5,
        scrollTrigger:{
       trigger:".page2",
       scroller:".main",
      
       start:"top 40%",
       end:"top 37%",
       scrub:2
        }
    
    })
}
page2animation()




 function page3animation(){
    gsap.from(".page3content h3",{
        y:70,
        duration:1,
        scrollTrigger:{
       trigger:".page3 .box",
       scroller:".main",
    
       start:"top 10%",
       end:"top 37%",
       scrub:2
        }
    
    })
    
    
    gsap.from(".page3contentinside h1",{
        y:80,
        opacity:0,
        stagger:.6,
        duration:1.5,
        scrollTrigger:{
       trigger:".page3 .box",
       scroller:".main",
     
       start:"top -10%",
       end:"top 37%",
       scrub:2
        }
    
    })
}


page3animation()





function page5animation(){
    gsap.from(".page5content h3",{
        opacity:0,
        y:70,
        duration:1,
        scrollTrigger:{
       trigger:".page5 ",
       scroller:".main",
   
       start:"top 75%",
       end:"top 65%",
       scrub:2
        }
    
    })
    
    
    gsap.from(".page5contentinside h1",{
        y:100,
        opacity:0,
        stagger:.6,
        duration:1.5,
        scrollTrigger:{
       trigger:".page5 ",
       scroller:".main",
    
       start:"top 75%",
       end:"top 65%",
       scrub:2
        }
    
    })

    gsap.from(".au",{
        y:200,
        opacity:0,
        duration:.3,
        scrollTrigger:{
            trigger:".swiperdiv",
            scroller:".main",
            start:"top 35%",
            end:"top -10%",
            
            scrub:3

        }
    })

}
page5animation()


















function rickroll(){
document.querySelector(".rick").addEventListener("click",()=>[
gsap.to(".rickroll",{
    left:"0%",
    duration:1.5
}),

gsap.from(".rickroll video",{
    opacity:0,
    delay:2
}),

gsap.from(".rickroll h2",{
    opacity:0,
    delay:2.2
})


])




document.querySelector(".rickroll h2").addEventListener("click",()=>[
    gsap.to(".rickroll",{
        left:"-100%",
        duration:1
    }),
    
   
    
    
    ])
}



rickroll()

function slideranimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
      });














}

slideranimation()










   function page6animation(){
    gsap.to(".footertop .footerp1",{
        transform:"translateX(0%)",
        duration:1.5,
        opacity:1,
        scrollTrigger:{
            trigger:".page6",
            scroller:".main",
          
            start:"top 100%",
            end:"top 60%",
            scrub:4,
           
        }
        
       })
    
    
    
    
    
       
    
       gsap.from(".footertop .footerp2",{
        
        opacity:0,
        scrollTrigger:{
            trigger:".page6",
            scroller:".main",
          
            start:"top 100%",
            end:"top 40%",
            scrub:4,
           
        }
        
       })
    
    
       gsap.from(".footerbottom h1 span",{
        y:-100,
        x:-5,
        
        opacity:0,
        stagger:.8,
        scrollTrigger:{
            trigger:".footerp2 .r2",
            scroller:".main",
         
            scrub:3,
            start:"top 100%",
            end:"top 65%"
        
        }
       })

   }
   page6animation()

  








   


