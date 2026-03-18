import { readFileSync } from "fs";

// 1. Leer el archivo .txt  
const rutas = readFileSync("rutas_api.txt", "utf-8").split("\n").filter(Boolean);

console.log("🚀 Iniciando comprobación de rutas HTTP GET...\n");

// 2. Testear cada ruta
for (const url of rutas) {
  try {
    const respuesta = await fetch(url.trim());
    const data = await respuesta.json();
    
    // 3. Hacer los checks
    if (respuesta.status === 200) {
      console.log(`✅ [OK - 200] La ruta funciona y devolvió:`, data);
    } else if (respuesta.status === 400) {
      console.log(`⚠️ [CHECK - 400] La ruta existe, pero detectó datos inválidos:`, data);
    } else {
      console.log(`❌ [ERROR - ${respuesta.status}] Problema en la ruta: ${url}`);
    }
  } catch (error) {
    console.log(`🚨 [CAÍDA] No se pudo contactar al servidor en: ${url}`);
  }
}