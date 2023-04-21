const register =document.getElementById("register");
const clue = document.getElementById("clue");
clue.style.display = "none";
register.onclick = function(){
    register.style.display = "none";
    clue.style.display = "flex";
}
