const glass = document.querySelector(".glass");


let offsetX = 0
let offsetY = 0
let isDragging = false


function updateTime() {

    var time = new Date().toLocaleString()
    var timeText = document.querySelector("#time-date")

    timeText.innerHTML = time

}

setInterval(updateTime, 1000);


glass.addEventListener("pointerdown", (Event) => {
    isDragging = true;
    const rect = glass.getBoundingClientRect();
    
    offsetX = Event.clientX - rect.left;
    offsetY = Event.clientY - rect.top;
    
})

glass.addEventListener("pointermove", (Event) => {
    if (!isDragging) return;
    const rect = glass.getBoundingClientRect();
    console.log("Dragging!", Event.clientX, Event.clientY);
    console.log("Wrapper:", rect.left, rect.top);

    glass.style.left = `${Event.clientX - offsetX}px`;
    glass.style.top = `${Event.clientY - offsetY}px`;
})

glass.addEventListener("pointerup", (Event) => {
    isDragging = false;
})

glass.addEventListener("pointercancel", (Event) => {
    isDragging = false;
})

