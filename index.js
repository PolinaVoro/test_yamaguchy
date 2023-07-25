


const buttonUp = document.getElementById('main_image_button1');
const buttonDown = document.getElementById('main_image_button2');
const imageContainer = document.getElementById('main_image1');


let currentYPosition = 0; 
let isUp = false;


function smoothMovePhoto() {
 
  imageContainer.style.top = `${currentYPosition}px`;
}


buttonUp.addEventListener('click', () => {
  
  if (isUp) {
    return;
  }

  
  currentYPosition -= 40;

 
  isUp = true;

  
  smoothMovePhoto();
});


buttonDown.addEventListener('click', () => {
 
  if (!isUp) {
    return;
  }

  
  currentYPosition += 40;

  
  isUp = false;

 
  smoothMovePhoto();
});




