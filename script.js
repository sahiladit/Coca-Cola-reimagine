let tl = gsap.timeline();
let follow = document.querySelector(".follow");
let body = document.querySelector("body");
let cocimg = document.querySelector("#cocimg");
let nav = document.querySelector("nav");
let links = document.querySelector(".links");
let para = document.querySelector(".main-para");
let links1 = document.querySelector(".links1");
let bars = document.querySelector(".hamburger");
let cocabottles = document.querySelector("#cocabottles");
let card = document.querySelectorAll(".sec1 .card");
let foot_links = document.querySelector(".sec3 .foot-links");
let img = document.querySelector("#sec2-img");
let footer = document.querySelector(".sec3");
gsap.to("#cocimg",{
    y:50,
    scrollTrigger:{
        trigger:"#cocimg",
        scrub:true,
        start:"top top",
        end:"bottom 30%",
        pin:true
    }
})
body.addEventListener("mousemove",function(dets){
    gsap.to(follow,{
        x:dets.x+5,
        y:dets.y+5,
        ease:"back.out",
        duration:1,
    })
});

cocimg.addEventListener("mouseenter",() => {
    gsap.to(follow,{
        scale:2,
    })
    follow.style.color = "white";
})
cocimg.addEventListener("mouseleave",() => {
    gsap.to(follow,{
        scale:1
    })
    follow.style.color = "black";
})

nav.addEventListener("mouseenter",() => {
    gsap.to(follow,{
        scale:1.5,
    })
    follow.style.color = "black";
    follow.style.backgroundColor = "transparent";
    follow.style.border = "2px solid #e7223a"
})
nav.addEventListener("mouseleave",() => {
    gsap.to(follow,{
        scale:1,
    })
    follow.style.color = "white";
    follow.style.backgroundColor = "#e7223a";
    follow.style.border = "none";
})

tl.from("#cocimg",1,{
    rotate:180,
    x:-500,
    transfromOrigin:"left 50%"
})
tl.from(para,{
    opacity:0,
    y:10,
})

let on =false;
if(on == false){
bars.addEventListener("click",() => {
    gsap.from(links1,{
        opacity:0,
        x:10
    })
    links1.style.display = "block";
})}
if(on == true){
    bars.addEventListener("click",() => {
        links1.style.display = "hidden";
    })
}
gsap.from(".card",{
    opacity:0,
    y:10,
    scrollTrigger:{
        trigger:".card",
        start:"top 60%",
        end:"top 50%",
        scrub:true
    }
})
gsap.from(cocabottles,{
    x:580,
    transfromOrigin:"left 80%",
    scrollTrigger:{
        trigger:cocabottles,
        start:"top 120%",
        scrub:true,
    }
})

gsap.from(img,{
    opacity:0,
    scrollTrigger:{
        trigger:img,
        start:"top 160%",
        scrub:true,
    }
})

gsap.from(footer,{
    opacity:0,
    scrollTrigger:{
        trigger:footer,
        start:"top 100%",
        end:"top 30%",
        scrub:true,
    }
});





foot_links.addEventListener("mouseenter",() => {
    gsap.to(follow,{
       scale:"2" 
    })
})

foot_links.addEventListener("mouseleave",() => {
    gsap.to(follow,{
       scale:"1" 
    })
})