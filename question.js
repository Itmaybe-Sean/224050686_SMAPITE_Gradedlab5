window.onload = function () {
    document.getElementById("blend-btn").onclick = blend;
};

function blend() {

    var surname = document.getElementById("surname").value;
    var font = document.getElementById("font").value;
    var output = document.getElementById("output");

    var inorder = document.getElementById("inorder").checked;
    var random = document.getElementById("random").checked;
    var reverse = document.getElementById("reverse").checked;

    var color = document.getElementById("color").value;
    var size = document.getElementById("size").value;

    if (size == "") {
        size = 16;
    }

    // clear previous letters
    output.innerHTML = "";

    var letters = surname.split("");

    // reverse if chosen
    if (reverse == true) {
        letters = letters.reverse();
    }

    for (var i = 0; i < letters.length; i++) {

        var span = document.createElement("span");
        span.innerHTML = letters[i];

        span.style.position = "absolute";
        span.style.fontFamily = font;
        span.style.color = color;
        span.style.fontSize = size + "px";

        if (inorder == true || reverse == true) {
            var pos = (i + 1) * 15;
            span.style.left = pos + "px";
            span.style.top = pos + "px";
        }

        if (random == true) {
            span.style.left = Math.random() * 300 + "px";
            span.style.top = Math.random() * 100 + "px";
        }

        output.appendChild(span);
    }
}