/*==============toggle icon navbar===============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==============download CV===============*/

document.getElementById('download-cv').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/15CMCtm7onqGv0Dn9HOtwF7ddZDYKLHbK/view?usp=sharing'; // Replace with actual file path
    link.download = 'Praveen_Kumar_CV.pdf'; // File name to save as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

/*==============email section===============*/
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("RXL8NXoLlJHf_C7Zm"); // Replace with your EmailJS Public Key

    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        emailjs.sendForm("service_ww249vj", "template_hmpsrtv", this)
            .then(function () {
                alert("Message Sent Successfully!");
                document.getElementById("contact-form").reset(); // Clear the form
            }, function (error) {
                alert("Failed to Send Message. Please Try Again.");
                console.error("Error:", error);
            });
    });
});



/*==============scroll section active link===============*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*=============== sticky navbar ==============*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /*============== remove toggle icon and navbar when navbar link (scroll) ===============*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 /*=============== scroll reveal ==============*/
 ScrollReveal({
    //  reset: true,
     distance:'80px',
     duration:2000,
     delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*=============== typed js ==============*/
const typed = new typed('.multiple-text',{
    strings: ['Frontend Developer','Problem Solver','Data Scientist'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});