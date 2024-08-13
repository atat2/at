window.onscroll = function() {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
};

document.getElementById('backToTopBtn').onclick = function() {
    window.scrollTo(0, 0)
};
