var typed = new Typed('#element', {
    strings: ['LARRY DANIELS', 'DEVOLOPER' , "DESIGNER"],
    typeSpeed: 100,
    backspeed: 100,
    loop: true
  });


  $(document).ready(function () {
    $(window).scroll(function () {
        // Get the current scroll position
        var scrollPos = $(document).scrollTop();

        // Loop through each section to check if it's in view
        $('.navbar-nav .nav-link').each(function () {
            var currLink = $(this);
            var section = $(currLink.attr("href"));

            // Check if the section is in the viewable area
            if (section.position().top <= scrollPos + 100 && section.position().top + section.height() > scrollPos + 100) {
                $('.navbar-nav .nav-link').removeClass("active");
                currLink.addClass("active");
            } else {
                currLink.removeClass("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Function to update active link based on scroll position
    function updateActiveLink() {
        let currentSection = "";
        
        // Loop through each section to check if it's in view
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        // Update the active link class in the navbar
        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    // Attach the function to the scroll event
    window.addEventListener("scroll", updateActiveLink);
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbar = document.querySelector(".navbar");
    const homeSection = document.getElementById("home"); // Reference to the home section

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            // Check if the section is in the viewport
            if (window.scrollY >= sectionTop - sectionHeight / 3 &&
                window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });

        // Change navbar background based on scroll position
        if (window.scrollY > homeSection.clientHeight) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    }

    window.addEventListener("scroll", updateActiveLink);
});
