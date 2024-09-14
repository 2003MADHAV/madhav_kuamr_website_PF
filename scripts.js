// Array of image sources
const images = [
    './images/profilePhoto1.jpg',
    './images/profilePhoto2.jpg',
    './images/profilePhoto3.jpg',
    './images/profilePhoto4.jpg',
    './images/profilePhoto5.jpg',
    './images/profilePhoto6.jpg',
    './images/profilePhoto7.jpg',
    './images/profilePhoto8.jpg',
    './images/profilePhoto9.jpg',
    './images/profilePhoto10.jpg',
    './images/profilePhoto11.jpg',
    './images/profilePhoto12.jpg',
    './images/profilePhoto13.jpg',
    './images/profilePhoto14.jpg',
    './images/profilePhoto15.jpg',
    './images/profilePhoto16.jpg',
    './images/profilePhoto17.jpg',
    './images/profilePhoto18.jpg',
    './images/profilePhoto19.jpg',
    './images/profilePhoto20.jpg',
    './images/profilePhoto21.jpg',
    './images/profilePhoto22.jpg',
    './images/profilePhoto23.jpg'

];

let currentIndex = 0; 

function rotateImages() {
    const imgElement = document.getElementById('profileImage');
    currentIndex = (currentIndex + 1) % images.length; 
    imgElement.src = images[currentIndex];
}

// Rotate images every 5 seconds (5000 milliseconds)
setInterval(rotateImages, 5000);
