
strcmp = function(){
    var p1 = document.getElementById("pass1").value;
    var p2 = document.getElementById("pass2").value;
    var print;

    if (p1.length < 8 ){
        print = "Passwords too short, Please use atleast 8 characters";
    }
    else{
        if (p1.length == p2.length){
            print = "Passwords Match";
        }
        
        if (p1.length != p2.length){
            print = "Passwords Do not Match";
        }}
document.getElementById("print").innerHTML = print;
}

var index = 0;
var slideshow = document.getElementById("doggies");
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg","6.jpg"];
previous = function(){
    index++;
    doggies.setAttribute("src", images[index]);
    if (index == 5)
    index =0;
}

next = function(){
    index++;
    doggies.setAttribute("src", images[index]);
    if (index == 5)
    index =0;
}