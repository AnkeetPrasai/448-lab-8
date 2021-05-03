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