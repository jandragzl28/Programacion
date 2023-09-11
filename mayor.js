function encontrarMayor() {
    a = parseInt(prompt("Introduce el primer número"))
    b = parseInt(prompt("Introduce el segundo número"))
    if (a > b) {
      return a;
    } else {
      return b;
    }
  }
  console.log("El número mayor es: " + numeroMayor);
  let numeroMayor = encontrarMayor();
  document.getElementById("resultado").innerHTML = numeroMayor;