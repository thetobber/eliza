const REFLECTIONS = {
    "am": "are",
    "was": "were",
    "i": "you",
    "i'd": "you would",
    "i've": "you have",
    "i'll": "you will",
    "i'm": "you're",
    "my": "your",
    "are": "am",
    "you've": "I have",
    "you'll": "I will",
    "your": "my",
    "yours": "mine",
    "you": "me",
    "me": "you"
}

const PSYCHOBABBLE = [
    [
        /I need (.*)/,
        [
            "Why do you need $1?",
            "Would it really help you to get $1?",
            "Are you sure you need $1?"
        ]
    ],
    [
        /Why don\'?t you ([^\?]*)\??/,
        [
            "Do you really think I don't $1?",
            "Perhaps eventually I will $1.",
            "Do you really want me to $1?"
        ]
    ],
    [
        /Why can\'?t I ([^\?]*)\??/,
        [
            "Do you think you should be able to $1?",
            "If you could $1, what would you do?",
            "I don't know - why can't you $1?",
            "Have you really tried?"
        ]
    ],
    [
        /I can\'?t (.*)/,
        [
            "How do you know you can't $1?",
            "Perhaps you could $1 if you tried.",
            "What would it take for you to $1?"
        ]
    ],
    [
        /I am (.*)/,
        [
            "Did you come to me because you are $1?",
            "How long have you been $1?",
            "How do you feel about being $1?"
        ]
    ],
    [
        /I\'?m (.*)/,
        [
            "How does being $1 make you feel?",
            "Do you enjoy being $1?",
            "Why do you tell me you're $1?",
            "Why do you think you're $1?"
        ]
    ],
    [
        /Are you ([^\?]*)\??/,
        [
            "Why does it matter whether I am $1?",
            "Would you prefer it if I were not $1?",
            "Perhaps you believe I am $1.",
            "I may be $1 - what do you think?"
        ]
    ],
    [
        /What (.*)/,
        [
            "Why do you ask?",
            "How would an answer to that help you?",
            "What do you think?"
        ]
    ],
    [
        /How (.*)/,
        [
            "How do you suppose?",
            "Perhaps you can answer your own question.",
            "What is it you're really asking?"
        ]
    ],
    [
        /Because (.*)/,
        [
            "Is that the real reason?",
            "What other reasons come to mind?",
            "Does that reason apply to anything else?",
            "If $1, what else must be true?"
        ]
    ],
    [
        /(.*) sorry (.*)/,
        [
            "There are many times when no apology is needed.",
            "What feelings do you have when you apologize?"
        ]
    ],
    [
        /Hello(.*)/,
        [
            "Hello… I'm glad you could drop by today.",
            "Hi there… how are you today?",
            "Hello, how are you feeling today?"
        ]
    ],
    [
        /I think (.*)/,
        [
            "Do you doubt $1?",
            "Do you really think so?",
            "But you're not sure $1?"
        ]
    ],
    [
        /(.*) friend (.*)/,
        [
            "Tell me more about your friends.",
            "When you think of a friend, what comes to mind?",
            "Why don't you tell me about a childhood friend?"
        ]
    ],
    [
        /Yes/,
        [
            "You seem quite sure.",
            "OK, but can you elaborate a bit?"
        ]
    ],
    [
        /(.*) computer(.*)/,
        [
            "Are you really talking about me?",
            "Does it seem strange to talk to a computer?",
            "How do computers make you feel?",
            "Do you feel threatened by computers?"
        ]
    ],
    [
        /Is it (.*)/,
        [
            "Do you think it is $1?",
            "Perhaps it's $1 - what do you think?",
            "If it were $1, what would you do?",
            "It could well be that $1."
        ]
    ],
    [
        /It is (.*)/,
        [
            "You seem very certain.",
            "If I told you that it probably isn't $1, what would you feel?"
        ]
    ],
    [
        /Can you ([^\?]*)\??/,
        [
            "What makes you think I can't $1?",
            "If I could $1, then what?",
            "Why do you ask if I can $1?"
        ]
    ],
    [
        /Can I ([^\?]*)\??/,
        [
            "Perhaps you don't want to $1.",
            "Do you want to be able to $1?",
            "If you could $1, would you?"
        ]
    ],
    [
        /You are (.*)/,
        [
            "Why do you think I am $1?",
            "Does it please you to think that I'm $1?",
            "Perhaps you would like me to be $1.",
            "Perhaps you're really talking about yourself?"
        ]
    ],
    [
        /You\'?re (.*)/,
        [
            "Why do you say I am $1?",
            "Why do you think I am $1?",
            "Are we talking about you, or me?"
        ]
    ],
    [
        /I don\'?t (.*)/,
        [
            "Don't you really $1?",
            "Why don't you $1?",
            "Do you want to $1?"
        ]
    ],
    [
        /I feel (.*)/,
        [
            "Good, tell me more about these feelings.",
            "Do you often feel $1?",
            "When do you usually feel $1?",
            "When you feel $1, what do you do?"
        ]
    ],
    [
        /I have (.*)/,
        [
            "Why do you tell me that you've $1?",
            "Have you really $1?",
            "Now that you have $1, what will you do next?"
        ]
    ],
    [
        /I would (.*)/,
        [
            "Could you explain why you would $1?",
            "Why would you $1?",
            "Who else knows that you would $1?"
        ]
    ],
    [
        /Is there (.*)/,
        [
            "Do you think there is $1?",
            "It's likely that there is $1.",
            "Would you like there to be $1?"
        ]
    ],
    [
        /My (.*)/,
        [
            "I see, your $1.",
            "Why do you say that your $1?",
            "When your $1, how do you feel?"
        ]
    ],
    [
        /You (.*)/,
        [
            "We should be discussing you, not me.",
            "Why do you say that about me?",
            "Why do you care whether I $1?"
        ]
    ],
    [
        /Why (.*)/,
        [
            "Why don't you tell me the reason why $1?",
            "Why do you think $1?"
        ]
    ],
    [
        /I want (.*)/,
        [
            "What would it mean to you if you got $1?",
            "Why do you want $1?",
            "What would you do if you got $1?",
            "If you got $1, then what would you do?"
        ]
    ],
    [
        /(.*) mother(.*)/,
        [
            "Tell me more about your mother.",
            "What was your relationship with your mother like?",
            "How do you feel about your mother?",
            "How does this relate to your feelings today?",
            "Good family relations are important."
        ]
    ],
    [
        /(.*) father(.*)/,
        [
            "Tell me more about your father.",
            "How did your father make you feel?",
            "How do you feel about your father?",
            "Does your relationship with your father relate to your feelings today?",
            "Do you have trouble showing affection with your family?"
        ]
    ],
    [
        /(.*) child(.*)/,
        [
            "Did you have close friends as a child?",
            "What is your favorite childhood memory?",
            "Do you remember any dreams or nightmares from childhood?",
            "Did the other children sometimes tease you?",
            "How do you think your childhood experiences relate to your feelings today?"
        ]
    ],
    [
        /(.*)\?/,
        [
            "Why do you ask that?",
            "Please consider whether you can answer your own question.",
            "Perhaps the answer lies within yourself?",
            "Why don't you tell me?"
        ]
    ],
    [
        /quit/,
        [
            "Thank you for talking with me.",
            "Good-bye.",
            "Thank you, that will be \$150.  Have a good day!"
        ]
    ],
    [
        /(.*)/,
        [
            "Please tell me more.",
            "Let's change focus a bit… Tell me about your family.",
            "Can you elaborate on that?",
            "Why do you say that $1?",
            "I see.",
            "Very interesting.",
            "$1.",
            "I see.  And what does that tell you?",
            "How does that make you feel?",
            "How do you feel when you say that?"
        ]
    ]
]

