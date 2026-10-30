const glass = document.querySelector("#glass");

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
dragElement(document.querySelector(".grabbable"));
//dragElement(document.querySelector("#window1"));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";

    moveButtons();
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

const windowClose = document.querySelector("#windowclose");
const windowOpen = document.querySelector("#windowopen");

//Closable Windows
function closeWindow(element) {
  glass.classList.add("minimized");
  windowClose.style.zIndex = 13;
  windowOpen.style.zIndex = 16;
}

function openWindow(element) {
  glass.classList.remove("minimized");
  windowClose.style.zIndex = 16;
  windowOpen.style.zIndex = 13;
}

windowClose.addEventListener("click", closeWindow);
windowOpen.addEventListener("click", openWindow);

// Window Button Anchoring
const anchor = document.querySelector(".buttonanchor");
const buttons = document.querySelector(".buttoncontainer");

function moveButtons() {
  const position = anchor.getBoundingClientRect();

  buttons.style.position = "fixed";
  buttons.style.left = position.left - 640 + "px";
  buttons.style.top = position.top + "px";
  buttons.style.zIndex = "100";
}

moveButtons();
