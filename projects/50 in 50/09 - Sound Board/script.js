//dynamically build the audio html
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const container = document.querySelector('.container');
const audios = [];
let currentlyPlaying;
for(sound of sounds) {
    const btn = document.createElement('div');
    const audio = document.createElement('audio');
    audios.push(audio);
    audio.src=`audio/${sound}.mp3`;
    btn.classList.add('sound')
    btn.innerText=sound;
    btn.appendChild(audio);
    container.appendChild(btn);
    btn.addEventListener('click', evt => {
        stopLastSound();
        audio.play();
        currentlyPlaying = audio;
    });
}
//
//<div class="sound">applause<audio id="applause" src="audio/applause.mp3"></audio></div>
        


function stopLastSound() {
    //no stop function, so pause and reset.
    if(currentlyPlaying){
    currentlyPlaying.pause();
    currentlyPlaying.currentTime = 0;
    }
}

//<div class="sound">applause<audio id="applause" src="audio/applause.mp3"></audio></div>
        