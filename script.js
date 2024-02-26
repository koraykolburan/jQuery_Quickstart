//on() API - is an Event Handler Function
function toggleInfoPanel(evt){
    $(this).siblings('.menu-item-info, .account').toggleClass('is-visible'); //toggleClass add or remove elements
    //$(this).siblings('.account').toggleClass('is-visible');
}

/* 
$('.menu-item > a').on("mouseover", toggleInfoPanel);
$('.menu-item > a').on("mouseout", toggleInfoPanel); 
*/

/*
jQuery calls can be chained!
$('.menu-item > a').on("mouseover", toggleInfoPanel).on("mouseout", toggleInfoPanel);
*/

//You can provide multiple events name in the "on" call! (if you set same function)
$('.menu-item > a').on("mouseover mouseout", toggleInfoPanel);

// Event Bubbling
$('.box-1').on("click", e => {
    console.log('Box-1 has cliked!');
})
$('.box-2').on("click", e => {
    console.log('Box-2 has cliked!');
})
$('.box-3').on("click", e => {
    console.log('Box-3 has cliked!');   
})

// Event Delegation -----------------
function random(number) {
    return Math.floor(Math.random() * number); // we multiply(matched) the number and math.random for rgb numbers! 
}

function bgChange() {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    return rndCol;
}

const container = $("#container");

container.on("click", (evt) => {
    evt.target.style.backgroundColor = bgChange();
})

// Event and Selector

$("#btn1").click(function(){
        $("p:odd").hide();
    });

$("#btn2").click(function(){
    $("p:odd").show();
})

$("#p1").mouseenter(function(){
    $("#p2").text("You entered the first paragraph! Yaaay!");
})

$("#p1").mouseleave(function(){
    $("#p2").text("Bye bye lövely...");
    $("#p2").css("font-style", "italic");
    $("#p2").css("background-color", "pink");
    $("#p2").css("border-radius", "12px");
})


//For Dark Mode-----------------------------------------------------------------------------------------------

function darkMode(evt){
    $("#btn3").click(function(){
        $("*").css("background-color", "#1D2A35");
        $("*").css("color", "white");
        $("p").css("background-color", "none");
        $(".box-1").css("background-color", "pink");
        $(".box-1 > p").css("background-color", "pink");
        $(".box-2 > p").css("background-color", "blue");
        $(":button").css("background-color", "darkgrey");
        $(":button").css("border-radius", "12px");
        $(".box-1 > p").css("color", "black");
        $(".box-2").css("background-color", "blue");
        $(".box-3").css("background-color", "green");
        $(".box-3 > p").css("background-color", "green");
        $(".content3 > p").css("background-color", "grey");
        $(".tile").css("border-color", "grey");
        $(".menu, .menu-item, a, .menu-item-info, .cf, ul, li, .account").css("background-color", "brown");
        $(".menu, .menu-item, a, .menu-item-info, .cf, ul, li, .account").css("border-radius", "12px");
        $("p").css("border-radius", "12px");
    });
}

$(document).ready("click", darkMode());

//-----------------------------------------------------------------------------------------------------------------