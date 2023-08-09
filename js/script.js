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


const formatPhone = () => {
  const input = document.getElementById("phoneNumber");
  let valueNumberPhone = input.value.replace(/\D/g, "");

  if (valueNumberPhone.length > 2) {
    const ddd = valueNumberPhone.slice(0, 2);
    const otherNumbers = valueNumberPhone.slice(2, 10); // Limitando para 8 dígitos após o DDD
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
}
document.getElementById("phoneNumber").addEventListener("input", formatPhone);


const handleScroll = () => {
  const navigation = document.querySelector("nav");
  const scrollY = window.scrollY;
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
  const element = document.querySelector(target);
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - 30; //

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}


document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    scrollSmooth(href);
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const planBoxes = document.querySelectorAll(".plan-box");
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");
  let currentPlanIndex = 0;
  const screenWidth = window.innerWidth;

  if (screenWidth === 1024) {
    const showCurrentPlan = () => {
      planBoxes.forEach((box, index) => {
        if (index === currentPlanIndex) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    }

    const goToNextPlan = () => {
      currentPlanIndex = (currentPlanIndex + 1) % planBoxes.length;
      showCurrentPlan();
    }


    const goToPreviousPlan = () => {
      currentPlanIndex = (currentPlanIndex - 1 + planBoxes.length) % planBoxes.length;
      showCurrentPlan();
    }

    leftArrow.addEventListener("click", goToPreviousPlan);
    rightArrow.addEventListener("click", goToNextPlan);

    showCurrentPlan();
  }
});

const phrases = document.querySelectorAll('.phrase');
let currentIndex = 0;

const showNextPhrase = () => {
  phrases[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % phrases.length;
  phrases[currentIndex].style.display = 'block';
  setTimeout(showNextPhrase, 5000);
}

phrases[currentIndex].style.display = 'block';
setTimeout(showNextPhrase, 5000);