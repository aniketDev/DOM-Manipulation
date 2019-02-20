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

let header = document.querySelector('#header'); // any css selecter just like jQuery
// console.log(header);
// header.style.display = 'none';