// ** addEventListener - capter un évènement "click" - coord x - coord y

// necessaire pour eviter que le navigateur n'utilise l'image en cache!!
let count = 1;

// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
document.addEventListener("click", (evt) => {
  // TODO 2: Dans cette fonction on console log unEvent
  console.log(evt);
  // TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click

  // TODO 4: Tjrs dans la Fonction dans addEventListener, dans une variable monImg, créer une img html
  const monImg = document.createElement("img");

  // TODO 5: Ensuite, modifier l'attribut src de monImg (url de l'img au choix)
  monImg.setAttribute("src", `https://picsum.photos/100?random=${count}`);
  // TODO 6: sur monImg, modifier dans style, la position en "absolute"
  monImg.style.position = "absolute";
  // TODO 7: sur monImg, modifier dans style, le left, on assigne la coordonnées x du click
  monImg.style.left = evt.clientX + "px";
  // TODO 8: sur monImg, modifier dans style, le top, on assigne la coordonnées y du click
  monImg.style.top = evt.clientY + "px";

  // TODO 9: placer monImg dans la page
  document.body.append(monImg);
  count++;
});
