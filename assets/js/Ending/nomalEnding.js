const provision = function() {
        //引数は左から順に nameBox, backgroundimg, leftimg, centerimg, rightimg, text
        shine1 = new Shine(nameBox, blackback, invisible, invisible, invisible, "グレイ・グーはどこかへ消えて行きました。")
        shine2 = new Shine(nameBox, blackback, invisible, invisible, invisible, "人知れずある1人の少女が消えた数日後、<br>あなたのPCに一通のメールが届きました。")
        shine3 = new Shine(nameBox, blackback, invisible, invisible, invisible, "差出人は消滅したはずのモネ、そして内容はこうです。")
        shine4 = new Shine(moneNameBox, blackback, invisible, mone_Shadow, invisible, "消える前にこっそりバックアップを残しておいたんだ <br>だからきみのデータは無事だよ")
        shine5 = new Shine(moneNameBox, blackback, invisible, mone_Shadow, invisible, "わたしも大丈夫")
        shine6 = new Shine(nameBox, blackback, invisible, invisible, invisible, "その文章はまるで——他人事のようなものでした。")

        const shines = [shine1, shine2, shine3, shine4, shine5, shine6]
        return shines
    }
    // , shine10, shine11, shine12, shine13, shine14, shine15, shine16, shine17, shine18, shine19, shine20, shine21, shine22, shine23, shine24, shine25, shine26

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
const mone_Shadow = "../assets/images/charaImg/12-min.png"
const mone_ki = "../assets/images/charaImg/31-min.png"
const mone_do = "../assets/images/charaImg/61-min.png"
const mone_ai = "../assets/images/charaImg/71-min.png"
const mone_sinken = "../assets/images/charaImg/51-min.png"
const mone_zensin = "../assets/images/charaImg/モネ＿標準_明.png"


//クレイグー差分
const grayGoo_Right = "../assets/images/charaImg/11-min.png"
const grayGoo_Shadow = "../assets/images/charaImg/グレイグー_通常_暗.png"
const grayGoo_ki = "../assets/images/charaImg/61-1-min.png"
const grayGoo_sinken = "../assets/images/charaImg/41-1-min.png"
const grayGoo_do = "../assets/images/charaImg/31-1-min.png"
const grayGoo_ai = "../assets/images/charaImg/21-min.png"


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

function main() {
    shineexecution(shines[0]);
}

function clickExecution() {
    if (count > shines.length) {
        //飛ばしたいリンクへ
        location.href = "../STEP3/STEP3.html";
    }
    //8の部分をshineの数にしてください
    count++
    console.log(count)
    shineexecution(shines[count]);
}

const shines = provision();

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
            location.href = "../STEP3/STEP3.html";
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