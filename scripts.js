let offsetX = 0;
let offsetY = 0;
let isDragging = false;

/*
Time and Date Updater
*/
function updateTime() {
  var time = new Date().toLocaleString();
  var timeText = document.querySelector("#time-date");

  timeText.innerHTML = time;
}

setInterval(updateTime, 1000);

// Draggable Glass
// Make the DIV element draggable:

function toggleWindow(event, action) {
  const windowShell = event.currentTarget.closest(".window");
  const windowClose = windowShell.querySelector(".closebutton");
  const windowOpen = windowShell.querySelector(".openbutton");

  // Minimize the window
  if (action == "close") {
    windowShell.classList.add("minimized");
    windowClose.style.display = "none";
    windowOpen.style.display = "flex";
  } else if (action == "open") {
    windowShell.classList.remove("minimized");
    windowClose.style.display = "flex";
    windowOpen.style.display = "none";
  }
}

document.querySelectorAll(".closebutton").forEach((button) => {
  button.addEventListener("click", (event) => {
    toggleWindow(event, "close");
  });
});

document.querySelectorAll(".openbutton").forEach((button) => {
  button.addEventListener("click", (event) => {
    toggleWindow(event, "open");
  });
});

document.querySelectorAll(".window").forEach((windowShell) => {
  dragElement(windowShell);
});

function dragElement(element) {
  let startX = 0;
  let startY = 0;
  let startLeft = 0;
  let startTop = 0;

  element.addEventListener("mousedown", startDrag);

  function startDrag(e) {
    // Clicking a button should not start dragging
    if (e.target.closest(".buttoncontainer")) return;

    e.preventDefault();

    startX = e.clientX;
    startY = e.clientY;
    startLeft = element.offsetLeft;
    startTop = element.offsetTop;

    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", stopDrag);
  }

  function drag(e) {
    element.style.left = startLeft + (e.clientX - startX) + "px";
    element.style.top = startTop + (e.clientY - startY) + "px";
  }

  function stopDrag() {
    document.removeEventListener("mousemove", drag);
    document.removeEventListener("mouseup", stopDrag);
  }
}

const galleryWindow = document.querySelector(".gallery");
const messageWindow = galleryWindow.querySelector(".window");
const photoGallery = galleryWindow.querySelector(".gallery-holder");

messageWindow.addEventListener("click", () => {
  photoGallery.style.display =
    photoGallery.style.display === "block" ? "none" : "block";
});
