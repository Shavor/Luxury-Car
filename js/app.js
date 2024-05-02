$(function() {

    let header = $('#header-section'),
        headerH = header.innerHeight(),
        banner = $('#banner-section'),
        bannerH = banner.innerHeight();

    // ================= header to scroll ============

    $(window).on('scroll resize', () => {

        headerH = header.innerHeight();
        bannerH = banner.innerHeight();

        let scrollTop = $(this).scrollTop();

        if(scrollTop >= (bannerH - headerH)) {
            header.addClass('header--dark');
        } else {
            header.removeClass('header--dark');
        }
    })

    // ================= Scroll smooth ============

    $('[data-scroll]').on('click', function (e) {
        e.preventDefault()

        let scrollEl = $(this).data('scroll'),
            scrollElTop = $(scrollEl).offset().top;

        $('html, body').animate({
            scrollTop: scrollElTop - headerH
        }, 500);
    })
})