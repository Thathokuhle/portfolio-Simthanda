window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var aside_reveals = document.querySelectorAll('.aside-container');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoints = 150;
        if (revealtop < windowHeight) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {

    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 100) {
            toTop.classList.add("open");
        } else {
            toTop.classList.remove("open");
        }
    });

});

document.addEventListener("DOMContentLoaded", function() {
    let container_scroll = document.querySelector('.contianer-picture');
    let bckbtn = document.getElementById("backbtn");
    let nxtbtn = document.getElementById("nextbtn");

    // container_scroll.addEventListener("wheel", (evt) => {
    // evt.preventDefault();
    // container_scroll.scrollLeft += evt.deltaY;
    // });

    nxtbtn.addEventListener("click", () => {
        container_scroll.style.scrollBehavior = "smooth";
        container_scroll.scrollLeft += 1100;
    });

    bckbtn.addEventListener("click", () => {
        container_scroll.style.scrollBehavior = "smooth";
        container_scroll.scrollLeft -= 1100;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var toggle = document.getElementById("scrollBtn");

    toggle.addEventListener("click", function() {
        window.location = 'Home.html';
        body.style.scrollBehavior = "smooth";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
    });
});


document.addEventListener("DOMContentLoaded", function() {
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});