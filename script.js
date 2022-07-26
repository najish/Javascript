console.log('script is running');

var headingActions = document.querySelectorAll('.heading-action > div');
var spotlight = document.querySelector('.spotlight-hover');
var business = document.querySelector('.business-hover');
var education = document.querySelector('.education-hover');
var plan = document.querySelector('.plan-hover');
var learn = document.querySelector('.learn-hover');


headingActions.forEach(x =>  {
    x.addEventListener('mouseover', () => {
        switch(x.className)
        {
            case "spotlight":
                mouseOver(spotlight);
                break;

            case "business":
                mouseOver(business);
                break;
            
            case "education":
                mouseOver(education);
                break;
            
            case "plan":
                mouseOver(plan);
                break;
            
            case "learn":
                mouseOver(learn);
                break;
        }
    });

    x.addEventListener('mouseout', () => {
        switch(x.className)
        {
            case "spotlight":
                mouseOut(spotlight);
            break;
            case "business":
                mouseOut(business);
                break;
            
            case "education":
                mouseOut(education);
                break;
            
            case "plan":
                mouseOut(plan);
                break;
            
            case "learn":
                mouseOut(learn);
                break;
        }
    });

    
});





function mouseOver(element) {
    element.setAttribute('style','display:block');
}

function mouseOut(element) {
    element.setAttribute('style','display:none');
}