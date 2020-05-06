// element.addEventListener("event_type", (evt) => {

  // GET SOME VARIABLES TO HELP WITH THE FETCH WORKING WITH EVT.target

  // fetch(url, {})
    // .then(r => r.json())
    // .then(jsonObj => {
      // DO DOM MANIPULATION WITH JSON OBJ
    // })
// })

let dogButton = document.getElementById('hello-button')
let dogsUl = document.querySelector("#dogs")
console.log(dogButton, dogsUl)

dogButton.addEventListener("click", (evt) => {

  fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then((jsonObj) => {
      // console.log(jsonObj);
      turnJSONtoHTML(jsonObj)

    })
})


// let turnJSONtoHTML = (jsonObj) => {
function turnJSONtoHTML(jsonObj) {
  let newImageTag = document.createElement("img")
  newImageTag.src = jsonObj.message
  newImageTag.alt = "Good dog"
  // console.log(newImageTag);

  let newLi = document.createElement("li")
  newLi.append(newImageTag)

  dogsUl.append(newLi)

  newImageTag.addEventListener("click", () => {
    console.log(newLi)
    // newLi.remove()
  })
}







// function regularFunction(){
//   console.log("hello")
//   return "hello"
// }

// let arrowFunction = () => {
//   console.log("goodbye");
//   return "goodbye"
// }

// let slickArrowFunction = () => "this is going to be returned"

// let thePromiseObj = fetch("https://dog.ceo/api/breeds/image/random")
//
// let anotherPromise = thePromiseObj.then(function(response){ return response.json() })
// let yetanotherPromise = anotherPromise.then(function(theReturnValueOfLine10){
//   console.log(theReturnValueOfLine10)
//   return 12
// })
// yetanotherPromise.then(function(number){console.log("number is", number)})