function carro (marca, color, anio) {
    this.marca=marca;
    this.color=color;
    this.anio=anio;
}
var audi= new carro("toyota","azul","2012");
console.log(audi);

function personas (nombre, edad, sexo){
    this.nombre=nombre;
    this.edad = edad;
    this.sexo=sexo;
}
var rafael=new personas("rafael",43,"m");
console.log(rafael);

function carne(nombre, estarica, legustalapieza){
    this.nombre=nombre || "mary";
    this.estarica=estarica || true;
    this.legustalapieza=legustalapieza || "si";
}
var mariluz=new carne("mariluz",true,"si");
var ruth=new carne("ruth",true,"no");
var nada=new carne();
console.log(nada);