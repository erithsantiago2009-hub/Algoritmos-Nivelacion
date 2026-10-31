
// PARTE 1: ALGORITMOS CONDICIONALES

// Algoritmo 1: Liquidación de comisión por ventas
function calcularComisionVentas() {
    let nombreVendedor = prompt("Ingrese el nombre del vendedor:");
    let ventasMes = parseFloat(prompt("Ingrese el valor de ventas del mes:"));
    let antiguedadVendedor = parseInt(prompt("Ingrese los años de antigüedad:"));

    let porcentajeComision = 0;

    if (ventasMes >= 8000000 && antiguedadVendedor >= 2) {
        porcentajeComision = 0.10;
    } else if (ventasMes >= 3000000) {
        porcentajeComision = 0.05;
    } else {
        porcentajeComision = 0;
    }

    let valorComision = ventasMes * porcentajeComision;

    console.log("Vendedor:", nombreVendedor);
    console.log("Ventas realizadas: $" + ventasMes);
    console.log("Porcentaje de comisión: " + (porcentajeComision * 100) + "%");
    console.log("Valor de la comisión: $" + valorComision);
}


// Algoritmo 2: Clasificación de una solicitud de préstamo

function evaluarSolicitudPrestamo() {
    let nombreSolicitante = prompt("Ingrese el nombre del solicitante:");
    let ingresosMensuales = parseFloat(prompt("Ingrese los ingresos mensuales:"));
    let gastosMensuales = parseFloat(prompt("Ingrese los gastos mensuales:"));
    let historialCrediticio = prompt("Ingrese el historial crediticio (positivo o negativo):").toLowerCase();

    let dineroDisponible = ingresosMensuales - gastosMensuales;
    let resultadoPrestamo = "";

    if (ingresosMensuales <= gastosMensuales) {
        resultadoPrestamo = "Rechazado por capacidad de pago insuficiente";
    } else if (historialCrediticio === "negativo") {
        resultadoPrestamo = "Rechazado por historial crediticio";
    } else if (dineroDisponible >= 1000000) {
        resultadoPrestamo = "Preaprobado";
    } else {
        resultadoPrestamo = "Pendiente de revisión";
    }

    console.log("Solicitante:", nombreSolicitante);
    console.log("Dinero disponible: $" + dineroDisponible);
    console.log("Resultado de la evaluación:", resultadoPrestamo);
}


// Algoritmo 3: Cálculo de tarifa de alojamiento
function calcularTarifaAlojamiento() {
    let nombreHuesped = prompt("Ingrese el nombre del huésped:");
    let tipoHabitacion = prompt("Tipo de habitación (estándar, ejecutiva, suite):").toLowerCase();
    let temporadaHuesped = prompt("Temporada (alta, baja):").toLowerCase();
    let numeroNoches = parseInt(prompt("Número de noches reservadas:"));

    if (numeroNoches <= 0) {
        console.log("Error: El número de noches debe ser mayor a cero.");
    } else {
        let tarifaNoche = 0;
        
        if (tipoHabitacion === "estándar" || tipoHabitacion === "estandor") {
            tarifaNoche = 150000;
        } else if (tipoHabitacion === "ejecutiva") {
            tarifaNoche = 250000;
        } else if (tipoHabitacion === "suite") {
            tarifaNoche = 400000;
        }

        if (tarifaNoche > 0) {
            if (temporadaHuesped === "alta") {
                tarifaNoche *= 1.20; // Aumenta 20%
            }

            let costoTotal = tarifaNoche * numeroNoches;
            let descuentoAplicado = (numeroNoches >= 5) ? costoTotal * 0.10 : 0;
            let totalPagar = costoTotal - descuentoAplicado;

            console.log("Huésped:", nombreHuesped);
            console.log("Tarifa por noche (ajustada): $" + tarifaNoche);
            console.log("Costo antes de descuento: $" + costoTotal);
            console.log("Descuento aplicado: $" + descuentoAplicado);
            console.log("Total a pagar: $" + totalPagar);
        } else {
            console.log("Error: Tipo de habitación no válido.");
        }
    }
}


// PARTE 2: ALGORITMOS CON BUCLES

