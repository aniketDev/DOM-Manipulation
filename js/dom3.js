// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//     // console.log('clicked');
//     // document.getElementById('header').textContent = 'Changed';
//     // document.querySelector('#main').style.backgroundColor = '#ddd';
//     // console.log(e);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);

//     // let output = document.getElementById('output');
//     // output.innerHTML = '<h2>' + e.target.id + '</h2>';

//     // console.log(e.altKey);
//     // console.log(e.ctrlKey);
//     // console.log(e.shiftlKey);

// }

let button = document.getElementById('button');
let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);
// box.addEventListener('mousemove', runEvent);

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');
let select = document.querySelector('select');

// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keypress', runEvent);
// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);
// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);
// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE: ' + e.type);
    // box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
    // console.log(e.target.value);

    // document.getElementById('textInput').innerHTML = e.target.value;
}