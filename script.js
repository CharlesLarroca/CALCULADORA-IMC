const $nome = document.querySelector('#nome')
const $altura = document.querySelector('#altura')
const $peso = document.querySelector('#peso')
const $resultado = document.querySelector('#resultado')

function calcular(){
  let imc = Number($peso.value)/(Number($altura.value) * Number($altura.value))
  console.log(imc)
  let classification = ''
  if(imc > 40) classification = 'Obesidade grau III'
  if(imc > 35) classification = 'Obesidade grau II'
  if(imc > 30) classification = 'Obesidade grau I'
  if(imc > 25) classification = 'Sobrepeso'
  if(imc > 18.5) classification = 'peso normal'
  if(imc < 18.5) classification = 'peso abaixo do normal'

  $resultado.innerHTML = `${$nome.value}, seu imc é ${imc}, você está com ${classification}`
}
