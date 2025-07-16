// Quiz data with 50 questions

const quizData = [

    { question: "Who is the author of 'Our Casuarina Tree'?", options: ["Toru Dutt", "Rabindranath Tagore", "Sarojini Naidu", "Kamala Das"], answer: "Toru Dutt" },

    { question: "In which year was 'Our Casuarina Tree' first published?", options: ["1876", "1882", "1890", "1900"], answer: "1882" },

    { question: "What is the central symbol in 'Our Casuarina Tree'?", options: ["A river", "A mountain", "A tree", "A bird"], answer: "A tree" },

    { question: "Who is the speaker in 'Ulysses' by Alfred Tennyson?", options: ["Odysseus", "Telemachus", "Penelope", "Achilles"], answer: "Odysseus" },

    { question: "What is the primary theme of 'Ulysses'?", options: ["Love", "Quest for adventure", "Grief", "Nature"], answer: "Quest for adventure" },

    { question: "In 'Our Casuarina Tree', what does the tree symbolize?", options: ["Eternal love", "Memory and loss", "Nature's destruction", "Political freedom"], answer: "Memory and loss" },

    { question: "What mythological figure is Ulysses based on?", options: ["Hercules", "Odysseus", "Perseus", "Theseus"], answer: "Odysseus" },

    { question: "In 'Our Casuarina Tree', what is the 'creeper' compared to?", options: ["A lion", "A python", "A vine", "A snake"], answer: "A python" },

    { question: "What is the setting of 'Ulysses'?", options: ["Troy", "Ithaca", "Sparta", "Athens"], answer: "Ithaca" },

    { question: "Which literary form is 'Ulysses' written in?", options: ["Sonnet", "Ode", "Dramatic monologue", "Epic"], answer: "Dramatic monologue" },

    { question: "How does Toru Dutt use imagery in 'Our Casuarina Tree' to evoke nostalgia?", options: ["Describing the tree's grandeur", "Comparing the tree to a python", "Mentioning the birds' songs", "All of the above"], answer: "All of the above" },

    { question: "What does Ulysses' desire to sail again in 'Ulysses' signify?", options: ["Fear of death", "Restlessness and ambition", "Love for family", "Regret for past actions"], answer: "Restlessness and ambition" },

    { question: "How does the tone of 'Our Casuarina Tree' shift in the final stanza?", options: ["From joy to sorrow", "From description to reflection", "From anger to peace", "From hope to despair"], answer: "From description to reflection" },

    { question: "In 'Ulysses', what does the phrase 'to strive, to seek, to find, and not to yield' emphasize?", options: ["Resignation", "Perseverance", "Defeat", "Sorrow"], answer: "Perseverance" },

    { question: "How does Toru Dutt blend Indian and Western elements in 'Our Casuarina Tree'?", options: ["Using Sanskrit words", "Describing Indian flora with Western poetic forms", "Referencing Greek mythology", "Writing in free verse"], answer: "Describing Indian flora with Western poetic forms" },

    { question: "What does Ulysses' reference to his 'mariners' suggest in the poem?", options: ["Loyalty and companionship", "Fear of betrayal", "Isolation", "Regret"], answer: "Loyalty and companionship" },

    { question: "How does the casuarina tree serve as a metaphor in the poem?", options: ["For fleeting beauty", "For enduring memory", "For political struggle", "For divine power"], answer: "For enduring memory" },

    { question: "What is the significance of the sea in 'Ulysses'?", options: ["A symbol of death", "A symbol of adventure and the unknown", "A symbol of home", "A symbol of peace"], answer: "A symbol of adventure and the unknown" },

    { question: "How does Toru Dutt's use of personification enhance 'Our Casuarina Tree'?", options: ["By giving the tree human emotions", "By describing the tree as a warrior", "By comparing the tree to a god", "By ignoring the tree's features"], answer: "By giving the tree human emotions" },

    { question: "What does Ulysses' attitude toward his son Telemachus reveal?", options: ["Disdain", "Trust and respect", "Jealousy", "Indifference"], answer: "Trust and respect" },

    { question: "'Our Casuarina Tree' is written in the form of a sonnet. True or False?", options: ["True", "False"], answer: "False" },

    { question: "Ulysses expresses contentment with his life in Ithaca. True or False?", options: ["True", "False"], answer: "False" },

    { question: "The casuarina tree is described as having a 'lament' in the poem. True or False?", options: ["True", "False"], answer: "True" },

    { question: "Ulysses mentions his wife Penelope explicitly in the poem. True or False?", options: ["True", "False"], answer: "False" },

    { question: "Toru Dutt wrote 'Our Casuarina Tree' in English. True or False?", options: ["True", "False"], answer: "True" },

    { question: "'Ulysses' is set during the Trojan War. True or False?", options: ["True", "False"], answer: "False" },

    { question: "The casuarina tree is described as a solitary figure in the poem. True or False?", options: ["True", "False"], answer: "True" },

    { question: "Ulysses desires to stay in Ithaca and rule peacefully. True or False?", options: ["True", "False"], answer: "False" },

    { question: "Toru Dutt dedicates 'Our Casuarina Tree' to her siblings. True or False?", options: ["True", "False"], answer: "True" },

    { question: "'Ulysses' reflects Victorian ideals of progress and exploration. True or False?", options: ["True", "False"], answer: "True" },

    { question: "What does the word 'hoar' mean in 'Our Casuarina Tree'?", options: ["Bright", "Frosty or gray", "Tall", "Fragrant"], answer: "Frosty or gray" },

    { question: "In 'Ulysses', what does 'mete' mean in 'to mete and dole'?", options: ["Measure or distribute", "Fight", "Travel", "Rest"], answer: "Measure or distribute" },

    { question: "What is the meaning of 'lament' in 'Our Casuarina Tree'?", options: ["Celebration", "Mourning or sorrow", "Joy", "Anger"], answer: "Mourning or sorrow" },

    { question: "In 'Ulysses', what does 'scudding' refer to?", options: ["Sailing swiftly", "Fighting", "Sinking", "Resting"], answer: "Sailing swiftly" },

    { question: "What does 'consecrate' mean in 'Our Casuarina Tree'?", options: ["To destroy", "To make sacred", "To ignore", "To plant"], answer: "To make sacred" },

    { question: "In 'Ulysses', what does 'vext' mean?", options: ["Pleased", "Troubled or annoyed", "Excited", "Inspired"], answer: "Troubled or annoyed" },

    { question: "What is the meaning of 'boughs' in 'Our Casuarina Tree'?", options: ["Roots", "Branches", "Leaves", "Trunk"], answer: "Branches" },

    { question: "In 'Ulysses', what does 'hyades' refer to?", options: ["A group of stars", "A type of ship", "A Greek city", "A mythological creature"], answer: "A group of stars" },

    { question: "What does 'verdure' mean in 'Our Casuarina Tree'?", options: ["Green foliage", "Dry leaves", "Red flowers", "Barren land"], answer: "Green foliage" },

    { question: "In 'Ulysses', what does 'moan' imply in the context of the sea?", options: ["A sound of joy", "A sound of sorrow or wind", "A type of wave", "A type of ship"], answer: "A sound of sorrow or wind" },

    { question: "Identify the tense of the verb 'sings' in 'Like a huge Python, winding round and round / The rugged trunk, indented deep with scars, / Up to its very summit near the stars, / A creeper climbs, in whose embraces bound / No other tree could live.'", options: ["Present", "Past", "Future", "Past Perfect"], answer: "Present" },

    { question: "Change the voice: 'I cannot rest from travel' (Ulysses).", options: ["Travel cannot be rested from by me.", "I am not rested from travel.", "Travel does not let me rest.", "I cannot be rested from travel."], answer: "Travel cannot be rested from by me." },

    { question: "Join the sentences: 'The casuarina tree stands alone. It is a symbol of memory.'", options: ["The casuarina tree, which stands alone, is a symbol of memory.", "The casuarina tree stands alone and it is a symbol of memory.", "The casuarina tree stands alone but is a symbol of memory.", "The casuarina tree stands alone, it is a symbol of memory."], answer: "The casuarina tree, which stands alone, is a symbol of memory." },

    { question: "Change the narration: Ulysses said, 'I will drink life to the lees.'", options: ["Ulysses said that he would drink life to the lees.", "Ulysses says that he will drink life to the lees.", "Ulysses said that he will drink life to the lees.", "Ulysses says that he would drink life to the lees."], answer: "Ulysses said that he would drink life to the lees." },

    { question: "Identify the tense of 'have drunk' in 'I have drunk life to the lees' (Ulysses).", options: ["Present Perfect", "Past Perfect", "Future Perfect", "Simple Past"], answer: "Present Perfect" },

    { question: "Change the voice: 'The stars consecrate the tree' (Our Casuarina Tree).", options: ["The tree is consecrated by the stars.", "The stars are consecrated by the tree.", "The tree consecrates the stars.", "The stars were consecrated by the tree."], answer: "The tree is consecrated by the stars." },

    { question: "Join the sentences: 'Ulysses speaks of adventure. He rejects a quiet life.'", options: ["Ulysses speaks of adventure and rejects a quiet life.", "Ulysses speaks of adventure but rejects a quiet life.", "Ulysses, speaking of adventure, rejects a quiet life.", "Ulysses speaks of adventure, he rejects a quiet life."], answer: "Ulysses, speaking of adventure, rejects a quiet life." },

    { question: "Change the narration: Toru Dutt said, 'The tree’s lament echoes my own.'", options: ["Toru Dutt said that the tree’s lament echoed her own.", "Toru Dutt says that the tree’s lament echoes her own.", "Toru Dutt said that the tree’s lament echoes her own.", "Toru Dutt says that the tree’s lament echoed her own."], answer: "Toru Dutt said that the tree’s lament echoed her own." },

    { question: "Identify the tense of 'shall shine' in 'Yet shall my heart in truth unwavering shine' (Our Casuarina Tree).", options: ["Present", "Past", "Future", "Present Perfect"], answer: "Future" },

    { question: "Change the voice: 'The mariners follow Ulysses.'", options: ["Ulysses is followed by the mariners.", "The mariners are followed by Ulysses.", "Ulysses follows the mariners.", "The mariners were followed by Ulysses."], answer: "Ulysses is followed by the mariners." }

];

