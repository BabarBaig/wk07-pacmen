
const pacArray = [
    ['PacMan1.png', 'PacMan2.png'],
    ['PacMan3.png', 'PacMan4.png']
];
let   pos = 0;
let   direction = 0;
const pacMen = []; // This array holds all the pacmen

// return an object with random values scaled to input parameter: scale
function setToRandom(scale) {
    return { x: Math.random() * scale, y: Math.random() * scale }
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {

    // returns an object with random values scaled {x: 33, y: 21}
    const velocity = setToRandom(10); // {x:?, y:?}
    const position = setToRandom(200);

    // Add image to div id = game
    const game   = document.getElementById('game');

    const newimg = document.createElement('img');
    newimg.style.position = 'absolute';
    newimg.src = 'PacMan1.png';
    newimg.width = 100;
    // set position here 
    newimg.style.left = position.x
    newimg.style.top  = position.y

    // add new Child image to game
    game.appendChild( newimg);

    // return details in an object
    return { position, velocity, newimg }
}

function update() {

    //loop over pacmen array and move each one and move image in DOM
    pacMen.forEach((item) => {
        checkCollisions(item)
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newimg.style.left = item.position.x;
        item.newimg.style.top  = item.position.y;
    })
    setTimeout(update, 20);
}

function checkCollisions(item) {
    // detect collision with all walls and make pacman bounce by reversing x, y velocity.
    if (item.position.x +  item.velocity.x + item.newimg.width  > window.innerWidth ||
        item.position.x +  item.velocity.x < 0)
        item.velocity.x = -item.velocity.x
    if (item.position.y +  item.velocity.y + item.newimg.height > window.innerHeight ||
        item.position.y +  item.velocity.y < 0)
        item.velocity.y = -item.velocity.y
}

function makeOne() {
    pacMen.push(makePac()); // add a new PacMan
}
