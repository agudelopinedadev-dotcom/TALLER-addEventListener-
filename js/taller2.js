let formulario = document.getElementById("formTaller2");
formulario.addEventListener("submit", taller2);

function taller2(){
    event.preventDefault();
    let nota = parseFloat(document.getElementById("nota").value);

    if(isNaN(nota)){
        document.getElementById("resultado").innerText="Ingrese la nota."
        return;
    }
    if(nota < 0 || nota > 5){
        document.getElementById("resultado").innerText="Nota Invalida."
        return;
    }

    let resultado = "Aprovado";
    let desempeño ;
    if(nota>4.5){
        desempeño = "Excelente"
    }
    else if(nota>4){
        desempeño = "Bueno"
    }
    else if(nota>3){
        desempeño = "Aceptable"
    }
    else{
        desempeño = "Insuficiente"
        resultado = "No Aprovado"
    }
    document.getElementById("resultado").innerText=`${nota}-${desempeño}: ${resultado}`;   
}