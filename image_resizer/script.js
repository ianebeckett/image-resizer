//initialize image from input
const imageInput = document.querySelector("#imageInput");

//global variable to store uploaded image
var uploadedImage = "";

//event listener to display image when image uploaded by user
imageInput.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploadedImage = reader.result;
        document.querySelector("#displayImage").style.backgroundImage = 'url(${uploadedImage})'
    });
    reader.readAsDataURL(this.files[0]);
})