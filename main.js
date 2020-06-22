const body = document.querySelector("body")
const mainElement = document.createElement("main")
body.prepend(mainElement)
const buttonElement = document.createElement("button")
buttonElement.append('remove')
body.prepend(buttonElement)
buttonElement.addEventListener("click", function () {
  mainElement.remove()
});
//let buttonElement = document.getElementById("button-element").addEventListener("click", buttonElement);
//buttonElement = click; addEventListener
// Attach an event handler to <div>
//document.getElementById("input").addEventListener("buttonElement", myFunction);


const imgElement = document.createElement('img')
mainElement.append(imgElement)
imgElement.src = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*"
const anchorElement = document.createElement('a')
anchorElement.append('google.com')
mainElement.append(anchorElement)
anchorElement.href = 'https://google.com';

