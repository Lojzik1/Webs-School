function sendCommands() {
    let commands = document.getElementById("commands").value;

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "script.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById("grid").innerHTML = xhr.responseText;
        }
    };

    xhr.send("commands=" + encodeURIComponent(commands));
}
