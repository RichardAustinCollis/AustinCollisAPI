const baseURL = 'https://pixabay.com/api/docs/';
const key = '12477843-853b5b9c996fbf5c5df92d84c';
const resultsPerPageAPI = "&per_page=5";
let url;
const searchForm = document.querySelector('.form');
// const searchTerm = document.querySelector('');
const submitButton = document.querySelector('submit');
const Pictures = document.querySelector('.result')
// var query = `&q=${}`
const searchTerm = document.querySelector('.search')


function fetchResults(e) {  
  console.log(e);
  e.preventDefault();
  url = baseURL + '?key=' + '&q=' + `${search}` + '&image_type=photo';
  console.log(url);


  fetch(url).then(function(result) {
    return result.json();
  }).then(function(json) {
    displayResults(json);  
    console.log(json)
  });}
// fetch(url)
// .then(result => result.json())  
// .then(result => {
//     console.log(result);
//     displayPicture(result);
// })}
function displayPicture() {
 
  var result = new Image(100, 100);
  // result.src = 
result.src = `${search}`;
// document.appendChild(myImage);
// document.body.appendChild(myImage);
  // function displayPicture() {
// let mynewimage = createElement('img')
let mynewimage = document.createElement('img')
mynewimage.setattribute('src', json.IMAGE)
body.appendchild(mynewimage)

displayResults(mynewimage)
// displayPicture('.card')

// function displayPicture() {
//   let result = document.createElement('section');
//   
// }

// } 

}
searchForm.addEventListener('submit', fetchResults); 


