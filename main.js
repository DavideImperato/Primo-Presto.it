
let navLogo = document.querySelector(".navLogo")
let textLogo = document.querySelector(".textLogo")
let navlinks = document.querySelectorAll(".nav-link")
let navbar = document.querySelector(".navbar");
let titleMain = document.querySelector(".due");
let navitem = document.querySelectorAll(".nav-link")
let check=false
let iconNav= document.querySelectorAll(".iconNav")
let iconNavCustom= document.querySelectorAll(".iconNavCustom")
let containerMainSection2 = document.querySelectorAll(".containerMainSection2")
let elementCircleCard = document.querySelector(".elementCircleCard")
let iconaLog = document.querySelector("#iconaLog")
let logInBox = document.querySelector("#logInBox")
let cardCity1 = document.querySelector(".cardCity1")
let TextBox1 = document.querySelector("#TextBox1")
let image1 = document.querySelector(".image1")
let cardCity2 = document.querySelector(".cardCity2")
let TextBox2 = document.querySelector("#TextBox2")
let image2 = document.querySelector(".image2")
let cardCity3 = document.querySelector(".cardCity3")
let TextBox3 = document.querySelector("#TextBox3")
let image3 = document.querySelector(".image3")
let cardCity4 = document.querySelector(".cardCity4")
let TextBox4 = document.querySelector("#TextBox4")
let image4 = document.querySelector(".image4")
let cardCity5 = document.querySelector(".cardCity5")
let TextBox5 = document.querySelector("#TextBox5")
let image5 = document.querySelector(".image5")
let swiperWrapper = document.querySelector("#swiperWrapper")
let ctaBtn = document.querySelector(".cta")
let formRecensione = document.querySelector("#formRecensione")
let testoScriviRecensione = document.querySelector("#testoScriviRecensione")
let iconaScriviRecensione = document.querySelector("#iconaScriviRecensione")
let checkScriviRecensione = false;
let userNuovaRecensione = document.querySelector("#userNuovaRecensione")
let cittaNuovaRecensione = document.querySelector("#cittaNuovaRecensione")
let paeseNuovaRecensione = document.querySelector("#paeseNuovaRecensione")
let NuovaRecensione = document.querySelector("#NuovaRecensione")
let addRecensioneBtn = document.querySelector("#addRecensioneBtn")



// CONTATORE


let numero1= document.querySelector("#numero1")
let numero2= document.querySelector("#numero2")
let numero3= document.querySelector("#numero3")
let numero4= document.querySelector("#numero4")

let numeroN1 = numero1.getAttribute("valore")
let numeroN2 = numero2.getAttribute("valore")
let numeroN3 = numero3.getAttribute("valore")
let numeroN4 = numero4.getAttribute("valore")





window.addEventListener("scroll",()=>{
    let scrollPage = window.scrollY;
    


    if(scrollPage > 0){
        navbar.classList.remove("m-4")
        navbar.classList.add("navbarBlur")
        navLogo.src="./media/LogoOrange.png"
        navbar.style.backdropFilter= "blur(9px) saturate(0.8)"
        navlinks.forEach((link)=>{
            link.style.color="var(--ColorWhiteLux)"
            link.addEventListener("mouseenter",()=>{
                link.style.color="var(--ColorWhite)"
                link.style.borderBottom="2px solid var(--ColorBeigeLux)"
            })
            link.addEventListener("mouseleave",()=>{
                link.style.borderBottom="none"
                link.style.color="var(--ColorWhiteLux)"
                
            })
            iconNavCustom.forEach((icon)=>{
                icon.style.color="var(--ColorWhiteLux)"

            })
        })
        textLogo.style.color="var(--ColorWhiteLux)"
        



        



    }else{
        navbar.classList.add("m-4")
        navbar.classList.remove("navbarBlur")
        navLogo.src="./media/LogoWhite.png"

        navlinks.forEach((link)=>{
            link.style.color="#fff"
            link.addEventListener("mouseenter",()=>{
                link.style.color="var(--ColorWhite)"
                link.style.borderBottom="2px solid var(--ColorBlueLux)"
            })
            link.addEventListener("mouseleave",()=>{
                link.style.borderBottom="none"
                link.style.color="#fff"
                
            })
            iconNavCustom.forEach((icon)=>{
                icon.style.color="var(--ColorBlueLux)"

            })
            
            
        })
        textLogo.style.color="#fff"


    }
     
    if(scrollPage>210){
        setTimeout(()=>{
            if(check==false){
                inizocontatore(numeroN1,numero1,10,10)
                inizocontatore(numeroN2,numero2,15,10)
                inizocontatore(numeroN3,numero3,15,1)
                inizocontatore(numeroN4,numero4,10,40)

                check=true
            }
            
        },0)
        
    }
})

navlinks.forEach((link)=>{
    link.addEventListener("mouseenter",()=>{
        link.style.color="var(--ColorWhite)"
        link.style.borderBottom="2px solid var(--ColorBlueLux)"
    })
    link.addEventListener("mouseleave",()=>{
        link.style.borderBottom="none"
        link.style.color="#fff"
        
    })
    
    
})

