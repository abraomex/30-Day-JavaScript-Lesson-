document.getElementById("myButton").onclick = function(){
    let username = document.getElementById("myText").value;
    let h1 = document.getElementById("myH1");
    h1.innerHTML = "Hello, " + username + "!";
}