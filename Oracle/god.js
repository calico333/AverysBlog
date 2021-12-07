// Inspired by Terry A. Davis, rest in peace king.

const nouns = 
[
    "Earth",
    "Hell",
    "Heaven",
    "China",
    "virus",
    "war",
    "God",
    "Jesus",
    "Satan",
    "genocide",
    "America",
    "Europe",
    "Russia",
    "communism",
    "nuclear",
    "SpaceX",
    "Demiurge",
    "Christ",
    "king",
    "bomb",
    "children",
    "apple",
    "orange",
    "Caesar",
    "Rome",
    "nuclear strike",
    "the Internet",
    "radio",
    "television",
    "media",
    "Joe Biden",
    "Donald Trump",
    "Jeff Bezos",
    "Bill Gates",
    "antichrist",
    "Moloch",
    "Baal",
    "Israel",
    "Tel-Aviv",
    "Jerusalem",
    "Babylon",
    "adrenochrome",
    "MK-Ultra",
    "psyop",
    "coronavirus",
    "vaccine",
    "bioweapon",
    "sarin gas",
    "terrorist",
    "CIA",
    "ATF",
    "DEA",
    "LGBT",
    "flesh",
    "human",
    "police",
    "Nick Fuentes",
    "informant",
    "military",
    "president",
    "Kennedy",
    "assassin",
    "assassination attempt",
    "Bible",
    "disease",
    "the Apocalypse",
    "entrapment",
    "Sonichu",
    "CWC",
    "famine",
    "insanity",
    "food",
    "water",
    "radiation",
    "shortage",
    "Mossad",
    "Wuhan",
    "humanity",
    "nuclear missile",
    "QAnon"
]

const verbs = 
[
    "damn",
    "kill",
    "imprison",
    "stab",
    "praise",
    "condemn",
    "coerce",
    "consume",
    "create",
    "die",
    "shoot",
    "pray",
    "praise",
    "care",
    "grant",
    "capture",
    "entrap",
    "think",
    "leave",
    "save",
    "tell",
    "say",
    "do",
    "work",
    "start",
    "force",
    "speak",
    "embargo",
    "declare",
    "love",    
    "hate",
    "sell",
    "buy",
    "cuck",
    "cope",
    "seethe",
    "sneed",
    "dilate",
    "institute",
    "rise",
    "attack",
    "defend",
    "spread"
]  

const tenses = 
{
    Past: 0,
    Present: 1,
    Future: 2
}

const adjectiveCombinerPresentSingular = "is"

const adjectiveCombinerPresentPlural = "are"

const adjectiveCombinersPast = 
[
    "was",
    "has been"
]

const adjectiveCombinersFuture = 
[
    "will be",
    "is to be"
]

const combiners = 
[
    ", and,",
    ", so,",
    " because",
    ". Also,"
]

const presentAction = "ing"
const pastAction = "ed"

const plural = "s"

const futurePrewords = 
[
    "will",
    "is going to",
    "is gonna"
]

const adjectives = 
[
    "stupid",
    "cuck",
    "evil",
    "good",
    "holy",
    "retarded",
    "big",
    "extinct",
    "fat",
    "dead",
    "alive",
    "satanic",
    "coomer",
    "idiot",
    "moron",
    "malicious",
    "benevolent",
    "broken",
    "wise",
    "gay",
    "unholy"
]

const demandCombiner = 
[
    "will",
    "must"
]

const sentenceEnding = 
[
    ".",
    "!"
]

const sentenceTypes = 
[
    "exclamatory",
    "declarative",
    "question",
    "demand"
]

function getNoun()
{
    return nouns[Math.floor(Math.random() * nouns.length)]
}

function getVerb()
{
    return verbs[Math.floor(Math.random() * verbs.length)]
}

function getCombiner()
{
    return combiners[Math.floor(Math.random() * combiners.length)]
}

function getSuffix()
{
    return suffixes[Math.floor(Math.random() * suffixes.length)]
}

