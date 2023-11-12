const $name = document.querySelector("#name");
const $height = document.querySelector("#height");
const $weight = document.querySelector("#weight");
const $result = document.querySelector("#result");

function calc() {
  if ($name.value !== "" && $height.value !== "" && $weight.value !== "") {
    let imc = Number($weight.value) / (Number($height.value) * Number($height.value));
    console.log(imc);
    let classification = "";
    if (imc > 40) classification = "Obesidade grau III";
    if (imc > 35) classification = "Obesidade grau II";
    if (imc > 30) classification = "Obesidade grau I";
    if (imc > 25) classification = "Sobrepeso";
    if (imc > 18.5) classification = "peso normal";
    if (imc < 18.5) classification = "peso abaixo do normal";

    $result.innerHTML = `${$name.value}, seu imc é ${imc} você está com ${classification}`;
  } else {
    $result.innerHTML = 'Preencha todos os campos.'
  }
}
