let formulario = document.getElementById("formTaller3");
formulario.addEventListener("submit", taller3);

function taller3(){
    event.preventDefault();
    let num1 = parseInt(document.getElementById("numero1").value);
    let num2 = parseInt(document.getElementById("numero2").value);
    let num3 = parseInt(document.getElementById("numero3").value);

    if(isNaN(num1 || num2 || num3)){
        document.getElementById("resultado").innerText="Ingrese un numero."
        return;
    }
    else if(num1 > num2 && num1 > num3){
        document.getElementById("resultado").innerText="El numero 1 es mayor."
        return;
    }
    else if(num2 > num1 && num2 > num3){
        document.getElementById("resultado").innerText="El numero 2 es mayor"
        return;
    }
    else if (num3 > num1 && num3 > num2){
        document.getElementById("resultado").innerText="El numero 3 es mayor"
        return;
    }
    else{
        document.getElementById("resultado").innerText="Hay un empate entre los numeros."
    }
}