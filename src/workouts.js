const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
})
