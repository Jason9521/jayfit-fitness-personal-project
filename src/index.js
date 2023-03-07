
import "./macros.js"
import "./exercises.js"
import "./workouts.js"

import treadmill from "./images/treadmill.jpg"

const openMenu = document.getElementById("openMenu");
const dropDown = document.getElementById("dropDown");

openMenu.addEventListener('click', () => {
    dropDown.classList.toggle("dropdown-toggle")
})