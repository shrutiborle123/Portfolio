(function(){var r=document.documentElement,b=document.getElementById("theme");
b.onclick=function(){var d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;
r.dataset.theme=d?"light":"dark";try{localStorage.setItem("theme",r.dataset.theme)}catch(e){}}})();
