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
    coinImage.src = '../images/flipping-coin.gif';
    coinImage.style.visibility = 'visible';
    setTimeout(function() {
        const randomValue = Math.floor(Math.random() * 10001);
        if (randomValue % 2 == 1) {
            coinImage.src = '../images/heads.png';
        } else {
            coinImage.src = '../images/tails.png';
        }
    }, 1000);
}

function changeQuestionText() {

    const questionText = document.getElementById('questionText');

    fetch("../json/paranoia.json")
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