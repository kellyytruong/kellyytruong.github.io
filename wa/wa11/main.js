const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgArray = ['/wa/wa11/images/car.JPG','/wa/wa11/images/sister.JPG','/wa/wa11/images/ferris-wheel.JPG','/wa/wa11/images/skydive.jpg','/wa/wa11/images/sunset.jpg'];

/* Declaring the alternative text for each image file */
const altText = ['car','sister','ferris-wheel','skydive','sunset'];

/* Looping through images */
// make a for loop
for (i = 0; i < imgArray.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', imgArray[i]);
    newImage.setAttribute('alt', altText[i]);
    newImage.addEventListener('click',() => {
        displayedImage.src = newImage.src;
        displayedImage.alt = newImage.alt;
    });
    thumbBar.appendChild(newImage);
};

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',() => {
    if (btn.getAttribute('class') === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.setAttribute('style','background-color: rgba(0,0,0,0.3)');
    } else if (btn.getAttribute('class') === 'light') {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.setAttribute('style','background-color: rgba(0,0,0,0)');
    }
  });