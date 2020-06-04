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

  // submit the form
  document
    .querySelector(".drink-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.querySelector(".input-name").value;
      const lastname = document.querySelector(".input-lastname");
      const email = document.querySelector(".input-email");

      let value = ui.checkEmpty(name, lastname, email);

      if (value) {
        ui.showFeedback("Enjoy your free coffe", "success");
      } else {
        ui.showFeedback("some form values empty", "error");
      }
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
  //   document
  //     .querySelector(".video__switch-btn")
  //     .classList.toggle("switch-btn-toggle");
  let btn = document.querySelector(".video__switch-btn");
  let videoItem = document.querySelector(".video__item");

  if (!btn.classList.contains("switch-btn-toggle")) {
    btn.classList.add("switch-btn-toggle");
    videoItem.pause();
  } else {
    btn.classList.remove("switch-btn-toggle");
    videoItem.play();
  }
};

// Check empty

UI.prototype.checkEmpty = function (name, lastname, email) {
  let result;

  if (name === "" || lastname === "" || email === "") {
    result = false;
  } else {
    result = true;
  }

  return result;
};

// Show feedback
UI.prototype.showFeedback = function (text, type) {
  // if (type === "success") {
  //   let feedback = document.querySelector(".drink-form__feedback");
  //   feedback.innerText = text;
  //   feedback.classList.add(type);
  //   this.removeAlert(type);
  // } else if (type === "error") {
  //   let feedback = document.querySelector(".drink-form__feedback");
  //   feedback.innerText = text;
  //   feedback.classList.add(type);
  //   this.removeAlert(type);
  // }

  let feedback = document.querySelector(".drink-form__feedback");
  feedback.innerText = text;
  feedback.classList.add(type);
  this.removeAlert(type);
};

// Remove the alert
UI.prototype.removeAlert = function (type) {
  setTimeout(function () {
    let feedback = document.querySelector(".drink-form__feedback");
    feedback.innerText = "";
    feedback.classList.remove(type);
  }, 3000);
};

eventListners();
