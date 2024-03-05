document.addEventListener("DOMContentLoaded", function() {

    fetch('../data.json')
        .then(response => response.json())
        .then(jsonData => {

            const helpDropdown = document.getElementById("helpDropdown");

            jsonData.helpContents.forEach(contentObject => {
                
                const contentHeader = document.createElement("h3");
                contentHeader.textContent = contentObject.header;

                const contentImage = document.createElement("img");
                contentImage.src = contentObject.image_filepath;
                contentImage.alt = contentObject.image_alt;
                contentImage.width = 500;

                const contentParagraph1 = document.createElement("p");
                contentParagraph1.textContent = contentObject.paragraph1;

                const contentParagraph2 = document.createElement("p");
                contentParagraph2.textContent = contentObject.paragraph2;

                helpDropdown.appendChild(contentHeader);
                helpDropdown.appendChild(contentImage);
                helpDropdown.appendChild(contentParagraph1);
                helpDropdown.appendChild(contentParagraph2);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});
function toggleQuestionVisibility() {
    const questionText = document.getElementById('questionText');
    const hideButton = document.getElementById('hideButton');
    const currentVisibility = questionText.style.visibility;

    if (currentVisibility === 'hidden' || currentVisibility === '') {
    questionText.style.visibility = 'visible';
    hideButton.textContent = 'Hide Question'

    } else {
    questionText.style.visibility = 'hidden';
    hideButton.textContent = 'Show Question'
    }
}

function flipCoin() {
    const coinImage = document.getElementById('coinImage');
    const randomValue = Math.floor(Math.random() * 10001);
    if (randomValue % 2 == 1) {
        coinImage.src = '../images/heads.png';
    } else {
        coinImage.src = '../images/tails.png';
    }

    coinImage.style.visibility = 'visible';
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

function toggleAbout() {
    var aboutDropdown = document.getElementById("aboutDropdown");
    aboutDropdown.style.display = (aboutDropdown.style.display === "block") ? "none" : "block";
}
function toggleHelp() {
    var helpDropdown = document.getElementById("helpDropdown");
    helpDropdown.style.display = (helpDropdown.style.display === "block") ? "none" : "block";
}