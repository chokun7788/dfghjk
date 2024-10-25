// Smooth scrolling for the navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetSection = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Event listener for portfolio buttons (add any custom functionality here)
document.getElementById('sipakdee-portfolio').addEventListener('click', function () {
    alert("Redirect to sipakdee's portfolio!");
});

document.getElementById('stoorat-portfolio').addEventListener('click', function () {
    alert("Redirect to stoorat's portfolio!");
});
