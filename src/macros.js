const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");

const personalModal = document.getElementById("personalModal")

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
})

personalModal.showModal()