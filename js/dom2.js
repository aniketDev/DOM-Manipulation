let itemList = document.querySelector('#items');
/*** parentNode */
// console.log(itemList.parentNode);
// itemList.parentNode.parentNode.style.color = 'red';

/*** parentElement */
// console.log(itemList.parentElement);
// itemList.parentElement.parentElement.style.color = 'red';

/** childNode */
// console.log(itemList.childNodes); // not recomended

/** children */
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.color = 'red';

/** firstChild */
// console.log(itemList.firstChild); // useless

/** firstElementChild */
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello';

/** lastChild */
// console.log(itemList.lastChild); // useless

/** lastElementChild */
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello';

/** nextSibling */
// console.log(itemList.nextSibling);
// itemList.nextSibling.textContent = 'hello';

/** previousSibling */
// console.log(itemList.previousSibling); //useless

/** previousElementSibling */
// console.log(itemList.previousElementSibling);

/** createElement */
let newDiv = document.createElement('div');
// Add class
// newDiv.className = 'hello';
// Add id
newDiv.id = 'hello1';
// Add attribute
// newDiv.setAttribute('title', 'Hello Div');
// Create text node
// let newDivText = document.createTextNode('Hello world');
// Add text to div
// newDiv.appendChild(newDivText);

let container = document.querySelector('header .header-text');
let h1 = document.querySelector('#items');

// container.insertBefore(newDiv, h1);

// console.log(newDiv);