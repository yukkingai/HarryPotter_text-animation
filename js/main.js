(() => {
    // grab a ref to the audio
    let track = document.querySelector('audio'),
        startBut = document.querySelector('.start-button');

    function startTextAnim() {
        // start the audio
        track.play();        
        // add some animation classes to the main text animation paths
        // let textAnimPaths = document.querySelectorAll('#intro > path'),
        let snapeImage = document.querySelector('.snape-intro');    

        textAnimPaths.forEach(path => path.classList.add('text-fade'));

        snapeImage.classList.add('zoom-snape');

        // hide the play button
        startBut.classList.add('hidden');
    }

    function setup() {
        // animate the start screen away
        // select the pieces
        let introPieces = document.querySelectorAll("#intro path"),
            snapeImg = document.querySelector('.snape-intro');

        // add the animation class to make them disappear
        introPieces.forEach(piece => piece.classList.add('intro-fade'));

        snapeImg.addEventListener('animationend', startTextAnim);

        // add tony's animation class and move him left
        snapeImg.classList.add('animate-snape');

    }

    startBut.addEventListener('click', setup);
})();