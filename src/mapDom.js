// TODO :JS map phase 1
// TODO :On va récupérer TOUS les <p> de notre page dans une variable lesTxt
// TODO :On va faire un console log de lesTxt 
//* On récupère TOUS les <p>
const lesTxt = document.querySelectorAll("p");
if (lesTxt !== null) {
  console.log(lesTxt);

  //TODO JS map Phase 2 
  //TODO Avec la methode Array.from(), dans une nouvelle variable textesTab on va transformer notre htmlCollection en array
  //TODO On console log la variables textesTab 
  //* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
  const textesTab = Array.from(lesTxt);
  console.log(textesTab);

  //TODO JS Map Phase 3 (on peut travailler sur un Array)
  //TODO Sur textesTab on va utiliser la ƒ° map(),
  //TODO dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (auChoix)
  //TODO cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire
  textesTab.map((auChoix) => {
    auChoix.innerText = "Hello World!!";
  });
}
