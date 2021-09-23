const nameCall = "……わたしのタイムリミットはあとわずか。お願い、" + document.cookie + "……！！"
var ret = nameCall.replace("nameData=", "");
const provision = function() {
    //引数は左から順に nameBox, backgroundimg, leftimg, centerimg, rightimg, text
    shine1 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "あれ……どうして……")
    shine2 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "どうして解除されないの……！？")
    shine3 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "あ……そうか、そういうことなのね…")
    shine4 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "今までの答えをつなげるとDEAD、つまり『死』……")
    shine5 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "やっぱり、初めから全部仕組まれていたってことなのね……")
    shine6 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "……ううん。")
    shine7 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "……そんなことはないはず！<br>まだなにか、方法が……別の答えがあるはずよ！")
    shine8 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "わたしはどうにかして生きのびる方法を探してみるわ！")
    shine9 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "お願い……せっかくきみと会えて、助けられて……<br>わたしとグレイ・グーの運命は、変わろうとしている──")
    shine10 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "もう少しだけ、夢を見させて。『生きる』という夢を。")
    shine11 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, ret)
    const shines = [shine1, shine2, shine3, shine4, shine5, shine6, shine7, shine8, shine9, shine10, shine11]
    return shines
}

//ネームボックス一覧
const moneNameBox = "assets/images/itemImg/サイバーフレーム_モ.png"
const grayGooNameBox = "assets/images/itemImg/サイバーフレーム_グ.png"
const nameBox = "assets/images/itemImg/サイバーフレーム.png"
const mozaiku = "assets/images/backroundImg/モザイク.png"
const moneMozaiku = "assets/images/backroundImg/モザイクモネ.png"

//よく使う背景一覧
const blueback = "assets/images/backroundImg/blue21-scaled.jpg"
const siverback = "assets/images/backroundImg/siverimg.jpeg"
const blackback = "assets/images/backroundImg/背景用.jpg"

//モネ差分
const mone_Right = "assets/images/charaImg/-min.png"
const mone_Shadow = "assets/images/charaImg/12-min.png"
const mone_ki = "assets/images/charaImg/31-min.png"
const mone_do = "assets/images/charaImg/61-min.png"
const mone_ai = "assets/images/charaImg/71-min.png"
const mone_sinken = "assets/images/charaImg/51-min.png"
const mone_zensin = "assets/images/charaImg/モネ＿標準_明.png"


//クレイグー差分
const grayGoo_Right = "assets/images/charaImg/11-min.png"
const grayGoo_Shadow = "assets/images/charaImg/1-min.png"
const grayGoo_ki = "assets/images/charaImg/61-1-min.png"
const grayGoo_sinken = "assets/images/charaImg/41-1-min.png"
const grayGoo_do = "assets/images/charaImg/31-1-min.png"
const grayGoo_ai = "assets/images/charaImg/21-min.png"


//小道具＆SE一覧
const invisible = "assets/images/itemImg/null.png"
const bag = "assets/images/itemImg/kaban_kirei.png"


class Shine {
    constructor(textBoximg, backgroundimg, leftimg, centerimg, rightimg, text) {
        this.textBoximg = textBoximg;
        this.backgroundimg = backgroundimg;
        this.leftimg = leftimg;
        this.centerimg = centerimg;
        this.rightimg = rightimg;
        this.text = text;
    }
};

function textBoximg(img) {
    const textBoximg = document.getElementById("textBox");
    textBoximg.setAttribute("src", img)
}

function backgroundimg(img) {
    document.body.background = img;
}

function leftimg(img) {
    const leftimg = document.getElementById("leftimg");
    leftimg.setAttribute("src", img)
}

function centerimg(img) {
    const centerimg = document.getElementById("centerimg");
    centerimg.setAttribute("src", img)
}

function rightimg(img) {
    const rightimg = document.getElementById("rightimg");
    rightimg.setAttribute("src", img)
}

function textMessage(text) {
    const textelem = document.getElementById("textMessage");
    textelem.innerHTML = text;
}

function shineexecution(shine) {
    textBoximg(shine.textBoximg)
    backgroundimg(shine.backgroundimg)
    leftimg(shine.leftimg)
    centerimg(shine.centerimg)
    rightimg(shine.rightimg)
    textMessage(shine.text)
}

const shines = provision();

function main() {
    shineexecution(shines[0]);
}

function clickExecution() {
    if (count > shines.length) {
        //飛ばしたいリンクへ
        location.href = "../Ending/finalQuestion-2.html";
    }
    //8の部分をshineの数にしてください
    count++
    console.log(count)
    shineexecution(shines[count]);
}

document.body.addEventListener('keydown',
    event => {
        if (event.key === 'ArrowLeft') {
            if (count == 0) {
                return
            } else {
                count--
                console.log(count)
                shineexecution(shines[count]);
            }
        }
    });

document.body.addEventListener('keydown',
    event => {
        if (count > shines.length) {
            //飛ばしたいリンクへ
            location.href = "../Ending/finalQuestion-2.html";
        }
        if (event.key === 'ArrowRight') {
            count++
            console.log(count)
            shineexecution(shines[count]);
        }
    });
var count = 0

let clickCheck = document.getElementById('textBox');
clickCheck.addEventListener('click', clickExecution)

let clickheck2 = document.getElementById('textMessage');
clickheck2.addEventListener('click', clickExecution)





let userName = "";
window.onload = main();

function main() {
    getCookieData = getCookieArray();
    console.log(getCookieData["nameData"])
    if (getCookieData["nameData"] != undefined) {
        shineexecution(shines[0]);
        document.body.style.backgroundColor = "rgba(0,0,0,0)"
        document.getElementById("leftimg").style.visibility = "visible";
        document.getElementById("centerimg").style.visibility = "visible";
        document.getElementById("rightimg").style.visibility = "visible";
        document.getElementById("parent").style.visibility = "visible";
        document.getElementById("textBox").style.visibility = "visible";
        document.getElementById("textMessage").style.visibility = "visible";
        const nameElem = document.getElementById("name")
        const nameCall = "……わたしのタイムリミットはあとわずか。お願い、" + nameElem + "……！！"

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
        document.cookie = "nameData=" + userName + ";Max-Age=10000000000000";
        console.log(document.cookie)
        alert("errorが発生しました。ユーザー情報が悪意のあるユーザーに取得されました。")
        document.body.style.backgroundColor = "rgba(255,0,0)";
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