let speech = new SpeechSynthesisUtterance();
let voices = [];
speech.lang = 'en-US';

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    let voiceSelect = document.querySelector("#voice");
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

// document.querySelector("#rate").addEventListener("input", () => {
//     // Get rate Value from the input
//     const rate = document.querySelector("#rate").value;

//     // Set rate property of the SpeechSynthesisUtterance instance
//     speech.rate = rate;

//     // Update the rate label
//     document.querySelector("#rate-label").innerHTML = rate;
// });

// document.querySelector("#volume").addEventListener("input", () => {
//     // Get volume Value from the input
//     const volume = document.querySelector("#volume").value;

//     // Set volume property of the SpeechSynthesisUtterance instance
//     speech.volume = volume;

//     // Update the volume label
//     document.querySelector("#volume-label").innerHTML = volume;
// });

// document.querySelector("#pitch").addEventListener("input", () => {
//     // Get pitch Value from the input
//     const pitch = document.querySelector("#pitch").value;

//     // Set pitch property of the SpeechSynthesisUtterance instance
//     speech.pitch = pitch;

//     // Update the pitch label
//     document.querySelector("#pitch-label").innerHTML = pitch;
// });

document.querySelector("#voice").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voice").value];
});

document.querySelector("#read").addEventListener("click", () => {
    speech.text = document.getElementById("script").textContent;
    window.speechSynthesis.speak(speech);
  });