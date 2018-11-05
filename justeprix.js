var nombreAleatoire =0;
var vie = 10;




function viesPerdu()
{
    vie--;
}

function reset(){
    nombreAleatoire=0;

    vie = 10;
    document.getElementById("text").style.visibility="visible";
    document.getElementById("text").value= "";
    document.getElementById("text").innerHTML = vie;



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

    document.getElementById("vies").innerHTML="vie:<br>"+vie;


   nombreCpu();
    viesPerdu();
    var text =document.getElementById("text").value;
    console.log(nombreAleatoire);

    if( text == nombreAleatoire){
        document.getElementById("resultat").innerHTML="bravo vous avez trouver le nombre";
        document.getElementById("resultat").style.border = "inset green";
        document.getElementById("resultat").style.animation ="clignoteV 5ms infinite";

        }
    else if(text > nombreAleatoire){
        document.getElementById("resultat").innerHTML="c'est MOIN!!!";
        document.getElementById("resultat").style.border = "inset red";
        document.getElementById("resultat").style.animation ="clignoteR 5ms infinite";
    }
    else if(text < nombreAleatoire){
        document.getElementById("resultat").innerHTML="c'est PLUS!!!";
        document.getElementById("resultat").style.border = "inset red";
        document.getElementById("resultat").style.animation ="clignoteR 5ms infinite";
    }

    else{
        document.getElementById("resultat").innerHTML="ceci n'est pas un nombre";
        document.getElementById("resultat").style.border = "inset red";
        document.getElementById("resultat").style.animation ="clignoteR 10ms infinite";
    }

    if ( vie < 0){
        document.getElementById("text").style.visibility="hidden";
        document.getElementById("vies").style.color = "red";

    }


});