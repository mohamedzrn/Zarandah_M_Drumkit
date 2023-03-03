// drum kit: press a key to play the sound. use JavaScript to retrieve the data-key attribute and then use that as a selector to find the matching audio file and play it!
    console.log('music player script file');

    // get a referance to all of the audio tags on the page
    let allDivs = document.querySelectorAll('.key');

    window.addEventListener('keyup', findMatchingAudio);
    //window.addEventListener('keyup', removePlayingClass);

    function findMatchingAudio(event) {
        // event is what gets generated every time the user does something in the browser.

        // in this case, the event is the keyup event - it has lots of information about that event, including which key code key was pressed and the keu code that identifies it.

        // we can get that info and use it to find the matching audio element via the data-keycustom data attributes on each audio element in our HTML file

        // debugger;
        // square brackets are an attribute selector -> element[attribute]
        // ex. input[type="text"]
        let audioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`),
            targetDiv = document.querySelector(`div[data-key="${event.keyCode}"]`);
        //rewind the audio clip and THEN play it (over and over and over again)

        // the ! operator rests for a negative condition (not true)
        // in this case, if there is NOT a matching audio clip (audioClip will be null) then exit the function and dont continue

        // thi will catch errors and let the program run properly
        if (!audioClip) {return; }

        audioClip.currentTime = 0;
        // play the matching audio Clip
        audioClip.play();


        // animate the matching div element
        // it akready has a transition in the CSS, so this will trigger the flash of UI that we want
        targetDiv.classList.add('playing');
    }

    function resetDivs() {
        // let currentDiv = document.querySelector(`div[data-key="${this.dataset.key}"]`);

        this.classList.remove('playing');
    }

    allDivs.forEach(div => div.addEventListener('transitionend', resetDivs));