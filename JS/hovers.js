let cardOne = document.getElementById('card-one');
let newIcon1 = document.getElementById('card-one-icon');
let secondIcon1 = document.getElementById('read-more-icon1');
let whiteVector1 = document.getElementById('white-card-vector1');

cardOne.addEventListener('mouseover', function() {
    for (let i = 0; i < cardOne.children.length; i++ ) {
         cardOne.children[i].style.color = '#FFF'; 
 }
 newIcon1.setAttribute('src', 'images/white-card-icon.svg');
 secondIcon1.style.color = '#FFF';
 whiteVector1.setAttribute('src','images/white_arrow back_.svg');
})

cardOne.addEventListener('mouseout', function () {
    cardOne.children[1].style.color = '#011A41'; 
    cardOne.children[2].style.color = '#555';
    secondIcon1.style.color = '#355EFC';
    whiteVector1.setAttribute('src', 'images/🦆 icon _arrow back_.svg');
    newIcon1.setAttribute('src', 'images/card.svg');
})

let cardTwo = document.getElementById('card-two');
let newIcon2 = document.getElementById('card-two-icon');
let secondIcon2 = document.getElementById('read-more-icon2');
let whiteVector2 = document.getElementById('white-card-vector2');


cardTwo.addEventListener('mouseover', function() {
    for (let i = 0; i < cardTwo.children.length; i++ ) {
         cardTwo.children[i].style.color = '#FFF'; 
 }
 newIcon2.setAttribute('src', 'images/white-card-icon.svg');
 secondIcon2.style.color = '#FFF';
 whiteVector2.setAttribute('src','images/white_arrow back_.svg');
})

cardTwo.addEventListener('mouseout', function () {
    cardTwo.children[1].style.color = '#011A41'; 
    cardTwo.children[2].style.color = '#555';
    secondIcon2.style.color = '#355EFC';
    whiteVector2.setAttribute('src', 'images/🦆 icon _arrow back_.svg');
    newIcon2.setAttribute('src', 'images/card.svg');
})


let cardThree = document.getElementById('card-three');
let newIcon3 = document.getElementById('card-three-icon');
let secondIcon3 = document.getElementById('read-more-icon3');
let whiteVector3 = document.getElementById('white-card-vector3');


cardThree.addEventListener('mouseover', function() {
    for (let i = 0; i < cardThree.children.length; i++ ) {
         cardThree.children[i].style.color = '#FFF'; 
 }
 newIcon3.setAttribute('src', 'images/white-card-icon.svg');
 secondIcon3.style.color = '#FFF';
 whiteVector3.setAttribute('src','images/white_arrow back_.svg');
})

cardThree.addEventListener('mouseout', function () {
    cardThree.children[1].style.color = '#011A41'; 
    cardThree.children[2].style.color = '#555';
    secondIcon3.style.color = '#355EFC';
    whiteVector3.setAttribute('src', 'images/🦆 icon _arrow back_.svg');
    newIcon3.setAttribute('src', 'images/card.svg');
})



let financialPlanningContainer1 = document.getElementById('financial-planning-container1');
let financialPlanningIcon1 = document.getElementById('financial-planning-icon1');
let financialPlanningText1 = document.getElementById('financial-planning1');

financialPlanningContainer1.addEventListener('mouseover', function() {
    financialPlanningContainer1.style.backgroundColor = '#355EFC';
    financialPlanningIcon1.setAttribute('src', 'images/white_icon _menu_.svg');
    financialPlanningText1.style.color = '#FFF';
})

financialPlanningContainer1.addEventListener('mouseout', function() {
    financialPlanningContainer1.style.backgroundColor = '';
    financialPlanningIcon1.setAttribute('src', 'images/🦆 icon _menu_.svg');
    financialPlanningText1.style.color = '#011A41';
})


let financialPlanningContainer2 = document.getElementById('financial-planning-container2');
let financialPlanningIcon2 = document.getElementById('financial-planning-icon2');
let financialPlanningText2 = document.getElementById('financial-planning2');

financialPlanningContainer2.addEventListener('mouseover', function() {
    financialPlanningContainer2.style.backgroundColor = '#355EFC';
    financialPlanningIcon2.setAttribute('src', 'images/white_icon _menu_.svg');
    financialPlanningText2.style.color = '#FFF';
})

financialPlanningContainer2.addEventListener('mouseout', function() {
    financialPlanningContainer2.style.backgroundColor = '';
    financialPlanningIcon2.setAttribute('src', 'images/🦆 icon _menu_.svg');
    financialPlanningText2.style.color = '#011A41';
})


let financialPlanningContainer3 = document.getElementById('financial-planning-container3');
let financialPlanningIcon3 = document.getElementById('financial-planning-icon3');
let financialPlanningText3 = document.getElementById('financial-planning3');

financialPlanningContainer3.addEventListener('mouseover', function() {
    financialPlanningContainer3.style.backgroundColor = '#355EFC';
    financialPlanningIcon3.setAttribute('src', 'images/white_icon _menu_.svg');
    financialPlanningText3.style.color = '#FFF';
})

financialPlanningContainer3.addEventListener('mouseout', function() {
    financialPlanningContainer3.style.backgroundColor = '';
    financialPlanningIcon3.setAttribute('src', 'images/🦆 icon _menu_.svg');
    financialPlanningText3.style.color = '#011A41';
})


let financialPlanningContainer4  = document.getElementById('financial-planning-container4');
let financialPlanningIcon4   = document.getElementById('financial-planning-icon4');
let financialPlanningText4 = document.getElementById('financial-planning4');

financialPlanningContainer4.addEventListener('mouseover', function() {
    financialPlanningContainer4.style.backgroundColor = '#355EFC';
    financialPlanningIcon4.setAttribute('src', 'images/white_icon _menu_.svg');
    financialPlanningText4.style.color = '#FFF';
})

financialPlanningContainer4.addEventListener('mouseout', function() {
    financialPlanningContainer4.style.backgroundColor = '';
    financialPlanningIcon4.setAttribute('src', 'images/🦆 icon _menu_.svg');
    financialPlanningText4.style.color = '#011A41';
})
