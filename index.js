let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let countBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let warningBox = document.getElementById("warning-box")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    if (count >= 3) {
        warningBox.style.display = "block"
        countEl.style.display = "none"
        saveBtn.style.display = "none"
        saveEl.style.display = "none"
        countBtn.innerText = "You can't eat mangos"
        countBtn.setAttribute('disabled', '')
        countBtn.style.backgroundColor = "gray"
    } else {
        saveEl.textContent += countStr
        saveEl.style.display = "block"
        countEl.textContent = 0
        count = 0
    }
}