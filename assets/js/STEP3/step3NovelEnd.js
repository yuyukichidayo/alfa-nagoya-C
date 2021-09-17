const provision = function() {
    //引数は左から順に event, backgroundimg, leftimg, centerimg, rightimg, text
    shine1 = new Shine(moneNameBox, blueback, mone, bag, bag, "The Egg 君は家に帰っている途中で死んだ。交通事故だった。")
    shine2 = new Shine(moneNameBox, siverback, bag, mone, invisible, "ごく普通の交通事故だったが、致命的だった。")
    shine3 = new Shine(moneNameBox, blueback, megane, mone, mone, "君は妻と子供二人を残した。死ぬときに痛みはなかった。")
    shine4 = new Shine(moneNameBox, blueback, mone, bag, bag, "君の体はもうボロボロで、実際この方が良かった。")
    shine5 = new Shine(moneNameBox, blueback, mone, bag, bag, "そして、君は私と出会った。")
    shine6 = new Shine(moneNameBox, blueback, mone, bag, bag, "hoge")
    shine7 = new Shine(moneNameBox, blueback, mone, bag, bag, "hoge")
    shine8 = new Shine(moneNameBox, blueback, mone, bag, bag, "hoge")
    const shines = [shine1, shine2, shine3, shine4, shine5, shine6, shine7, shine8]
    return shines
}

//ネームボックス一覧
const moneNameBox = "../assets/images/itemImg/nameBox仮.png"

//よく使う背景一覧
const blueback = "../assets/images/backroundImg/blue21-scaled.jpg"
const siverback = "../assets/images/backroundImg/siverimg.jpeg"

//よく使うキャラクター一覧
const mone = "../assets/images/charaImg/july_nikkori.png"
const megane = "../assets/images/charaImg/メガネ.png"
const grayGoo = ""

//よく使うアイテム一覧
const invisible = "../assets/images/itemImg/null.png"
const bag = "../assets/images/itemImg/kaban_kirei.png"


class Shine {
    constructor(nameBoximg, backgroundimg, leftimg, centerimg, rightimg, text) {
        this.nameBoximg = nameBoximg;
        this.backgroundimg = backgroundimg;
        this.leftimg = leftimg;
        this.centerimg = centerimg;
        this.rightimg = rightimg;
        this.text = text;
    }
};

function nameBoximg(img) {
    const nameBoximg = document.getElementById("nameBox");
    nameBoximg.setAttribute("src", img)
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
    textelem.innerText = text;
}

function shineexecution(shine) {
    nameBoximg(shine.nameBoximg)
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
    //8の部分をshineの数にしてください
    if (count > shines.length) {
        //飛ばしたいリンクへ
        location.href = "../STEP4/STEP4.html";
    }
    count++
    console.log(count)
    shineexecution(shines[count]);
}

var count = 0

let clickCheck = document.getElementById('textBox');
clickCheck.addEventListener('click', clickExecution)

let clickheck2 = document.getElementById('textMessage');
clickheck2.addEventListener('click', clickExecution)