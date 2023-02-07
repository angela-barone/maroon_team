// SEND BUTTON ANIMATION

 let sendBtn = document.querySelector(".send-btn");

      sendBtn.addEventListener("click", () => {
        let planePath = sendBtn.querySelector(".circle");
        let planeIcon = sendBtn.querySelector(".plane-icon");

        planePath.classList.add("rotateCircle");
        planeIcon.classList.remove("hide");

        setTimeout(() => {
          planeIcon.classList.add("hide");
          planePath.classList.remove("rotateCircle");
        }, 2750);

        setTimeout(() => {
          sendBtn.classList.add("checked");
          sendBtn.innerHTML = "Sent";
        }, 3000);
      });

// DARK MODE CODE

// Navbar
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

//Responsiveness
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};
// Dark Mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};
