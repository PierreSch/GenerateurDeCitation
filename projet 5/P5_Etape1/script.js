document.addEventListener("DOMContentLoaded", function(event) {
    //Déclaration des tableaux
    const start = [
        "Et c'est parfois dans un regard que,",
        "Un sourire coûte moins cher que,",
        "Il est parfois plus facile de donner un prix que,",
        "S'il est vrai que,",
        "Nul besoin de temples quand,",
        "Tout quitter est plus facile que,",

    ];
    const middle = [
        "tout recommencer",
        "cachés les mots",
        "toujours continuer",
        "en rajouter",
        "être perplexe",
        "être joyeux",

    ];
    const end = [
        "fais pas bon ménages.",
        "est satisfaisant !",
        "est douloureux !",
        "fais mal.",
        "fais du bien mais pas que !",
        "est bien.",

    ];
    //Déclaration de la zone de texte et du bouton pour générer les citation
    const quote = document.getElementById("quote");
    const btn = document.getElementById("genQuote");
    //Génération de numero aleatoire
    function endRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function middleRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function startRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    //Function pour générer les citation
    btn.addEventListener("click", function(){
        
        let startAlea = startRandom(0, start.length-1);        
        let middleAlea = middleRandom(0, middle.length-1);        
        let endAlea = endRandom(0, end.length-1);

        quote.textContent = "-" + start[startAlea] + " " + middle[middleAlea] + " " + end[endAlea];
    });

});