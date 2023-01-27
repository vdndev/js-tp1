// ** Executer 1 script ttes les X sec - addEventListener - click - innerHTML

// TODO 1: récupérer le titre h3 dans une variable monTitre
const monTitre = document.querySelector("h1");
// TODO 2: créer une variable timer initialisée à 3
let timer = 3;

if (monTitre !== null) {
  // TODO 3-1: sur monTitre on place un addEventListener qui surveille le click et qui exécute une fonction
  monTitre.addEventListener("click", () => {
    // TODO 3-2: Dans cette fonction, créer une variable countDown à laquelle on assigne la fonction setInterval()
    const countDown = setInterval(() => {
      // TODO 3-3: setInterval() prend en 1er param, une fonction et en 2e param 1000 ms
      if (timer > 0) {
        // TODO 4-1: Dans la fonction de setInterval(), SI timer est supperieur à 0, on assigne au innerHTML de monTitre, timer
        monTitre.innerHTML = timer;
      } else {
        // TODO 4-2: SINON, on assigne au innerHTML de monTitre, "GO GO GO"
        monTitre.innerHTML = "GO! GO! GO!";
        clearInterval(countDown);
      }

      // TODO 5: Après ces conditions, on décrémente timer
      timer -= 1;
    }, 1000);
  });
}
