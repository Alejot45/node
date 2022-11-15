pepito="Soy un Texto"
console.log(pepito)
console.log(typeof pepito)
pepito="35.3"
console.log(pepito)
console.log(typeof pepito)
pepito=true
console.log(pepito)
console.log (typeof pepito)
function bla(){

}
pepito=bla
console.log(pepito)
console.log(typeof pepito)
function bla1(){
return "nuevo texto"
}
pepito=bla1()
console.log(pepito)
console.log(typeof pepito)
pepito=function nuevo(){

}
console.log(pepito)
console.log(typeof pepito)
Object={
    userName:"cnaranjo",
    password: "123"
}
console.log(Object)
Object={
    name:"Pepito",
    lastname:"Perez",
    phone: 123123.45,
    address:{
         city:"Quito",
         street:"1st street",
    },
    married: true
};
console.log(Object);
if(Object.married){
console.log("Pepito esta casado")
};
console.log(Object.lastname);
console.log(Object.address.street);
ArrayVariable=[
    1,2,3
]
console.log(ArrayVariable)
console.log(typeof ArrayVariable)
console.log(ArrayVariable[0])
console.log(ArrayVariable[2])
ArrayVariable1=[
    "Pepito",7,
    {
        firtName:"Alejandro",
        lastname:"Pico",
    },
    true
]
console.log(ArrayVariable1)
console.log(typeof ArrayVariable1)
console.log(typeof ArrayVariable1[2])
console.log(typeof ArrayVariable1[0])
for(var i=0;i<ArrayVariable1.length;i++){
console.log(typeof ArrayVariable1[i])
}
for (const x of ArrayVariable1) {
    console.log(x);
    if(typeof x=="string"){
        console.log("es una cadena")
    }

 }
ArrayVariable1.forEach((x,i) => {
    console.log(x);
    console.log('en la posición'+i)});
    //var, let -> Definir el scope (alcance) de dichas variables en mi proyecto
    // var myvariable=3;
    // function myFunction(){
    //      myvariable=8;
    //     console.log(myvariable)
    // }
    // myFunction()
    // console.log(myvariable)
    // var myvariable=3;
    // function myFunction(){
    //      myvariable=8;
    //     console.log(myvariable)
    // }
    // myFunction()
    // console.log(myvariable)
    // myvariable=3
    // const myvariable=3;
    // function myFunction(){
    //     const myvariable=8;
    //     console.log(myvariable)
    // }
    // myFunction()
    // console.log(myvariable)

   var nombre=3;
// console.log(nombre)
//  console.log(typeof nombre)
// var onSuccess=function(){
// console.log("El IVA fue calculado")

// }
function main(){
     processTransaction(function(){
        console.log("El IVA fue calculado")
     },true)
}
function processTransaction(callbackFunction,iva){
if(iva){
    callbackFunction()
}else{
    console.log("no calculo IVA")
}
}
main()
