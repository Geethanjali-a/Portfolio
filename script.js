document.addEventListener("DOMContentLoaded",function(){
    const menuToggle=document.querySelector('.menu-toggle');
    const navMenu=document.querySelector('nav ul');

    menuToggle.addEventListener('click',function(){
        navMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    document.querySelectorAll('nav a').forEach(link=>{
        link.addEventListener('click',function(){
            navMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    const texts=[
        "Frontend Developer",
        "UI/UX Designer",
        "Web Development",
    ];
    let textIndex=0;
    let charIndex=0;
    let isDeleting=false;
    let typingDelay=100;

    function type(){
        const currentText=texts[textIndex];
        const typingElement=document.querySelector(".typing-text");

        if(isDeleting){
            typingElement.textContent=currentText.substring(0,charIndex-1);
            charIndex--;
            typingDelay=50;
        }
        else{
            typingElement.textContent=currentText.substring(0,charIndex+1);
            charIndex++;
            typingDelay=100;
        }
        if(!isDeleting && charIndex===currentText.length){
            isDeleting=true;
            typingDelay=1500;

        }
        else if(isDeleting&&charIndex===0){
             isDeleting=false;
             textIndex=(textIndex+1)%texts.length;
             typingDelay=500;
        }
        setTimeout(type,typingDelay);
    }
    setTimeout(type,1000);

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
        anchor.addEventListener('click',function(e){
            e.preventDefault();

            const targetId=this.getAttribute('href');
            if(targetId==='#')return;

            const targetElement=document.querySelector(targetId);
            if(targetElement){
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior:'smooth'
                });
            };
        });
    });
    });

    // ===== Scroll Reveal Animation =====
const reveals = document.querySelectorAll(
    "#about, #projects, #skills, #contact"
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

reveals.forEach(sec => sec.classList.add("reveal"));
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
// ===== Skill Hover Effect =====
document.querySelectorAll(".skills-container span").forEach(skill => {
    skill.addEventListener("mouseenter", () => {
        skill.style.transform = "scale(1.1)";
    });

    skill.addEventListener("mouseleave", () => {
        skill.style.transform = "scale(1)";
    });
});


// ===== Contact Form Validation =====
const contactForm = document.querySelector(".contact-section form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = this.querySelector("input[type='text']").value.trim();
        const email = this.querySelector("input[type='email']").value.trim();
        const message = this.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields!");
            return;
        }

        alert("Message sent successfully 🚀");
        this.reset();
    });
}


