window.onload = function(){
    var beads = document.getElementsByClassName("bead");
    for (var bead of beads){
        bead.onclick = function(bead){
            if (this.style.cssFloat == "right"){
                this.style.cssFloat = "left";
            } else {
                this.style.cssFloat = "right";
            }
        }
    }
}