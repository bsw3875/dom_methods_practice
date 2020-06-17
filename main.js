const body = document.querySelector("body")
const mainElement = document.createElement("main")
body.prepend(mainElement)
const buttonElement = document.createElement("button")
buttonElement.append('remove')
body.prepend(buttonElement)
buttonElement.addEventListener("click", buttonElement);
//let buttonElement = document.getElementById("button-element").addEventListener("click", buttonElement);
//buttonElement = click; addEventListener
// Attach an event handler to <div>
//document.getElementById("input").addEventListener("buttonElement", myFunction);


const imgElement = document.createElement('img')
imgElement.append('imgElement')
imgElement.src = "../https://www.positano.com/en/s/positano-3.jsg";
const anchorElement = document.createElement('a')
anchorElement.append('anchorElement')
anchorElement.href = 'https://google.com';

let input = document.getElementById('image');
input.addEventListener('image', imgElement);

const inputElementButton = document.createElement("input")
inputElementButton.prepend('input')
inputElementButton.addEventListener('click', inputElementButton)
//function remove(mainElement) {
  //  return mainElement
//childNode; remove; mainElement
//}