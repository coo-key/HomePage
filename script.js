const menu_btn = document.querySelector("#menu_btn");
const menu = document.querySelector("#menu");
let hoge = true;

menu_btn.addEventListener("click", () => {
  if (hoge === true) {
    hoge = false;
    menu.style.translate = "-120px 70px";
    menu_btn.style.borderLeftWidth = "1px";
    menu_btn.style.scale = "1.2";
  } else {
    hoge = true;
    menu.style.translate = "130px 70px";
    menu_btn.style.borderLeftWidth = "6px";
    menu_btn.style.scale = "1";
  }
});