function getAdjective()
{
    return adjectives[Math.floor(Math.random() * adjectives.length)]
}

function getDemandCombiner()
{
    return demandCombiner[Math.floor(Math.random() * demandCombiner.length)]
}

function getSentenceEnding()
{
    return sentenceEnding[Math.floor(Math.random() * sentenceEnding.length)]
}

function getPluralNoun()
{
    let noun = getNoun()

    if (noun.endsWith("s"))
    {
        noun += "es"
    }
    else
    {
        noun += "s"
    }

    return noun
}

function getPossessiveNoun()
{
    let noun = getNoun()

    if (noun.endsWith("s"))
    {
        noun += "\'"
    }
    else
    {
        noun += "\'s"
    }

    return noun
}

function removeEndingE(string)
{
    let returnSentence = string
    let notAddedSuffix = true

    if (string.substr(string.length - 1) == "e" && string.search("die") == -1)
    {
        returnSentence = string.substr(0, string.length - 2)
        notAddedSuffix = false
    }

    if (notAddedSuffix && Math.floor(Math.random() * 5) > 1)
    {
        
    }

    return returnSentence
}

function getVerbWithTense(tense, isHappening)
{
    let verb = getVerb()

    switch(tense)
    {
        case 0:
            switch (verb)
            {
                case "shoot":
                    verb = "shot"
                    break
                case "rise":
                    verb = "rose"
                    break
                case "think":
                    verb = "thought"
                    break
                case "leave":
                    verb = "left"
                    break
                case "tell":
                    verb = "told"
                    break
                case "say":
                    verb = "said"
                    break
                case "do":
                    verb = "did"
                    break
                case "sell":
                    verb = "sold"
                    break
                case "buy":
                    verb = "bought"
                    break
                default:
                    if (verb.endsWith("e"))
                    {
                        verb += "d"
                    }
                    else
                    {
                        verb += "ed"
                    }
                    break
            }   

            break
        case 1:
            if (isHappening)
            {
                if (verb.endsWith("e"))
                {
                    verb = verb.substr(0, verb.length - 1) + "ing"
                }
                else
                {
                    verb += "ing"
                }
            }

            break
        case 2:
            verb = "will " + verb
            break
    }

    return verb
}

function getCombinerWithTense(tense, isPlural)
{
    let word = ""

    switch(tense)
    {
        case 0:
            if (isPlural)
            {
                word = "were"
            }
            else
            {
                word = "was"
            }

            break
        case 1:
            if (isPlural)
            {
                word = "are"
            }
            else
            {
                word = "is"
            }

            break
        case 2:
            word = "will be"

            break
    }

    return word
}

