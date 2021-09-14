btn.addEventListener("click", e => {
    const anser = document.getElementById("anser").value;
    if (anser == "えええ") {
        document.getElementById("clear").style.visibility = "visible";
    } else { alert("反応がない。どうやら答えが違うようだ！") }

});