let resultado =document.getElementById("resultado");
let formulario = document.getElementById("formTaller1");

formulario.addEventListener("submit", par_impar);

function par_impar(){
    event.preventDefault()
    let numero =Number(document.getElementById("numero").value);

    if(numero===0 || isNaN(numero)){
        resultado.innerText="Escribe un número.";
        return;      
    }
    
    if(!Number.isInteger(numero)){
        resultado.innerText=`El numero debe ser entero.`;
        return;
    }
    if(numero % 2==0){
        resultado.innerText=`El numero ${numero} es par.`;
    }
    else{
        resultado.innerText=`El numero ${numero} es ImPar.`;
    }
}