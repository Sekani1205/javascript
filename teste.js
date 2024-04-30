/*function formatarMensagem(textoEntrada){
    if(textoEntrada == undefined)
        return '...';

    let data = new Date();
    let hora = data.getHours();
    let min  = data.getMinutes();
    let seg  = data.getSeconds();

    let msg_formatada = hora + ':' + min + ':' + seg + ':' + textoEntrada;

    return msg_formatada;
}

console.log(formatarMensagem('Um texto qualquer'));

console.log(formatarMensagem());

console.log(formatarMensagem('Outro texto qualquer'));
*/
var formatarMensagem = function(textoEntrada){
    if(textoEntrada == undefined)
        return '...';
    let data = new Date();
    let hora = data.getHours();
    let min  = data.getMinutes();
    let seg  = data.getSeconds();

    let msg_formatada = hora + ': ' + min + ': ' + seg + ': ' + textoEntrada;

    return msg_formatada;
}
let mudarTexto = []

mudarTexto.push('Hora de Luanda', ' Angola');
console.log(formatarMensagem(mudarTexto));
console.log(mudarTexto)

let quadrado = (num) => num * num;

console.log(quadrado(4));
