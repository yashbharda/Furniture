// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".custom-nav");

    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = "rgba(0,0,0,0.95)";
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.5)";
        } else {
            navbar.style.background = "rgba(0,0,0,0.7)";
            navbar.style.boxShadow = "none";
        }
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Counter Animation
const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        const targetText = counter.innerText;
        const target = parseInt(targetText);

        let count = 0;
        const speed = target / 100;

        function updateCounter() {

            if (count < target) {

                count += speed;

                counter.innerText =
                    Math.ceil(count) +
                    targetText.replace(/[0-9]/g, "");

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = targetText;
            }
        }

        updateCounter();
    });
}

// About Observer
const aboutSection = document.querySelector("#about");

if (aboutSection) {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();
                observer.unobserve(entry.target);
            }
        });

    }, {
        threshold: 0.5
    });

    observer.observe(aboutSection);
}

// Fade Animation
const fadeObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(
    ".service-card, .gallery-img"
).forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";

    fadeObserver.observe(el);
});

// Footer Year
const footerYear = document.getElementById("year");

if (footerYear) {
    footerYear.textContent =
        new Date().getFullYear();
}

// Lightbox
function openImage(src) {

    const lightbox =
        document.getElementById("lightbox");

    const image =
        document.getElementById("lightbox-img");

    if (lightbox && image) {

        lightbox.style.display = "flex";
        image.src = src;
    }
}

function closeImage() {

    const lightbox =
        document.getElementById("lightbox");

    if (lightbox) {
        lightbox.style.display = "none";
    }
}

// Close Lightbox on Background Click
const lightbox =
    document.getElementById("lightbox");

if (lightbox) {

    lightbox.addEventListener("click", e => {

        if (e.target === lightbox) {
            closeImage();
        }
    });
}

// =============================
// Auto Sliding Gallery
// =============================

const gallery =
    document.querySelector(".gallery-scroll");

if (gallery) {

    setInterval(() => {

        gallery.scrollBy({
            left: 370,
            behavior: "smooth"
        });

        if (
            gallery.scrollLeft +
            gallery.clientWidth >=
            gallery.scrollWidth - 10
        ) {

            gallery.scrollTo({
                left: 0,
                behavior: "smooth"
            });
        }

    }, 3000);
}
