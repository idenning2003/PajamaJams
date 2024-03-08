document.addEventListener("DOMContentLoaded", function() {

    fetch('../data.json')
        .then(response => response.json())
        .then(jsonData => {

            const hamburgerDropdown = document.getElementById("hamburgerDropdown");

            jsonData.imageButtons.forEach(contentObject => {

                const container = document.createElement("div");
                container.className = "image-container";
                container.width = 150;

                const gameHeader = document.createElement("b");
                gameHeader.textContent = contentObject.game_name;

                const gameDescription = document.createElement("small");
                gameDescription.textContent = contentObject.game_description;

                const creatorName = document.createElement("i");
                creatorName.textContent = contentObject.game_creator;
                const creatorTag = document.createElement("b")
                creatorTag.textContent = "Creator: ";
                const gameCreator = document.createElement("small");
                gameCreator.appendChild(creatorTag);
                gameCreator.appendChild(creatorName);

                const contentImage = document.createElement("img");
                contentImage.src = contentObject.image_filepath;
                contentImage.alt = contentObject.game_name;
                contentImage.width = 150;
                const imageLink = document.createElement("a");
                imageLink.href = contentObject.html_filepath;
                imageLink.appendChild(contentImage);

                container.appendChild(gameHeader);
                container.appendChild(imageLink);
                container.appendChild(gameDescription);
                container.appendChild(document.createElement("br"));
                container.appendChild(gameCreator);
                hamburgerDropdown.appendChild(container);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});

function toggleAbout() {
    var aboutDropdown = document.getElementById("aboutDropdown");
    aboutDropdown.style.display = (aboutDropdown.style.display === "block") ? "none" : "block";
}
function toggleHamburger() {
    var hamburgerDropdown = document.getElementById("hamburgerDropdown");
    hamburgerDropdown.style.display = (hamburgerDropdown.style.display === "flex") ? "none" : "flex";
}