const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");
const macrosPageOptions = document.getElementById('macrosPageOptions')
const openPersonal = document.getElementById('openPersonal')
const namePersonal = document.getElementById('namePersonal')
const weightCurrent = document.getElementById('weightCurrent')
const weightTarget = document.getElementById('weightTarget')
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

function storePersonalInfo() {
    window.localStorage.setItem('namePersonal', namePersonal.value)
    window.localStorage.setItem('weightCurrent', weightCurrent.value)
    window.localStorage.setItem('weightTarget', weightTarget.value)
    window.localStorage.setItem('weightUS', weightUS.value)
    window.localStorage.setItem('weightMetric', weightMetric.value)
    window.localStorage.setItem('weightLoss', weightLoss.value)
    window.localStorage.setItem('weightGain', weightGain.value)
    window.localStorage.setItem('muscleGain', muscleGain.value)
    window.localStorage.setItem('toneUp', toneUp.value)
}
console.log(localStorage)
// personalModal.showModal()
// macroModal.showModal()
// caloriesModal.showModal()