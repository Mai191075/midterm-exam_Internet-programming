const next = document.querySelector(".carousel__btn--next"),
 back = document.querySelector(".carousel__btn--back"),
 carousel = document.querySelector(".carousel__cards");
let angle = 0;
next.addEventListener("click", () => {
    angle -= 45;
    carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
  });
  back.addEventListener("click", () => {
    angle += 45;
    carousel.style.transform = `translateZ(-25rem) rotateY(${angle}deg)`;
  });




  window.onload = choosePic;

  var theAd = 0;
  var adImages = new Array("pexels-dominika-roseclay-2682877.jpg", "pexels-james-wheeler-414612.jpg", "pexels-karolina-grabowska-4622893.jpg", "pexels-maksim-goncharenok-4380970.jpg","pexels-mike-145685.jpg","pexels-nugroho-wahyu-2937623.jpg","pexels-pixabay-358457.jpg","pexels-pixabay-460775.jpg","pexels-rfstudio-3060930.jpg","pexels-tatiana-614521.jpg");
  
  function choosePic() {
       theAd = Math.floor(Math.random() * adImages.length);
       document.getElementById("adBanner").src = adImages[theAd];
  
       rotate();
  }
  
  function rotate() {
       theAd++;
       if (theAd == adImages.length) {
          theAd = 0;
       }
       document.getElementById("adBanner").src = adImages[theAd];
  
       setTimeout(rotate, 3 * 1000);
  }









  var slider_content = document.getElementById('h1');
  array.remove(value); 
  var slider_content = document.getElementById('h2');
  var list = document.getElementById('h2');
  var slider_content = document.getElementById('h3');
  array. background-color: yellow;
  color:red;
  margin-top: 1px 
  font-size:75%;







  const paragraphs = document.querySelectorAll("p");
  alert(paragraphs[0].nodeName);
  
  var slider_content = document.getElementById('carousel__cards');

  window.onload = function() {
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("B");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
 }

var image = ['a','b', 'c', 'd','e','f','j','h','i','g'];

var i = image.length;

function nextImage(){
    if (i<image.length) {
        i= i+1;
    }else{
        i = 1;
    }
      slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";
}


function prewImage(){

    if (i<image.length+1 && i>1) {
        i= i-1;
    }else{
        i = image.length;
    }
      slider_content.innerHTML = "<img src="+image[i-1]+".jpg>";

}


setInterval(nextImage , 4000);