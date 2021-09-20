"use strict";

var tab = document.getElementById("pirmas");
tab.style.display= "flex";
function changeHeader(x, name){
  var tabs = document.getElementsByClassName("tab");
  var buttons = document.getElementsByTagName("button");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
    // buttons[i].classList.remove("active");
  }
var tab = document.getElementById(name);
tab.style.display= "flex";
x.currentTarget.classList.add("active");
}

var burger = document.getElementById("burger");
var sideMenu = document.getElementById("side-menu");
burger.addEventListener("click",openSideMenu);
function openSideMenu(){
  sideMenu.classList.toggle("translateX");
  burger.classList.toggle("rotate");
}
var sideLinks = document.getElementsByClassName("sideLinks");
for (var i = 0; i < sideLinks.length; i++) {
  sideLinks[i].addEventListener("click", openSideMenu);
}
 var topLinks = document.getElementsByClassName("topLinks");
 for (var i = 0; i < topLinks.length; i++) {
   topLinks[i].addEventListener("click",clicked);
   function clicked(){
     for (var i = 0; i < topLinks.length; i++) {
       topLinks[i].classList.remove("activex");
     }
     this.classList.add("activex");
   }
 }