/**
 * @param {Number} min
 * @param {Number} max
 */
const random = (min = 0, max = 1) => {
    return Math.round(Math.random() * (max - min)) + min
}

/**
 * @param {string} sentence
 * @param {{[key: string]: string}} reflections
 */
const reflect = (sentence, reflections) => {
    return sentence
        // convert string to lowercase
        .toLowerCase()
        // split by one or more whitespace characters
        .split(/\s+?/)
        // replace all occurrences of tokens matched in reflections
        .map(token => token in reflections ? reflections[token] : token)
        // join all words into string separated by a space
        .join(' ')
}

/**
 * @param {string} statement
 * @param {[[RegExp, string[]]]} babble
 * @param {string[]} reflections
 */
const analyze = (statement, babble, reflections) => {
    for (let [pattern, replies] of babble) {
        const matches = pattern.exec(statement.trim())

        if (matches !== null) {
            const reply = replies[random(0, replies.length - 1)]

            return reply.replace(/\$[1-9]/g, placeholder => {
                const index = Number(placeholder[1])

                if (matches[index] !== undefined) {
                    return reflect(matches[index], reflections)
                }

                console.warn(`No reflection found for:\n${statement}`)
                return placeholder[1]
            })
        }
    }
}

/**
 * @param {string} text
 */
const createMessageNode = text => {
    const element = document.createElement("div")
    element.textContent = text
    element.classList.add("chat-message")

    return element
}

/**
 * @param {string} text
 */
const createReplyNode = text => {
    const element = document.createElement("div")
    element.textContent = text
    element.classList.add("chat-reply")

    return element
}

/**
 * @type {HTMLDivElement}
 */
const chatDisplay = document.querySelector("#chat-display")

/**
 * @type {HTMLInputElement}
 */
const chatInput = document.querySelector("#chat-input")

// Listen to keyup enter on chat input
chatInput.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
        const text = chatInput.value

        if (/[^\s]+/.test(text)) {
            chatDisplay.appendChild(createMessageNode(text))
            chatDisplay.appendChild(createReplyNode(analyze(text, PSYCHOBABBLE, REFLECTIONS)))
            chatDisplay.scrollTop = chatDisplay.scrollHeight
            chatInput.value = ""
        }
    }
})
