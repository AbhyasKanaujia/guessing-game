'use strict';

// # Game Data Structures
// ## Message categories
const messages = {
  welcome: ["🎮 Welcome to the Guessing Game! Prepare your brain... or what's left of it.", "🤔 Think you're smart enough to guess the number? Let's see about that!", "🎉 Welcome, brave soul! May your guesses be better than the last guy's.", "🧠 Sharpen those mental skills! This game might be simple, but so is tripping over your own feet.", "🙌 Welcome aboard! Your mission: guess the number and not embarrass yourself. Good luck!", "👋 Hello there! Ready to play, or did you just come to click buttons randomly?", "💡 Welcome! Pro tip: The number is between 1 and 20. You're welcome.", "🎯 Aim high, aim low, just don’t aim to fail. Welcome to the madness!", "🔥 Welcome, legend in the making (or disaster in progress). Let’s do this!", "✨ A fresh start, a clean slate. Now let’s ruin it with bad guesses.", "🤖 Welcome, human! Try not to disappoint me with your guessing skills.", "🐒 Welcome to the jungle! Will you guess the number or swing aimlessly?", "🌟 You’ve entered the game zone! Time to prove you're smarter than a random number generator.", "🚀 Lift-off! Your guessing adventure begins now. Buckle up!", "🕵️‍♂️ Detective on the case! Can you crack the code or will the number remain a mystery?",],
  noInput: ["😑 What part of 'Enter a number' was unclear? Try again.", '🤦‍♂️ Did you forget how keyboards work? Enter something!', "🫠 Staring at the input box won't make it read your mind. Type a number!", '👻 Invisible guesses are not allowed. Enter a number.', "😡 I don't accept blank stares. Put in a number already!", '📜 Did you write your guess on parchment? Enter it in the box.', '🕵️‍♂️ Guessing in silence, huh? Try actually entering a number.', "🧠 Wow, telepathy? Nope, that doesn't work here. Enter a number!",],
  invalidInput: ['🤡 Numbers only, genius. Hieroglyphics are not allowed.', "🧐 Last I checked, we're not solving riddles. Enter a valid number.", '💩 Is that gibberish? Numbers only, thank you.', '🤖 Your keyboard malfunctioned? Stick to digits.', "👽 Whatever you're trying to say is not understood on this planet.", '🚫 Numbers are digits, not your random life story.', '🫡 I asked for numbers, not some cryptic mumbo jumbo.', '🛑 Error: Only numbers accepted. Retry, Einstein.',],
  tooLow: ['📉 Too low! Digging for treasure under the ocean? Try guessing higher.', '🥶 Your guess is colder than an iceberg. Try guessing higher.', "🐜 That's so low, even ants are laughing at you. Guess higher.", "🏚️ You're way below the poverty line of guesses. Go higher.", '📉 Really? Did you forget how numbers work? Try a higher guess.', "💡 This isn't 'How low can you go'. Guess a bigger number.", "🎢 You're at the bottom of the rollercoaster. Guess higher.", "🔨 You're hitting rock bottom with that guess. Aim higher.", "🐟 Your guess is so low, you're fishing in a dry pond. Go higher.", "🌱 Even sprouts grow higher than that. Try guessing higher.", "🕳️ You’ve hit a black hole of bad guesses. Aim higher.", "📜 Is this a historical artifact? Guess a more modern (higher) number.", "🐾 Even a turtle would aim higher. Guess a bigger number.", "🛠️ You’re building a basement. Try for the ground floor—guess higher.", "🏗️ Is this the foundation? Aim for the penthouse and guess higher.", "🐛 That guess is crawling at insect levels. Go higher.", "📻 Your guess is so low, it’s on AM frequency. Guess higher.", "⛏️ Mining, are we? Dig higher for the gold. Guess higher.", "🌊 This guess is underwater. Swim up to the surface and guess higher.", "🧊 Frozen at the bottom? Melt your way up with a higher guess."],
  tooHigh: ['📈 Too high! Are you aiming for the stratosphere? Try guessing lower.', "🏔️ That's higher than Mount Everest. Guess lower.", '🦅 Even birds are impressed by how high you guessed. Try lower.', '🎯 You overshot the mark. Bring it back down and guess lower.', "🚀 Whoa there, Elon Musk. We're staying on Earth. Guess lower.", "🌌 That's too high. NASA called, they want their guess back. Try lower.", "🏢 You're reaching skyscraper levels. Aim lower.", "🎈 Your guess is floating away. Reel it back in and guess lower.", "🔥 Careful! You’re in danger of burning up in the atmosphere. Guess lower.", "🌠 Shooting stars don’t count. Bring it back down and guess lower.", "🍾 That guess is so high, it’s celebrating too early. Try a lower guess.", "📡 Satellites can’t help you here. Come down and guess lower.", "🕊️ Your guess flew out of the nest. Bring it back down and guess lower.", "🎆 Fireworks aren’t part of the game. Guess a bit lower.", "🪂 Parachute down from that high guess. Try guessing lower.", "🗼 Eiffel Tower? Aim for the ground level. Guess lower.", "⛈️ That guess is in the storm clouds. Head lower to safety!", "🛸 Aliens think your guess is out of this world. Guess lower.", "🏹 Archer, you aimed too high. Adjust your bow and guess lower.",],
  winGame: ["🎉 Wow, you actually got it! I'm as shocked as you are.", "🔥 Nailed it! You're either psychic or lucky.", '🥳 Ding ding ding! You win bragging rights.', '👏 Bravo! You guessed it right. Finally.', "🎯 Bulls-eye! That's the number I was thinking of.", '🎆 You did it! Guessing game champion right here.', '🍾 Crack open the bubbly, you guessed correctly!', "💪 Winner, winner, chicken dinner! That's correct.",],
  loseGame: ["🎮 Game Over! Looks like math isn’t your strong suit. Ever considered pottery?", "💀 Dead. Your guessing skills are as sharp as a butter knife.", "🤯 Wow, zero score! Did you mistake this for a meditation app?", "📉 You just set a new low score record. Congrats, loser!", "🔥 Game Over. Guessing isn’t for everyone. Maybe try interpretive dance?", "😂 That was so bad, even the RNG is embarrassed for you.", "🐌 You lost! Your guesses moved slower than my grandma on dial-up.", "😵 Game over. Was your strategy to *not* guess the right number? Genius.", "🤡 Score: ZERO. I’ve seen rocks guess better than this.", "🏳️ You’ve officially surrendered. Better luck in your next life.", "🛑 And that’s a wrap. I hope you’re as good at handling rejection as you are at failing.", "🐒 Oops, you’re out of guesses. Time to let the monkeys try.", "🥴 You didn’t just lose; you redefined what losing looks like. Bravo!", "🫠 That performance? It’s going in the Guessing Game Hall of Shame.", "🎬 Game Over. The sequel: 'How Not to Guess Numbers' is coming soon.", "👻 Guess what? You’re officially haunted by bad choices. Boo!", "📜 Ancient scrolls will document this as the worst guessing streak in history.", "🚪 Game over. Don’t let the door hit you on your way out of mediocrity.", "🤖 If I had emotions, I’d be crying for you right now.", "🍔 Maybe stick to something easier, like ordering a cheeseburger correctly."],
  outOfRange: ['🙄 Is this a joke? Guess something between 1 and 20, not the pits of despair.', "🚀 Whoa there, Elon Musk. We're staying on Earth. Guess between 1 and 20."]
};

