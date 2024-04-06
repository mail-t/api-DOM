// odwołanie przez ID, tagi, nazwy class:

// let sectionAbout = document.getElementById("about");

// let paragraph = sectionAbout.getElementsByTagName("p");

// let box = sectionAbout.getElementsByClassName("photo");

// querySelector - najczęściej stosowany:

let qparagraph = document.querySelector("p");
qparagraph.style.fontSize = "100px";

let myButton = document.querySelector("#btn");
// myButton.style.backgroundColor = "green";
myButton.style.fontSize = "80px";

myButton.addEventListener("click", () => {
  myButton.classList.add("btngreen");
});

// do sprawdzenia

let qspan = document.querySelector(".title");
qspan.style.setProperty("color", "blue");
qspan.style.setProperty("border", "2px solid yellow");
qspan.style.setProperty("font-size", "100px");

// // tworzenie uchwytu do nowego przycistku button


// // let addsth = document.getElementById("addBtn");
// // addsth.addEventListener("click", () => {
// //   let itemName = document.createElement("span");
// //   itemName.id = "itemList";
//   //   itemName.innerText = "Uworzony po kliknięciu";
//   //   dodaje elementy itemName do body w .html, bo najpierw go wpisaliśmy w .js
//   document.body.appendChild(itemName);
// });

// kolejny uchwyt do inputa:

// itemName - to zmienna, która ma się pojawia po konkretnej akcji
// czyli po wpisaniu tekstu w input ponizej pojawia zmienna

const shopList = document.querySelector("#List");
const textInput = document.querySelector("#item");
//   zmienna let tex Input - powyżej funkcji, powinna być z innymi uchwytami
const addsth = document.getElementById("addBtn");
addsth.addEventListener("click", () => {
  let itemName = document.createElement("p");
  itemName.id = "itemList";
  // itemName.innerText = textInput.value; value pobiera wartość wpisaną w input,
  itemName.innerText = textInput.value;
  shopList.appendChild(itemName);
});
// te 4 linijki kodu można zastąpić jedną z innerHTML,
// innerHTML nadpisuje i zastępuje każdy kolejny element, nie powstaje lista - 59 minuta webinaru
