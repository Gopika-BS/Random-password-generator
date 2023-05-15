const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

function generate() {
    var alert = document.getElementById('alert');
    console.log(isNaN(charCount.value));
    if (charCount.value != "" && charCount.value != null && !isNaN(charCount.value) ) {
        alert.classList.remove('show');
        randomPassword('password1');
        randomPassword('password2');
        document.getElementById("charCount").value = "";
    } else if(isNaN(charCount.value)){
        alert.classList.add('show');
        alert.innerHTML= ' Please enter the Number!';
    }else {
        alert.classList.add('show');
        alert.innerHTML= ' Please enter the character count!';
    }
}

function randomPassword(x) {
    var input = document.getElementById(x);
    input.value = "";
    var charCount = document.getElementById("charCount")
    var randomChar = ""

    for (let i = 0; i < charCount.value; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length)
        randomChar += characters[randomIndex]
    }
    input.value = randomChar;
}