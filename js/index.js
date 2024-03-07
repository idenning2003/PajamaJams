document.addEventListener("DOMContentLoaded", function() {

    fetch('../json/data.json')
        .then(response => response.json())
        .then(jsonData => {

            const gameImagesContainer = document.getElementById("game_images");
            const helpDropdown = document.getElementById("helpDropdown");

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