document.addEventListener("DOMContentLoaded", function() {

    fetch('/data.json')
        .then(response => response.json())
        .then(jsonData => {

            const gameImagesContainer = document.getElementById("game_images");

            jsonData.imageButtons.forEach(imageObject => {

                const imageContainer = document.createElement("div");
                imageContainer.className = "image-container";

                const imageLink = document.createElement("a");
                imageLink.href = imageObject.html_filepath;

                const image = document.createElement("img");
                image.src = imageObject.image_filepath;
                image.alt = imageObject.game_name;

                imageLink.appendChild(image);
                imageContainer.appendChild(imageLink);
                gameImagesContainer.appendChild(imageContainer);
            });
        })
        .catch(error => console.error('Error fetching JSON:', error));
});