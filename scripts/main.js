let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/american-robin-juvenile.jpg') {
        myImage.setAttribute ('src','images/mourning-dove.jpg');
    } else {
        myImage.setAttribute ('src', 'images/american-robin-juvenile.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hey, ' + myName + '! ' + 'A Missouri bird!';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hey, ' + storedName + '! ' + 'A Missouri bird!';
}

myButton.onclick = function() {
    setUserName();
}
*/
