// ** addEventListener - capter un évènement "scroll" - scrollHeight  - innerHeight - scrollY

// TODO 1: Dans une variable laBar, récupérer la div qui possède la classe .bar
const laBar = document.querySelector(".bar");

if (laBar !== null) {
  // TODO 2: Sur document, placer un addEventListener qui écoute "scroll" et execute une fonction
  document.addEventListener("scroll", () => {
    const scrollHeight = document.body.scrollHeight;
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;

    // TODO 3: dans cette fonction, on console log document.body.scrollHeight (la hauteur de page), innerHeight (hauteur de l'affichage) et scrollY (la position du scroll)
    console.log(`scrollHeight: ${scrollHeight}, innerHeight: ${innerHeight}, scrollY: ${scrollY}`);

    // TODO 4: Ensuite, dans une variable scrollMax, on soustrait à document.body.scrollHeight, innerHeight
    const scrollMax = scrollHeight - innerHeight;
    // TODO 5: Dans une variable onEstOu, on fait un pourcentage de scrollY sur scrollMax
    const onEstOu = (scrollY / scrollMax) * 100;

    // TODO 6: Modifier dans le style de laBar, la width en lui assignant onEstOu en "%"
    laBar.style.width = onEstOu + "%";
  });
}
