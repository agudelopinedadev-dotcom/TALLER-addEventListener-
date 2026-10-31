let formulario = document.getElementById("formTaller4");
formulario.addEventListener("submit", validarRegistro);

function validarRegistro(){                                                                                      
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value.trim();
    if(nombre==""){
        document.getElementById("resultado").innerText="Escribr tu nombre.";
        document.getElementById("resultado").className="error";
        return;      
    }

    let edad = Number(document.getElementById("edad").value);
    if((edad <= 0)){
        document.getElementById("resultado").innerText="Escribe tu edad.";
        document.getElementById("resultado").className="error";
        return;
    }
    else if( ! Number.isInteger(edad) || edad < 18 && edad >100){
        document.getElementById("resultado").innerText="La edad debe ser un numero entero entre cero y cien.";
        document.getElementById("resultado").className="error";
        return;
    }

    let correo = document.getElementById("correo").value;
    if(!correo.includes("@") || (!correo.includes("."))){
        document.getElementById("resultado").innerText="Escribe un correo valido.";
        document.getElementById("resultado").className="error";
        return;
    }

    let clave = document.getElementById("clave").value.trim();
    let confirmar = document.getElementById("confirmar").value.trim();
    if(clave && confirmar ==""){
        document.getElementById("resultado").innerText="Escribe la contraseña.";
        document.getElementById("resultado").className="error";
        return;
    }
    else if(confirmar != clave){
        document.getElementById("resultado").innerText="Las contraseñas no coinciden."
        document.getElementById("resultado").className="error";
        return;
    }
    document.getElementById("resultado").innerText=`Bienvenido: ${nombre}`;
    document.getElementById("resultado").className="exito";

}
