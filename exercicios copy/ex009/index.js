let peso = 53
let altura = 1.70
let IMC = peso / (altura**2)
/* 
    Abaixo de 18,5   | Abaixo do peso          

    Entre 18,6 e 24,9 | Peso ideal (parabéns)  

    Entre 25,0 e 29,9 | Levemente acima do peso

    Entre 30,0 e 34,9 | Obesidade grau I 

    Entre 35,0 e 39,9 | Obesidade grau II (severa)

    Maior ou igual a 40 | Obesidade grau III (mórbida)
*/
if (IMC <= 18.5) {
    console.log ("Abaixo do peso")
}
if (IMC >= 18.6 && IMC <= 24.9) {
    console.log ("Peso ideal(parabéns)")
}
if (IMC >=25 && IMC <= 29.9) {
    console.log ("Levemente acima do peso")
}
if (IMC >= 30 && IMC <= 34.9) {
    console.log ("Obesidade grau I")
}
if (IMC >= 35 && IMC <= 39.9) {
    console.log ("Obesidade grau II (severa)")
}
if (IMC >= 40) {
    console.log ("Obesidade grau III(Mórbida)")
}