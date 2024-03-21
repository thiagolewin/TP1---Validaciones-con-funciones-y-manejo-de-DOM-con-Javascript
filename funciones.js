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
    let imagenes = ["data:image/png;base64,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","https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f44e.gif"]
    let promedio = 0
    inputs.forEach(element => {
        promedio+=  parseInt(element.value)
    });
    if(ComprobarDatos(inputs)) {
        valor = document.getElementById("Valor")
        promedio = promedio/3
        valor.textContent = promedio
        let imagen = document.getElementById("imagen")
        if(promedio>=6) {
            imagen.src = imagenes[0]
            valor.style.color = "green"
        } else {
            imagen.src = imagenes[1]
            valor.style.color = "red"
        }
    }
    
}
const Mayor = ()=> {
    let imagenes = ["https://www.lucaedu.com/wp-content/uploads/2022/05/matematicas-de-primaria.jpg","https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8XoWJRvvqzZ3uwfl5jnw7oWc8D1OuVwnOsBkZ47QB-ZnyEflu51ovZ1SpEsfRADj-LRcJvUx3YC_1vy9awWnf_I9FnqLZkU-gO8esYVB5rQzTlOXg-1KT6vA-FQ_eRhJL-_wTIZjS3TMJ/s1600/juegos-de-lenguaje.jpg", "https://www.viatalentumacademy.com/wp-content/uploads/2018/08/css.jpg"]
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
        let imagen = document.getElementById("imagen")
        if(mayorN == "Matematica") {
            imagen.src = imagenes[0]
        } else if (mayorN == "Lengua") {
            imagen.src = imagenes[1]
        } else if (mayorN == "EFSI"){
            imagen.src = imagenes[2]
        }
        valor.textContent = mayorN
    }
    
}