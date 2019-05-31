//para abrir el menu precionando icono
$('.open-menu-icon').on('click', function () {
    $('.main-nav-outer').addClass('open-menu');
});

//cerrar el menu
$('.menu-close-icon').click(function () {
    $('.main-nav-outer').removeClass('open-menu');
});