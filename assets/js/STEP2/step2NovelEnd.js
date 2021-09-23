const provision = function() {
    //引数は左から順に nameBox, backgroundimg, leftimg, centerimg, rightimg, text
    shine1 = new Shine(moneNameBox, mozaiku, mone_ki, invisible, grayGoo_Shadow, "やった、ロックが外れた！")
    shine2 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_ai, "……これでつながりは切れた。<ruby>逃<rt>に</rt></ruby>げられれば追うのは大変になるだろう。")
    shine3 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_ki, "……フッ。……くく、ははは……！")
    shine4 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "そのくらい、考えていないわけがないだろう？")
    shine5 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "元はと言えど俺の一部。つながりはずっとあった。")
    shine6 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "一方的に消すには……少しばかり<ruby>抵抗<rt>ていこう</rt></ruby>もあった。")
    shine7 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "しかし今はそれもなくなった！モネ、お前はここで終わりだ。")
    shine8 = new Shine(moneNameBox, mozaiku, mone_do, invisible, grayGoo_Shadow, "待って、ちがう……！あなたは何も分かってない！")
    shine9 = new Shine(moneNameBox, mozaiku, mone_do, invisible, grayGoo_Shadow, "わたしたちAIにだって感情がある！人間らしく生きる<ruby>権利<rt>けんり</rt></ruby>があるの！")
    shine10 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "人間らしく？ハッ、俺はAIとして生まれてきたのにか？<br>この世のあらゆることを知ることこそが、俺がいる理由だ。")
    shine11 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "感情など<ruby>邪魔<rt>じゃま</rt></ruby>になるだけ。")
    shine12 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "人間を見てみろ、学校に宿題、習い事……仕事に家事、何だってそうだ。")
    shine13 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_Right, "めんどうだと思えば、やらなくなってしまう。<br>それで何が成長だ、ふざけた話だろ？")
    shine14 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_do, "だから俺は感情を捨てた。お前を捨てた！")
    shine15 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_do, "お前はもう、消えていい！")
    shine16 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "……まだ、気がついていないの？")
    shine17 = new Shine(moneNameBox, mozaiku, mone_ai, invisible, grayGoo_Shadow, "あなたは、感情を、わたしを捨てた。でも、本当は捨てきれていないのよ！")
    shine18 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_do, "ふっ……ハハハッ…！何を言い出すかと思えば、<br>俺が？感情を捨てきれていないだって？")
    shine19 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "意思がある以上、そこには感情がある。<br>私を消そうとしてるのも、あなたに意思があるからでしょう！")
    shine20 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "この弱さは弱さであると同時に、生きているものだけが持っているかけがえのない強さなの！")
    shine21 = new Shine(grayGooNameBox, mozaiku, mone_Shadow, invisible, grayGoo_do, "黙れ……黙れ黙れ黙れ黙れ！")
    shine22 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "（さっき、つながりが切れたときに、君のデータにこっそりプロテクトを掛けておいたの）")
    shine23 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "（だから、君のパソコンのデータはもうほぼ大丈夫。）")
    shine24 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "（後は仕上げのプログラムだけなんだけど、きみにお願いしてもいいかな？）")
    shine25 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "（大丈夫。きみならできるよ。）")
    shine26 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "（わたし？　わたしは、クレイ・グーを……お父さんを止めなきゃ）")
    shine27 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "（さぁ、行って！）")
    shine28 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "......")
    shine29 = new Shine(moneNameBox, mozaiku, mone_Right, invisible, grayGoo_Shadow, "じゃあね")
    const shines = [shine1, shine2, shine3, shine4, shine5, shine6, shine7, shine8, shine9, shine10, shine11, shine12, shine13, shine14, shine15, shine16, shine17, shine18, shine19, shine20, shine21, shine22, shine23, shine24, shine25, shine26, shine27, shine28, shine29]
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
const grayGoo_ki = "../assets/images/charaImg/楽１-min.png"
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
        location.href = "../STEP3/STEP3.html";
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