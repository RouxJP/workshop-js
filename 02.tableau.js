var villes = [ 'Nantes', 'Paris', 'Saint-Nazaire', 'anger', 'Le Mans']
var i = 0;

function afficher(element){
    console.log( element);
}

function contientChaine( element){
    //console.log(  element.indexOf( 'a') );
    if( element.indexOf( 'a') == -1){
        return false;
    }else{
        return true;
    }
}

function contientChaine( element){
    //console.log(  element.indexOf( 'a') );
    if( element.indexOf( 'a') == -1){
        return false;
    }else{
        return true;
    }
}

villes.forEach( afficher);

var lettreAdDnsToustesLesVilles = villes.every( contientChaine)

console.log( lettreAdDnsToustesLesVilles);

function contientChaineTiret( element){
    //console.log(  element.indexOf( '-') );
    if( element.indexOf( '-') == -1){
        return false;
    }else{
        return true;
    }
}

var auMoinsUneVilleAvecUnTiret = villes.some( contientChaineTiret)

console.log( auMoinsUneVilleAvecUnTiret)

function villeSansTiretNiEspace( element){
    //console.log(  element.indexOf( '-') );
    if( ( element.indexOf( '-') == -1) && ( element.indexOf( ' ') == -1)){
        return element;
    }else{
        return null;
    }
}

var villesSansTiretSansEspace = villes.filter( villeSansTiretNiEspace)

villesSansTiretSansEspace.forEach( afficher)

/* Dernière lettre s*/
function villeAvecSAlaFin( element){
    //console.log(  element.indexOf( '-') );
    var length = element.length ;
    if( element[ length - 1].toUpperCase() == 'S'){
        elementMaj = element.toUpperCase();
        return elementMaj;
    }else{
        return null;
    }
}

var villesAvecS = villes.filter( villeAvecSAlaFin)

console.log('liste des villes avec s final')
villesAvecS.forEach( afficher)
