var truthButton = document.getElementById("truthButton");
var dareButton = document.getElementById("dareButton");
truthButton.addEventListener("click", function() {
    loadResult("truths");
});
dareButton.addEventListener("click", function() {
    loadResult("dares");
});
var result = document.getElementById("result");

function loadResult(choice) {
    fetch("/json/truth-or-dare.json")
    .then(response => response.json())
    .then(json => setResult(json));
    function setResult(json) {
        result.innerHTML = "<p>" + json[choice][Math.floor(Math.random()*json[choice].length)] + "</p>";
    }
}