// State to track used messages
const usedMessages = {};

// ## Game State
let score;
let secretNumber;
let highScore = 0;

// # Elements
// ## Buttons
const $checkButton = document.querySelector('button.btn.check');

// ## Inputs
const $guessInput = document.querySelector('input.guess');

// ## Messages
const $messageText = document.querySelector('.message');
const $scoreText = document.querySelector('.score');
const $highScoreText = document.querySelector('.highscore');
const $secretNumberText = document.querySelector('.number');
const $body = document.querySelector('body');
const $resetButton = document.querySelector('button.btn.again');
const $gameTitle = document.querySelector('h1');

// Initialize usedMessages to keep track of indices for each category
Object.keys(messages).forEach(category => {
  usedMessages[category] = [];
});

function initGame() {
  // Initialize Game State
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Initialize DOM Values
  $gameTitle.textContent = 'Guess My Number!';
  $messageText.textContent = getRandomMessage('welcome')
  $secretNumberText.textContent = '?';
  $highScoreText.textContent = `${highScore}`;
  $scoreText.textContent = score;

  // Initialize style
  $body.style.backgroundColor = '#222';
  $secretNumberText.style.width = '15rem';

  // Initialize inputs
  $guessInput.value = '';
  $checkButton.disabled = false;
  $guessInput.disabled = false;
}

// # Functions

// ## Input
function validateInput(input) {
  if (!input) {
    $messageText.textContent = getRandomMessage('noInput');
    return false;
  } else if (isNaN(input)) {
    $messageText.textContent = getRandomMessage('invalidInput');
    return false;
  } else if (input < 1) {
    $messageText.textContent = messages['outOfRange'][0];
    return false;
  } else if (input > 20) {
    $messageText.textContent = messages['outOfRange'][1];
    return false;
  }

  return true;
}

// ## Messages
function getRandomMessage(category) {
  const categoryMessages = messages[category];
  const usedIndices = usedMessages[category];
  console.log(usedIndices, category)

  // Reset indices if all messages in the category are used
  if (usedIndices.length >= categoryMessages.length) {
    usedMessages[category] = [];
  }

  // Find available messages
  const availableIndices = categoryMessages
    .map((_, index) => index)
    .filter(index => !usedMessages[category].includes(index));

  // Pick a random index from available
  const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];

  // Mark as used and return the message
  usedMessages[category].push(randomIndex);
  return categoryMessages[randomIndex];
}


// ## Game State
function decrementScore() {
  $scoreText.innerText = --score;
  return score;
}

function updateHighScore() {
  highScore = Math.max(score, highScore);
  $highScoreText.textContent = highScore;
}

function gameOver() {
  $secretNumberText.style.width = '30rem';
  $secretNumberText.textContent = `${secretNumber}`;
  $checkButton.disabled = true;
  $guessInput.disabled = true;
}

function winGame() {
  $body.style.backgroundColor = '#00b159';
  $gameTitle.textContent = 'You Win!';
  $messageText.textContent = getRandomMessage('winGame');
  updateHighScore();
  gameOver();
}

function loseGame() {
  $body.style.backgroundColor = '#d11141';
  $gameTitle.textContent = 'You Lose!'
  $messageText.textContent = getRandomMessage('loseGame');
  gameOver();
}

// # Event listeners
$checkButton.addEventListener('click', function () {
  // Input
  let guess = parseInt($guessInput.value);

  if (validateInput(guess)) {
    if (guess === secretNumber) return winGame()
    if (decrementScore() === 0) return loseGame()
    $messageText.textContent = getRandomMessage(guess < secretNumber ? 'tooLow' : 'tooHigh');
  }
})

$resetButton.addEventListener('click', initGame);

initGame();
