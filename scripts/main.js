var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello World!";
myVariable = "Bob";
let iceCream = "chocolate";
alert("Hello everyone!")
if (iceCream === "chocolate") {
    alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite...");
}
function multiply(num1, num2) {
    let result = num1 * num2;
    //return alert(result)
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

document.querySelector("img").onclick = function () {
    alert("Ouch! Stop poking me!");
};

var myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/YT1.png") {
    myImage.setAttribute("src", "willylee0123.github.io/images/YT2.png");
  } else {
    myImage.setAttribute("src", "willylee0123.github.io/images/YT1.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  let myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.innerHTML = "Youtube is amazing, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storeName = localStorage.getItem("name");
  myHeading.innerHTML = "Youtube is cool, " + storeName;
}
myButton.onclick = function() {
  setUserName();
};
