// let fullName = "Cleo de Jesus";

// console.log(fullName.split(" "));

// let arrayString = fullName.split(" ");
// console.table(arrayString);

// let arrayCount = arrayString.length;
// console.log("O nome completo tem " + arrayCount + " palavras.");

// let name = arrayString[0];
// let lastName = arrayString[arrayCount - 1];

// function Welcome() {
//   console.log("Hello World! Dentro da função");
// }
// Welcome();
// function WelcomeComParams(fullName) {
//   console.log(`olá, ${name}, ${lastName}`);
// }
// WelcomeComParams("Cleo de Jesus");
function welcome(fullName){
  let arrayString = fullName.split(" ");
  let firstName = arrayString[0];
  let lastName = arrayString[arrayString.length - 1];
  console.log(`Olá, ${firstName} ${lastName}!`);
  
}
welcome("Cleo de Jesus");