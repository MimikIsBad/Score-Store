let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeAmount = 0
let guestAmount = 0

function home1() {
    homeAmount = homeAmount + 1
    homeScore.textContent = homeAmount
    console.log(homeAmount)
}

function home2() {
    homeAmount = homeAmount + 2
    homeScore.textContent = homeAmount
    console.log(homeAmount)
}

function home3() {
    homeAmount = homeAmount + 3
    homeScore.textContent = homeAmount
    console.log(homeAmount)
}

function guest1() {
    guestAmount = guestAmount + 1
    guestScore.textContent = guestAmount
    console.log(guestAmount)
}

function guest2() {
    guestAmount = guestAmount + 2
    guestScore.textContent = guestAmount
    console.log(guestAmount)
}

function guest3() {
    guestAmount = guestAmount + 3
    guestScore.textContent = guestAmount
    console.log(guestAmount)
}

function resetMatch() {
    homeAmount = 0
    guestAmount = 0
    guestScore.textContent = guestAmount
    homeScore.textContent = homeAmount
}