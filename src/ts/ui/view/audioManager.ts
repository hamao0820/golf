class AudioManager {
    static playFlipSoundEffect() {
        const audio = new Audio('./static/カードをめくる.mp3');
        audio.play();
    }

    static playSelectSoundEffect() {
        const audio = new Audio('./static/決定3.mp3');
        audio.volume = 0.1;
        audio.play();
    }

    static playSceneChangeSoundEffect() {
        const audio = new Audio('./static/シーン切り替え1.mp3');
        audio.volume = 0.1;
        audio.play();
    }

    static playSuccessSoundEffect() {
        const audio = new Audio('./static/歓声と拍手.mp3');
        audio.volume = 0.1;
        audio.play();
    }

    static playFailsSoundEffect() {
        const audio = new Audio('./static/間抜け7.mp3');
        audio.volume = 0.1;
        audio.play();
    }
}

export default AudioManager;
