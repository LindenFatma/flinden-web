document.addEventListener("DOMContentLoaded", function () {

    // =====================
    // SLIDER KISMI
    // =====================
    const slides = document.querySelectorAll(".main-slide");
    const dots = document.querySelectorAll(".s-dot");

    if (slides.length > 0 && dots.length > 0) {
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove("active"));
            dots.forEach(dot => dot.classList.remove("active"));

            slides[index].classList.add("active");
            dots[index].classList.add("active");

            currentIndex = index;
        }

        dots.forEach((dot, i) => {
            dot.addEventListener("click", () => {
                showSlide(i);
            });
        });

        // Otomatik slider kapalı
        // setInterval(() => {
        //     let next = (currentIndex + 1) % slides.length;
        //     showSlide(next);
        // }, 5000);
    }

    // =====================
    // İLETİŞİM FORMU - FORMSUBMIT AJAX
    // =====================
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");

    if (contactForm && successMessage) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            fetch(contactForm.action, {
                method: "POST",
                body: new FormData(contactForm),
                headers: {
                    "Accept": "application/json"
                }
            })
            .then(response => {
                if (response.ok) {
                    contactForm.reset();
                    contactForm.style.display = "none";
                    successMessage.style.display = "block";
                } else {
                    alert("Form gönderilemedi. Lütfen tekrar deneyin.");
                }
            })
            .catch(error => {
                alert("Bir hata oluştu. Lütfen tekrar deneyin.");
            });
        });
    }

    // =====================
    // DATENSCHUTZ LINKİ
    // =====================
    const datenschutzCheckbox = document.querySelector('input[name="datenschutz"]');

    if (datenschutzCheckbox) {
        datenschutzCheckbox.addEventListener("click", () => {
            window.open("datenschutz.html", "_blank");
        });
    }

    // =====================
    // MOBİL MENÜ 
    // =====================
    const navCheck = document.getElementById("nav-check");
    const navLinks = document.querySelectorAll(".nav ul li a");

    if (navCheck && navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (window.innerWidth <= 768) {
                    navCheck.checked = false;
                }
            });
        });
    }

});
