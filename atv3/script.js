function verificar(){
    let idade = parseInt(document.getElementById("idade").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let nome = document.getElementById("nome").value;
    if(idade>=18 && idade<=35 && altura>1.86){
        document.getElementById("nome1").innerText=nome;
        
    }
    else{
        document.getElementById("altura1").innerText=altura;
        document.getElementById("idade1").innerText=idade;
        document.getElementById("nome1").innerText='';
    }
}