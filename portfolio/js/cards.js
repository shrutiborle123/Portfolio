[].forEach.call(document.querySelectorAll(".card"),function(c){c.addEventListener("pointermove",function(e){
var r=c.getBoundingClientRect();c.style.setProperty("--mx",(e.clientX-r.left)+"px");c.style.setProperty("--my",(e.clientY-r.top)+"px")})});
