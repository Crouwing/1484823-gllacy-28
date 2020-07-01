var form_button = document.querySelector(".feedback_map_button");
var modal_communication = document.querySelector(".communication");
var form_close = modal_communication.querySelector(".cross_big");
var communication_form = modal_communication.querySelector(".communication_form");
var login = modal_communication.querySelector(".communication_login");
var email = modal_communication.querySelector(".communication_email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}


form_button.addEventListener("click" , function (evt) {
    evt.preventDefault();
    modal_communication.classList.add("modal_show");

   if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
  
    login.focus();
});

form_close.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal_communication.classList.remove("modal_show");
    modal_communication.classList.remove("modal_error");
  });

communication_form.addEventListener("submit", function (evt) {

	if (!login.value || !email.value) {
    evt.preventDefault();
    modal_communication.classList.remove("modal_error");
    modal_communication.offsetWidth = modal_communication.offsetWidth;
    modal_communication.classList.add("modal_error");
} else {
	if (isStorageSupport) {	
		localStorage.setItem("login", login.value);
	}
}
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modal_communication.classList.contains("modal_show")) {
      evt.preventDefault();
      modal_communication.classList.remove("modal_show");
      modal_communication.classList.remove("modal_error");
    }
  }
});



