// =========================================
// NORAPP 2.0 - JAVASCRIPT PRINCIPAL
// =========================================


// =========================================
// CONTACTAR A LA FAMILIA
// =========================================

function contactarFamilia() {

    localStorage.setItem(
        "norappContactoFamilia",
        "enviado"
    );

    localStorage.setItem(
        "norappFechaContacto",
        new Date().toLocaleString()
    );

    const mensaje =
        document.getElementById("mensajeFamilia");

    if (mensaje) {

        mensaje.style.display = "block";

        mensaje.textContent =
            "✅ La solicitud de contacto fue enviada correctamente.";
    }
}


// =========================================
// GUARDAR CONFIGURACIÓN
// =========================================

function guardarConfiguracion() {

    localStorage.setItem(
        "norappConfiguracionGuardada",
        "true"
    );

    const mensaje =
        document.getElementById("mensajeConfiguracion");

    if (mensaje) {

        mensaje.style.display = "block";

        mensaje.textContent =
            "✅ La configuración se guardó correctamente.";
    }
}


// =========================================
// ASISTENTE - HABLAR
// =========================================

function hablar() {

    const respuesta =
        document.getElementById("respuestaIA");

    if (respuesta) {

        respuesta.style.display = "block";

        respuesta.textContent =
            "🎙️ El asistente está listo para escucharte.";
    }
}


// =========================================
// SIMULAR ALERTA
// =========================================

function simularAlerta() {

    localStorage.setItem(
        "norappAlerta",
        "caida"
    );

    localStorage.setItem(
        "norappFechaAlerta",
        new Date().toLocaleString()
    );

    const mensaje =
        document.getElementById("mensajeAlerta");

    if (mensaje) {

        mensaje.style.display = "block";

        mensaje.textContent =
            "🚨 Alerta simulada correctamente.";
    }
}


// =========================================
// AGREGAR RECORDATORIO
// =========================================

function agregarRecordatorio() {

    const mensaje =
        document.getElementById("mensajeRecordatorio");

    if (mensaje) {

        mensaje.style.display = "block";

        mensaje.textContent =
            "✅ Recordatorio agregado correctamente.";
    }
}


// =========================================
// PROTOCOLO DE CAÍDA
// =========================================

function iniciarProtocoloCaida() {

    const respuesta =
        document.getElementById("respuestaCaida");

    if (respuesta) {

        respuesta.style.display = "block";

        respuesta.textContent =
            "⚠️ Posible caída detectada. El asistente está verificando si necesitas ayuda.";
    }
}


// =========================================
// CONFIRMAR EMERGENCIA
// =========================================

function confirmarEmergencia() {

    localStorage.setItem(
        "norappAlerta",
        "caida"
    );

    localStorage.setItem(
        "norappFechaAlerta",
        new Date().toLocaleString()
    );

    const respuesta =
        document.getElementById("respuestaCaida");

    if (respuesta) {

        respuesta.style.display = "block";

        respuesta.textContent =
            "🚨 Emergencia confirmada. Se ha activado el protocolo de ayuda.";
    }
}


// =========================================
// CANCELAR EMERGENCIA
// =========================================

function cancelarEmergencia() {

    const respuesta =
        document.getElementById("respuestaCaida");

    if (respuesta) {

        respuesta.style.display = "block";

        respuesta.textContent =
            "✅ Emergencia cancelada. No se ha enviado ninguna alerta.";
    }
}


// =========================================
// REVISAR ALERTA DE CAÍDA
// =========================================

function revisarAlertaCaida() {

    const estado =
        localStorage.getItem("norappAlerta");

    const elemento =
        document.getElementById("estadoAlerta");

    if (!elemento) return;

    if (estado === "caida") {

        elemento.textContent =
            "🚨 Existe una alerta de caída registrada.";

    } else {

        elemento.textContent =
            "🟢 No hay alertas de caída registradas.";
    }
}


// =========================================
// REVISAR HISTORIAL DE CAÍDA
// =========================================

