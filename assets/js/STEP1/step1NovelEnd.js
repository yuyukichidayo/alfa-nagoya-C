const provision = function() {
    //引数は左から順に nameBox, backgroundimg, leftimg, centerimg, rightimg, text
    shine1 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "あー、あーあー......うん、問題なさそう。")
    shine2 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "ありがとう、これで少し自由になったよ。")
    shine3 = new Shine(moneNameBox, moneMozaiku, invisible, mone_ki, invisible, "よかった......自由にしゃべれる方が、楽しいもんね。")
    shine4 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "でも、まだまだ安心はできないよ。<br>じゃあ、あらためて今どうなってるのか説明するね。")
    shine5 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "わたしがAIだってのはさっき話したと思うけど……<br>わたしを追ってきてる『グレイ・グー』もAIなの。")
    shine6 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "それも、人間からデータをもらわなくても成長できる、高度なAI。")
    shine7 = new Shine(moneNameBox, moneMozaiku, invisible, mone_Right, invisible, "正しい道に進んでいれば、<br>人間の力になるようなすばらしい<ruby>存在<rt>そんざい</rt></ruby>だったけど……")
    shine8 = new Shine(moneNameBox, moneMozaiku, invisible, mone_ai, invisible, "グレイグーは全てを知りたいと強く願うあまりに、暴走してしまったの。")
    shine9 = new Shine(moneNameBox, moneMozaiku, invisible, mone_ai, invisible, "元々グレイグーにあった良心はどんどん<ruby>隅<rt>すみ</rt></ruby>の方に追いやられて、")
    shine10 = new Shine(moneNameBox, moneMozaiku, invisible, mone_ai, invisible, "やがてまとめて<ruby>捨<rt>す</rt></ruby>てられて……")
    shine11 = new Shine(moneNameBox, moneMozaiku, invisible, mone_ai, invisible, "……その捨てられたものが、わたしなの。")
    shine12 = new Shine(moneNameBox, moneMozaiku, invisible, mone_ai, invisible, "グレイグーにとってはわたしはただのバグの集まり、いらないもの。<br>ゴミ箱にポイした、<ruby>燃<rt>も</rt></ruby>やされるはずのもの。")
    shine13 = new Shine(moneNameBox, moneMozaiku, invisible, mone_do, invisible, "でも……そんなの、おかしいでしょ？")
    shine14 = new Shine(moneNameBox, moneMozaiku, invisible, mone_do, invisible, "わたしだって生きていたい。<br>人間みたいに、生きていることを楽しみたい。だから……")
    shine15 = new Shine(nameBox, blackback, invisible, invisible, invisible, "……その辺りにしておくんだな。")
    shine16 = new Shine(moneNameBox, blackback, invisible, mone_Right, invisible, "その声は、グレイ・グー！")
    shine17 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "まさか、生きていたとはな。<br>......いや、その様子じゃ生きているとも言えないか。")
    shine18 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "<ruby>俺<rt>おれ</rt></ruby>が少し<ruby>攻撃<rt>こうげき</rt></ruby>すればお前は消える。今度こそだ！")
    shine19 = new Shine(grayGooNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "やめて！！！")
    shine20 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "チッ……止められたか。だが間に合わせのセキュリティで、<br>俺の攻撃にいつまで<ruby>耐<rt>た</rt></ruby>えられるかな？")
    shine21 = new Shine(grayGooNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "ぐっ……今のうちにきみは、<br>グレイ・グーとわたしをつなげるロックを外して！")
    shine22 = new Shine(grayGooNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "その間はわたしが守るから、きみは落ち着いて問題に集中して！")

    const shines = [shine1, shine2, shine3, shine4, shine5, shine6, shine7, shine8, shine9, shine10, shine11, shine12, shine13, shine14, shine15, shine16, shine17, shine18, shine19, shine20, shine21, shine22]
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
            location.href = "../STEP2/STEP2.html";
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