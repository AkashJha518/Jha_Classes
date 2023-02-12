function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="user1" && password=="123456")
    {
        window.location.assign("index.html");
        alert("login succesfully");
        return false;
    }
    else if(username=="user2" && password=="123456")
    {
        window.location.assign("index.html");
        alert("login succesfully");
        return false;
    }
    else if(username=="user3" && password=="123456")
    {
        window.location.assign("index.html");
        alert("login succesfully");
        return false;
    }
    else if(username=="user4" && password=="123456")
    {
        window.location.assign("index.html");
        alert("login succesfully");
        return false;
    }
    else if(username=="user5" && password=="123456")
    {
        window.location.assign("index.html");
        alert("login succesfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}