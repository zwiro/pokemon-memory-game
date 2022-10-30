const gameWrapper = document.querySelector('.game-wrapper');
const scoreDisplay = document.querySelector('.score-display');
const gameResultMsg = document.querySelector('.game-result-msg');

let chosenTile;
let flippedTiles = 0;
let score = 0;

const clickedTiles = [];
const matchedTiles = [];
const tilesArray = [
    {
        name: 'charizard',
        image: `images/charizard.png`,
    },
    {
        name: 'eevee',
        image: `images/eevee.png`
    },
    {
        name: 'gengar',
        image: `images/gengar.png`
    },
    {
        name: 'geodude',
        image: `images/geodude.png`
    },
    {
        name: 'golbat',
        image: `images/golbat.png`
    },
    {
        name: 'mew',
        image: `images/mew.png`
    },
    {
        name: 'psyduck',
        image: `images/psyduck.png`
    },
    {
        name: 'snorlax',
        image: `images/snorlax.png`
    },
    {
        name: 'alakazam',
        image: `images/alakazam.png`,
    },
    {
        name: 'caterpie',
        image: `images/caterpie.png`
    },
    {
        name: 'cubone',
        image: `images/cubone.png`
    },
    {
        name: 'mewtwo',
        image: `images/mewtwo.png`
    },
    {
        name: 'magikarp',
        image: `images/magikarp.png`
    },
    {
        name: 'oddish',
        image: `images/oddish.png`
    },
    {
        name: 'dragonite',
        image: `images/dragonite.png`
    },
    {
        name: 'onix',
        image: `images/onix.png`
    },
    {
        name: 'slowpoke',
        image: `images/slowpoke.png`
    },
    {
        name: 'koffing',
        image: `images/koffing.png`
    },
    {
        name: 'charizard',
        image: `images/charizard.png`,
    },
    {
        name: 'eevee',
        image: `images/eevee.png`
    },
    {
        name: 'gengar',
        image: `images/gengar.png`
    },
    {
        name: 'geodude',
        image: `images/geodude.png`
    },
    {
        name: 'golbat',
        image: `images/golbat.png`
    },
    {
        name: 'mew',
        image: `images/mew.png`
    },
    {
        name: 'psyduck',
        image: `images/psyduck.png`
    },
    {
        name: 'snorlax',
        image: `images/snorlax.png`
    },
    {
        name: 'alakazam',
        image: `images/alakazam.png`,
    },
    {
        name: 'caterpie',
        image: `images/caterpie.png`
    },
    {
        name: 'cubone',
        image: `images/cubone.png`
    },
    {
        name: 'mewtwo',
        image: `images/mewtwo.png`
    },
    {
        name: 'magikarp',
        image: `images/magikarp.png`
    },
    {
        name: 'oddish',
        image: `images/oddish.png`
    },
    {
        name: 'dragonite',
        image: `images/dragonite.png`
    },
    {
        name: 'onix',
        image: `images/onix.png`
    },
    {
        name: 'slowpoke',
        image: `images/slowpoke.png`
    },
    {
        name: 'koffing',
        image: `images/koffing.png`
    }
];

tilesArray.sort(() => 0.5 - Math.random());

const flippedTilesCount = document.createElement('p');
const scoreCount = document.createElement('p');
flippedTilesCount.innerText = `Flipped tiles: ${flippedTiles}`;
scoreCount.innerText = `Score: ${score}`;
scoreDisplay.append(scoreCount);
scoreDisplay.append(flippedTilesCount);


for (let i = 0; i < tilesArray.length; i++) {
    const tile = document.createElement('img');
    tile.src = 'images/pokeball.png';
    tile.style.backgroundImage = `url(${tilesArray[i].image})`;
    tile.setAttribute('id', `tile-${i}`);
    gameWrapper.append(tile);
    tile.addEventListener('click', () => {
        if (matchedTiles.includes(tile)) {
            return;
        }
        if (clickedTiles.includes(tile)) {
            return;
        }
        chosenTile = tile;
        revealTile();
        if (clickedTiles.length === 2) {
            checkMatch();
        }
        if (matchedTiles.length === 36) {
            gameOver();
        }
        flippedTiles++;
        flippedTilesCount.innerText = `Flipped tiles: ${flippedTiles}`
        scoreCount.innerText = `Score: ${score}`
    })
}

function revealTile() {
    const clickedTile = document.querySelector(`#${chosenTile.getAttribute('id')}`);
    clickedTile.src = ' ';
    clickedTiles.push(clickedTile);
}

function checkMatch() {
    if (clickedTiles[0].style.backgroundImage === clickedTiles[1].style.backgroundImage) {
        matchedTiles.push(...clickedTiles);
        matchedTiles.forEach(tile => {
            tile.style.pointerEvents = 'none';
        });
        clickedTiles.length = 0;
        score += 50;
    } else {
        if (score <= 0) {
            score = 0;
        } else score -= 10;
        setTimeout(() => {
            clickedTiles.forEach(tile => tile.src = 'images/pokeball.png');
            clickedTiles.length = 0;
        }, 500);
    }
}

function gameOver() {
    const gameOverMsg = document.createElement('p');
    gameOverMsg.innerText = `Congratulations! You found all pairs! It took you ${flippedTiles + 1} clicks! Click here to try again.`;
    gameOverMsg.addEventListener('click', () => {
        window.location.reload();
    })
    gameResultMsg.append(gameOverMsg);
    gameResultMsg.style.visibility = 'visible';
}