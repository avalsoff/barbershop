var loginButton = document.querySelector(".user-options__login-button");
var modalLogin  = document.querySelector(".modal-login");
var closeLogin = document.querySelector(".login-close");
var contactsButton = document.querySelector(".contacts__button");
var modalMap  = document.querySelector(".modal-map");
var closeMap = document.querySelector(".map-close");
var footerMapButton = document.querySelector(".main-footer__find-us-link");


loginButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalLogin.classList.add("modal-show");
});

closeLogin.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalLogin.classList.remove("modal-show");
});

try {
  contactsButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
  });
} catch (err) {
  console.log(err);
}

footerMapButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

closeMap.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});



