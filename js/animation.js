$(document).ready(function () {
    //Animación del carrito de compras
    function buyAnimation(){
        $('.icon_buy').removeClass("fa-cart-arrow-down").addClass("fa-shopping-cart");

        setTimeout(function(){
            $('.icon_buy').removeClass("fa-shopping-cart").addClass("fa-cart-arrow-down");
        },500);
    }

    setInterval(buyAnimation, 2000);
});