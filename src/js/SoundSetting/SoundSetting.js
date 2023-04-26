"use strict";


/*

    <audio loop controls id="audio">
        <source src="">
    </audio>

*/
class SoundSetting {
    domElement = document.createElement("div");
    musicControlElement = document.createElement("input");
    sfxControlElement = document.createElement("div");

    constructor() {
        this.domElement.classList.add('SoundSetting');

        this.musicControlElement.setAttribute('type', 'checkbox');
        this.domElement.append(this.musicControlElement);

        this.sfxControlElement.setAttribute('type', 'checkbox');
        this.domElement.append(this.sfxControlElement);


        let music_enabledSaver = new Saver('music.enabled', true);
        let music = new Audio('/src/audio/music/Валентин Стрыкало - Так гріє.mp3');
        music.loop = true;

        this.musicControlElement.checked = music_enabledSaver.value;

        this.musicControlElement.addEventListener('change', (e) => {
            music_enabledSaver.value = this.musicControlElement.checked;
            if (music_enabledSaver.value) music.play();
            if (!music_enabledSaver.value) music.pause();
        });


        window.addEventListener('click', () => {
            this.musicControlElement.dispatchEvent(new Event('change'));
        });

    }
}