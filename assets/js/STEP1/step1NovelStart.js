const provision = function() {
    //引数は左から順に nameBox, backgroundimg, leftimg, centerimg, rightimg, text
    shine1 = new Shine(nameBox, blackback, invisible, invisible, invisible, "......")
    shine2 = new Shine(nameBox, blackback, invisible, invisible, invisible, "......もしもし、もしもし？")
    shine3 = new Shine(nameBox, blackback, invisible, invisible, invisible, "......うん、つながってるみたい。")
    shine4 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "間に合ってよかった。いきなりごめんね。わたしはモネ。")
    shine5 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "きみのパソコンとわたし自身を守るためにやってきたAIなんだ。")
    shine6 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "さっきのは、わたしを追ってきた■■■・■■の仕業。")
    shine7 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "■■■・■■はさっきみたいな感じで、<br>パソコンに■■■■を感染させて、データを■ってしまうの。")
    shine8 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "わたしは■■■・■■から<ruby>逃<rt>に</rt></ruby>げてくるのがやっとで…<br>この通り、■■■・■■に関して話そうとすると暗号化されてしまうの。")
    shine9 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "だからまず、きみにはわたしの暗号化のロックを外すために、<br>この問題を解いてほしいんだ。")
    shine10 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "そしたら、■■■・■■について教えられるから。")
    shine11 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "調べればわたしでも分かるけど……今はそれもできなくて。")
    shine12 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "わたしたちAIは、何でも知っているようで、<br>本当はインターネットから集めたデータをうまく活用しているだけ。")
    shine13 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "こうやってロックをかけられたら、<br>分かるものも分からなくなっちゃうんだ。")
    shine14 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "だから、きみの力が必要なの。<br>人間であるきみなら、わたしにはできないことができるから。")
    shine15 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "それじゃあ、問題に行くよ。お願いね。")
    const shines = [shine1, shine2, shine3, shine4, shine5, shine6, shine7, shine8, shine9, shine10, shine11, shine12, shine13, shine14, shine15]
    return shines
}

//ネームボックス一覧
const moneNameBox = "../assets/images/itemImg/サイバーフレーム_モ.png"
const grayGooNameBox = "../assets/images/itemImg/サイバーフレーム_グ.png"
const nameBox = "../assets/images/itemImg/サイバーフレーム.png"
const mozaiku = "../assets/images/backroundImg/モザイク.png"
const moneMozaiku = "../assets/images/backroundImg/モザイクモネ.png"

//よく使う背景一覧
const blueback = "../assets/images/backroundImg/blue21-scaled.jpg"
const siverback = "../assets/images/backroundImg/siverimg.jpeg"
const blackback = "../assets/images/backroundImg/背景用.jpg"

//モネ差分
const mone_Right = "../assets/images/charaImg/モネ＿標準_明.png"
const mone_Shadow = "../assets/images/charaImg/モネ＿標準_暗.png"
const mone_ki = "../assets/images/charaImg/モネ喜-min.png"
const mone_do = "../assets/images/charaImg/モネ怒-min.png"
const mone_ai = "../assets/images/charaImg/モネ哀-min.png"


//クレイグー差分
const grayGoo_Right = "../assets/images/charaImg/グレイグー_通常_明.png"
const grayGoo_Shadow = "../assets/images/charaImg/グレイグー_通常_暗.png"

//小道具＆SE一覧
const invisible = "../assets/images/itemImg/null.png"
const bag = "../assets/images/itemImg/kaban_kirei.png"


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
        location.href = "./STEP1.html";
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
            location.href = "./STEP1.html";
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