
let categoriesWrepper = document.querySelector("#categoriesWrepper");
let cardWrapper = document.querySelector("#cardWrapper")
let sortBy = document.querySelector("#sortBy")











fetch('./articoli.json').then((response)=>response.json()).then((data)=>{


    function setCategory() {
        let categories= data.map((annuncio)=> annuncio.category);


        categories.forEach((category) => {
            if(!uniqueCategories.includes(category)){
                uniqueCategories.push(category)
            }
        });
        

    }
    let uniqueCategories = []
    setCategory()
    
    

    uniqueCategories.forEach((category)=>{
        let div = document.createElement("div")
        div.classList.add("form-check")
        div.innerHTML=`
        <input class="form-check-input" type="radio" name="category" id="${category}">
        <label class="form-check-label" for="flexRadioDefault1">
          ${category}
        </label>
        `
        categoriesWrepper.appendChild(div);
        


        
    })
    

    function createArticoli(array,condizione)  {

        if(condizione!="crescente"){
            array.sort((a,b)=>b.price - a.price)
        }else{
            array.sort((a,b)=>a.price - b.price)
        }
        
            
        cardWrapper.innerHTML=""

        array.forEach((array)=>{
            let div = document.createElement("div")
            div.classList.add("card","cardArticle","m-3")
            div.innerHTML=`
            <img src="${array.image}" class="imageCoverArticle" alt="foto${array.name}">
            <div class="card-body">
              <h5 class="card-title">${array.name}</h5>
              <p class="card-text"> Categoria: <br>${array.category}</p>
              <div class="row align-items-center justify-content-around">
                <div class="col-6 text-center my-auto">
                    <p class="p-0 m-0">a partire da</p>
                    <h3>${array.price}€</h3>
                </div>
                <div class="col-6 ms-auto"><a href="#" class="btn btn-primary">Noleggia</a></div>
              </div>
            </div>
            `
            cardWrapper.appendChild(div)
        })
        
        
    

    }

    createArticoli(data,"crescente")


    let radio = document.querySelectorAll(".form-check-input")

     function filterByCategories (array){
        
        let checked = Array.from(radio).find((button)=> button.checked);
        let Categoria=checked.id

        let filtered = array.filter((annuncio)=> annuncio.category == Categoria)
        

        
        if(Categoria!="all"){
            setPriceInput(filtered);
            return filtered;
            
        }else{
            return array;
        }
        
     }
     

   radio.forEach((button)=>{
    button.addEventListener("click",()=>{
        globalFilter()
    })
   })

    let priceInput = document.querySelector("#priceInput")
    let priceNumber = document.querySelector("#priceNumber")
    let wordInput = document.querySelector("#wordInput")


   function setPriceInput(array){

        let arrayprice= array.map(articolo => articolo.price);
        let maxPrice = Math.max(...arrayprice);
        let minPrice = Math.min(...arrayprice);
        priceInput.max = maxPrice
        priceInput.min = minPrice
        priceInput.value = maxPrice
        priceNumber.innerHTML=maxPrice     
   }

   setPriceInput(data)

   priceInput.addEventListener("input",()=>{
    priceNumber.innerHTML=priceInput.value
    globalFilter()
   })

   function filterByPrice(array) {
    let filtered = array.filter((annuncio) => +annuncio.price <= +priceInput.value)
    
    return filtered
   }

   
   wordInput.addEventListener("input",()=>{
    
    globalFilter()
   })

   function filterbyWord(array) {
    let filtered = array.filter((annuncio)=> annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()))
    return filtered
   }

   function globalFilter(){

    let filterCategory = filterByCategories(data)
    let filterPrice = filterByPrice(filterCategory)
    let filterWord = filterbyWord(filterPrice)

     createArticoli(filterWord)
     setorder(filterWord)





   }













   let check=false;

   sortBy.addEventListener("click",()=>{
    globalFilter()
    
   })
   function setorder (array){
    if(check==false){
        sortBy.classList.remove("bi-sort-numeric-down")
        sortBy.classList.add("bi-sort-numeric-up")
        createArticoli(array,"decrescente")
        check=true;
    }else if(check==true){
        sortBy.classList.remove("bi-sort-numeric-up")
        sortBy.classList.add("bi-sort-numeric-down")
        createArticoli(array,"crescente")
        check=false;
    }
   }
   

});





