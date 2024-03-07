document.addEventListener("DOMContentLoaded", function() {

    fetch('../json/data.json')
        .then(response => response.json())
        .then(jsonData => {

            const hamburgerDropdown = document.getElementById("hamburgerDropdown");

            jsonData.imageButtons.forEach(contentObject => {

                const imageContainer = document.createElement("div");

                const imageLink = document.createElement("a");
                imageLink.href = contentObject.html_filepath;

                const contentImage = document.createElement("img");
                contentImage.src = contentObject.image_filepath;
                contentImage.alt = contentObject.game_name;
                contentImage.width = 150;

                imageLink.appendChild(contentImage);
                imageContainer.appendChild(imageLink);
                hamburgerDropdown.appendChild(imageContainer);
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
    hamburgerDropdown.style.display = (hamburgerDropdown.style.display === "block") ? "none" : "block";
}