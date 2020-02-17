//Create a function that validates the next form, each field should be validated when it loses focus, 
//if the field does not meet the requirements a message should appear in the Errors section
function of (){
             console.log('selected');
}
function ob (){
    console.log('notslected')
}
function validation(){
    var fname=document.forms['register']['x'].value;
    var lname=document.forms['register']['y'].value;
    var comments=document.forms['register']['z'].value;
    var email=document.forms['register']['w'].value;
    var commentslenght=comments.length;
    var passw=document.forms['register']['t'].value;

    debugger
    if (fname==""){
        document.getElementsByClassName("error-list")[0].classList.remove("hidden");
        return false;
    }else if(lname==""){
        document.getElementsByClassName("error-list")[1].classList.remove("hidden");
        return false;
    }else if (comments==""){
        document.getElementsByClassName("error-list")[2].classList.remove("hidden");
        return false;
    }
    else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)==false){
        document.getElementsByClassName("error-list")[3].classList.remove("hidden");
        return false;
    }
    else if(commentslenght<=50){
        document.getElementsByClassName("error-list")[4].classList.remove("hidden");
        return false;}
    else if(passw.length==6&&HasLowercaseCharacters(pasw)&&HasUppercaseCharacters(pasw)){
        document.getElementsByClassName("error-list")[5].classList.remove("hidden");
        return false
    }

}