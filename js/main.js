let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick =() => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};
// Not working
window.onscroll =() => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};


// emailjs
function sendMail() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendbtn = document.querySelector(".send-btn");
  sendbtn.addEventListener("click", function(res) {
    res.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
      name.value = "";
      email.value = "";
      msg.value = "";
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  })
}
sendMail();

function sendmail(name, email, msg) {
  emailjs.send("service_fgi1fb6", "template_nc0tj1l", {
    to_name: email,
    from_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal("Oh uh!", "Fields can't be empty!", "error");
}

function success() {
  swal("successfully sent!", "I will try to answer you ASAP!", "success");
}
//Header background Change On scroll
let header = document.querySelector("header");
window.addEventListener("scroll", function() {
  header.classList.toggle("header-active", window.scrollY > 0)
})
// Scroll Top
let scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", function() {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400)
})
