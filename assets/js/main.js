let userName = "";

btn.addEventListener("click", e => {
    userName = document.getElementById("nameInput").value;
    userNameGet(userName)
});

function userNameGet(userName) {
    if (userName == "") {
        alert("なまえを入力してね！")
    } else {
        document.cookie = "nameData=hoge";
        console.log(document.cookie)
    }

};