// Algoritmo 6: Registro de ventas de una jornada
function registrarVentasJornada() {
    let cantidadVentasJornada = parseInt(prompt("Ingrese la cantidad de ventas a registrar:"));
    let totalRecaudadoJornada = 0;
    let ventasSuperiores200k = 0;
    let ventaMasAltaJornada = 0;

    for (let i = 1; i <= cantidadVentasJornada; i++) {
        let valorVentaActual = parseFloat(prompt("Ingrese el valor de la venta " + i + ":"));
        
        totalRecaudadoJornada += valorVentaActual;
        
        if (valorVentaActual > 200000) {
            ventasSuperiores200k++;
        }
        
        if (i === 1 || valorVentaActual > ventaMasAltaJornada) {
            ventaMasAltaJornada = valorVentaActual;
        }
    }

    let promedioVentas = cantidadVentasJornada > 0 ? (totalRecaudadoJornada / cantidadVentasJornada) : 0;

    console.log("Cantidad de ventas registradas:", cantidadVentasJornada);
    console.log("Total recaudado: $" + totalRecaudadoJornada);
    console.log("Promedio por venta: $" + promedioVentas);
    console.log("Ventas superiores a $200.000:", ventasSuperiores200k);
    console.log("Venta más alta: $" + ventaMasAltaJornada);
}


// Algoritmo 7: Control de inventario de una tienda
function controlarInventarioTienda() {
    let nombreProductoInventario = prompt("Ingrese el nombre del producto:");
    let inventarioActualProducto = parseInt(prompt("Ingrese el inventario inicial:"));
    let unidadesVendidasTotal = 0;
    let operacionesValidasCount = 0;

    while (inventarioActualProducto > 0) {
        let ventaUnidades = parseInt(prompt("Inventario actual (" + inventarioActualProducto + "). Ingrese unidades vendidas:"));
        
        if (ventaUnidades > inventarioActualProducto) {
            console.log("Error: La cantidad supera el inventario disponible. Intente de nuevo.");
        } else if (ventaUnidades <= 0) {
            console.log("Error: Ingrese una cantidad válida mayor a cero.");
        } else {
            inventarioActualProducto -= ventaUnidades;
            unidadesVendidasTotal += ventaUnidades;
            operacionesValidasCount++;
        }
    }

    console.log("Producto:", nombreProductoInventario);
    console.log("Total de unidades vendidas:", unidadesVendidasTotal);
    console.log("Operaciones válidas realizadas:", operacionesValidasCount);
    console.log("Inventario final: 0 (Agotado)");
}


// Algoritmo 8: Registro y análisis de temperaturas
function analizarTemperaturas() {
    let diasRegistro = parseInt(prompt("Ingrese la cantidad de días que se van a registrar:"));
    let sumaTemperaturasTotal = 0;
    let temperaturaMaxima = 0;
    let temperaturaMinima = 0;
    let diasSuperiores30Grados = 0;

    for (let d = 1; d <= diasRegistro; d++) {
        let temperaturaDia = parseFloat(prompt("Ingrese la temperatura del día " + d + " (°C):"));
        
        sumaTemperaturasTotal += temperaturaDia;
        
        if (d === 1) {
            temperaturaMaxima = temperaturaDia;
            temperaturaMinima = temperaturaDia;
        } else {
            if (temperaturaDia > temperaturaMaxima) {
                temperaturaMaxima = temperaturaDia;
            }
            if (temperaturaDia < temperaturaMinima) {
                temperaturaMinima = temperaturaDia;
            }
        }
        
        if (temperaturaDia > 30) {
            diasSuperiores30Grados++;
        }
    }

    let temperaturaPromedio = diasRegistro > 0 ? (sumaTemperaturasTotal / diasRegistro) : 0;

    console.log("Cantidad de días registrados:", diasRegistro);
    console.log("Temperatura promedio: " + temperaturaPromedio.toFixed(2) + "°C");
    console.log("Temperatura máxima registrada: " + temperaturaMaxima + "°C");
    console.log("Temperatura mínima registrada: " + temperaturaMinima + "°C");
    console.log("Días con temperatura superior a 30°C:", diasSuperiores30Grados);
}