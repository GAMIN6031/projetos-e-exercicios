let formapagamento = ['', 'dinheiro', 'pix', 'avista-crédito', 'duas-vezes-credito', 'parcelamento'];
let forma_de_pagamento = 0;
let preco = 1250;

console.log('============FORMAS DE PAGAMENTO===========');
for (let i = 1; i < formapagamento.length; i++) {
    console.log('[' + i + ']', formapagamento[i]);
}

// ESCOLHA SUA FORMA DE PAGAMENTO AQUI
forma_de_pagamento = 4;

console.log("Forma de pagamento escolhida: ",formapagamento[forma_de_pagamento])
switch (forma_de_pagamento) {
    case 1:
    case 2:
        console.log("Valor total =", preco * 0.85);
        break;
    case 3:
        console.log("Valor total =", preco * 0.90);
        break;
    case 4:
        console.log("Valor total =", preco);
        break;
    case 5:
        console.log("Valor total =", preco * 1.10);
        break;
    default:
        console.log("Escolha uma opção válida!");
        break;
}