document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("thumbs"),e=document.getElementById("largeImg");t.addEventListener("click",function(t){var n=t.target.closest("a");if(n&&n.hasAttribute("href")){t.preventDefault();var r=n.getAttribute("href");e.src=r,e.alt=n.getAttribute("title")}})});
//# sourceMappingURL=index.5022fba3.js.map
