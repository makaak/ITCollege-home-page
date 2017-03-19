window.onload = function(){
    var target = document.getElementById("raam");
    target.onclick = function(){
        target.style.bottom = Math.random() * (window.innerHeight - 150) + "px";
        target.style.right = Math.random() * (window.innerWidth - 150) + "px";
    }
    var keha = document.querySelector("body");
    keha.onresize = function(){
        target.style.height = window.innerWidth * 0.1 + "px";
        target.style.width = window.innerWidth * 0.1 + "px";
    }
}