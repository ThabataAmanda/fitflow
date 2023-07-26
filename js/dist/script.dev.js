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

function scrollSuave(target) {
  var element = document.querySelector(target);
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition - 30; // Ajuste o valor do offset conforme necessário

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
} // Adiciona um evento de clique para os links internos


document.querySelectorAll('nav a').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    scrollSuave(href);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var carrosselPlans = document.querySelector(".carrossel-plans");
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
    rightArrow.addEventListener("click", goToNextPlan); // Exibindo o primeiro plano como padrão

    showCurrentPlan();
  }
});