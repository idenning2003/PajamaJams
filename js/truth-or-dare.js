function loadResult(choice) {
    const result = document.getElementById("result");
    fetch("/json/truth-or-dare.json")
    .then(response => response.json())
    .then(json => setResult(json));
    function setResult(json) {
        result.innerHTML = "<p>" + json[choice][Math.floor(Math.random()*json[choice].length)] + "</p>";
    }
}