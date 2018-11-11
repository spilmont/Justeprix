var nombreAleatoire =0;
var vie = 10;

function perdu(){
    var perdu = document.createElement("audio");
    document.body.appendChild(perdu);
    perdu.src="mario-meurt.wav";
    perdu.autoplay="false";
    perdu.play();

}

function gagner(){
    var sonG = document.createElement('audio');
    document.body.appendChild(sonG);
    sonG.src="hihi.mp3";
    sonG.autoplay="false";
    sonG.play();

    var img = document.createElement('img');
    document.body.appendChild(img);
    img.src="hihi.png";
    img.id="hihi";
    img.style.position= "absolute";
    img.style.animation ="ss 2s";




}





function viesPerdu()
{
    vie--;
    if(vie <0)
    {
        document.getElementById("vies").innerHTML="vie:<br>0 ";
    }
}

function reset(){
    nombreAleatoire=0;

    vie = 10;
    document.getElementById("text").style.visibility="visible";
    document.getElementById("text").value= "";
    document.getElementById("vies").innerHTML = "vie:";
    document.getElementById("vies").style.color = "black";
    document.getElementById("resultat").style.animation= "none";


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
        document.getElementById("resultat").style.animation ="clignoteV 2s infinite";
        gagner();

        }
    else if(text > nombreAleatoire){
        document.getElementById("resultat").innerHTML="c'est MOIN!!!";
        document.getElementById("resultat").style.border = "inset red";
        document.getElementById("resultat").style.animation ="clignoteR 2s infinite";
    }
    else if(text < nombreAleatoire){
        document.getElementById("resultat").innerHTML="c'est PLUS!!!";
        document.getElementById("resultat").style.border = "inset red";
        document.getElementById("resultat").style.animation ="clignoteR 2s infinite";
    }

    else{
        document.getElementById("resultat").innerHTML="ceci n'est pas un nombre";
        document.getElementById("resultat").style.border = "inset red";
        document.getElementById("resultat").style.animation ="clignoteR 2s infinite";
    }

    if ( vie < 0){
        document.getElementById("text").style.visibility="hidden";
        document.getElementById("vies").style.color = "red";
        perdu();

    }


});