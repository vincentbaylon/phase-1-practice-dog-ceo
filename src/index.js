console.log('%c HI', 'color: firebrick')

//Challenge 1

//fetch the data

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res => res.json())
.then(json => json.message.forEach(addImages))

//function that does the DOM maninpulations
function addImages(dog) {
    let img = document.createElement('img')
    img.src = dog

    document.querySelector('#dog-image-container').append(img)
}


//Challenge 2 

//fetch data
fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(json => {

    for (breed in json.message) {
        if (json.message[breed] != '') {
            json.message[breed].forEach(addBreeds)
        }
        addBreeds(breed)
    }
})


//function for DOM manipulation

function addBreeds(breed){
    let li = document.createElement('li')
    li.textContent = breed

//Challenge 3
    li.addEventListener('click', () => li.style.color = "red")


    document.querySelector('#dog-breeds').append(li)
}

//for breed in messageObject, if value (array) is empty, then print the key
//if value (array) has elements, then iterate over value array



//Challenge 4

document.querySelector('#breed-dropdown').addEventListener('change', (e) => {
    //enter funtion on filtering
    console.log(e.target.value)
    document.querySelectorAll('#dog-breeds li').forEach((element) => element.remove())

    //let breeds = document.querySelectorAll('#dog-breeds li')

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(json => {
        for (breed in json.message) {
            if (breed.slice(0, 1) === e.target.value) {
                addBreeds(breed);
            }
        }
    })
})