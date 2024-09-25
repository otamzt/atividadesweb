let soma = 0;
let count = 0;
let posi = 0;
let neg = 0;

function adicionarNumero() 
{
    let valor = parseFloat(document.getElementById("valor").value);
    if (valor || valor === 0) 
    {
        soma += valor;
        count += 1;
        if (valor > 0) 
        {
            posi++;
        } else if (valor < 0) 
        {
            neg++;
        }
        document.getElementById("valor").value = "";
    }
}
function getMedia() 
{
    document.getElementById("pnegativo").innerText = porcentagem(neg, count) + "%";
    document.getElementById("ppositivos").innerText = porcentagem(posi, count) + "%";
    document.getElementById("positivos").innerText = posi;
    document.getElementById("negativos").innerText = neg;
    document.getElementById("media").innerText = calcularMedia(soma, count);
}
function calcularMedia(soma, count) 
{
    if (count == 0) {
        return 0;
    }
    return soma / count;
}
function porcentagem(quant, count) 
{
    if (count === 0) 
    {
        return 0;
    }
    return (quant / count) * 100;
}