function revisarHistorialCaida() {

    const fecha =
        localStorage.getItem("norappFechaAlerta");

    const elemento =
        document.getElementById("historialCaida");

    if (!elemento) return;

    if (fecha) {

        elemento.textContent =
            "Última alerta registrada: " + fecha;

    } else {

        elemento.textContent =
            "No existen alertas registradas.";
    }
}


// =========================================
// REVISAR UBICACIÓN DE EMERGENCIA
// =========================================

function revisarUbicacionEmergencia() {

    const elemento =
        document.getElementById("ubicacionEmergencia");

    if (elemento) {

        elemento.textContent =
            "📍 Ubicación preparada para recibir datos GPS del dispositivo.";
    }
}


// =========================================
// REVISAR MEDICAMENTO EN HISTORIAL
// =========================================

function revisarMedicamentoHistorial() {

    const estado =
        localStorage.getItem("norappMedicamento");

    const fecha =
        localStorage.getItem("norappFechaMedicamento");

    const elemento =
        document.getElementById("historialMedicamento");

    if (!elemento) return;

    if (estado === "tomado") {

        elemento.textContent =
            "💊 Medicamento registrado como tomado. " +
            (fecha ? "Fecha: " + fecha : "");

    } else {

        elemento.textContent =
            "No existe un medicamento registrado.";
    }
}


// =========================================
// CONFIRMAR MEDICAMENTO
// =========================================

function confirmarMedicamento() {

    localStorage.setItem(
        "norappMedicamento",
        "tomado"
    );

    localStorage.setItem(
        "norappFechaMedicamento",
        new Date().toLocaleString()
    );

    const mensaje =
        document.getElementById("mensajeMedicamento");

    const respuesta =
        document.getElementById("respuestaMedicamento");

    if (mensaje) {

        mensaje.style.display = "block";

        mensaje.textContent =
            "✅ Medicamento registrado como tomado.";
    }

    if (respuesta) {

        respuesta.style.display = "block";

        respuesta.textContent =
            "Perfecto. He registrado que tomaste tu medicamento.";
    }

    const pendientes =
        document.getElementById("pendientesMedicamentos");

    const completados =
        document.getElementById("completadosMedicamentos");

    if (pendientes) {
        pendientes.textContent = "0";
    }

    if (completados) {
        completados.textContent = "1";
    }
}


// =========================================
// REGISTRAR SALUD
// =========================================

function registrarSalud() {

    localStorage.setItem(
        "norappSalud",
        "registrado"
    );

    localStorage.setItem(
        "norappFechaSalud",
        new Date().toLocaleString()
    );

    localStorage.setItem(
        "norappFrecuencia",
        "78 BPM"
    );

    localStorage.setItem(
        "norappSaturacion",
        "97%"
    );

    localStorage.setItem(
        "norappTemperatura",
        "36.5 °C"
    );

    const mensaje =
        document.getElementById("mensajeSalud");

    if (mensaje) {

        mensaje.style.display = "block";

        mensaje.textContent =
            "✅ Medición registrada correctamente.";
    }

    const estado =
        document.getElementById("estadoRegistro");

    if (estado) {

        estado.textContent =
            "La medición fue registrada correctamente.";
    }
}


// =========================================
// ASISTENTE
// =========================================

function mostrarRespuestaIA(texto) {

    const respuesta =
        document.getElementById("respuestaIA");

    if (!respuesta) return;

    respuesta.style.display = "block";

    respuesta.textContent = texto;
}


// =========================================
// ASISTENTE - MEDICAMENTO
// =========================================

function asistenteMedicamento() {

    mostrarRespuestaIA(
        "💊 Puedes revisar tus recordatorios de medicamentos."
    );
}


// =========================================
// ASISTENTE - SALUD
// =========================================

function asistenteSalud() {

    mostrarRespuestaIA(
        "❤️ Puedes revisar tus mediciones de salud."
    );
}


// =========================================
// ASISTENTE - UBICACIÓN
// =========================================

function asistenteUbicacion() {

    mostrarRespuestaIA(
        "📍 Puedes revisar tu ubicación desde la sección de ubicación."
    );
}


// =========================================
// ASISTENTE - FAMILIA
// =========================================

function asistenteFamilia() {

    mostrarRespuestaIA(
        "👨‍👩‍👧 Puedes contactar a tu familiar desde la sección Familia."
    );
}


