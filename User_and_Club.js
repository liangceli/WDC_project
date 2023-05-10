let slide_page=document.getElementById("slide_page");
let more_button=document.getElementsByClassName("moreinfo").value;
//let close_button=document.getElementById("close_slide_button");
function slide(){
    slide_page.style.left="0";
}

function close_slide(){
    slide_page.style.left="-80%";
}


let edit_btn=document.getElementById("edit_personinfo");
let the_name=document.getElementById("username");
let gen=document.getElementById("gender");
let birth=document.getElementById("dob");
let des=document.getElementById("description");

function change_btn(){
    if(edit_btn.innerText=="Edit"){
        edit_btn.innerText="Done";
    }else{
        edit_btn.innerText="Edit";
    }
}

function edit_info(){
    if(edit_btn.innerText=="Done"){
        the_name.contentEditable=true;
        gen.contentEditable=true;
        birth.contentEditable=true;
        des.contentEditable=true;
    }else{
        the_name.contentEditable=false;
        gen.contentEditable=false;
        birth.contentEditable=false;
        des.contentEditable=false;
    }
}


