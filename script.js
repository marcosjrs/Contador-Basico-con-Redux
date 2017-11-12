//State
var estado = {
    cantidad: 0
};

//Reducer
function reductor(estado, accion){
}

//Store. Através del store se despacharán acciones. ("dispatcharán" eventos :D )
var store = Redux.createStore(reductor, estado);

//Action
var accionAumentar = {
    type:"aumentar"
}

var accionDisminuir = {
    type:"disminuir"
}


