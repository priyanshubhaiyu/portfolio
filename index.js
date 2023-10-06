var typed= new Typed(".text", {
    strings:["_Front-end Developer", "_Video Editor", "_Sportsman","_UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


$(document).ready( function(){
    
    $('.main-slider').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:"<button type='button' class='btn btn-light slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='btn btn-light slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"

      });
});


var box1= document.getElementById("box-1");
var box2= document.getElementById("box-2");
var box3= document.getElementById("box-3");

box1.addEventListener("mouseover", function(){
    box1.style.backgroundColor= "#e6db74";
});
box1.addEventListener("mouseout", function(){
    box1.style.backgroundColor= "rgb(41, 41, 4)";
});

box2.addEventListener("mouseover", function(){
    box2.style.backgroundColor= "#9a99ff";
});
box2.addEventListener("mouseout", function(){
    box2.style.backgroundColor= "rgb(41, 41, 4)";
});

box3.addEventListener("mouseover", function(){
    box3.style.backgroundColor= "rgb(47,203,239)";
});
box3.addEventListener("mouseout", function(){
    box3.style.backgroundColor= "rgb(41, 41, 4)";
});

var typed= new Typed(".box-text-1", {
    strings:["_Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: false
});

var typed= new Typed(".box-text-2", {
    strings:["_Video Editor"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: false
});

var typed= new Typed(".box-text-3", {
    strings:["_Sportsman"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: false
});