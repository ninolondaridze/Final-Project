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


