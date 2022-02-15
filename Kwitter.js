function addUser()
{
    usr_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name" , usr_name);
    window.location = "kwitter_room.html"

}