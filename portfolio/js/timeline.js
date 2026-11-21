(function(){var t=[].slice.call(document.querySelectorAll(".tl"));
function p(){t.forEach(function(e){var r=e.getBoundingClientRect();e.style.setProperty("--p",Math.max(0,Math.min(1,(innerHeight*.7-r.top)/r.height)))})}
addEventListener("scroll",p,{passive:true});addEventListener("resize",p);p()})();
