let email = document.querySelector(".user-email");
let passwd = document.querySelector(".user-passwd");
let repasswd = document.querySelector(".user-re-passwd");
let username = document.querySelector(".user-name");
let gender = document.querySelector("input[name=gender]");
let dept = document.querySelector(".dept");
let position = document.querySelector(".position");

function checkfrm() {
  if(email.value == "") {
    alert("이메일을 입력해 주세요.");
    email.focus();
    return false;
  }
  if(passwd.value == "") {
    alert("비밀번호를 입력해 주세요.");
    passwd.focus();
    return false;
  }
  if(repasswd.value == "") {
    alert("비밀번호 재확인을 입력해 주세요.");
    repasswd.focus();
    return false;
  }
  if(passwd.value != repasswd.value) {
    alert("비밀번호가 일치하지 않습니다.\n다시 입력해 주세요.");
    passwd.value = "";
    repasswd.value = "";
    passwd.focus();
    return false;
  }
  if(username.value == "") {
    alert("이름을 입력해 주세요.");
    username.focus();
    return false;
  }
  if(!gender.checked) {
    alert("성별을 선택해 주세요.");
    gender.focus();
    return false;
  }
  if(dept.value == "") {
    alert("부서를 선택해 주세요.");
    dept.focus();
    return false;
  }
  if(position.value == "") {
    alert("직책를 선택해 주세요.");
    position.focus();
    return false;
  }
}