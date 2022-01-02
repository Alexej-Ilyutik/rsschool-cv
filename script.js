
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
console.log(
  "Засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages. " + "%c+10",
  "color: red"
);
console.log("Вёрстка валидная. " + "%c+10", "color: red");
console.log("Вёрстка семантическая. " + "%c+20", "color: red");
console.log(
  "В footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс. " +
    "%c+10",
  "color: red"
);
console.log(
  "Для оформления СV используются css-стили. " + "%c+10",
  "color: red"
);
console.log(
  "Контент размещается в блоке, который горизонтально центрируется на странице. " +
    "%c+10",
  "color: red"
);
console.log(
  "На странице СV  есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt. " +
    "%c+10",
  "color: red"
);
console.log(
  "Навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li." +
    "%c+10",
  "color: red"
);
console.log("Содержание CV. " + "%c+30", "color: red");
console.log("CV выполнено на английском языке. " + "%c+10", "color: red");
console.log("%cВСЕГО: +130", "color: red");

console.groupEnd();
