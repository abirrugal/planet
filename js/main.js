$(function () {
    $(document).scroll(function () {
        // var $navp = $("#fixed-nav-product");
        var $nav = $("#fixed-nav");
        var $address = $("#menu-container");

        $nav.toggleClass("scrolled", $(this).scrollTop() > $address.height());
        // $navp.toggleClass("scrolled", $(this).scrollTop() > $navp.height());


    });
});