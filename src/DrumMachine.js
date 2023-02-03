import React, { useEffect } from 'react'
import data from './DrumPad'

function DrumMachine() {

    useEffect(() => {
        document.addEventListener('keydown', (event) => {
            playAudio(event.key.toUpperCase());
        });
    }, []);

    function playAudio(drumCha, drumName) {
        const drumAudio = document.getElementById(drumCha)
        drumAudio.play()
        const audioDrum = document.getElementById('display')
        audioDrum.innerHTML = `${drumName}`
    }

    return (
        <section id="drum-machine">
            <div id="display"></div>
            <div className="drum-pad-container">
                {data.drumPads.map((drumPad) => (
                    <div 
                        key={drumPad.src} 
                        onClick={() => {playAudio(drumPad.text, drumPad.name)}}
                        className='drum-pad' 
                        id={drumPad.src}
                    >
                        {drumPad.text}
                    <audio 
                        className='clip' 
                        id={drumPad.text} 
                        src={drumPad.src}
                    >
                    </audio>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DrumMachine