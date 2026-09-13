import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";

try {
  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      MENU_LINK: "menu__item-link",
      BREAKPOINT: 1024,
      MAIN: "main",
    },
  );
} catch (error) {
  console.error(error);
}
