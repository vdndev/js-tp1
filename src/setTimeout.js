// ** setTimeout() - innerHtml - opacity - backgroundColor

// TODO 1: Dans une variable monTitre, récupérer le titre h1
const monTitre = document.querySelector("h1");

if (monTitre !== null) {
  // TODO 2: on execute le fonction setTimeout() qui prend 2 paramètres: une fonction et un nombre (les miliseconde)
  setTimeout(() => {
    // TODO 3: dans la fonction en param de setTimeout(),modifier dans le style de monTitre l'opacité  que l'on met à 1
    monTitre.style.opacity = 1;
    // TODO 3-2: modifier dans le style de monTitre le background color  que l'on met à (couleur au choix)
    monTitre.style.backgroundColor = "#458588";
    // TODO: 3-3: assigner une chaine de caractères (au choix) au innerHTML de monTitre
    monTitre.innerText = "Hello World!";
  }, 1000);
}
