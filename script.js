// Get the modal and its elements
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");
var closeModal = document.getElementById("closeModal");

// Get all the images in the timeline
var images = document.querySelectorAll(".timeline-image");

// Loop through each image and set up the click event to open the modal
images.forEach((image) => {
    image.addEventListener("click", function () {
        // Set the modal image source to the clicked image's source
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt; // Set the caption text to the image's alt text
    });
});

// When the user clicks on the close button, close the modal
closeModal.addEventListener("click", function () {
    modal.style.display = "none";
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