// =========================================
// ASISTENTE - AYUDA
// =========================================

function asistenteAyuda() {

    localStorage.setItem(
        "norappAlerta",
        "caida"
    );

    localStorage.setItem(
        "norappFechaAlerta",
        new Date().toLocaleString()
    );

    localStorage.setItem(
        "norappAsistente",
        "ayuda"
    );

    localStorage.setItem(
        "norappFechaAsistente",
        new Date().toLocaleString()
    );

    mostrarRespuestaIA(
        "🚨 Se ha activado el protocolo de ayuda."
    );
}


// =========================================
// REVISAR ASISTENTE EN HISTORIAL
// =========================================

function revisarAsistenteHistorial() {

    const estado =
        localStorage.getItem("norappAsistente");

    const fecha =
        localStorage.getItem("norappFechaAsistente");

    const elemento =
        document.getElementById("historialAsistente");

    if (!elemento) return;

    if (estado === "ayuda") {

        elemento.textContent =
            "🚨 Solicitud de ayuda registrada. " +
            (fecha ? "Fecha: " + fecha : "");

    } else {

        elemento.textContent =
            "No existen solicitudes de ayuda registradas.";
    }
}


// =========================================
// ACTUALIZAR INICIO
// =========================================

function actualizarInicio() {

    const alertas =
        document.getElementById("alertasInicio");

    const estadoSistema =
        document.getElementById("estadoSistemaInicio");

    const etiqueta =
        document.getElementById("etiquetaSistemaInicio");

    const actividad =
        document.getElementById("actividadAsistenteInicio");

    const alerta =
        localStorage.getItem("norappAlerta");

    if (alertas) {

        if (alerta === "caida") {

            alertas.textContent =
                "🚨 Hay una alerta registrada.";

        } else {

            alertas.textContent =
                "🟢 No hay alertas pendientes.";
        }
    }

    if (estadoSistema) {

        estadoSistema.textContent =
            "Sistema preparado";
    }

    if (etiqueta) {

        etiqueta.textContent =
            "NorApp está funcionando correctamente.";
    }

    if (actividad) {

        const asistente =
            localStorage.getItem("norappAsistente");

        if (asistente === "ayuda") {

            actividad.textContent =
                "🚨 Se registró una solicitud de ayuda.";

        } else {

            actividad.textContent =
                "🤖 Sin actividad reciente.";
        }
    }
}


// =========================================
// CERRAR SESIÓN
// =========================================

function cerrarSesion() {

    const confirmar = confirm(
        "¿Estás seguro de que quieres cerrar sesión?"
    );

    if (!confirmar) {
        return;
    }

    // =====================================
    // CERRAR LA SESIÓN
    // =====================================
    // NO eliminamos los datos personales.
    // Solo eliminamos el estado que indica
    // que la persona está dentro de NorApp.

    localStorage.removeItem(
        "norappConfigurado"
    );

    // =====================================
    // VOLVER A INDEX.HTML
    // =====================================

    const rutaActual =
        window.location.pathname;

    if (rutaActual.includes("/paginas/")) {

        window.location.href =
            "../index.html";

    } else {

        window.location.href =
            "index.html";
    }
}


// =========================================
// COMPROBAR SESIÓN
// =========================================

function comprobarSesion() {

    const configurado =
        localStorage.getItem("norappConfigurado");

    const rutaActual =
        window.location.pathname;

    const estaEnPaginaInterna =
        rutaActual.includes("/paginas/");

    // Si no hay sesión y estamos dentro
    // de una página interna, volvemos al inicio.

    if (
        configurado !== "true" &&
        estaEnPaginaInterna
    ) {

        window.location.href =
            "../index.html";
    }
}


// =========================================
// INICIO AUTOMÁTICO
// =========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        // Comprobar primero la sesión
        comprobarSesion();

        // Actualizar información del inicio
        actualizarInicio();

        // Revisar alertas
        revisarAlertaCaida();

        // Revisar historial
        revisarHistorialCaida();

        // Revisar medicamentos
        revisarMedicamentoHistorial();

        // Revisar asistente
        revisarAsistenteHistorial();

    }
);