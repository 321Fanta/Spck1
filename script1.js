/*const p1 = document.querySelectorAll('p');
//mewarnai semua elemen p
p1.forEach(function ( p1, index) {
  p1.style.backgroundColor = "red"
} );*/
// portal ke container
/*let newElement = document.createElement("p");
newElement.innerHTML = "TES TES 12";

let targetElement = document.getElementById('container');
if (targetElement){targetElement.appendChild(newElement)};
*/

// buat p baru (dgn teks)

/*let targetElement1 = document.getElementById("container");
if (targetElement1){document.getElementById(container)
};
let newElement1 = document.createElement('p');
targetElement1.appendChild(document.createTextNode("tes tes"));
 let object1 = [
   newElement1 : let = document.createElement('p'),
   
   ]
*/
const ul = document.createElement("ul");
ul.setAttribute("id","ul1");

let li = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");


let targetElement = document.getElementById('container');
targetElement.appendChild(ul);

let liToUl1 = document.getElementById("ul1");

let addLi1ToUl1 = liToUl1.appendChild(li);
let addLi2ToUl1 = liToUl1.appendChild(li2);
let addLi3ToUl1 = liToUl1.appendChild(li3);

let addTextNodeLi1 = li.appendChild(document.createTextNode("lol"));
let addTextNodeLi2 = li2.appendChild(document.createTextNode("lol1"));
let addTextNodeLi3 = li3.appendChild(document.createTextNode("lol2"));

// *target*.*method*(*yg ditambah*,idTarget*.children[*indexArray*])
ul.insertBefore(li3,ul1.children[0]);

// bisa untuk memunculkan prioritas ke sesuatu yang baru dicari/atau sering di cari

let SelectBg = document.querySelector("body");

SelectBg.style.backgroundImage ="F6nMuftaoAAsMv8.png";