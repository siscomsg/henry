function saludar() {
    console.log("hola "+this.nombre);
}

var rafael={
    nombre:"rafael",
    saludar:saludar,
}
console.log(rafael.saludar());