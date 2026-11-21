(function(){var calm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function count(el){var n=+el.dataset.n;if(calm){el.textContent=n;return}var s=null;
(function f(t){s=s||t;var p=Math.min((t-s)/1200,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(performance.now())}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");
[].forEach.call(e.target.querySelectorAll("[data-n]"),count);io.unobserve(e.target)}})},{threshold:.15});
[].forEach.call(document.querySelectorAll(".rv"),function(el){io.observe(el)})})();
