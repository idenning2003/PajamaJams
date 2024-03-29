function changeQuestionText() {

    const questionText = document.getElementById('questionText');

    fetch("/PajamaJams/json/smash-or-pass.json")
    .then(response => response.json())
    .then(json => setResult(json, questionText));

    function setResult(json, questionText) {
        var index = Math.floor(Math.random()*json.questions.length);
        questionText.textContent = json.questions[index];
    }
}