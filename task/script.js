const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("submit");
const msg = document.querySelector(".nav-name");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "student" && password.value === "1234") {
    window.location.href = "dashboard.html";
    msg.innerHTML = username.value;
  } else {
    alert("enter valid username and password");
    return false;
  }
});
