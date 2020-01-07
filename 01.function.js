console.log("01 - Fonctions");

var nombre1 = 10 ;
var nombre2 = 20 ;

function additionner( a, b){
    return a+b;
}

var resultat = additionner( nombre1, nombre2)
console.log( resultat);

var somme = additionner;
var resultat2 = somme( nombre1, nombre2);
console.log( resultat2);

function multiplier( a, b){
    return a * b;
}

function soustraire( a, b){
    return a - b;
}

var resultat3 = multiplier( nombre1, nombre2)
console.log( resultat3)

function afficherOperation( nomOperation, operation, nb1, nb2){
   console.log( nomOperation + '(' + nb1 + ',' + nb2 + ') = ' + operation( nb1, nb2)) ;
}
afficherOperation( 'Somme', somme, 20, 40) 
afficherOperation( 'Multiplication', multiplier, 10, 20) 
afficherOperation( 'Soustraction', soustraire, 15, 5) 