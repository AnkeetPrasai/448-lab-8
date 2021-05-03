function change()
        {
            var paragraph = document.getElementById("para");
            
            var r = document.getElementById("br").value;
            var g = document.getElementById("bg").value;
            var b = document.getElementById("bb").value;
            var bow = document.getElementById("wb").value;
            var rr = document.getElementById("bgr").value;
            var gg = document.getElementById("bgg").value;
            var bb = document.getElementById("bgb").value;
            paragraph.style.borderWidth = bow;
            paragraph.style.borderColor = "rgb(" + r + "," + g + "," + b + ")";
            paragraph.style.backgroundColor = "rgb(" + rr + "," + gg + "," + bb + ")";
            
        }