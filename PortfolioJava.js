window.addEventListener("scroll",function(){
    var header = document.querySelector("ul");
    header.classList.toggle("sticky",window.scrollY > 100);
})

// var typed= new Typed(".auto-type" , {
//     strings : ["Web Developer","Data Scientist","Enterpreneur","Civil Engineer"],
//     typeSpeed : 150,
//     backSpeed : 150,
//     loop : true,
// })

const tl = gsap.timeline({defaults: {ease:'power1.out'}});

tl.to('.intro-text',{y:"0%",duration:1,stagger:0.35});
tl.to('.slider',{y:"-100%",duration:1.5,delay:0.5});
tl.to('.intro',{y:"-100%",duration:1},"-=1")
// tl.fromTo('ul',{opacity:0},{opacity:1,duration:1})
tl.fromTo('.Main_text',{opacity:0},{opacity:1,duration:1},"-=1")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
         }//else{
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// const section = document.querySelectorAll('section');
// const bubble = document.querySelector('.bubble');
// const gradient = [
//     "linear-gradient(90deg,blue,red)",
//     "linear-gradient(90deg,blue,red)",
//     "linear-gradient(90deg,blue,red)"
// ];

// const options = {
//     threshold: 0.7
// }

// let observer1 = new IntersectionObserver(navCheck , options);

// function navCheck(entries){
//     entries.forEach(entry => {
//         const className = entry.target.className;
//         const activeArcher = document.querySelector(`[data-page=${className}]`)
//         const gradientIndex = entry.target.getAttribute('data-index');
//         const coords = activeAnchor.getBoundingClientRect();
//         const directions = {
//             height: coords.height,
//             width: coords.width,
//             top: coords.top,
//             left: coords.left, 
//         };
//         if(entry.isIntersecting){
//             bubble.getElementsByClassName.setProperty('left',`${direction.left}px`)
//             bubble.getElementsByClassName.setProperty('top',`${direction.top}px`)
//             bubble.getElementsByClassName.setProperty('width',`${direction.width}px`)
//             bubble.getElementsByClassName.setProperty('height',`${direction.height}px`)
//             bubble.style.background = gradient(gradientIndex)
//         } 
//     });
// }

// section.forEach(section =>{
//     observer.observe(section);
// });



VanillaTilt.init(document.querySelectorAll(".sci li a"), {
    max: 25,
    speed: 400
});

let list = document.querySelectorAll('.sci li')
let bg = document.querySelector('.third')
list.forEach(element => {
    element.addEventListener('mouseenter',function(event){
        let color = event.target.getAttribute('data-color');
        bg.getElementsByClassName.backgroundColor = color; 
    })
})