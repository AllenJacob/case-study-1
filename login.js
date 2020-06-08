function validate(usr,pwd,callback){
    
    if((usr=="admin") && (pwd==12345))
    {
        alert("Valid credentials");
        return true;
        callback();   
    }
    else{
        alert("Incorrect credentials ");
        location.href="login.html";
    }
    
}
function login(){
    let usr = document.getElementById("uname").value;
    let pwd = document.getElementById("pword").value;

   validate(usr,pwd,redirect());
}
function redirect(){
    location.href="todolist.html";
}