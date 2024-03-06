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

function changeQuestionText() {

    const questionText = document.getElementById('questionText');

    fetch("../json/smash-or-pass.json")
    .then(response => response.json())
    .then(json => setResult(json, questionText));

    function setResult(json, questionText) {
        var index = Math.floor(Math.random()*json.questions.length);
        questionText.textContent = json.questions[index];
    }
}

function toggleAbout() {
    var aboutDropdown = document.getElementById("aboutDropdown");
    aboutDropdown.style.display = (aboutDropdown.style.display === "block") ? "none" : "block";
}
function toggleHelp() {
    var helpDropdown = document.getElementById("helpDropdown");
    helpDropdown.style.display = (helpDropdown.style.display === "block") ? "none" : "block";
}
