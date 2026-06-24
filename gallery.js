// ==========================
// LIGHTBOX FUNCTIONS
// ==========================

function openImage(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeImage() {
  document.getElementById("lightbox").style.display = "none";
}

document.getElementById("lightbox").addEventListener("click", function (e) {
  if (e.target === this) {
    closeImage();
  }
});

// ==========================
// CATEGORY -> FOLDER
// ==========================

let folder = "";

if (document.title === "Sofa Collection") {
  folder = "sofa";
}

if (document.title === "Bedroom Collection") {
  folder = "bedroom";
}

if (document.title === "Kitchen Collection") {
  folder = "kitchen";
}

if (document.title === "Cupboard Collection") {
  folder = "cupboard";
}

if (document.title === "TV Unit Collection") {
  folder = "tvunit";
}

// ==========================
// AUTO LOAD IMAGES
// ==========================

const galleryContainer = document.getElementById("galleryContainer");

if (galleryContainer && folder) {

  fetch(`/api/images?folder=${folder}`)
    .then(res => res.json())
    .then(data => {

      data.forEach(photo => {

        const div = document.createElement("div");
        div.className = "col-lg-4 col-md-4 col-sm-6";

        div.innerHTML = `
          <div class="image-card">
            <img src="${photo.url}"
                 class="gallery-img"
                 onclick="openImage(this.src)">
          </div>
        `;

        galleryContainer.appendChild(div);

      });

    })
    .catch(err => console.log(err));

}