const ValidarNumero = (e)=> {
    if(parseInt(e.target.value) > 10 || parseInt(e.target.value) < 0) {
        console.log(e.target)
        e.target.style.backgroundColor = "red"
    } else{
        e.target.style.backgroundColor = "green"
    }
}
const ComprobarDatos = (inputs) => {
    let retornar = true
    inputs.forEach(element => {
       if (!element.value || parseInt(element.value) >10 || parseInt(element.value) <0) {
        alert("Dato Incorrecto De " + element.placeholder)
        retornar = false
       } 
    });
    return retornar
}
let inputs = document.querySelectorAll("input")
const Promedio = ()=> {
    let imagenes = ["young-male-teacher-wearing-glasses-looking-smiling-cheerfully-showing-thumbs-up-sitting-school-desk-with-books-notes-front-blackboard-classroom","sad-grabbed-chin-male-teacher-wearing-glasses-points-blackboard-sitting-table-with-school-tools-classroom"]
    let promedio = 0
    inputs.forEach(element => {
        promedio+=  parseInt(element.value)
    });
    if(ComprobarDatos(inputs)) {
        valor = document.getElementById("Valor")
        promedio = promedio/3
        valor.textContent = promedio
        let imagen = document.querySelector("body").style
        if(promedio>=6) {
            imagen.backgroundImage = `url("img/${imagenes[0]}.jpg")`
            valor.style.color = "green"
        } else {
            imagen.backgroundImage = `url("img/${imagenes[1]}.jpg")`
            valor.style.color = "red"
        }
    }
    
}
const Mayor = ()=> {
    let imagenes = ["3671320","learning-foreign-languages","programming-background-with-person-working-with-codes-computer"]
    let mayor = -1
    let mayorN = ""
    let continuar = true
    inputs.forEach(element => {
        if (parseInt(element.value) >= mayor) {
            if(parseInt(element.value) == mayor) {
                mayorN = mayorN + " " + element.placeholder 
            } else {
                mayorN = element.placeholder
            }
            mayor = parseInt(element.value)
        }
    });
    if(ComprobarDatos(inputs)) {
        valor = document.getElementById("Valor")
        valor.style.color = "blue"
        let imagen = document.querySelector("body").style
        if(mayorN == "Matematica") {
            imagen.backgroundImage = `url("img/${imagenes[0]}.jpg")`
        } else if (mayorN == "Lengua") {
            imagen.backgroundImage = `url("img/${imagenes[1]}.jpg")`
        } else if (mayorN == "EFSI"){
            imagen.backgroundImage = `url("img/${imagenes[2]}.jpg")`
        }
        valor.textContent = mayorN
    }
    
}