// State variables

let currentQuestion = 0;

let score = 0;

let timer = null;

let timeLeft = 30;

let answerSelected = false;

// DOM elements

const startButton = document.getElementById('start-button');

const displayContainer = document.getElementById('display-container');

const questionContainer = document.getElementById('container');

const nextButton = document.getElementById('next-button');

const scoreContainer = document.getElementById('score-container');

const userScore = document.getElementById('user-score');

const passStatus = document.getElementById('pass-status');

const restartButton = document.getElementById('restart');

const timeLeftDisplay = document.querySelector('.time-left');

const questionCount = document.querySelector('.number-of-question');

// Wrap DOM checks and initialization in a function

function initializeQuiz() {

    const missingElements = [];

    if (!startButton) missingElements.push('start-button');

    if (!displayContainer) missingElements.push('display-container');

    if (!questionContainer) missingElements.push('container');

    if (!nextButton) missingElements.push('next-button');

    if (!scoreContainer) missingElements.push('score-container');

    if (!userScore) missingElements.push('user-score');

    if (!passStatus) missingElements.push('pass-status');

    if (!restartButton) missingElements.push('restart');

    if (!timeLeftDisplay) missingElements.push('time-left');

    if (!questionCount) missingElements.push('number-of-question');

    if (missingElements.length > 0) {

        console.error(`Missing DOM elements: ${missingElements.join(', ')}`);

        return false;

    }

    console.log('All DOM elements found successfully');

    return true;

}

