console.log('script is running');

var headingActions = document.querySelectorAll('.heading-action > div');
var spotlight = document.querySelector('.spotlight-hover');



headingActions.forEach(x =>  {
    x.addEventListener('mouseover', function() {
        spotlight.setAttribute('style','display:block');
    });
    x.addEventListener('mouseout',function() {
        spotlight.setAttribute('style','display:none');
    });
});





function mouseOver(element) {
    element.setAttribute('style','display:block');
}

function mouseOut(element) {
    element.setAttribute('style','display:none');
}