let resultado = document.getElementById('resultado');
let resultadoEx3 = document.getElementById('resultadoEx3');

//Exercício 2
function somar() {
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    let soma = n1 + n2;
    resultado.innerText = `O resultado da soma é ${soma}`;
}

//Exercício 3
btnMedia.addEventListener('click', () => {
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
    let n4 = parseFloat(document.getElementById("nota4").value);

    let media = (n1 + n2 + n3 + n4) / 4;

    resultadoEx3.innerHTML = `Média: ${media}`;
    if (media > 7) {
        statusEx3.innerHTML = `Status: Aprovado`;
    } else {
        statusEx3.innerHTML = `Status: Reprovado`;
    }
});

//Exercício 5
btnTabuada.addEventListener('click', () => {
    let n = parseFloat(document.getElementById('nEx5').value);
    document.getElementById('resultadoEx5').innerHTML = geraTabuada(n)
})

function geraTabuada(n) {
    let tabuada = ''
    for (i = 0; i < 11; i++) {
        tabuada += `${n} x ${i} = ${n * i}<br>`
    }
    return tabuada
}

//Exercício 6
let maior = -1
btnLerMaior.addEventListener('click', () => {
    let n = parseInt(document.getElementById('nEx6').value)

    if(n > maior){
        maior = n
    }

    document.getElementById('resultadoEx6').innerHTML = `Maior número: ${maior}`
})