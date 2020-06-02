function eventListners() {
  // Hide preloader
  // All images and scripts have loaded

  // add event listner to window
  window.addEventListener("load", () => {
    document.querySelector(".preloader").style.display = "none";
  });

  // navigation btn
  document.querySelector(".navBtn").addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("nav--show");
  });
}

eventListners();
