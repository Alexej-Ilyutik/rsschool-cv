const NAV_MENU = document.querySelector(".nav_menu");
const HEADER_BURGER = document.querySelector(".header_burger");
const MENU_ITEM = document.querySelectorAll(".menu_item");

MENU_ITEM.forEach((ITEM) => {
  ITEM.addEventListener("click", () => {
    if (HEADER_BURGER.classList.contains("_active")) {
      document.body.classList.remove("_lock");
      NAV_MENU.classList.remove("_active");
      HEADER_BURGER.classList.remove("_active");
    }
  });
});

const openBurger = () => {
  document.body.classList.toggle("_lock");
  NAV_MENU.classList.toggle("_active");
  HEADER_BURGER.classList.toggle("_active");
};

HEADER_BURGER.addEventListener("click", openBurger);

console.group("%cCV", "color: red");
console.log("Вёрстка валидная. " + "%c+10", "color: red");
console.log("Вёрстка семантическая. " + "%c+20", "color: red");
console.log(
  "Для оформления СV используются css-стили. " + "%c+10",
  "color: red"
);
console.log(
  "Контент размещается в блоке, который горизонтально центрируется на странице. " +
    "%c+10",
  "color: red"
);
console.log("Вёрстка адаптивная. " + "%c+10", "color: red");
console.log("Есть адаптивное бургер-меню. " + "%c+10", "color: red");
console.log(
  "На странице СV присутствует изображение. " + "%c+10",
  "color: red"
);
console.log(
  "Контакты для связи и перечень навыков оформлены в виде списка. " + "%c+10",
  "color: red"
);
console.log(
  "CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского. " +
    "%c+10",
  "color: red"
);
console.log("CV содержит пример вашего кода. " + "%c+10", "color: red");
console.log(
  "CV содержит изображения-ссылки на выполненные вами проекты. " + "%c+10",
  "color: red"
);
console.log("CV выполнено на английском языке. " + "%c+10", "color: red");
console.log("Выполнены требования к Pull Request. " + "%c+10", "color: red");
console.log(
  "Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV. " +
    "%c+10",
  "color: red"
);
console.log("%cВСЕГО: +150", "color: red");
console.groupEnd();
