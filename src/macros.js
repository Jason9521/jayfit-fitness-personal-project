const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");

const personalModal = document.getElementById("personalModal")
const personalClose = document.getElementById('personalClose')
const macroModal = document.getElementById('macroModal')
const macroClose = document.getElementById('macroClose')

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
})

personalClose.addEventListener('click', () => {
    personalModal.close()
})

macroClose.addEventListener('click', () => {
    macroModal.close()
})

// personalModal.showModal()
macroModal.showModal()