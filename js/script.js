const cloneItems = () => {
  const treadmill = document.querySelector(".box-content-list");
  const itens = treadmill.querySelectorAll(".item-li");

  let totalWidth = 0;
  itens.forEach(item => {
    totalWidth += item.offsetWidth + 10;
  });

  let cloneOffset = 0;
  while (cloneOffset < treadmill.offsetWidth) {
    itens.forEach(item => {
      const clone = item.cloneNode(true);
      treadmill.appendChild(clone);
    });
    cloneOffset += totalWidth;
  }
}

cloneItems();


function scrollSuave(target) {
  const element = document.querySelector(target);
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - 30; // Ajuste o valor do offset conforme necessário

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// Adiciona um evento de clique para os links internos
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    scrollSuave(href);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const carrosselPlans = document.querySelector(".carrossel-plans");
  const planBoxes = document.querySelectorAll(".plan-box");
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");
  let currentPlanIndex = 0;
  const screenWidth = window.innerWidth;

  if (screenWidth === 1024) {
    function showCurrentPlan() {
      planBoxes.forEach((box, index) => {
        if (index === currentPlanIndex) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    }

    function goToNextPlan() {
      currentPlanIndex = (currentPlanIndex + 1) % planBoxes.length;
      showCurrentPlan();
    }

    function goToPreviousPlan() {
      currentPlanIndex = (currentPlanIndex - 1 + planBoxes.length) % planBoxes.length;
      showCurrentPlan();
    }

    leftArrow.addEventListener("click", goToPreviousPlan);
    rightArrow.addEventListener("click", goToNextPlan);

    // Exibindo o primeiro plano como padrão
    showCurrentPlan();
  }
});