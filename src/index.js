import './style.css'
import './utilities.css'

import treadmill from "./images/treadmill.jpg"

const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
})