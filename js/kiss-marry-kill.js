function changeQuestionText() {

    const questionText1 = document.getElementById('questionText1');
    const questionText2 = document.getElementById('questionText2');
    const questionText3 = document.getElementById('questionText3');


    fetch("../json/smash-or-pass.json")
    .then(response => response.json())
    .then(json => setResult(json, questionText1, questionText2, questionText3));

    function setResult(json, questionText1, questionText2, questionText3) {
        var index = Math.floor(Math.random()*json.questions.length);
        questionText1.textContent = json.questions[index];
        index = Math.floor(Math.random()*json.questions.length);
        questionText2.textContent = json.questions[index];
        index = Math.floor(Math.random()*json.questions.length);
        questionText3.textContent = json.questions[index];
    }
}