let formulario = document.getElementById("formTaller5");
formulario.addEventListener("submit", calculadora);

function calculadora(event){
    event.preventDefault();

    let operacion = document.getElementById("operacion").value;
    if(operacion === ""){
        document.getElementById("resultado").innerText="Seleccione una operacion.";
        document.getElementById("resultado").className="error"
        return;
    }

    let numero1 = document.getElementById("numero1").value;
    if((numero1==="")){
        document.getElementById("resultado").innerText="Ingrese el numero-1";
        document.getElementById("resultado").className="error";
        return;
    }

    let numero2 = document.getElementById("numero2").value;
    if(numero2 === ""){
        document.getElementById("resultado").innerText="Ingrese el numero-2";
        document.getElementById("resultado").className="error";
        return;
    }

    numero1 = Number(numero1);
    numero2=Number(numero2);

    let total ;

    switch(operacion){
        case "suma":
            total=numero1+numero2;
            break;
        case "resta":
            total=numero1-numero2;
            break;
        case "multiplicacion":
            total=numero1*numero2;
            break;
            case "division":
                if(numero2==0){
                    document.getElementById("resultado").innerText="No se puede dividir entre cero.";
                    document.getElementById("resultado").className="error";
                    return;
                }
                total=numero1/numero2;
                break;

    }
    document.getElementById("resultado").innerText=`resultado: ${total}`;
    document.getElementById("resultado").className="exito";
}