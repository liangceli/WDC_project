function signUpSuccess() {
    let email2=document.getElementById("emailInput2").value;
    let username2=document.getElementById("usernameInput2").value;
    let gender2=document.getElementById("fontSize1").value;
    let dob2=document.getElementById("fontSize2").value;
    let password2=document.getElementById("passwordInput2").value;
    let password3=document.getElementById("passwordInput3").value;
    let bio2=document.getElementById("bioInput1").value;
    if (email2=="" || username2=="" || dob2=="" || password2=="" || password3=="" || bio2=="") {
        document.getElementById("errorM2").innerText="Please make sure you completed all information above!";
    }
    if (password2!=password3) {
        document.getElementById("errorM2").innerText="Please make sure you enter the same password twice!"
    }
    if (password2==password3 && email2!="" && username2!="" && dob2!="" && bio2!="" && password2!="" && password3!="") {
        window.location.href="https://www.baidu.com/";
    }
}