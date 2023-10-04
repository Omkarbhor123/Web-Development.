const textarea = document.querySelector("textarea");
const button = document.querySelector("button");
let isSpeaking = true;

const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textarea.value;

  if (!synth.speaking && text) {
    const utterance = new SpeechSynthesisUtterance(text);
    
    // Get voices
    const voices = synth.getVoices();

    // Find Indian female voice by name
    const indianFemaleVoice = voices.find(voice => voice.name === 'Google हिन्दी');

    // If Indian female voice is available, use it
    if (indianFemaleVoice) {
      utterance.voice = indianFemaleVoice;
    } else {
      console.log('Indian female voice not found. Using default voice.');
    }

    synth.speak(utterance);
  }

};

// Ensure the voices are loaded before using them
window.speechSynthesis.onvoiceschanged = () => {
  button.addEventListener("click", textToSpeech);
};
