$(document).ready(function() {
    // BANNER  

    // On récupère la hauteur de la page
    // outerHeight() = hauteur exact
    var windowSize = $(window).outerHeight();

    // On récupère la hauteur du header
    var headerSize = $("header").outerHeight();

    // On soustrait la hauteur du header à celle de la page
    var bannerSize = windowSize-headerSize;

    // On donne la bonne hauteur à notre bannière
    $(".banner").height(bannerSize);

    // HAMBURGER
    
    $(".menu").click(function() {

        // Quand on clique sur le bouton hamburger, on affiche le menu
        // addClass = ajoute une class
        $("header .nav").addClass("visible");
    })

    $(".close-nav").click(function() {

        // Quand on clique sur la crois, on cache le menu
        // removeClass = supprime une class
        $("header .nav").removeClass("visible");
    })

    // CAROUSEL

    $(".right").click(function() {

        // On enregistre dans la variable clone, le clone de la premère slide
        var clone = $(".carousel .slide").first().clone();

        // On supprime la première slide qui vient d'être clonée
        $(".carousel .slide").first().remove();

        // On colle le code à la fin de la liste
        // Append = ajoute à la fin
        $(".carousel").append(clone);

        // On cache et fait apparaitre l'image (avec un fadeIn) qui vient d'être clonée (pour l'animation)
        $(".carousel").first().toggle();
        $(".carousel").first().fadeIn();
    })

    $(".left").click(function() {

        // On enregistre dans la variable clone, le clone de la dernière slide
        var clone = $(".carousel .slide").last().clone();

        // On supprime la dernière slide qui vient d'être clonée
        $(".carousel .slide").last().remove();

        // On colle le code au début de la liste
        // Prepend = ajoute au début
        $(".carousel").prepend(clone);
        
        // On cache et fait apparaitre l'image (avec un fadeIn) qui vient d'être clonée (pour l'animation)
        $(".carousel").last().toggle();
        $(".carousel").last().fadeIn();
    })
})