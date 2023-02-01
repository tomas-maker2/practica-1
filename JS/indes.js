// EVENTO CLICK

document.getElementById("boton_open").addEventListener("click",abrirYCerrarMenu)


// VARIABLES

const sideMenu = document.getElementById("menu_side")
const botonMenu = document.getElementById("boton_open")
const body = document.getElementById("body")


// MOSTRAR Y OCULTAR MENU

function abrirYCerrarMenu () {
    body.classList.toggle("body_move")
    sideMenu.classList.toggle("menu_side_move")
}

// media query 760px

if(window.innerWidth < 760) {
    body.classList.add("body_move")
    sideMenu.classList.add("menu_side_move")
}

// RESPONSIVE

window.addEventListener("resize", function(){
    if(this.window.innerWidth > 760) {
        body.classList.remove("body_move")
        sideMenu.classList.remove("menu_side_move")
    }

    if(this.window.innerWidth <760){
        body.classList.add("body_move")
        sideMenu.classList.add("menu_side_move")
    }
})