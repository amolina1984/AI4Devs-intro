function reverseString() {
    // Obtenemos el valor del input
    var inputText = document.getElementById("inputText").value;

    // Invertimos la cadena de texto
    var reversedText = inputText.split('').reverse().join('');

    // Mostramos el resultado en el elemento <h2>
    document.getElementById("outputText").innerText = reversedText;
}