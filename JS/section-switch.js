let storyContainer = document.getElementById('story-container');
let missionFirstParagraph = document.createElement('p');
missionFirstParagraph.innerHTHML = 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit';



let story = document.getElementById('story');
let storyLine = document.getElementById('story-horizontal-line');

let mission = document.getElementById('mission');
let missionLine = document.getElementById('mission-horizontal-line');

let vission = document.getElementById('vission');
let vissionLine = document.getElementById('vission-horizontal-line');

story.addEventListener('click', function() {
    storyLine.style.visibility = 'hidden';
    missionLine.style.visibility = 'visible';
    vissionLine.style.visibility = 'visible';
    story.classList.add('active');
    mission.classList.remove('active');
    vission.classList.remove('active');
})

mission.addEventListener('click', function() {
    missionLine.style.visibility = 'hidden';
    storyLine.style.visibility = 'visible';
    vissionLine.style.visibility = 'visible';
    story.classList.remove('active');
    mission.classList.add('active');
    story.classList.remove('active');
})


vission.addEventListener('click', function() {
    storyLine.style.visibility = 'visible';
    missionLine.style.visibility = 'visible';
    vissionLine.style.visibility = 'hidden';
    story.classList.remove('active');
    mission.classList.remove('active');
    vission.classList.add('active');
})
