function main() {
  let operaciones = document.getElementById("operaciones");
  let resultado = document.getElementById("resultado");
  function calOperations() {
    var num1 = document.getElementById("numero1").value;
    var num2 = document.getElementById("numero2").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    resultado.innerText = `La suma es: ${num1 + num2} \nLa resta es: ${
      num1 - num2
    } \nLa multiplicación es: ${num1 * num2} \nLa división es: ${num1 / num2}`;
  }
  operaciones.addEventListener("click", () => calOperations());


  let contenar = document.getElementById("concatenar");
  let textoResultado = document.getElementById("textoResultado");
  function concatTexts() {
    let texto1 = document.getElementById("texto1").value;
    let texto2 = document.getElementById("texto2").value;
    textoResultado.innerText = `El texto concatenado es: ${texto1} ${texto2}`;
  }
  contenar.addEventListener("click", () => concatTexts());


  let typeBtn = document.getElementById("typeBtn");
  let typeSpan = document.getElementById("typeSpan");
  function typeCheck() {
    const type1 = "Psyrem";
    const type2 = 42;
    typeSpan.innerText = `El tipo de dato de "${type1}" es ${typeof type1} y el tipo de dato de "${type2}" es ${typeof type2}`;
  }
  typeBtn.addEventListener("click", () => typeCheck());

  
  let carBtn = document.getElementById("carBtn");
  let carSpan = document.getElementById("carSpan");
  
  function objectDemo(){
    const car = { myCar: "Accent", 
                dadCar: "Rio",
                momCar: "Frontier",
                broCar: "Picanto"};

  carSpan.innerText = `El objeto es: ${JSON.stringify(car)}`;                
  //carSpan.innerText = `El objeto es: ${Object.entries(car)}`;                
           
  }
  carBtn.addEventListener("click", () => objectDemo());
}
main();
