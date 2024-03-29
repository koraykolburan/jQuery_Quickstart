//on() API - is an Event Handler Function
 /* function toggleInfoPanel(evt){
    $(this).siblings('.menu-item-info, .account').toggle('is-visible'); //toggleClass add or remove elements
} */

/* 
$('.menu-item > a').on("mouseover", toggleInfoPanel);
$('.menu-item > a').on("mouseout", toggleInfoPanel); 
*/

/*
jQuery calls can be chained!
$('.menu-item > a').on("mouseover", toggleInfoPanel).on("mouseout", toggleInfoPanel);
*/

//You can provide multiple events name in the "on" call! (if you set same function)
//$('.menu-item > a').on("mouseover mouseout click", toggleInfoPanel);

let menu1 = $('.menu-item > a');
let home = $('.sub-home');
let accnt = $('.account');

$('#home, .sub-home').hover(
    function(){
        home.stop().fadeIn();
    },
    function(){
        home.stop().fadeOut();
    }
)
$('#account, .account').hover(
    function(){
        accnt.stop().slideDown();  // If you want to hover on submenu you must use stop() in both functions.
    },
    function(){
        accnt.stop().slideUp();
    }
)
//Changed this because when you hover on submenu, the submenu was disappearing.



/*submenu.hover(function() {
    $(this).$('.menu-item-info > ul > li').css("display", "block");
}) */



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

/*
$("#btn1").click(function(){
        $("p:odd").hide();
    });

$("#btn2").click(function(){
    $("p:odd").show();
}) */

let button1 = $("#btn1");

button1.on("click", function(){
    button1.text(button1.text() == "Hide!" ? "Show!" : "Hide!" );
    $("p:odd").toggle("slow", function(){
        //animation complete.
    });
})
// Was merged two buttons in the same same button



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

/*
function darkMode(evt){
    $("#btn3").on("click", function(){
      $("body").css("background-color", "#1D2A35");
        $("body").css("color", "white");
        $("p").css("background-color", "none");
        $("p").css("border-radius", "12px");
        $(".box-1").css("background-color", "pink");
        $(".box-1 > p").css("background-color", "pink");
        $(".box-2 > p").css("background-color", "blue");
        $(".box-1 > p").css("color", "black");
        $(".box-2").css("background-color", "blue");
        $(".box-3").css("background-color", "green");
        $(".box-3 > p").css("background-color", "green");
        $(":button").css("background-color", "darkgrey");
        $(":button").css("border-radius", "12px");
        $(".content3 > p").css("background-color", "grey"); 
        $(".tile").css("border-color", "grey"); 
        $(".menu, .menu-item, a, .menu-item-info, .cf, ul, li, .account").css("background-color", "brown");
        $(".menu, .menu-item, a, .menu-item-info, .cf, ul, li, .account").css("border-radius", "12px"); 
    });
}

$(document).ready("click", darkMode()); //this event gets more inline css that's why we use toggleClass instead of this complexity

// We can do this with toggleClass, it will be more easier and more interactive.
// We need to add CSS-class(wrapper) like above but inside of the css document and a couple of Js(jQuery) codes */

let anotherColor = $("body");
let button = $("#btn3");

button.on("click", function(){
    anotherColor.toggleClass("darkMode-wrapper"); //this function adds the "darkMode-wrapper" class to the body(anothercolor)
    $(".tile").css("border-color", "grey");  // this is inline css
    if(anotherColor.hasClass("darkMode-wrapper")){
        button.text("Light Mode!");
    } else {
        button.text("Dark Mode!");
    }
})


//-----------------------------------------------------------------------------------------------------------------
// focus and blur Events
$('input').focus(function(){
    $(this).css("background-color", "pink");
    });
$('input').blur(function(){
    $(this).css("background-color", "lightblue");
});

//Animations
$('#btn2').click(function(){
    let anm = $(".animation");
    anm.animate({left:'1200px', opacity: '0.4'}, 'slow');
    anm.animate({height:'150px', opacity: '0.9'}, 'slow');
    anm.animate({width:'160px', opacity: '0.9'}, 'slow');
    anm.animate({fontSize:'1.5em', opacity: '0.8'}, 'slow');
    anm.animate({top:'3000px', opacity: '0.4'}, 'slow');
    anm.animate({left:'36px', opacity: '0.9'}, 'slow');
    anm.animate({top:'3412px', opacity: '0.4'}, 'slow');
    anm.animate({fontSize:'16px', opacity: '0.9'}, 'slow');
    anm.animate({fontSize:'0', opacity: '0.9'}, 'slow');
    anm.animate({height:'20px', opacity: '0.9'}, 'slow');
    anm.animate({width:'20px', opacity: '0.9'}, 'slow');
})

//Set attr()
$('#btn4').click(function(){
    $('#ex1').attr({
        'href' : "http://example2.com/",
        'title' : "EXAMPLE!!!"
    });
})