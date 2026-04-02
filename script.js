document.addEventListener("DOMContentLoaded", function () {

    // =====================
    // SLIDER KISMI
    // =====================
    const slides = document.querySelectorAll(".main-slide");
    const dots = document.querySelectorAll(".s-dot");

    if (slides.length === 0 || dots.length === 0) {
        console.warn("Slider elemanları bulunamadı.");
        return;
    }

    let currentIndex = 0;

    function showSlide(index) {
        // Tüm slide ve dot'lardan "active" sınıfını kaldır
        slides.forEach(slide => slide.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        // Yeni slide ve dot'u aktif yap
        slides[index].classList.add("active");
        dots[index].classList.add("active");

        currentIndex = index;
    }

    // Dot'lara tıklama eventi
    dots.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            showSlide(i);
        });
    });

    // Otomatik slider kapatıldı (istersen açabilirsin)
    // setInterval(() => {
    //     let next = (currentIndex + 1) % slides.length;
    //     showSlide(next);
    // }, 5000);

    // =====================
    // İLETİŞİM FORMU - BAŞARI MESAJI
    // =====================
    const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

if (contactForm && successMessage) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        fetch(contactForm.action, {
            method: 'POST',
            body: new FormData(contactForm),
            headers: {
                'Accept': 'application/json'
            }
        }).then(() => {
            contactForm.style.display = 'none';
            successMessage.style.display = 'block';
        }).catch(() => {
            alert("Bir hata oluştu, lütfen tekrar deneyin.");
        });
    });
}
document.querySelector('input[name="datenschutz"]').addEventListener('click', () => {
    window.open('datenschutz.html', '_blank');
});
});