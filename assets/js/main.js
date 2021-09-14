let userName = "";

function main() {
    getCookieData = document.cookie;
    console.log(getCookieData)
    if (getCookieData != "") {
        console.log("get cokkie")
        ending()
    } else {
        document.getElementById("nameInput").style.visibility = "visible";
        document.getElementById("btn").style.visibility = "visible";
        document.getElementById("title").style.visibility = "visible";
    }
}

btn.addEventListener("click", e => {
    userName = document.getElementById("nameInput").value;
    userNameGet(userName)

});

function userNameGet(userName) {
    if (userName == "") {
        alert("なまえを入力してね！")
    } else {
        document.cookie = "nameData=" + userName + ";Max-Age=10";
        console.log(document.cookie)
        alert("errorが発生しました。ユーザー情報が悪意のあるユーザーに取得されました。")
        document.body.style.backgroundColor = "rgba(255,0,0,0.5)";
        heavyAlert1()
        setTimeout(heavyAlert2, 1000);
        setTimeout(heavyAlert3, 2000);
        setTimeout(heavyAlertEnd, 3000);
        setTimeout(link, 5000)
    }
}


function link() {
    location.href = "STEP1/step1NovelStart.html";

};

function heavyAlert1() {
    document.getElementById("error1").style.visibility = "visible";
}

function heavyAlert2() {
    document.getElementById("error2").style.visibility = "visible";
    document.getElementById("error3").style.visibility = "visible";
}

function heavyAlert3() {
    document.getElementById("error4").style.visibility = "visible";
    document.getElementById("error5").style.visibility = "visible";
    document.getElementById("error6").style.visibility = "visible";
}

function heavyAlertEnd() {
    document.getElementById("errorEnd").style.visibility = "visible";
}