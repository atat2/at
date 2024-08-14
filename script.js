$(window).on('scroll', function() {
    if($(document).scrollTop() > 100) {
        $("#backToTopBtn").css('display', 'block');
    } else {
        $("#backToTopBtn").css('display', 'none');
    }
});

$("#backToTopBtn").click(function() {
    window.scrollTo(0, 0)
});

$(document).ready(function() {
    const starCount = 100;
    for ( let i = 0; i < starCount; i++) {
        const star = $('<div class="star"></div>');
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;

        star.css({
            top: posY + 'vh',
            left: posX + 'vw',
            animationDelay: delay + 's',
            animationDuration: (2 + Math.random() *2) + 's'
        });
    
        $('.stars').append(star);
    }

    $('#nightModeBtn').click(function(){
        $('body').toggleClass('night-mode');
        if($('body').hasClass('night-mode')) {
            $('.stars').show();
        } else {
            $('.stars').hide();
        }
    });
});
