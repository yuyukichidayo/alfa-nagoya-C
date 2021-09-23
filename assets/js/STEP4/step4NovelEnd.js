const provision = function() {
    //引数は左から順に nameBox, backgroundimg, leftimg, centerimg, rightimg, text
    shine1 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "よし、これで全ての問題が解けたみたい！")
    shine2 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "あとは最後に、ここに今までの答えをまとめて入力すれば、<br>全てのロックは解除される。わたしは消されずにすむわ！")
    shine3 = new Shine(moneNameBox, moneMozaiku, invisible, mone_ki, invisible, "……ここを<ruby>突破<rt>とっぱ</rt></ruby>したらきっと、グレイ・グーはわたしに会いにくる。")
    shine4 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "その時はきっと……分かってくれる、よね？")

    const shines = [shine1, shine2, shine3, shine4]
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
const grayGoo_ki = "../assets/images/charaImg/喜１-min.png"
const grayGoo_do = "../assets/images/charaImg/怒-min.png"
const grayGoo_ai = "../assets/images/charaImg/哀-min.png"


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
        location.href = "../STEP2/STEP2.html";
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
            location.href = "../main.html";
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