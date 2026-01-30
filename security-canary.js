/**
 * LEGIÓN SCARFACE - PROTOCOLO CANARIO V1.0
 * Seguridad Ofensiva y Detección de Intrusos
 */

(function() {
    // --- 1. TRAMPA DE CONSOLA (CANARIO) ---
    // Si un intruso intenta ver estas "variables maestras", el sistema se bloquea.
    Object.defineProperty(window, 'ADMIN_PASSWORD', {
        get: function() { 
            ejecutarModoPanico("Intento de acceso a credenciales maestras."); 
            return "BLOQUEADO";
        }
    });

    Object.defineProperty(window, 'DATABASE_ROOT', {
        get: function() { 
            ejecutarModoPanico("Intento de acceso a raíz de base de datos."); 
            return "ACCESO DENEGADO";
        }
    });

    // --- 2. PROTOCOLO DE AUTODESTRUCCIÓN (MODO PÁNICO) ---
    window.ejecutarModoPanico = function(motivo = "Manual") {
        console.warn("!! PROTOCOLO DE EMERGENCIA ACTIVADO !!");
        console.error("Motivo:", motivo);

        const terminal = document.getElementById('terminal');
        if (terminal) {
            terminal.innerHTML = "<p style='color:red; font-weight:bold;'>> [!] ALERTA: VIOLACIÓN DE PROTOCOLO DETECTADA.</p>";
            terminal.innerHTML += "<p style='color:red;'>> [!] INICIANDO BORRADO DE MEMORIA VOLÁTIL...</p>";
        }

        // Generar ruido visual
        let count = 0;
        const interval = setInterval(() => {
            if (terminal) {
                const line = document.createElement('p');
                line.style.color = "red";
                line.innerText = "> " + btoa(Math.random().toString()).substring(0, 40);
                terminal.appendChild(line);
                terminal.scrollTop = terminal.scrollHeight;
            }
            count++;
            if (count > 15) {
                clearInterval(interval);
                finalizarPurga();
            }
        }, 100);
    };

    function finalizarPurga() {
        document.body.innerHTML = `
            <div style="background:black; color:#333; height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; font-family:monospace; text-align:center;">
                <h1 style="border:1px solid #222; padding:20px;">SYSTEM_HALTED</h1>
                <p>Error de paridad en el sector de arranque 0x0000451</p>
                <p>Reinicie el hardware para continuar.</p>
            </div>
        `;
        setTimeout(() => {
            window.location.href = "https://www.google.com";
        }, 3000);
    }

    // --- 3. DETECTOR DE COPIADO ---
    document.addEventListener('copy', () => {
        console.error("Intento de copia de datos detectado.");
        // No borra el sistema, pero envía una advertencia interna
        if (typeof imprimirSistema === 'function') {
            imprimirSistema("ADVERTENCIA: Intento de extracción de datos registrado.");
        }
    });

})();
