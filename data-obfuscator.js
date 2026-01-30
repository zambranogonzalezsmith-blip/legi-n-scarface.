/**
 * LEGIÓN SCARFACE - DATA OBFUSCATOR V1.0
 * Ofuscación de Mensajería P2P
 */

const Obfuscator = {
    // Convierte texto claro en "Código Basura"
    encode: function(text) {
        // Primero convertimos a Base64
        let b64 = btoa(unescape(encodeURIComponent(text)));
        // Invertimos la cadena y añadimos un prefijo falso para despistar
        return "SEC_SIG_" + b64.split("").reverse().join("");
    },

    // Recupera el texto original
    decode: function(obfuscated) {
        try {
            if (!obfuscated.startsWith("SEC_SIG_")) return obfuscated;
            let raw = obfuscated.replace("SEC_SIG_", "");
            let b64 = raw.split("").reverse().join("");
            return decodeURIComponent(escape(atob(b64)));
        } catch (e) {
            return "[ERROR: Señal Corrupta o No Autorizada]";
        }
    }
};

console.log("Data Obfuscator: ACTIVO.");