// Run initialization

if (!initializeQuiz()) {

    console.error('Quiz initialization failed due to missing elements');

} else {

    // Event listeners

    startButton.addEventListener('click', () => {

        console.log('Start button clicked');

        startQuiz();

    });

    nextButton.addEventListener('click', () => {

        console.log('Next button clicked');

        displayNext();

    });

    restartButton.addEventListener('click', () => {

        console.log('Restart button clicked');

        restartQuiz();

    });

}

// Start the quiz

function startQuiz() {

    console.log('Starting quiz...');

    try {

        startButton.parentElement.classList.add('hide');

        displayContainer.classList.remove('hide');

        nextButton.style.display = 'none';

        displayQuestion();

        startTimer();

    } catch (error) {

        console.error('Error in startQuiz:', error);

    }

}

// Display the current question

function displayQuestion() {

    console.log(`Displaying question ${currentQuestion + 1}`);

    try {

        answerSelected = false;

        const questionData = quizData[currentQuestion];

        if (!questionData) {

            console.error(`No question data for index ${currentQuestion}`);

            return;

        }

        questionCount.textContent = `${currentQuestion + 1} of ${quizData.length} questions`;

        questionContainer.innerHTML = `

            <div class="question">${questionData.question}</div>

            ${questionData.options.map((option, index) => `

                <div class="option-div" data-option="${option}">${String.fromCharCode(97 + index)}. ${option}</div>

            `).join('')}

        `;

        console.log('Question HTML set');

        const options = document.querySelectorAll('.option-div');

        console.log(`Found ${options.length} options`);

        if (options.length === 0) {

            console.error('No options rendered in questionContainer');

        }

        options.forEach(option => {

            option.addEventListener('click', (event) => {

                console.log(`Option clicked: ${event.target.dataset.option}`);

                checkAnswer(event);

            }, { once: true });

        });

        nextButton.style.display = 'none';

    } catch (error) {

        console.error('Error in displayQuestion:', error);

    }

}

