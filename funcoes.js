// função simples
function showMessage(msg) {
    console.log(msg);
}
showMessage('Hello World');
//função simples com template string
function getText(text) {
    return "O texto informado foi: " + text;
}
console.log(getText('AVADA KEDAVRA'));
//funções com parametros opcionais
var sum = 0;
function contador(inc) {
    sum += inc || 1; //ou
    console.log(sum);
}
contador(1);
contador(10);
contador(5);
contador(56);
var summ = 0;
function contadorR(inc) {
    if (inc === void 0) { inc = 1; }
    summ += inc;
    console.log(summ);
}
contadorR(1);
contadorR(10);
contadorR(5);
contadorR(56);
//funções de seta (function arrow)
var info;
info = function (resposta) { return "Est\u00E1 pr\u00F3ximo do fim da aula? " + resposta; };
console.log(info('Ainda falta 1h'));
//funções de seta com expressão ternária
var situacao;
situacao = function (frequencia, media) { return (frequencia >= 75 && media >= 6) ? "Aprovado" : "Reprovado"; };
console.log("A situa\u00E7\u00E3o do aluno \u00E9: " + situacao(75, 9));
