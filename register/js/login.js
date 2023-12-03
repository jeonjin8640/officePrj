let email = document.querySelector(".user-email");
let passwd = document.querySelector(".user-passwd");
function checkfrm(){
    if(email.value == ""){
        alert ("이메일을 입력하세요.");
        email.focus();
        return false;
    }
    if(passwd.value == ""){
        alert ("비밀번호를 입력하세요.");
        passwd.focus();
        return false;
    }
}