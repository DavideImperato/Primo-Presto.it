
let categoriesWrepper = document.querySelector("#categoriesWrepper");
let cardWrapper = document.querySelector("#cardWrapper")









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
        <input class="form-check-input" type="checkbox" name="category" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
          ${category}
        </label>
        `
        categoriesWrepper.appendChild(div);



        
    })


    function createArticoli() {
        let Products = data.map((annuncio)=> annuncio);
        console.log(Products);
        Products.forEach((prodotto)=>{
            let div = document.createElement("div")
            div.classList.add("card","cardArticle","m-3")
            div.innerHTML=`
            <img src="${prodotto.image}" class="imageCoverArticle" alt="foto${prodotto.name}">
            <div class="card-body">
              <h5 class="card-title">${prodotto.name}</h5>
              <p class="card-text"> Categoria: <br>${prodotto.category}</p>
              <div class="row align-items-center justify-content-around">
                <div class="col-6 text-center my-auto">
                    <p class="p-0 m-0">a partire da</p>
                    <h3>${prodotto.price}€</h3>
                </div>
                <div class="col-6 ms-auto"><a href="#" class="btn btn-primary">Noleggia</a></div>
              </div>
            </div>
            `
            cardWrapper.appendChild(div)
        })
        
    }

    createArticoli()
    


});





