//Create a function that validates the next form, each field should be validated when it loses focus, 
//if the field does not meet the requirements a message should appear in the Errors section
function of (){
             console.log('selected');
}
var listError=document.getElementsByClassName('error-list')[0];
var mierror
function create(x,id){
    
    listError.classList.remove('hidden');
    mierror=listError.getElementsByTagName('ul')[0];
    var newli=document.createElement('li');
    newli.id=id
    var contentli=document.createTextNode(x);
    newli.appendChild(contentli);
    mierror.appendChild(newli);
}
function deleteli(id){
    debugger
    var f =mierror.querySelector(`[id='${id}']`);
    mierror.removeChild(f);

}
function obname (){
    debugger
    var fname=document.forms['register']['x'].value;
    if (fname==""){
        create("Please, insert your first name",'1')
        return false;
    }else if(!fname==""){
        deleteli(1)
        return false;
    }
    
}
function oblname (){
    var lname=document.forms['register']['y'].value;
    if(lname==""){
        create("Please, insert your last name :!!",'2');
        return false;
    }else if(!lname==""){
     deleteli(2);
     return false;
    }
    }
    
    
function obemail(){
    var email=document.forms['register']['w'].value;
     if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email))){
        create("Please, insert a valid email form",'3');
    return false;
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)==true) {
    deleteli(3);
    return false
    }
}
function obpasw(){
    var passw=document.forms['register']['t'].value;
    debugger
 if(!(passw.length==6&&HasLowercaseCharacters(passw)&&HasUppercaseCharacters(passw))){
        create("Please,insert a password with 6 characters minimum length and contains at leas 1 lowercase, 1 uppercase and 1 digit","4");
        return false
    debugger
    }else if(passw.length==6&&HasLowercaseCharacters(passw)&&HasUppercaseCharacters(passw)==true)
    deleteli(4);
    return false

    }
function obcomments(){ 
    var comments=document.forms['register']['z'].value;
    var commentslenght=comments.length;
    
    if(commentslenght<=50){
        create("Please,insert a comment with at least 50 characters","5");
            return false;
        }else if (commentslenght>=50){
            deleteli(5);
            return false;
        }
    
    }
