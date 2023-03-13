// ID's

const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");
const macrosPageOptions = document.getElementById('macrosPageOptions')

const userName = document.getElementById('userName')
const objOneAnswer = document.getElementById('objOneAnswer')
const objTwoAnswer = document.getElementById('objTwoAnswer')

const openPersonal = document.getElementById('openPersonal')
const namePersonal = document.getElementById('namePersonal')
const weightCurrent = document.getElementById('weightCurrent')
const weightUS = document.getElementById('weightUS')
const weightMetric = document.getElementById('weightMetric')
const weightLoss = document.getElementById('weightLoss')
const weightGain = document.getElementById('weightGain')
const muscleGain = document.getElementById('muscleGain')
const toneUp = document.getElementById('toneUp')
const personalSubmit = document.getElementById('personalSubmit')

const openMacros = document.getElementById('openMacros')
const openCalories = document.getElementById('openCalories')
const personalModal = document.getElementById("personalModal")
const personalClose = document.getElementById('personalClose')
const macroModal = document.getElementById('macroModal')
const macroClose = document.getElementById('macroClose')

const caloriesModal = document.getElementById('caloriesModal')
const caloriesClose = document.getElementById('caloriesClose')



// Global Variables

let personalStorage = {
    namePersonal : "",
    weightCurrent : "",
    weightUS : "",
    weightMetric : "",
    weightLoss : "",
    weightGain : "",
    muscleGain : "",
    toneUp : "",
}

// Event Listeners

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
    macrosPageOptions.classList.toggle("macros-options-toggle")
})

openPersonal.addEventListener('click', () => {
    personalModal.showModal()
})

// personalSubmit.addEventListener('click', () => {
//     storePersonalInfo()
// })

personalClose.addEventListener('click', () => {
    personalModal.close()
})

openMacros.addEventListener('click', () => {
    macroModal.showModal()
})

macroClose.addEventListener('click', () => {
    macroModal.close()
})

openCalories.addEventListener('click', () => {
    caloriesModal.showModal()
})

caloriesClose.addEventListener('click', () => {
    caloriesModal.close()
})

// Functions

function storePersonalInfo() {
    personalStorage.namePersonal = namePersonal.value
    personalStorage.weightCurrent = weightCurrent.value
    personalStorage.weightUS = weightUS.checked
    personalStorage.weightMetric = weightMetric.checked
    personalStorage.weightLoss = weightLoss.checked
    personalStorage.weightGain = weightGain.checked
    personalStorage.muscleGain = muscleGain.checked
    personalStorage.toneUp = toneUp.checked

    window.localStorage.setItem("personalStorage", JSON.stringify(personalStorage))
}

function fetchPersonalInfo() {
   let getPersonalStorage = window.localStorage.getItem("personalStorage")
   personalStorage = JSON.parse(getPersonalStorage)
}


// Checks for personalStorage data in localStorage
function isPersonalStored() {
    if (localStorage.personalStorage) {

        openMacros.removeAttribute("disabled")
        openCalories.removeAttribute("disabled")
        openMacros.classList.remove('macro-option-disable')
        openCalories.classList.remove('macro-option-disable')
        openMacros.onmouseover = () => {
            openMacros.classList.add("macro-option-enable")
        }
        openMacros.onmouseleave = () => {
            openMacros.classList.remove("macro-option-enable")
        }
        openCalories.onmouseover = () => {
            openCalories.classList.add("macro-option-enable")
        }
        openCalories.onmouseleave = () => {
            openCalories.classList.remove("macro-option-enable")
        }
    }
    console.log(localStorage)
}

// Sets text in goal banner based on given user information
function setGoalBanner() {

    fetchPersonalInfo()

    userName.textContent = "Welcome, " + personalStorage.namePersonal
    objOneAnswer.textContent = personalStorage.weightCurrent + " lbs"
    
    Object.entries(personalStorage).forEach(([key, value]) => {
        if (value == true) {
            if (key == "weightGain") {
                objTwoAnswer.textContent = "To Gain Weight"
            }
            else if (key == "weightLoss") {
                objTwoAnswer.textContent = "To Lose Weight"
            }
            else if (key == "muscleGain") {
                objTwoAnswer.textContent = "To Gain Muscle"
            }
            else {
                objTwoAnswer.textContent = "To Tone Up"
            }           
        }
    })
}


isPersonalStored()
setGoalBanner()

