//Hiermee wordt de laatste button van een article gelinkt
var bookmark = document.querySelector(" article button:last-of-type");

function bookmarkVol() {
  //Hiermee wordt gekeken of de class bookmarked is toegevoegd aan de selector
  if (bookmark.classList.contains('bookmarked')) {

    bookmark.classList.remove('bookmarked');
    //Als dit niet het geval is wordt de class bookmarked toegevoegd
  } else {

    bookmark.classList.add('bookmarked');
  }
}

//Als erop de knop wordt geklikt dan start de functie
bookmark.addEventListener('click', bookmarkVol);