//on() API - is an Event Handler Function
function toggleInfoPanel(evt){
    $(this).siblings('.menu-item-info, .account').toggleClass('is-visible');
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