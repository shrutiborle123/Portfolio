(function(){var h=document.getElementById("name"),t=h.textContent,i=0;h.textContent="";
t.split(" ").forEach(function(word){var w=document.createElement("span");w.className="w";w.setAttribute("aria-hidden","true");
word.split("").forEach(function(c){var s=document.createElement("span");s.className="l";s.textContent=c;s.style.animationDelay=(i++*70)+"ms";w.appendChild(s)});h.appendChild(w)});
var img=document.querySelector(".portrait img"),f=document.querySelector(".portrait");
function miss(){f.classList.add("noimg")}img.addEventListener("error",miss);if(img.complete&&!img.naturalWidth)miss()})();
