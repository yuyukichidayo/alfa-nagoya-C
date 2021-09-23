let userName = "";
window.onload = main();

function main() {
    getCookieData = getCookieArray();
    console.log(getCookieData["nameData"])
    if (getCookieData["nameData"] != undefined) {
        document.getElementById("timer").style.visibility = "visible";
        const nameElem = document.getElementById("name")
        nameElem.style.visibility = "visible";
        nameElem.innerText = "あなたの名前は" + getCookieData["nameData"];
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

function getCookieArray() {
    var arr = new Array();
    if (document.cookie != "") {
        var tmp = document.cookie.split('; ');
        for (var i = 0; i < tmp.length; i++) {
            var data = tmp[i].split('=');
            arr[data[0]] = decodeURIComponent(data[1]);
        }
    }
    return arr;
}

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


//ここからエンディング要素

var timer_ID; //【タイマーID】
var time = 60; // timeの初期化

function minusTime() {
    time--; // timeの更新
    dispTime(); // timeの表示	
    if (time == 0) {
        clearInterval(timer_ID); //【タイマーの消去】
    }
}

function dispTime() {
    const timeElem = document.getElementById("timer")
    timeElem.innerText = time;
    console.log(time)
}

window.onload = function timeStart() {
    dispTime(); // timeの表示
    timer_ID = setInterval("minusTime()", 1000); //【タイマーの設定】
}

function ending() {

}