// função simples

function showMessage(msg:string): void{
    console.log(msg);
}

showMessage('Hello World');

//função simples com template string
function getText(text:string):string{
    return `O texto informado foi: ${text}`;
}

console.log(getText('AVADA KEDAVRA'));

//funções com parametros opcionais
let sum = 0;
function contador(inc?:number):void{
    sum+= inc || 1; //ou
    console.log(sum);
}
contador(1);
contador(10);
contador(5);
contador(56);

let summ = 0;
function contadorR(inc:number=1):void{
    summ+= inc;
    console.log(summ);
}
contadorR(1);
contadorR(10);
contadorR(5);
contadorR(56);

//funções de seta (function arrow)

let info:(resposta:string)=> string;
info = resposta => `Está próximo do fim da aula? ${resposta}`;

console.log(info('Ainda falta 1h'));

//funções de seta com expressão ternária

let situacao:(frequencia:number, media:number) => string;
situacao = (frequencia,media) => (frequencia >=75 && media >= 6) ? "Aprovado" : "Reprovado";

console.log(`A situação do aluno é: ${situacao(75, 9)}`);