const canvas = document.querySelector('canvas');

const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

//Collisions, it checks every 70 tiles
const collisions
for (let i = 0; i < collisions.length; i+= 70) {
    collisions.slice(i, 70 + i)
}


const image = new Image();
image.src = './Assets/map.png';

const playerImage = new Image();
playerImage.src = './Assets/playerDown.png';


//Player Movement



// Illusion of Movement
class Sprite {
    constructor({ position, velocity, image}) {
        this.position = position
        this.image = image
    }
    draw() {
        context.drawImage(this.image, this.position.x, this.position.y);
    }
}

const background = new Sprite ({ 
    position: { 
        x: -300, 
        y: -100
    },
    image: image

})


const keys = {
    w: {
        pressed : false
    }, 
    s: {
        pressed : false
    },
    a: {
        pressed : false
    },
    d: {
        pressed : false
    }
}
function movement() {
    window.requestAnimationFrame(movement);
    background.draw()
    context.drawImage(

        //Cropping of the Image
        playerImage, 
        0, 
        0, 
        playerImage.width / 4, 
        playerImage.height,

        // Position 
        canvas.width / 2 - playerImage.width / 4, 
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4, 
        playerImage.height,
        )

        // This allows for holding two different movement keys at the same time
        if (keys.w.pressed && lastKey === 'w')  background.position.y += 3;
        else if (keys.s.pressed && lastKey === 's')  background.position.y -= 3;
        else if (keys.a.pressed && lastKey === 'a')  background.position.x += 3;
        else if (keys.d.pressed && lastKey === 'd') background.position.x -= 3;
        
}
movement();


// WSAD 
let lastKey = ''
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = true;
            lastKey = 'w'
            break;

        case 's':
            keys.s.pressed = true;
            lastKey = 's'
            break;
        
        case 'a':
            keys.a.pressed = true;
            lastKey = 'a'
            break;

        case 'd':
            keys.d.pressed = true;
            lastKey = 'd'
            break;
    }
    
})

window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            keys.w.pressed = false;
            break;

        case 's':
            keys.s.pressed = false;
            break;
        
        case 'a':
            keys.a.pressed = false;
            break;

        case 'd':
            keys.d.pressed = false;
            break;
    }
    
})