/** var homme1 = {
    nom : 'LEMAITRE',
    prenom : 'Jules',
    pseudo: 'jules77'
}

console.log( homme1)
**/
function afficherPersonne( element){
    console.log( 'nom : ' + element.nom + ' prénom ' + element.prenom + ' pseudo ' + element.pseudo + ' age ' + element.age)
}

function Personne( nom, prenom, pseudo) {
    this.nom = nom ;
    this.prenom = prenom ;
    this.pseudo = pseudo ;

    this.getInitiales = function(){
        return this.nom.charAt(0) + this.prenom.charAt(0)
    }
}

var homme1 = new Personne( 'LEMAITRE', 'Jules', 'jules77' );
 
var homme2 = new Personne( 'LEMAITRE', 'Paul', 'paul44' );




console.log( homme1)
console.log( homme2)
console.log( '------')
afficherPersonne( homme1)
afficherPersonne( homme2)

console.log( 'Modif ------')
homme1.pseudo = 'jules44' ;
afficherPersonne( homme1)

console.log( 'Ajout ------')
Personne.prototype.age = 30 ;
afficherPersonne( homme1)
console.log('initiale ' + homme1.getInitiales());


var homme3 = {
    nom : 'LEPREFET',
    prenom: 'Robert',
    pseudo : 'robert77',
    getNomComplet : function(){ return nom + ' ' + prenom + ' ' + pseudo}
}
console.log( 'Objet sans constructeur ------')
console.log( homme3)
afficherPersonne( homme3)



function Client( nom, prenom, pseudo, numeroClient) {
    //this.personne  = new Personne( nom, prenom, pseudo) 
    Personne.call( this, nom, prenom, pseudo)

    this.numeroClient = numeroClient ;

    this.getInfos = function(){
        //return this.numeroClient + ' ' + this.personne.nom + ' ' +  this.personne.prenom
        return this.numeroClient + ' ' + this.nom + ' ' +  this.prenom
    }
}

var client1 = new Client( 'LUCAS', 'JulStevees', 'steve44', 'A01');

console.log( 'Héritage via constructeur  ------')
console.log( client1)
//afficherPersonne( client1.personne)
afficherPersonne( client1)
console.log(  client1.numeroClient)
console.log(  client1.getInfos())