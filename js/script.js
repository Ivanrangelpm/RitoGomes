document.getElementById("scrollButtom").addEventListener("click", function(){
    var targetSection = document.getElementById("section-vava");
    targetSection.scrollIntoView({ behavior: "smooth" });
});