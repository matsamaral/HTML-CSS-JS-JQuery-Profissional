$(document).ready(function(){
    //Efeito fumaça
    $('header, .info').ripples({
        dropRadius: 25,
        perturbance: 0.2
    });

    //Botão Toggler
    $('.navbar-toggler').click(function(){
        $('.navbar-toggler').toggleClass('change')
    });


    //Magnific popup para quando clicar na imagem
    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    //Carrossel de imagens do cardápio
    $('.carrossel').slick({
        center: true,
        mobileFirst: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }
        ]

    });

    //Carrossel de imagens da churrascaria
    $('.fotos-churrascaria').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 700,
        infinite: true,
        speed: 500,
        arrows: false,
        fade: true,
        cssEase: 'linear'
        
    });


    //Fixar o menu no topp
    $(window).scroll(function() {
        let position = $(this).scrollTop();
        if(position >= 900) {
            $('.navbar').addClass('navbar-background');
            $('.navbar').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('navbar-background');
            $('.navbar').removeClass('fixed-top');
        }
    });

    //Botão voltar ao topo
    $(window).scroll(function() {
        let position = $(this).scrollTop();

        if (position >= 900) {
            $('#voltar-topo').addClass('scrollTop');
        } else {
            $('#voltar-topo').removeClass('scrollTop');

        }
    });

    //Suaviza scrol navegação
    $('.nav-item a, header-link, .btn-adiante, #voltar-topo, .navbar-brand').click(function(link) {
        link.preventDefault();
        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop: $(target).offset().top - 75
        }, 1000);
    })
})