// Start the timer

function startTimer() {

    try {

        if (timer) clearInterval(timer);

        timeLeft = 30;

        timeLeftDisplay.textContent = `${timeLeft}s`;

        timer = setInterval(() => {

            timeLeft--;

            timeLeftDisplay.textContent = `${timeLeft}s`;

            if (timeLeft <= 0) {

                clearInterval(timer);

                if (!answerSelected) {

                    console.log('Timer expired, auto-submitting');

                    checkAnswer(null);

                }

            }

        }, 1000);

        console.log('Timer started');

    } catch (error) {

        console.error('Error in startTimer:', error);

    }

}

// Check the selected answer

function checkAnswer(event) {

    try {

        if (answerSelected) return;

        answerSelected = true;

        clearInterval(timer);

        const selectedOption = event ? event.target.dataset.option : null;

        const correctAnswer = quizData[currentQuestion].answer;

        const options = document.querySelectorAll('.option-div');

        options.forEach(option => {

            if (option.dataset.option === correctAnswer) {

                option.classList.add('correct');

            } else if (selectedOption && option.dataset.option === selectedOption) {

                option.classList.add('incorrect');

            }

            option.style.pointerEvents = 'none';

        });

        if (selectedOption === correctAnswer) {

            score++;

            console.log(`Correct answer! Score: ${score}`);

        } else {

            console.log(`Incorrect answer. Correct: ${correctAnswer}`);

        }

        nextButton.style.display = 'block';

    } catch (error) {

        console.error('Error in checkAnswer:', error);

    }

}

// Move to the next question

function displayNext() {

    try {

        if (!answerSelected && timeLeft > 0) {

            console.log('Cannot skip question until answered or timer expires');

            return;

        }

        currentQuestion++;

        if (currentQuestion < quizData.length) {

            questionContainer.innerHTML = '';

            displayQuestion();

            startTimer();

        } else {

            showResults();

        }

    } catch (error) {

        console.error('Error in displayNext:', error);

    }

}

// Show final results

function showResults() {

    try {

        clearInterval(timer);

        displayContainer.classList.add('hide');

        scoreContainer.classList.remove('hide');

        userScore.textContent = `Score: ${score}/${quizData.length}`;

        passStatus.textContent = score >= 35 ? 'Congratulations! You passed!' : 'Sorry, you did not pass. Try again!';

        console.log(`Quiz completed. Final score: ${score}/${quizData.length}`);

    } catch (error) {

        console.error('Error in showResults:', error);

    }

}

// Restart the quiz

function restartQuiz() {

    try {

        console.log('Restarting quiz...');

        currentQuestion = 0;

        score = 0;

        answerSelected = false;

        scoreContainer.classList.add('hide');

        displayContainer.classList.remove('hide');

        questionContainer.innerHTML = '';

        displayQuestion();

        startTimer();

    } catch (error) {

        console.error('Error in restartQuiz:', error);

    }

}