function validateForm(){
    var name = document.getElementById("inputEmail4").value;
    var email = document.getElementById("inputPassword4").value;
    var subject = document.getElementById("inputAddress").value;
    var textarea = document.getElementById("textarea").value;
    if(name == ""){
        alert("Name is required!");
        return false;
    }
    if(email == ""){
        alert("Email is required!");
        return false;
    }
    if(subject == ""){
        alert("Subject is required!");
        return false;
    }
    if(textarea == ""){
        alert("Message is required!");
        return false;
    }

    alert("Your message has been submitted. Thank You! ");
}

$('#OpenImgUpload').click(function(){ $('#imgupload').trigger('click'); });