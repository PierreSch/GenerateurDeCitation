document.addEventListener("DOMContentLoaded", function(event) {
 //Création des tableaux
    const startSagesse = [
        "Et c'est parfois dans un regard que,",
        "Un sourire coûte moins cher que,",
        "Il est parfois plus facile de donner un prix que,",
        "S'il est vrai que,",
        "Nul besoin de temples quand,",
        "Tout quitter est plus facile que,",

    ];
    const middleSagesse = [
        "tout recommencer",
        "cachés les mots",
        "toujours continuer",
        "en rajouter",
        "être perplexe",
        "être joyeux",

    ];
    const endSagesse = [
        "fais pas bon ménages.",
        "est satisfaisant !",
        "est douloureux !",
        "fais mal.",
        "fais du bien mais pas que !",
        "est bien.",

    ];
    const startHumour = [
        "Il vaut mieux se taire que,",
        "La dernière fois ,",
        "Il vaut mieux,",
        "S'il est vrai que,",
        "Depuis j'ai vue Tchoupie il est vrai que,",
        "Rien n'est plus marrant que,",

    ];
    const middleHumour = [
        "manger des",
        "mordre des",
        "épillet des",
        "faire tourner des",
        "faire un calin à des",
        "jouer avec des",

    ];
    const endHumour = [
        "sardines !",
        "poulpe !",
        "pigeons.",
        "ânes !",
        "Chats !",
        "Chiens !",

    ];
    //Déclaration bouton et zone de texte
    const quote = document.getElementById("quote");
    const btnGen = document.getElementById("genQuote");
    //Récuperation du nombre de citations à afficher
    const number = document.getElementById("inputNum");
    let nbrQuote = number.addEventListener("input", function(event){
        nbrQuote = event.target.value;
    });
    //Récuperation du type de citation
    const type = document.getElementById("inputType");
    let typeQuote = type.addEventListener("input", function(event){
        typeQuote = event.target.value;
    });
    //Génération de nombre aleatoire
    function startRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function middleRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function endRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    //Fonction (pour générer les citation) avec boucle (pour le nombre de citation à afficher) et condition (pour le type de citation à afficher)
    btnGen.addEventListener("click", function(){

        quote.innerHTML = "";
        if (typeQuote === "Sagesse") {

            for (let i = 0; i < nbrQuote; i++){   

                let startAlea = startRandom(0, startSagesse.length-1);                
                let middleAlea = middleRandom(0, middleSagesse.length-1);                
                let endAlea = endRandom(0, endSagesse.length-1);

                let quoteView = "-" + startSagesse[startAlea] + " " + middleSagesse[middleAlea] + " " + endSagesse[endAlea];

                const newquote = document.createElement("span");
                const lineBreak = document.createElement("br");

                quote.appendChild(newquote);
                quote.appendChild(lineBreak);

                newquote.innerHTML = quoteView;
            }

        } else if (typeQuote === "Humour") {

            for (let i = 0; i < nbrQuote; i++){

                let startAlea = startRandom(0, startHumour.length-1);
                let middleAlea = middleRandom(0, middleHumour.length-1);
                let endAlea = endRandom(0, endHumour.length-1);

                let quoteView = "-" + startHumour[startAlea] + " " + middleHumour[middleAlea] + " " + endHumour[endAlea];

                const newquote = document.createElement("span");
                const lineBreak = document.createElement("br");

                quote.appendChild(newquote);
                quote.appendChild(lineBreak);

                newquote.innerHTML = quoteView;
            }

        } else {

            alert("Choisissez une catégorie");

        }
        

        
    });
    //Déclaration du bouton et function pour effacer la zone de texte
    const clean = document.getElementById('clean');

    clean.addEventListener("click", function(){

        quote.innerHTML = "";
        
    });
});