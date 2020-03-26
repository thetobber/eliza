const chatDisplay = document.querySelector('#chat-display')
const chatInput = document.querySelector('#chat-input')
const chatRecord = document.querySelector('#chat-record')

let eliza = new ElizaBot()
let elizaLines = new Array()
let elizaVoice

speechSynthesis.addEventListener('voiceschanged', () => {
    if (elizaVoice && elizaVoice.name === 'Google UK English Female')
        return

    const voice = speechSynthesis
        .getVoices()
        .find(v => v.name === 'Google UK English Female')

    if (voice)
        elizaVoice = voice
    else
        elizaVoice = speechSynthesis.getVoices()[0]
})

function elizaReset() {
    eliza.reset()
    elizaLines = []
    chatDisplay.innerHTML = ''
    elizaStep()
}

function elizaSpeak(text) {
    try {
        const utterance = new SpeechSynthesisUtterance(text)
        utterance.voice = elizaVoice
        speechSynthesis.speak(utterance)
    }
    catch { }
}

function elizaStep(userInput) {
    if (eliza.quit) {
        chatInput.value = ''
        if (confirm("This session is over.\nStart over?")) elizaReset()
        chatInput.focus()
        return
    }
    else if (userInput != '') {
        const usr = 'YOU:   ' + userInput
        const rpl = eliza.transform(userInput)
        elizaLines.push(usr)
        elizaLines.push('ELIZA: ' + rpl)

        const usrEl = document.createElement('div')
        const rplEl = document.createElement('div')
        usrEl.textContent = usr
        rplEl.textContent = 'ELIZA: ' + rpl

        chatDisplay.appendChild(usrEl)
        chatDisplay.appendChild(rplEl)

        elizaSpeak(rpl)
    }
    else if (elizaLines.length == 0) {
        // no chatInput and no saved lines -> output initial
        const initial = eliza.getInitial()
        elizaLines.push('ELIZA: ' + initial)

        const initialEl = document.createElement('div')
        initialEl.textContent = 'ELIZA: ' + initial

        chatDisplay.appendChild(initialEl)

        elizaSpeak(initial)
    }

    chatInput.value = ''
}

chatInput.addEventListener('keypress', function (event) {
    var userInput = chatInput.value

    if (event.keyCode == 13 && /[^\s]+/.test(userInput)) {
        elizaStep(userInput)
        chatInput.focus()
    }
})

const recognition = new webkitSpeechRecognition()
recognition.continuous = false
recognition.lang = 'en-US'
recognition.interimResults = true
recognition.maxAlternatives = 1

let isRecording = false

chatRecord.addEventListener('click', () => {
    if (isRecording) {
        recognition.stop()
        chatInput.removeAttribute('disabled')
        chatRecord.removeAttribute('disabled')
        isRecording = false
    }
    else {
        recognition.start()
        chatInput.setAttribute('disabled', null)
        chatRecord.setAttribute('disabled', null)
        isRecording = true
    }
})

recognition.addEventListener('result', event => {
    if (event.results.length > 0) {
        const text = event.results[0] &&
            event.results[0][0] &&
            event.results[0][0].transcript ?
            event.results[0][0].transcript : ''

        chatInput.value = text

        if (event.results && event.results[0].isFinal && text) {
            setTimeout(() => elizaStep(text), 500)
        }
    }
})

recognition.addEventListener('speechend', event => {
    chatInput.removeAttribute('disabled')
    chatRecord.removeAttribute('disabled')
    isRecording = false
    chatRecord.focus();
})