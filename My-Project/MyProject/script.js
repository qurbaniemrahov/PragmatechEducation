// top menu section start
let containerHeader = document.getElementById('container-header');
let miniNavBar = document.getElementById('mini-nav-bar');
let logo = document.getElementsByClassName('logo');
let socialConnect = document.getElementsByClassName('social-connect');
let navBar = document.getElementsByClassName('nav-bar');


window.onscroll = function () {
    if (window.pageYOffset > 200) {
        containerHeader.style.display = 'none';
        miniNavBar.style.display = 'block';
        miniNavBar.style.position = 'fixed';
        miniNavBar.style.top = 0;
        miniNavBar.style.left = 0;

    } else if (window.pageYOffset < 200) {
        containerHeader.style.display = 'block';
        miniNavBar.style.display = 'none';
        containerHeader.style.position = 'fixed';
        containerHeader.style.top = 0;
        containerHeader.style.backgroundColor = '#FFFFFF';
        containerHeader.style.display = 'flex';
        containerHeader.style.width = '100%';
        containerHeader.style.margin = '0px';
    }
}

// top menu section end

// slider section start
// let sliderContainer = document.getElementById('slider-container');
// let firstImage = document.getElementsByClassName('first-image');
// let secondImage = document.getElementsByClassName('second-image');



// slider section end







































// slider section end