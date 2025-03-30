const menu_btn = document.querySelector("#menu_btn");
const menu = document.querySelector("#menu");
let hoge = true;

menu_btn.addEventListener("click", () => {
  if (hoge === true) {
    hoge = false;
    menu.style.scale = "1";
    menu_btn.style.borderLeftWidth = "1px";
    menu_btn.style.scale = "1.2";
  } else {
    hoge = true;
    menu.style.scale = "0";
    menu_btn.style.borderLeftWidth = "6px";
    menu_btn.style.scale = "1";
  }
});
