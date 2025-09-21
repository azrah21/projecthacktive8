// Scroll halus ke bagian tertentu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });

        document.querySelectorAll("nav a").forEach(a => a.classList.remove("active"));
        this.classList.add("active");
    });
});

// Animasi fade-in saat scroll
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("active");
            observer.unobserve(entry.target); //supaya animasi hanya sekali
        }
    });
}, {threshold: 0.2});

reveals.forEach(reveal => observer.observe(reveal));

// Form submit sederhana
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Terima kasih, pesan Anda telah terkirim!");
    this.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("menu-toggle");
    toggleBtn.innerHTML = "☰";

    const header = document.querySelector("header");
    const nav = document.querySelector("nav");

    // Sisipkan tombol sebelum navigasi
    header.insertBefore(toggleBtn, nav);

    toggleBtn.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
});