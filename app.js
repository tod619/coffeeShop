function eventListners() {
  const ui = new UI();

  // add event listner to window for preloader
  window.addEventListener("load", () => {
    ui.hidePreLoader();
  });

  // navigation btn
  document.querySelector(".navBtn").addEventListener("click", () => {
    ui.showNav();
  });

  //   control for video playback
  document.querySelector(".video__switch").addEventListener("click", () => {
    ui.videoControls();
  });
}

function UI() {}

// Hide preloader
UI.prototype.hidePreLoader = function () {
  document.querySelector(".preloader").style.display = "none";
};

// Show + hide nav menu
UI.prototype.showNav = function () {
  document.querySelector(".nav").classList.toggle("nav--show");
};

//control video
UI.prototype.videoControls = function () {
  document
    .querySelector(".video__switch-btn")
    .classList.toggle("switch-btn-toggle");
};

eventListners();
