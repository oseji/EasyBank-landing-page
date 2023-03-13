"use strict";

const container = document.querySelector(".container");
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navList");
const navBar = document.querySelector(".navbar");
const navBtn = document.querySelector(".navBtn");
console.log(navList, navBtn, hamburger);

hamburger.addEventListener("click", function () {
  console.log("clicked");
  navBar.classList.toggle("open");
});

//resize event to return all classes to normal upon a change in screen size
window.addEventListener("resize", function () {
  navBar.classList.remove("open");
});
