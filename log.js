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
//ネームボックス一覧
const moneNameBox = "../assets/images/itemImg/textBoxmone.png"
const grayGooNameBox = "../assets/images/itemImg/サイバーフレーム_グ.png"

//よく使う背景一覧
const blueback = "../assets/images/backroundImg/blue21-scaled.jpg"
const siverback = "../assets/images/backroundImg/siverimg.jpeg"

//よく使うキャラクター一覧
const july = "../assets/images/charaImg/july_nikkori.png"
const megane = "../assets/images/charaImg/メガネ.png"

const mone_Right = "../assets/images/charaImg/モネ＿標準_明.png"
const mone_Shadow = "../assets/images/charaImg/モネ＿標準_暗.png"

const grayGoo_Right = "../assets/images/charaImg/グレイグー_通常_明.png"
const grayGoo_Shadow = "../assets/images/charaImg/グレイグー_通常_暗.png"

//よく使うアイテム一覧
const invisible = "../assets/images/itemImg/null.png"
const bag = "../assets/images/itemImg/kaban_kirei.png"

const provision = function() {
    //引数は左から順に textBoximg, backgroundimg, leftimg, centerimg, rightimg, text
    shine1 = new Shine(grayGooNameBox, blueback, mone_Right, bag, grayGoo_Shadow, "The Egg  <ruby>紫陽花<rt>あじさい</rt></ruby> 君は家に帰っている途中で死んだ。交通事故だった。")
    shine2 = new Shine(grayGooNameBox, siverback, invisible, mone_Shadow, invisible, "ごく普通の交通事故だったが、致命的だった。")
    shine3 = new Shine(moneNameBox, blueback, invisible, mone_Shadow, mone_Right, "君は妻と子供二人を残した。死ぬときに痛みはなかった。")
    shine4 = new Shine(moneNameBox, blueback, invisible, bag, bag, "君の体はもうボロボロで、実際この方が良かった。")
    shine5 = new Shine(moneNameBox, blueback, invisible, bag, bag, "そして、君は私と出会った。")
    shine6 = new Shine(moneNameBox, blueback, invisible, bag, bag, "hoge")
    shine7 = new Shine(moneNameBox, blueback, invisible, bag, bag, "hoge")
    shine8 = new Shine(moneNameBox, blueback, invisible, bag, bag, "hoge")
    const shines = [shine1, shine2, shine3, shine4, shine5, shine6, shine7, shine8]
    return shines
}
var shines = provision()

var count = 0;


var logWrite = function() {
    var speakerName = "";
    const speaker = shines.textBoximg;
    if (speaker == moneNameBox) {
        speakerName = "モネ"
    } else if (speaker == grayGooNameBox) {
        speakerName = "クレイグー"
    }
    var speakText = document.getElementsByClassName("speakText")[0].innerHTML = shines[count].text;
    var add_contents = '<tr><td class="speakerName">' + speakerName + '</td><td class="speakText">' + speakText + '</td></tr>'
    const elem = document.getElementById("log");
    elem.insertAdjacentHTML("beforeend", add_contents)
    count++
};

for (let count = 0; count < 4; count++) {
    logWrite();
};