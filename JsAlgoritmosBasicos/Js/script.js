// Iteration 1: Names and Input
//
let hackerOne = 'Frank';
let hackerTwo = "Benjamin";
console.log("The drivers name is " + hackerOne);
console.log('The navegator name is ' + hackerTwo);
/* let hackerOnename = "The drivers name is " + hackerOne
let hackerTwoName = "The drivers name is " + hackerTwo
console.log(hackerOnename);
console.log(hackerTwoName); */
// Iteration 2: Conditionals
if (hackerOne.length > hackerTwo.length) {
    console.log("El conductor tiene el nombre más largo, tiene " + hackerOne.length + " caracteres.");
} else if (hackerOne.length < hackerTwo.length) {
    console.log("Parece que el navegante tiene el nombre más largo, tiene " + hackerTwo.length + " caracteres. ");
} else {
    console.log("¡Vaya, ambos tienen nombres igual de largos, " + hackerTwo.length + " caracteres. ");
}
// Iteration 3: Loops
let separado ="";
for (let i = 0; i < hackerOne.length; i++) {
        separado+= hackerOne[i].toUpperCase()+ " ";    }

console.log(separado);
console.log(hackerTwo.split("").reverse()); 


if (hackerOne> hackerTwo) {
    console.log("El nombre del conductor va primero.");
    
} else if (hackerOne<hackerTwo) {
    console.log("Yo, el navegador va primero definitivamente.");
} else{
    console.log("¿Qué? ¿Los dos tienen el mismo nombre?");
}

let parafos =['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices nulla a enim eleifend tincidunt. Curabitur sodales, risus sed dignissim porta, lacus erat aliquam sem, convallis lacinia enim dui non eros. Morbi ipsum orci, pharetra id pretium ac, blandit eu ex. Aenean ac metus nulla. Mauris pulvinar pulvinar nisi sed tincidunt. Nullam volutpat, elit a pulvinar accumsan, dui ante mattis ex, id posuere neque tellus volutpat turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia cura; Etiam ut libero quam. Quisque eget maximus ex. Phasellus sit amet turpis sed orci hendrerit sodales. Mauris sed pharetra elit. Duis imperdiet nisi ornare tincidunt auctor. Donec varius turpis consectetur rhoncus aliquet. Praesent auctor enim hendrerit ipsum mattis, non elementum justo gravida. Aenean sodales urna in lectus luctus, sit amet imperdiet odio hendrerit. Pellentesque auctor dictum felis, id aliquam urna efficitur at. Curabitur ac risus enim. Phasellus porta tristique urna eget luctus. Nam ut diam a magna accumsan viverra. Aenean ultrices augue maximus nisl viverra molestie. Duis pulvinar tortor commodo purus scelerisque sodales. Phasellus in turpis nec odio ultrices maximus et a massa. Donec dignissim molestie velit sed imperdiet.'];
let numeroDeParablas =parafos.map(cantidad=>{
return cantidad.length})
console.log(numeroDeParablas);

