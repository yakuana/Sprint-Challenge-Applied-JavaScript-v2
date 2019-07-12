/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {

  // define new elements 
  const carousel = document.createElement("div"); 
  const leftButton = document.createElement("div"); 
  const img1 = document.createElement("img"); 
  const img2 = document.createElement("img"); 
  const img3 = document.createElement("img"); 
  const img4 = document.createElement("img"); 
  const rightButton = document.createElement("div"); 

  // assign class names 
  carousel.classList.add("carousel"); 
  leftButton.classList.add("left-button"); 
  rightButton.classList.add("right-button"); 

  // set text content 
  leftButton.textContent = "<";
  rightButton.textContent = ">";

  // set image link content 
  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "./assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  
  
  // array of images 
  const images = [img1, img2, img3, img4]; 

  // index is currently the last image in the images []
  let index = images.length - 1; 

  // added class "on" to last image in images []
  images[index].classList.add("on"); 

  // console.log(images[index]); 

  // displays last image 
  images[index].style.display = "block"; 



  /** EVENT LISTENERS */

  // if left arrow clicked, subtract one from index and call the selectLR() function 
  // console logs what was clicked and the current value of this.index 
  leftButton.addEventListener("click", () => {--index; selectLR(); console.log("clicked LEFT", "current index is:", index)});

  // if right arrow clicked, add one to index and call the selectLR() dunction  
  // console logs what was clicked and the current value of this.index 
  rightButton.addEventListener("click", () => {++index; selectLR(); console.log("clicked RIGHT","current index is:", index)}); 



  /** selectLR CALLBACK FUNCTION */

  // selectLR stands for select(ed) Left or Right (button)
  function selectLR() {

    // removes the "on" class from every image 
    images.forEach((image) => {image.classList.remove("on"); image.style.display = "none"})

    // index is greater the length of images array - 1
    if (index > images.length - 1) {
        
        // adds the class "on" to the FIRST img tag in images 
        images[0].classList.add("on"); 
        console.log("this.images[0] with class 'on'", images[0])

        // resets the index to 0
        index = 0; 
    
    // index is a negative number (least negative value possible is -1)
    } else if (index < 0) {

        // adds "on" class to the LAST img tag in images 
        images[images.length - 1].classList.add("on"); 
        // console.log("images[images.length - 1] with class 'on'", images[images.length - 1])

        // resets index to equal the length of this.images - 1 
        index = images.length - 1; 

    // index is within the bounds of images array 
    } else {
        // adds "on" class to the image at this.index 
        images[index].classList.add("on"); 
    }

    // loops through the images to find the image with the class "on" and displays that image 
    images.forEach((image) => {
      if (image.classList[0] === "on") {
        image.style.display = "block"; 
      }
    });

  };
  

  // create structure 
  carousel.appendChild(leftButton); 
  carousel.appendChild(img1); 
  carousel.appendChild(img2); 
  carousel.appendChild(img3); 
  carousel.appendChild(img4); 
  carousel.appendChild(rightButton); 

  return carousel; 
}




const carouselContainer = document.querySelector(".carousel-container"); 
// console.log(carouselContainer);

carouselContainer.appendChild(createCarousel()); 