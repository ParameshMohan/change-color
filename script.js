const colorBtn = document.querySelector('.colorBtn');
const bodyBg = document.querySelector('body');

const colors =['yellow', 'green', 'red', '#3b5998'];

colorBtn.addEventListener('click',changeColor);

function changeColor () {
   // bodyBg.style.background = colors[2];
   let random = Math.floor(Math.random() * colors.length);
   bodyBg.style.backgroundColor = colors[random];

}
