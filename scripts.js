document.getElementById('menu-toggle').addEventListener('click', function() {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function filterProjects(category) {
    var projects = document.querySelectorAll('#projects article');
    projects.forEach(function(project) {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

function openLightbox(src) {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    var lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

document.querySelectorAll('#projects img').forEach(img => {
    img.addEventListener('click', function() {
        openLightbox(this.src);
    });
});

document.getElementById('lightbox').addEventListener('click', function() {
    closeLightbox();
});

document.getElementById('name').addEventListener('input', function() {
    var name = this.value.trim();
    this.setCustomValidity(name === '' ? 'Please enter your name.' : '');
});

document.getElementById('email').addEventListener('input', function() {
    var email = this.value.trim();
    if (email === '') {
        this.setCustomValidity('Please enter your email.');
    } else if (!validateEmail(email)) {
        this.setCustomValidity('Please enter a valid email address.');
    } else {
        this.setCustomValidity('');
    }
});

document.getElementById('message').addEventListener('input', function() {
    var message = this.value.trim();
    this.setCustomValidity(message === '' ? 'Please enter your message.' : '');
});

document.querySelector('form').addEventListener('submit', function(e) {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var isValid = true;

    if (name === '') {
        alert('Please enter your name.');
        isValid = false;
    }

    if (email === '') {
        alert('Please enter your email.');
        isValid = false;
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        isValid = false;
    }

    if (message === '') {
        alert('Please enter your message.');
        isValid = false;
    }

    if (!isValid) {
        e.preventDefault();
    }
});

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