containerMainSection2.forEach((box)=>{
    box.addEventListener("mouseenter",()=>{
        box.style.transition="0.5s"
        box.style.backgroundColor="var(--ColorWhiteLux)"
        box.style.border="1px solid var(--ColorBlueLux)"
        const elementCircleCard = box.querySelector(".elementCircleCard");
        if (elementCircleCard) {
            elementCircleCard.style.border = "1px solid var(--ColorBlueLux)";
        }
    })

    box.addEventListener("mouseleave",()=>{
        box.style.backgroundColor=""
        box.style.border="1px solid var(--ColorBeigeLux)"
        const elementCircleCard = box.querySelector(".elementCircleCard");
        if (elementCircleCard) {
            elementCircleCard.style.border = "none";
        }
    })
    
})


// AL CLIC DELL ICONA USER ESCE IL BOX PER USER E PSW
iconaLog.addEventListener("click",()=>{
    logInBox.classList.toggle("d-none")
})


// HOVER PER LE CARD DELLE CITTA


function hoverCard (blocco,testo,image){
    blocco.addEventListener("mouseenter",()=>{
        testo.classList.remove("d-none")
        image.classList.add("d-none")

    
    })
    
    blocco.addEventListener("mouseleave",()=>{
        testo.classList.add("d-none")
        image.classList.remove("d-none")

    
    })
}
hoverCard(cardCity1,TextBox1,image1)
hoverCard(cardCity2,TextBox2,image2)
hoverCard(cardCity3,TextBox3,image3)
hoverCard(cardCity4,TextBox4,image4)
hoverCard(cardCity5,TextBox5,image5)

function inizocontatore(numero,elemento,timing,counterNum){

    let counter = 0;

    let contatore = setInterval(()=>{
    
        if(counter<numero){
            counter+=counterNum
            elemento.innerHTML=counter
        }else{
            clearInterval(contatore)
        }
    },timing )

}







let recensioni=[
    { name : "Davide" , description : "Ottima Esperienza,Super Affidabili!",city : "Napoli" , country:"Italia" },
    { name : "Lorenzo" , description : "Una Vacanca Magnifica!!!",city : "Napoli" , country:"Italia" },
    { name : "Andrea" , description : "super organizzati, assistenza top, consigliatissimo!",city : "Roma" , country:"Italia" },
    { name : "Raul" , description : "Tutto bene. Barca bella. Velocità nella consegna è spiegazioni dettagliate sull'uso della barca e itinerario da seguire. Bravi",city : "Ibiza" , country:"Spagna" },
    { name : "Greta" , description : "Esperienza unica e fantastica .Fabrizio il proprietario, persona splendida con grande disponibilità Massimo skipper il Top. La Barca bellissima e super comoda. Esperienza da ripetere",city : "Genova" , country:"Italia" },




]
addRecensioneBtn.addEventListener("click",()=>{
    
    recensioni.push({ name : userNuovaRecensione.value , description : NuovaRecensione.value ,city : cittaNuovaRecensione.value , country: paeseNuovaRecensione.value });
    console.log(recensioni);
    generateCard();
    userNuovaRecensione.value="";
    NuovaRecensione.value="";
    cittaNuovaRecensione.value="";
    paeseNuovaRecensione.value="";
    swiper.update();
})


function generateCard() {
    swiperWrapper.innerHTML="";
    recensioni.forEach((review) =>{
        let div = document.createElement('div');
        div.classList.add("swiper-slide");
        div.innerHTML = `
        <div class="card cardRecensione" >
        <div class="card-body ">
          <div class="text-center  mt-auto"><i class="bi bi-star-fill fs-3 text-warning"></i><i class="bi fs-2 bi-star-fill text-warning"></i><i class="bi fs-1 bi-star-fill text-warning"></i><i class="bi fs-2 bi-star-fill text-warning"></i><i class="bi fs-3 bi-star-fill text-warning"></i></div>
          <h5 class="card-title mt-5 mb-3">${review.name}</h5>
          <h6 class="card-subtitle mb-5 mt-3 text-body-secondary">${review.city},${review.country}</h6>
          <p class="card-text mt-2">${review.description}</p>
        </div>
      </div>
        `
        swiperWrapper.appendChild(div);
    });
}
generateCard();



ctaBtn.addEventListener("click",()=>{
    if(checkScriviRecensione==false){
        formRecensione.classList.remove("d-none")
        testoScriviRecensione.innerHTML=" Chiudi "
        iconaScriviRecensione.classList.remove("bi-pencil-square")
        iconaScriviRecensione.classList.add("bi-x-lg")
        checkScriviRecensione=true;
    
    }else{
        formRecensione.classList.add("d-none")
        testoScriviRecensione.innerHTML=" Scrivi una recensione "
        iconaScriviRecensione.classList.remove("bi-x-lg")
        iconaScriviRecensione.classList.add("bi-pencil-square")
        checkScriviRecensione=false;
    }
    



})


















const swiper = new Swiper('.swiper', {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  });
  
  
  


