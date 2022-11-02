const radio = document.querySelector(".radio")
const mainBackground = document.querySelector(".main")

radio.addEventListener("click", () => {
    themes2()
    radio.addEventListener("click", () => {
        themes3()
        radio.addEventListener("click", () => {
            themes3()
        })
    })
})


function themes2(){
    mainBackground.classList.toggle("main-2")
}
function themes3(){
    mainBackground.classList.toggle("main-3")
}

const display = document.querySelector(".display-calculate")
const keypadButtons = document.getElementsByClassName("keypad-button")
const keypadArrayButton = Array.from(keypadButtons)

keypadArrayButton.forEach((button) => {
    button.addEventListener("click", () =>{
        calculadora(button, display)
    })
})


function calculadora(button, display){
    switch (button.innerHTML) {
        case "RESET":
            borrar(display)
            break;
        case "=":
            calcular(display)
            break
        case "DEL":
            borrar(display)
            break
        default:
            actualizar(button, display)
            break;
    }
}
function borrar(display){
    display.innerHTML= 0
}

function calcular(display){
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(button, display){
    if(display.innerHTML == 0){
        display.innerHTML = ""
    }
    display.innerHTML += button.innerHTML
}
