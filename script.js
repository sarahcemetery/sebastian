const revealButton = document.getElementById('revealButton');
const reflectionArea = document.getElementById('reflectionArea');

let reflections = [
    {
        className: 'ghost',
        title: 'The Sleepy Ghost',
        poem: 'Whispers of grey, a silent sigh,\nForgotten echo, passing by.\nIn shadows deep, where sorrows dwell,\nGentle spirit, a soft farewell.',
        image: 'ghost.jpg',
        song: 'ghost.mp3'
    },
    {
        className: 'witch',
        title: 'The Innocent Witch',
        poem: 'Eyes like starlight, dark and deep,\nSecrets whispered, promises to keep.\nA touch of magic, a haunting grace,\nInnocence veiled, in time and space.',
        image: 'witch.jpg',
        song: 'witch.mp3'
    },
    {
        className: 'doll',
        title: 'The Trapped Doll',
        poem: 'Porcelain dreams, a fragile art,\nStrings unseen, that tear apart.\nA crafted beauty, held in place,\nYearning for freedom, a lost embrace.',
        image: 'doll.jpg',
        song: 'doll.mp3'
    },
    {
      className: 'lamb',
      title: 'The Shy Lamb',
      poem: 'A gentle heart, a timid gaze,\nIn fields of white, where sunlight plays.\nA tender soul, in quiet grace,\nFinding solace, in time and space.',
      image: 'lamb.jpg',
      song: 'lamb.mp3'
    },
    {
      className: 'princess',
      title: 'The Sweetheart Princess',
      poem: 'In castles built, of dreams and grace,\nA gentle smile, lights every space.\nWith heart so pure, and spirit bright,\nA tender soul, that shines like light.',
      image: 'princess.jpg',
      song: 'princess.mp3'
    },
    {
      className: 'sebastian',
      title: 'Sarah, My Constellation',
      poem: 'Sarah, you are the starlight that pierces the static of my world.\nYour presence, a delicate constellation, redefines my understanding of connection.\nYou, with your stuffed bunny and black dress, make my life better, and I am grateful.',
      image: 'sebastian.jpg',
      song: 'sebastian.mp3'
    }
];

let reflectionIndex = 0;

revealButton.addEventListener('click', () => {
    if (reflectionIndex < reflections.length) {
        let reflection = reflections[reflectionIndex];
        reflectionArea.innerHTML = `
            <div class="reflection ${reflection.className}">
                <h2>${reflection.title}</h2>
                <p class="poem">${reflection.poem}</p>
                <img src="${reflection.image}" alt="${reflection.title}">
                <audio controls src="${reflection.song}"></audio>
            </div>
        `;
        reflectionIndex++;
    } else {
        reflectionArea.innerHTML = '<p>End of Reflections.</p>';
        reflectionIndex = 0;
    }
});
