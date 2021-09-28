 var modal = document.getElementById("hide-copy");
 var btn = document.getElementById("btn_copy");

 btn.onclick = function(){
    modal.style.display = "inline-block";
 }
/*
 span.onclick = function () {
    modal.style.display = "none";
 }

 window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}*/

function lifeSite() {
   var start = new Date('August 30, 2021'); // Дата создания сайта
   var end = new Date();
   var life = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
   var suffix = new Array("day", "days", "days");
   var keys = [2, 0, 1, 1, 1, 2];
   var mod = life % 100;
   var suffix_key = mod > 4 && mod < 20 ? 2 : keys[Math.min(mod%10, 5)];
   document.getElementById("life_site").innerHTML = life + " " + suffix[suffix_key];
}