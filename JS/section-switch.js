//changes style while clicking Story/Mission/Vission buttons
let storyContainer = document.getElementById('story-container');

let sectionFirstParagraph = document.getElementById('section-one');
let sectionSeconcParagraph = document.getElementById('section-two');

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
    sectionFirstParagraph.innerHTML = 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.Aliqu diam amet diam et eos labore.';
    sectionSeconcParagraph.innerHTML = 'Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit.';
})

mission.addEventListener('click', function() {
    missionLine.style.visibility = 'hidden';
    storyLine.style.visibility = 'visible';
    vissionLine.style.visibility = 'visible';
    story.classList.remove('active');
    mission.classList.add('active');
    vission.classList.remove('active');
    sectionFirstParagraph.innerHTML = 'We aim to be the most respected financial services firm in the world.';
    sectionSeconcParagraph.innerHTML = 'We save people money so they can live better.';
})


vission.addEventListener('click', function() {
    storyLine.style.visibility = 'visible';
    missionLine.style.visibility = 'visible';
    vissionLine.style.visibility = 'hidden';
    story.classList.remove('active');
    mission.classList.remove('active');
    vission.classList.add('active');
    sectionFirstParagraph.innerHTML = 'Create economic opportunity for every member of the global workforce.';
    sectionSeconcParagraph.innerHTML = 'To help people throughout the world realize their full potential.';
})