function createSentence()
{
    let chosenSentence = Math.floor(Math.random() * 4)
    let sentence = ""
    let tense = Math.floor(Math.random() * 3)
    let type

    switch(chosenSentence)
    {
        case 0: // Exclamation
            switch(Math.floor(Math.random() * 4))
            {
                case 0:
                    sentence = getNoun() + " " + getAdjective() + "!"
                    break
                case 1:
                    sentence = getNoun()+ " " + getVerb()

                    sentence = removeEndingE(sentence)

                    sentence = sentence + " " + getNoun() + "!"
                    break;
                case 2:
                    sentence = getAdjective() + " " + getNoun() + " " + getVerb()

                    sentence = removeEndingE(sentence)

                    sentence = sentence + " " + getNoun() + "!"
                    break;
                case 3:
                    sentence = getAdjective() + " " + getNoun() + " " + getVerb()

                    sentence = removeEndingE(sentence)

                    sentence = sentence + " " + getAdjective() + " " + getNoun() + "!"
                    break
            }
            break
        case 1: // Statement
            let useAdj = Math.random() > 0.5 ? true : false

            if (useAdj) // Description
            {
                type = Math.floor(Math.random() * 5)

                if (type == 0) // Singular simple.
                {
                    sentence = getNoun() + " " + getCombinerWithTense(tense, false) + " " + getAdjective() + "."
                }
                else if (type == 1) // Double singular complex.
                {
                    sentence = getNoun() + " " + getCombinerWithTense(tense, false) + " " + getAdjective() + " " + getCombiner() + getNoun() + " " + getCombinerWithTense(tense, false) + " " + getAdjective() + "."
                }
                else if (type == 2) // Plural simple.
                {
                    sentence = getPluralNoun() + " " + getCombinerWithTense(tense, true) + " " + getAdjective() + "."
                }
                else if (type == 3) // Double plural complex.
                {
                    sentence = getPluralNoun() + " " + getCombinerWithTense(tense, true) + " " + getAdjective() + " " + getCombiner() + getPluralNoun() + " " + getCombinerWithTense(tense, true) + " " + getAdjective() + "."
                }
                else if (type == 4) // Mixed complex.
                {
                    let singularFirst = Math.random() > 0.5 ? true : false

                    if (singularFirst)
                    {
                        sentence = getNoun() + " " + getCombinerWithTense(tense, false) + " " + getAdjective() + " " + getCombiner() + getPluralNoun() + " " + getCombinerWithTense(tense, true) + " " + getAdjective() + "."
                    }
                    else
                    {
                        sentence = getPluralNoun() + " " + getCombinerWithTense(tense, true) + " " + getAdjective() + " " + getCombiner() + getNoun() + " " + getCombinerWithTense(tense, false) + " " + getAdjective() + "."
                    }
                }
            }
            else // Action
            {

                if (Math.random() > 0.5)
                {
                    sentence = Math.random() > 0.5 ? getPluralNoun() : getNoun() + " " + getVerbWithTense(tense, Math.random() > 0.5 ? true : false) + " " + Math.random() > 0.5 ? getPluralNoun() : getNoun()
                }
                else
                {
                    sentence = Math.random() > 0.5 ? getPluralNoun() : getNoun() + " " + getVerbWithTense(tense, Math.random() > 0.5 ? true : false) + " " + getAdjective() + Math.random() > 0.5 ? getPluralNoun() : getNoun()
                }
            }

            break
        case 2: // Question
            type = Math.floor(Math.random() * 2)
            
            if (type == 0)
            {
                sentence = getNoun() + " " + getAdjective() + "?"
            }
            else
            {
                let verbAndNoun = Math.floor(Math.random())

                if (verbAndNoun == 0)
                {
                    sentence = "Will " + getNoun() + " " + getVerb() + "?"
                }
                else
                {
                    sentence = "Will " + getNoun() + " " + getVerb() + " " + getNoun() + "?"
                }
            }
            
            break
        case 3: // Command
            let complexity = Math.floor(Math.random() * 4)

            if (complexity == 0)
            {
                sentence = getNoun() + " " + getDemandCombiner() + " " + getVerb() + getSentenceEnding()
            }
            else if (complexity == 1)
            {
                sentence = getNoun() + " " + getDemandCombiner() + " " + getVerb() + " " + getNoun() + getSentenceEnding()
            }
            else if (complexity == 2)
            {
                sentence = getAdjective() + " " + getNoun() + " " + getDemandCombiner() + " " + getVerb() + getSentenceEnding()
            }
            else if (complexity == 3)
            {
                sentence = getAdjective() + " " + getNoun() + " " + getDemandCombiner() + " " + getVerb() + " " + getNoun() + getSentenceEnding()
            }
            break
    }

    let start = sentence.substr(0, 1).toUpperCase()
    sentence = sentence.substr(1, sentence.length - 1)

    return start + sentence
}

function speakWithGod()
{
    let wordsFromGod = ""
    let sentenceCount = Math.floor(Math.random() * 50) + 1

    for (let i = 0; i <= sentenceCount; i++)
    {
        wordsFromGod += createSentence() + " "
    }

    document.getElementById("text").textContent = wordsFromGod
}