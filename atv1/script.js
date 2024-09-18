
function adicao(){
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let resultado=a+b;
    document.getElementById("resultado").innerText=resultado;
}

function subtracao(){
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let resultado=a-b;
    document.getElementById("resultado").innerText=resultado;
}
function multiplicacao(){
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let resultado=a*b;
    document.getElementById("resultado").innerText=resultado;
}
function divisao(){
    let a = parseFloat(document.getElementById("n1").value);
    let b = parseFloat(document.getElementById("n2").value);
    let resultado=a/b;
    document.getElementById("resultado").innerText=resultado;
}