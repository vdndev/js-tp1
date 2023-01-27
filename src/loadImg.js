// ** addEventListener - load

// TODO 1: récupérer toutes les images dans une variable lesImages
const lesImages = document.querySelectorAll("img");

if (lesImages !== null) {
  // TODO 2: Dans une v ariable tabImg on transforme lesImages en tableau avec Array.from()
  const tabImg = Array.from(lesImages);

  // TODO 3-1: Sur tabImg on utilise la fonction map().
  tabImg.map((uneImage, index) => {
    // TODO 3-2: Dans map(), on lui passe une F => qui prend 2 params : uneImage et index
    // TODO 3-3: Dansla F =>, sur uneImage on place un addEventListener qui écoute "load" et éxecute une Fonction
    uneImage.addEventListener("load", (evt) => {
      // TODO 3-4: Dans la F du addEventListener, on affiche index en console
      console.log(index);
    });
  });
}
