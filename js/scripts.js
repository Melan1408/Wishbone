$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: true,
        dotsEach: true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:3
            }
        }
    });

    $( function() {
        $( "#dialog" ).dialog({
            minWidth: 400,
            position: {
                my: "left top",
                at: "left bottom",
                of: "#opener"
            },
            modal: true,
            autoOpen: false,
            show: {
                effect: "blind",
                duration: 1000
            },
            hide: {
                effect: "explode",
                duration: 1000
            }
        });

        $( "#opener" ).on( "click", function() {
            $( "#dialog" ).dialog( "open" );
        });
    } );

});