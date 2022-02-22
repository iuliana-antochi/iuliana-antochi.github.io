const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
const CATEGORIES_URL = 'https://api.thecatapi.com/v1/categories';
const selectBreeds = document.querySelector('.breeds');
const selectCategories = document.querySelector('.categories');


    fetch(BREEDS_URL) 
    .then (response => {
         return response.json();   
    })
    .then ( data => {
            const catBreed = data.map(element => {
                return {
                    name: element.name,
                    id: element.id,
                };
            })
            catBreed.forEach(element => {
                const option = document.createElement('option');
                option.value = element.id;
                option.innerText = element.name;
                selectBreeds.appendChild(option);
            });
            console.log(catBreed);
    })
    

    fetch(CATEGORIES_URL) 
    .then (response => {
         return response.json();   
    })
    .then ( data => {
            const catCategory = data.map(element => {
                return {
                    name: element.name,
                    id: element.id,
                };
            })
            catCategory.forEach(element => {
                const option = document.createElement('option');
                option.value = element.id;
                option.innerText = element.name;
                selectCategories.appendChild(option);
            });
        console.log(catCategory);
    })

selectBreeds.addEventListener("change", function(event){
    let url=(`https://api.thecatapi.com/v1/images/search?breed_id=${event.target.value}`);
    getCatbyBreed (url);
})

selectCategories.addEventListener("change", function(event){
    let url=(`https://api.thecatapi.com/v1/images/search?category_ids=${event.target.value}`);
    getCatbyCategory (url);
})


const img = document.querySelector ('.cat-img');

function getCatbyBreed (url){
    fetch(url)
    .then( function (response){
        return response.json();
    })
    .then ( function (data){
        img.src = data[0].url;
    })
    
}    

function getCatbyCategory (url){
    fetch(url)
    .then( function (response){
        return response.json();
    })
    .then ( function (data){
        img.src = data[0].url;
    })
    
}    