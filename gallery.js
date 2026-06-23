// ==========================
// LIGHTBOX FUNCTIONS
// ==========================

function openImage(src){
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = src;
}

function closeImage(){
    document.getElementById("lightbox").style.display = "none";
}

document.getElementById("lightbox").addEventListener("click", function(e){
    if(e.target === this){
        closeImage();
    }
});

// ==========================
// IMAGE ARRAYS
// ==========================

let photos = [];

if(document.title === "Sofa Collection"){
    photos = [
        "sofa1.jpg",
        "sofa2.jpg",
        "sofa3.jpg",
        "sofa4.jpg",
        "sofa5.jpg",
        "sofa6.jpg"
    ];
}

if(document.title === "Bedroom Collection"){
    photos = [
        "bedroom.jpg",
        "bedroom2.jpg",
        "bedroom3.jpg",
        "bedroom4.jpg",
        "bedroom5.jpg",
        "bedroom6.jpg"
    ];
}

if(document.title === "Kitchen Collection"){
    photos = [
        "kitchen1.jpg",
        "kitchen2.jpg",
        "kitchen3.jpg",
        "kitchen4.jpg",
        "kitchen5.jpg",
        "kitchen6.jpg"
    ];
}

if(document.title === "Cupboard Collection"){
    photos = [
        "cupboard1.jpg",
        "cupboard2.jpg",
        "cupboard3.jpg",
        "cupboard4.jpg",
        "cupboard5.jpg",
        "cupboard6.jpg"
    ];
}

if(document.title === "TV Unit Collection"){
    photos = [
        "tvunit1.jpg",
        "tvunit2.jpg",
        "tvunit3.jpg",
        "tvunit4.jpg",
        "tvunit5.jpg",
        "tvunit6.jpg"
    ];
}



// ==========================
// AUTO LOAD IMAGES
// ==========================

const galleryContainer = document.getElementById("galleryContainer");

if(galleryContainer){

    photos.forEach(photo => {

        const img = new Image();
        img.src = `images/${photo}`;

        img.onload = function(){

            const div = document.createElement("div");
            div.className = "col-lg-4 col-md-4 col-sm-6";

div.innerHTML = `
<div class="image-card">
    <img src="${img.src}"
         class="gallery-img"
         onclick="openImage(this.src)">
</div>
`;

            galleryContainer.appendChild(div);
        };

    });

}   