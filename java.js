//   color change of h2 item---------
document.getElementById("shoess").style.color = "lightblue"
document.getElementById("shoes-bar").style.color = "lightblue"
document.getElementById("backBack").style.color = "tomato"
//---------- all card borderdadius change---------// 
const cardItem = document.getElementsByClassName('card');
for (const card of cardItem) {
    card.style.borderRadius = "30px"
}
// onclickhandler---------
