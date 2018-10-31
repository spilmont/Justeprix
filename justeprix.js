var nombreAleatoire =0;
var vie = 10;




function viesPerdu()
{
    vie--;
}

function reset(){
    nombreAleatoire=0;

    vie = 10;
    document.getElementById("text").style.dysplay="block";
    document.getElementById("text").value= "";
   console.log(document.getElementById("text").style.display);
}


document.getElementById("reset").addEventListener("click", function () {
    reset()

});

function nombreCpu(){

    if (nombreAleatoire === 0)
    {
        nombreAleatoire=(Math.random()*100)+1;
        nombreAleatoire=Math.round(nombreAleatoire);
    }

}



document.getElementById("ok").addEventListener("click", function(){

    document.getElementById("vies").innerHTML="il vous reste "+vie+" vies";

   nombreCpu();
    viesPerdu();
    var text =document.getElementById("text").value;
    console.log(nombreAleatoire);

    if( text == nombreAleatoire){
        document.getElementById("resultat").innerHTML="bravo vous avez trouver le nombre";
    }
    else if(text > nombreAleatoire){
        document.getElementById("resultat").innerHTML="c'est MOIN!!!";

    }
    else if(text < nombreAleatoire){
        document.getElementById("resultat").innerHTML="c'est PLUS!!!";
    }

    else{
        document.getElementById("resultat").innerHTML="ceci n'est pas un nombre";
    }

    if ( vie ==0){
        document.getElementById("text").style.display ="none";
    }

});