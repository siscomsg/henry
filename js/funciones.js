/**
 * Create by Rafael Obando
 */
window.onload=iniciadatos;

function iniciadatos(){
    document.getElementById("link").onclick=validaSalir;
    document.getElementById("linksearch").onclick=busqueda;
}

function validaSalir(){
    if(confirm("Desea salir??")){
        alert("nos vamos a ver porno");
        return true; //regresamos verdadero para salir
    }else{
        alert("Nos quedamos en el sitio");
        return false; //regresamos falso para quedarnos
    }
}

function busqueda(){
    //con la funcion prompt capturamos la informacion del usuario
    let respuesta= prompt("Escribe lo que deseas buscar","Busqueda");
    if(respuesta){
        alert("Tu respuesta fue "+respuesta);
        var nuevolink=this + "?k=" + respuesta;
        //this nos sirve para referenciar al elemento que provoco el evento, 
        //en este caso el elemento con identificador "linksearch", luego concatenamos
        //la respuesta con un parametro de una peticion get
        alert("Nuevo link " + nuevolink);
        //redireccionamos el nuevo link
        window.location = nuevolink;
        //Regresamos false sino nos lleva al link originalmente registrado
        //en el elemento "linksearch"
        return false;
    }else{
        alert("no proporcionaste ninguna cadena");
        return false;
    }
}