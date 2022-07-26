console.log('script is running');

var tutorial = document.querySelector('.tutorial');
var magic = document.querySelector('.magic');
var profile = document.querySelector('.profile');
tutorial.addEventListener('mouseover',() => {
    mouseOver(magic);
});


tutorial.addEventListener('mouseout',() => {
   mouseOut(magic);
});



function mouseOver(element) {
    element.setAttribute('style','display:block');
}

function mouseOut(element) {
    element.setAttribute('style','display:none');
}