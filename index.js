function saludar(nombre) {
  console.log("Hola " + nombre); // Concatenación insegura (potencial XSS)
  eval("alert('Hola')"); // Uso de eval, ¡peligroso!
}
saludar("Mundo");
