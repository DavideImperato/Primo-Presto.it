
let navbar = document.querySelector(".navbar");
let titleMain = document.querySelector(".due");
let navitem = document.querySelectorAll(".nav-link")
const counters = document.querySelectorAll('.value');
const speed = 1;

window.addEventListener("scroll",()=>{
    let scrollPage = window.scrollY;
    


    if(scrollPage > 0){
        navbar.classList.remove("m-4")
        navbar.classList.add("navbarBlur")
        navbar.style.backdropFilter= "blur(9px) saturate(0.8)"
        



    }else{
        navbar.classList.add("m-4")
        navbar.classList.remove("navbarBlur")

    }
     
    if(scrollPage>850){
        
    }
})






