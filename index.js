// index.js
// prueba1
const userInput = 'maliciousCode()';
eval(userInput); // Detectado por security/detect-eval-with-expression

const regex = new RegExp('^a.*b$'); // Detectado por @rushstack/security/no-unsafe-regexp

document.write(userInput); // Detectado por no-unsanitized/method

const obj = {};
obj[userInput] = 'value'; // Detectado por security/detect-object-injection
