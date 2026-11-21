(function(){var techs=["Python","Django","FastAPI","Scikit-Learn","JavaScript","MySQL","PostgreSQL"],
box=document.getElementById("chips"),cards=[].slice.call(document.querySelectorAll("#proj .card")),hint=document.getElementById("hint"),active=null;
function render(){cards.forEach(function(c){c.hidden=!!active&&c.dataset.tech.split(",").indexOf(active)<0});
[].forEach.call(box.children,function(b){b.setAttribute("aria-pressed",String(b.dataset.t===active))});
var n=cards.filter(function(c){return !c.hidden}).length;
hint.textContent=active?(n+(n===1?" project uses ":" projects use ")+active+". Select it again to show all."):"Pick a technology to see which projects use it."}
techs.forEach(function(x){var b=document.createElement("button");b.type="button";b.className="chip";b.textContent=x;b.dataset.t=x;
b.setAttribute("aria-pressed","false");b.onclick=function(){active=active===x?null:x;render()};box.appendChild(b)})})();
