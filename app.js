console.log("hello najish");


function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  


document.querySelector(".box").addEventListener('click',changeColor);
function changeColor() {


    btn.addEventListener('click',()=> {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
         document.body.style.backgroundColor = rndCol;
    });
}
