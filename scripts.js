const glass = document.querySelector(".glass");

let isDragging = false

glass.addEventListener("pointerdown", (Event) => {
    isDragging = false;
})

glass.addEventListener("pointermove", (Event) => {
    if (!isDragging) return;

    glass.style.left = `${Event.clientX}px`
    glass.style.top = `${Event.clientY}px`
})

glass.addEventListener("pointerup", (Event) => {
    isDragging = false;
})

glass.addEventListener("pointercancel", (Event) => {
    isDragging = false;
})