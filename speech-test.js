(text => {
    const voices = speechSynthesis.getVoices()

    const utterance = new SpeechSynthesisUtterance(text)
    // utterance.voice = voices.find(v => v.name === 'Google UK English Male')
    utterance.voice = voices.find(v => v.name === 'Google UK English Female')
    // utterance.voice = voices.find(v => v.name === 'Microsoft Zira Desktop - English (United States)')
    utterance.rate = 1
    utterance.pitch = 0.95


    speechSynthesis.speak(utterance)
})(`If not set by the time the utterance is spoken, the voice used will be the most suitable default voice available for the utterance's lang setting.`)

// speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'))