let userName = "";

btn.addEventListener("click", e => {
    userName = document.getElementById("nameInput").value;
    userNameGet(userName)
    heavyAlert()

});

function userNameGet(userName) {
    if (userName == "") {
        alert("なまえを入力してね！")
    } else {
        document.cookie = "nameData=" + userName;
        console.log(document.cookie)

    }

};

function heavyAlert() {
    document.write('<img src="assets/images/main/error1.png" class="errors1" alt="エラーメッセージ">');
    document.write('<img src="assets/images/main/error2.png" class="errors2" alt="エラーメッセージ">');
    document.write('<img src="assets/images/main/error1.png" class="errors3" alt="エラーメッセージ">');
    document.write('<img src="assets/images/main/error2.png" class="errors4" alt="エラーメッセージ">');
    document.write('<img src="assets/images/main/error1.png" class="errors5" alt="エラーメッセージ">');
    document.write('<img src="assets/images/main/error2.png" class="errors6" alt="エラーメッセージ">');
}