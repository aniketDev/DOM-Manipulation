// console.log(window);
// console.log(window.alert.name);
// console.log(window.location);
// console.log(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[11]);
// console.log(document.all[11].textContent = "hello");
// console.log(document.forms);
// console.log(document.images);


//****** getElementById ************//

let getItem = document.getElementById('header-text');
// console.log(getItem.innerText);
// console.log(getItem.textContent);
// getItem.textContent = "hello";
// getItem.innerText = "hi";
// getItem.innerHTML = "<h3>Hello</h3>";
// getItem.style.display = "none";


//********** getElementByClassName ********//

let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'hello';
// items[1].style.backgroundColor = 'grey';

// for (let i = 0; i < items.length; i++) {
//     items[i].style.fontWeight = '700';
// }


//*********** getElementByTagName *************//

let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello';
// li[1].style.backgroundColor = 'grey';

// for (let i = 0; i < li.length; i++) {
//     li[i].style.fontWeight = '700';
// }


//*********** querySelecter *************//

let header = document.querySelector('#header'); // Any css selecter just like jQuery
// console.log(header);
// header.style.display = 'none';
// let input = document.querySelector('input'); // selects only the first input
// input.value = "helllo";

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red'; // only 1st item will change

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'green';

// let secondChild = document.querySelector('.list-group-item:nth-child(2)');
// secondChild.style.color = 'blue';


//*********** querySelecterAll *************// select multiple tags or class

let titles = document.querySelectorAll('h2');
// console.log(titles);
// titles[0].textContent = "hello";

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//     odd[i].style.color = 'red';
//     even[i].style.color = 'blue';
// }