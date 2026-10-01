```javascript
// ============================================
// PORTFOLIO JAVASCRIPT
// ============================================


// ============================================
// 1. TYPING EFFECT
// ============================================

const roles = [
    "Information Technology Student",
    "AI & ML Enthusiast",
    "Creative Problem Solver",
    "Future IT Professional"
];

const typingText = document.querySelector(".hero h2");

let roleIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();


// ============================================
// 2. ACTIVE NAVIGATION
// ============================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// ============================================
// 3. SCROLL REVEAL ANIMATION
// ============================================

const revealElements = document.querySelectorAll(
    ".skill-box, .project-card, .interest, .journey-step, .learning-list li"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ============================================
// 4. MOBILE NAVIGATION
// ============================================

const nav = document.querySelector("nav");
const navList = document.querySelector("nav ul");

const menuButton = document.createElement("button");

menuButton.innerHTML = "☰";

menuButton.classList.add("menu-button");

menuButton.style.display = "none";
menuButton.style.background = "none";
menuButton.style.border = "none";
menuButton.style.color = "#64ffda";
menuButton.style.fontSize = "25px";
menuButton.style.cursor = "pointer";

if (nav) {

    nav.insertBefore(menuButton, navList);

}

function checkScreenSize() {

    if (window.innerWidth <= 768) {

        menuButton.style.display = "block";

        navList.style.display = "none";

    } else {

        menuButton.style.display = "none";

        navList.style.display = "flex";

    }

}

checkScreenSize();

window.addEventListener(
    "resize",
    checkScreenSize
);


menuButton.addEventListener("click", () => {

    if (navList.style.display === "none") {

        navList.style.display = "flex";

    } else {

        navList.style.display = "none";

    }

});


// ============================================
// 5. CLOSE MOBILE MENU AFTER CLICK
// ============================================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (window.innerWidth <= 768) {

            navList.style.display = "none";

        }

    });

});


// ============================================
// 6. BACK TO TOP BUTTON
// ============================================

const backToTop = document.createElement("button");

backToTop.innerHTML = "↑";

backToTop.title = "Back to top";

backToTop.style.position = "fixed";
backToTop.style.bottom = "25px";
backToTop.style.right = "25px";

backToTop.style.width = "45px";
backToTop.style.height = "45px";

backToTop.style.border = "1px solid #64ffda";
backToTop.style.borderRadius = "50%";

backToTop.style.background = "#111827";
backToTop.style.color = "#64ffda";

backToTop.style.fontSize = "20px";

backToTop.style.cursor = "pointer";

backToTop.style.display = "none";

backToTop.style.zIndex = "999";

document.body.appendChild(backToTop);


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ============================================
// 7. DYNAMIC FOOTER YEAR
// ============================================

const footerText = document.querySelector(
    "footer p:last-child"
);

if (footerText) {

    footerText.textContent =
        `© ${new Date().getFullYear()} Suji. All Rights Reserved.`;

}


// ============================================
// 8. PROJECT CARD CLICK EFFECT
// ============================================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.cursor = "pointer";

    });

});


// ============================================
// 9. CONSOLE MESSAGE
// ============================================

console.log(
    "🚀 Welcome to Suji's Portfolio!"
);

console.log(
    "💻 Keep learning. Keep building."
);
```
