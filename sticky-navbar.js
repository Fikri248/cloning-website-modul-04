let lastScrollTop = 0;
const stickyNavbar = document.querySelector('.sticky-navbar');
const purpleBackground = document.querySelector('.header-background');

// Simpan tinggi purpleBackground untuk mengurangi pembacaan DOM berulang
const purpleBottom = purpleBackground.offsetHeight;

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Cek arah scroll
    if (scrollTop > lastScrollTop) {
        // Scrolling down: Pastikan navbar selalu tampil
        if (stickyNavbar.style.display !== 'block') {
            stickyNavbar.style.display = 'block';
        }
    } else {
        // Scrolling up: Sembunyikan navbar jika masih di atas purpleBackground
        if (scrollTop < purpleBottom) {
            if (stickyNavbar.style.display !== 'none') {
                stickyNavbar.style.display = 'none';
            }
        } else {
            if (stickyNavbar.style.display !== 'block') {
                stickyNavbar.style.display = 'block';
            }
        }
    }

    // Update posisi scroll terakhir
    lastScrollTop = Math.max(scrollTop, 0);
}

// Cek saat halaman dimuat
window.addEventListener('load', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Sembunyikan navbar jika posisi scroll di atas purpleBackground
    stickyNavbar.style.display = scrollTop < purpleBottom ? 'none' : 'block';
});

// Handle scroll dengan event listener
window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');

    hamburgerMenu.addEventListener('click', function () {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
});

function toggleSubmenu(element) {
    var submenu = element.querySelector('.submenu');
    var arrow = element.querySelector('.arrow');
    
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        arrow.classList.remove('rotate-up');
    } else {
        submenu.style.display = "block";
        arrow.classList.add('rotate-up');
    }
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling
    } else {
        menu.style.display = "block";
        document.body.style.overflow = "hidden"; // Disable scrolling
    }
}

function resetSubmenu(element) {
    var submenu = element.querySelector('.submenu');
    var arrow = element.querySelector('.arrow');
    
    submenu.style.display = "none";
    arrow.classList.remove('rotate-up');
    element.classList.add('reset');
}
