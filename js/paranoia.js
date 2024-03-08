function toggleQuestionVisibility() {
    const questionText = document.getElementById('questionText');
    const hideButton = document.getElementById('hideButton');
    const currentVisibility = questionText.style.visibility;
    console.log(currentVisibility);

    if (currentVisibility === 'hidden' && currentVisibility !== '') {
        questionText.style.visibility = 'visible';
        hideButton.textContent = 'Hide Question'
    } else {
        questionText.style.visibility = 'hidden';
        hideButton.textContent = 'Show Question'
    }
}

function flipCoin() {
    const coinImage = document.getElementById('coinImage');
    coinImage.src = '/PajamaJams/images/flipping-coin.gif';
    coinImage.style.visibility = 'visible';
    setTimeout(function() {
        const randomValue = Math.floor(Math.random() * 10001);
        if (randomValue % 2 == 1) {
            coinImage.src = '/PajamaJams/images/heads.png';
        } else {
            coinImage.src = '/PajamaJams/images/tails.png';
        }
    }, 1000);
}

function changeQuestionText() {

    const questionText = document.getElementById('questionText');

    fetch("/PajamaJams/json/paranoia.json")
    .then(response => response.json())
    .then(json => setResult(json, questionText));

    function setResult(json, questionText) {
        questionText.textContent = json.questions[Math.floor(Math.random()*json.questions.length)];
    }

    const hideButton = document.getElementById('hideButton');
    const currentVisibility = questionText.style.visibility;

    questionText.style.visibility = 'visible';
    hideButton.textContent = 'Hide Question'
}