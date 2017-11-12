//State
var estado = {
    cantidad: 0
};

//Reducer. Se le pasa una accion (objeto con propiedad type) y un estado. Según el type de la acción se genera otro estado nuevo que será lo que devuelva.
function reductor(estadoActual, accion){
    var nuevoEstado = Object.assign({},estadoActual); //clonamos el objeto

    switch (accion.type) {
        case "AUMENTAR":
            nuevoEstado.cantidad = estadoActual.cantidad + 1;
            return nuevoEstado;
        case "DISMINUIR":
            nuevoEstado.cantidad = estadoActual.cantidad - 1;
            return nuevoEstado;
        default:
            break;
    }

    return estadoActual;
}

//Store. Através del store se despacharán acciones. ("dispatcharán" eventos :D )
//Y será el Modelo de la aplicación. Inicialmente llamará al reductor con un acción con type: "@@redux/INIT".
var store = Redux.createStore(reductor, estado);

//Action
var accionAumentar = {
    type:"AUMENTAR"
}

var accionDisminuir = {
    type:"DISMINUIR"
}

//Funcionamiento:

//Disparamos la acción ( por ejemplo store.dispatch(accionAumentar) ), llamando a un metodo del store.
//Esto hará que el store llame al reductor pasandole la acción (y el estado actual). 
//El reductor comprobará el type de esa acción y devolverá otro nuevo estado (según el type de la acción pasada).

var aumentar = function(){
    store.dispatch(accionAumentar);
}
var disminuir = function(){
    store.dispatch(accionDisminuir);
}

//Renderizar el valor del estado modificado:

var divNumero = document.getElementById("numero");
var mostrarCantidad = function(){
    divNumero.innerHTML = store.getState().cantidad; // Es la forma de recuperar el estado del store.
}

//suscribimos:
store.subscribe(mostrarCantidad);


