function saludar(nombre) {
  console.log("Hola " + nombre); // Concatenación insegura
  eval("alert('Hola')");         // Uso de eval, peligroso
}
saludar("Mundo");
