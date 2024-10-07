$(function(){
    $(".slider").slick({
        autoplay:true,
        dots:false,
        arrows:false,
        autoplaySpeed:2000,

    })
$(".cake_img").slick({
    autoplay:true,
    dots:false,
    arrows:false,
    autoplaySpeed:2000,
    slidesToShow:4
})


$(".icon1 a").click(function(){
    $(this).toggleClass("on");
    $(".sidebar").addClass("act");
})

$(".close").click(function(event){
    event.preventDefault()
    $(".sidebar").removeClass("act")
})

}) //jQuery end