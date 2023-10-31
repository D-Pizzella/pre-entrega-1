function calcular() {
    let recopilar = true

    do {
        let presupuesto = parseFloat(prompt("Ingresá tu presupuesto"));
        let gasto = parseFloat(prompt("Ingresá tu gasto en pasaje"));
        let gasto1 = parseFloat(prompt("Ingresá tu gasto en hospedaje"));
        let gasto2 = parseFloat(prompt("Ingresá tu gasto en comida"));
        let gastototal = gasto + gasto1 + gasto2
        
        if (gastototal <= presupuesto){
            alert("El gasto ingresado de " + gastototal + " está dentro de tu presupuesto")
        }
        if (gastototal == null) {
            alert("Ingrese un monto numérico")
        }
        if (gastototal == presupuesto) 
            alert("Tu presupuesto de " + presupuesto + " fue utilizado en su totalidad")
        if ( gastototal > presupuesto) {
            alert("Tu gasto de " + gastototal + " excede tu presupuesto de " + presupuesto + " buscá mejores tarifas o incrementá tu presupuesto e intentá de nuevo")
        } else {
            break
        }
    } while (recopilar)
}

calcular()