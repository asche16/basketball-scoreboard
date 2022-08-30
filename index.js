let homeScore = 0
let gustScore = 0
let resetEl= 0 
let homeScoreEl = document.getElementById("home-score")
let gustScoreEl = document.getElementById("guest-score")



function homeAdd1Btn() {
    homeScore += 1
    homeScoreEl.innerText = homeScore
    compareResult()
}

function homeAdd2Btn() {
    homeScore += 2
    homeScoreEl.innerText = homeScore
    compareResult()
}

function homeAdd3Btn() {
    homeScore += 3
    homeScoreEl.innerText = homeScore
    compareResult()
}

//break>

function guestAdd1Btn() {
    gustScore += 1
    gustScoreEl.innerText = gustScore
    compareResult()
}

function guestAdd2Btn() {
    gustScore += 2
    gustScoreEl.innerText = gustScore
    compareResult()
}

function guestAdd3Btn() {
    gustScore += 3
    gustScoreEl.innerText = gustScore
    compareResult()
}
function compareResult() {
    if (homeScore > gustScore) {
        homeScoreEl.style.color = '#E11D48'
        gustScoreEl.style.color = '#F94F6D'
    } else if (homeScore < gustScore) {
        homeScoreEl.style.color = '#F94F6D'
        gustScoreEl.style.color = '#E11D48'
    } else {
        homeScoreEl.style.color = '#F94F6D'
        gustScoreEl.style.color = '#F94F6D'
    }
}

function reset(){
    homeScore = 0 
    gustScore = 0

    homeScoreEl.innerText = homeScore
    gustScoreEl.innerText = gustScore
}



