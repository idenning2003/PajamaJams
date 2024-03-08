function changePromptText() {

    const promptText = document.getElementById('promptText');

    fetch("/PajamaJams/json/storytime.json")
    .then(response => response.json())
    .then(json => setResult(json, promptText));

    function setResult(json, promptText) {
        var index = Math.floor(Math.random()*json.prompts.length);
        promptText.textContent = json.prompts[index];
    }
}