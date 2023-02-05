// Thông tin sản phẩm 1
const view1 = document.querySelector(".one__view");
const view1OpenBtn = document.querySelector(".one__view__openBtn");
const view1CloseBtn = document.querySelector(".one__view__closeBtn");
const view1Overlay = document.querySelector(".one__view-overlay");

view1OpenBtn.addEventListener("click", function () {
  view1.classList.add("one__showview");
  view1Overlay.classList.add("one__transparentBcg");
  html.classList.add("no-scroll");
});

view1CloseBtn.addEventListener("click", function () {
  view1.classList.remove("one__showview");
  view1Overlay.classList.remove("one__transparentBcg");
  html.classList.remove("no-scroll");
});

// Thông tin sản phẩm 2
const view2 = document.querySelector(".two__view");
const view2OpenBtn = document.querySelector(".two__view__openBtn");
const view2CloseBtn = document.querySelector(".two__view__closeBtn");
const view2Overlay = document.querySelector(".two__view-overlay");

view2OpenBtn.addEventListener("click", function () {
  view2.classList.add("two__showview");
  view2Overlay.classList.add("two__transparentBcg");
  html.classList.add("no-scroll");
});

view2CloseBtn.addEventListener("click", function () {
  view2.classList.remove("two__showview");
  view2Overlay.classList.remove("two__transparentBcg");
  html.classList.remove("no-scroll");
});

// Thông tin sản phẩm 3
const view3 = document.querySelector(".three__view");
const view3OpenBtn = document.querySelector(".three__view__openBtn");
const view3CloseBtn = document.querySelector(".three__view__closeBtn");
const view3Overlay = document.querySelector(".three__view-overlay");

view3OpenBtn.addEventListener("click", function () {
  view3.classList.add("three__showview");
  view3Overlay.classList.add("three__transparentBcg");
  html.classList.add("no-scroll");
});

view3CloseBtn.addEventListener("click", function () {
  view3.classList.remove("three__showview");
  view3Overlay.classList.remove("three__transparentBcg");
  html.classList.remove("no-scroll");
});
