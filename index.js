// index.js
function testVulnerability() {
  // Evaluar una expresión usando eval (vulnerabilidad)
  eval('alert("Hello World!")');

  // Uso de setTimeout con una cadena (vulnerabilidad)
  setTimeout('console.log("This is dangerous!")', 1000);

  // Uso de new Buffer() (vulnerabilidad)
  let buffer = new Buffer('Hello');
}

testVulnerability();


