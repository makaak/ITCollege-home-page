window.onload = function(){
    var target = document.getElementById("raam");
    target.onclick = function(){
        target.style.bottom = Math.random() * (window.innerHeight - 150) + "px";
        target.style.right = Math.random() * (window.innerWidth - 150) + "px";
    }
}