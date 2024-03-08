function changeQuestionText() {

    const questionText1 = document.getElementById('questionText1');
    const questionText2 = document.getElementById('questionText2');

    fetch("/PajamaJams/json/would-you-rather.json")
    .then(response => response.json())
    .then(json => setResult(json, questionText1, questionText2));

    function setResult(json, questionText) {
        var index = Math.floor(Math.random()*json.questions.length);
        questionText1.textContent = json.questions[index][0];
        questionText2.textContent = json.questions[index][1];
    }
}