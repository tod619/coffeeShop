function eventListners() {
  const ui = new UI();

  // add event listner to window
  window.addEventListener("load", () => {
    ui.hidePreLoader();
  });

  // navigation btn
  document.querySelector(".navBtn").addEventListener("click", () => {
    ui.showNav();
  });
}

function UI() {}

UI.prototype.hidePreLoader = function () {
  document.querySelector(".preloader").style.display = "none";
};

UI.prototype.showNav = function () {
  document.querySelector(".nav").classList.toggle("nav--show");
};

eventListners();
