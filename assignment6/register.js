window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {

    var inputs = document.forms["myForm"].getElementsByTagName('input');
    var errormsg = document.getElementById("errormsg");
    errormsg.innerText = "";
    var checkbox = false;
    var valid = true;
    for (index = 0; index < inputs.length; ++index) {
        console.log(inputs[index])
        console.log(inputs[index].value)
        if(inputs[index].type == "radio")
        {
            checkbox = inputs[index].checked || checkbox;
            console.log(checkbox);
        }
        else if(inputs[index].value == "")
        {
            valid = false;
            console.log(inputs[index].name + " Required")
            errormsg.innerText += " " + inputs[index].name +" missing , ";
        }
        /*if(inputs[index].type == "text")
        {
            console.log("text")
        }*/
    }
    if(!checkbox)
    {
        errormsg.innerText += "Gender isn't checked , ";
        valid = false;
    }
    var passwordRegis = document.forms["myForm"]["password"].value;
    var passwordRegisCheck = document.forms["myForm"]["passwordCheck"].value;
    if(passwordRegis != passwordRegisCheck)
    {
        errormsg.innerText += " Retype password mismatch";
        valid = false;
    }
    if(!valid){
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}