/**
 * Project Name: Simple image search web application using Pixabay API.
 * Author: Tushar Ahmmed Sakib
 * UI Framework: Tailwindcss
 */

// handle
const inputField = document.getElementById('input');
const submit = document.getElementById('submit');
const galleryDiv = document.getElementById('gallery');


// after submit form
submit.addEventListener('click',(event)=>{
    event.preventDefault();
    let val = inputField.value;

    if(val != '' && typeof(val) == 'string'){
        getImages(val);
        // clear form
    }

})

// clear prev search
inputField.addEventListener('click',(event)=>{
    event.target.value = '';
})

// functions

// get response
function getImages(query){
    let url = `https://pixabay.com/api/?key=21755814-c9d064145c357e7fac13a8c67&q=${query}&image_type=photo&pretty=true&per_page=24&orientation=vertical&safesearch=ture`;

    fetch(url)
    .then(response => response.json())
    .then(data => showImages(data));
}
// display images
function showImages(imgList){
    // clear prev data
    galleryDiv.innerHTML = '';
    // loop
    for(let item of imgList.hits){
        let imgSrc = item.webformatURL;
        // create item
        let div = document.createElement('div');
        div.innerHTML = `
                        <div class="flex relative">
                        <img alt="gallery" class="" src="${imgSrc}">
                        </div>`;
         div.classList = 'lg:w-1/3 sm:w-1/2 p-4';
        // append
        galleryDiv.append(div);
    }
}