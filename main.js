////Part 1////

function firstOne () {
    const linedOut = document.querySelector('#arguments li');
    linedOut.style.textDecoration = 'line-through';
}

firstOne();

 function URLinsert(id, url) {
     document.getElementById(id).src = url;
 }

 URLinsert('image-1', 'https://st2.depositphotos.com/1011969/6070/i/950/depositphotos_60704945-stock-photo-number-1.jpg');
 URLinsert('image-2', "https://image.shutterstock.com/image-illustration/number-two-polished-golden-object-600w-371522539.jpg");
 URLinsert('image-3', "https://image.shutterstock.com/image-illustration/3d-number-made-4-colored-600w-1714902202.jpg");

 function removeLast() {
    const lastOne = document.getElementById("arguments");
    lastOne.removeChild(lastOne.lastElementChild);
}

removeLast();
removeLast();

 function fontChanger(font, id) {
    const randoStuff = document.getElementById(id);
    randoStuff.style.fontSize = font;
 }

 fontChanger('150px', 'heading');

////Part 2////


function addToArgument(domElement) {
      const argsUl = document.querySelector('#arguments');
      argsUl.appendChild(domElement);      
  }

const newElement = document.createElement('li');
      newElement.innerText = 'I am new';
  
addToArgument(newElement);


const ulPic = document.createElement('img');
      ulPic.src = "https://buffy.mlpforums.com/monthly_2017_03/blog-0471137001458138057.jpg.3a633758a132b0b7537ad318e643e84b.jpg";

addToArgument(ulPic);

function makeThirty(height1, id) {
    const newSize = document.getElementById(id);
    newSize.style.height = height1;
}
 
makeThirty('30px', 'image-1');  

function sayBye(invisible, id) {
    const goAway = document.getElementById(id);
    goAway.style.visibility = 'hidden';
}

sayBye('hidden', 'image-3');

////Part 3////





