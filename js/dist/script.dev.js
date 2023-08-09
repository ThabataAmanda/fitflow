"use strict";

var cloneItems = function cloneItems() {
  var treadmill = document.querySelector(".box-content-list");
  var itens = treadmill.querySelectorAll(".item-li");
  var totalWidth = 0;
  itens.forEach(function (item) {
    totalWidth += item.offsetWidth + 10;
  });
  var cloneOffset = 0;

  while (cloneOffset < treadmill.offsetWidth) {
    itens.forEach(function (item) {
      var clone = item.cloneNode(true);
      treadmill.appendChild(clone);
    });
    cloneOffset += totalWidth;
  }
};

cloneItems();

var formatPhone = function formatPhone() {
  var input = document.getElementById("phoneNumber");
  var valueNumberPhone = input.value.replace(/\D/g, "");

  if (valueNumberPhone.length > 2) {
    var ddd = valueNumberPhone.slice(0, 2);
    var otherNumbers = valueNumberPhone.slice(2, 10); // Limitando para 8 dígitos após o DDD

    valueNumberPhone = ddd + otherNumbers;
  }

  if (valueNumberPhone.length >= 11) {
    valueNumberPhone = valueNumberPhone.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (valueNumberPhone.length >= 6) {
    valueNumberPhone = valueNumberPhone.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (valueNumberPhone.length >= 2) {
    valueNumberPhone = valueNumberPhone.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  }

  input.value = valueNumberPhone;
};

document.getElementById("phoneNumber").addEventListener("input", formatPhone);

var handleScroll = function handleScroll() {
  var navigation = document.querySelector("nav");
  var scrollY = window.scrollY;

  if (scrollY > 0) {
    navigation.style.position = "fixed";
    navigation.style.backdropFilter = "blur(10px)";
    navigation.style.width = "100%";
    navigation.style.padding = "10px 25px";
    navigation.style.left = "0";
    navigation.style.zIndex = "99";
  } else {
    navigation.style.position = "";
    navigation.style.backdropFilter = "";
    navigation.style.width = "";
    navigation.style.padding = "";
    navigation.style.left = "";
    navigation.style.zIndex = "";
  }
};

window.addEventListener("scroll", handleScroll);

function scrollSmooth(target) {
  var element = document.querySelector(target);
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition - 30; //

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    scrollSmooth(href);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var planBoxes = document.querySelectorAll(".plan-box");
  var leftArrow = document.querySelector(".arrow-left");
  var rightArrow = document.querySelector(".arrow-right");
  var currentPlanIndex = 0;
  var screenWidth = window.innerWidth;

  if (screenWidth === 1024) {
    var showCurrentPlan = function showCurrentPlan() {
      planBoxes.forEach(function (box, index) {
        if (index === currentPlanIndex) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    };

    var goToNextPlan = function goToNextPlan() {
      currentPlanIndex = (currentPlanIndex + 1) % planBoxes.length;
      showCurrentPlan();
    };

    var goToPreviousPlan = function goToPreviousPlan() {
      currentPlanIndex = (currentPlanIndex - 1 + planBoxes.length) % planBoxes.length;
      showCurrentPlan();
    };

    leftArrow.addEventListener("click", goToPreviousPlan);
    rightArrow.addEventListener("click", goToNextPlan);
    showCurrentPlan();
  }
});
var phrases = document.querySelectorAll('.phrase');
var currentIndex = 0;

var showNextPhrase = function showNextPhrase() {
  phrases[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % phrases.length;
  phrases[currentIndex].style.display = 'block';
  setTimeout(showNextPhrase, 5000);
};

phrases[currentIndex].style.display = 'block';
setTimeout(showNextPhrase, 5000);