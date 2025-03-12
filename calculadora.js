const formulario = document.querySelector("#formulario");
console.log(formulario);

formulario.addEventListener('submit', function(e){
    e.preventDefault;//muda o comportamento padrao
    
    const inputPeso = e.target.querySelector("#peso")
    const peso = inputPeso.value;
     
    const inputAltura = e.target.querySelector("#altura")
    const altura = inputAltura.value;

    const imc = calcularIMC(peso, altura);
    const classificacao = tabelaIMC(imc);

    alert(classificacao);


});

//essa funcao e resposavel por calcular o IMC
function calcularIMC(peso, altura){
    let imc = (peso / altura ** 2);
    return imc.toFixed(2);
}

//essa funcao e para classificar o grau de IMC
function tabelaIMC(imc){
    const classificacao = ['abaixo do peso', 'peso normal', 'sobrepeso',
    'muito gostoso', 'abesidade grau II', 'obesidade grau III']

    if(imc >= 39.9) return classificacao[5];
    if(imc >= 34.9) return classificacao[4];
    if(imc >= 29.9) return classificacao[3];
    if(imc >= 24.9) return classificacao[2];
    if(imc >= 18.5) return classificacao[1];
    if(imc < 18.5) return classificacao[0];


}
