const canvas = document.querySelector('canvas');

const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

//Collisions, it checks every 70 tiles
const collisionsMap = []
for (let i = 0; i < collisions.length; i+= 70) {
    collisionsMap.push(collisions.slice(i, 70 + i));

}

class Boundary {
    static width = 48
    static height = 48
    constructor ({position}) {
        this.position = position 
        this.width = 48;
        this.height = 48;
    }
    draw () {
      context.fillStyle = 'rgba(255, 0, 0, 0.0)'  
      context.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const boundaries = []
const offset = {
    x: -300, 
    y: -100
}

collisionsMap.forEach((row, i) => {
    row.forEach ((symbol, j) => {
    if (symbol === 1025)
     boundaries.push(
        new Boundary({
            position: {
         x: j * Boundary.width + offset.x,
         y: i * Boundary.height + offset.y
     }}))   
    })
})

const image = new Image();
image.src = './Assets/map.png';

const playerImage = new Image();
playerImage.src = './Assets/playerDown.png';


//Player Movement



// Illusion of Movement
class Sprite {
    constructor({ position, velocity, image, frames = {max: 1} }) {
        this.position = position
        this.image = image
        this.frames = frames
        this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height 
        }
        
    }
    draw() {
        context.drawImage (

            //Cropping of the Image
            this.image, 
            0, 
            0, 
            this.image.width / this.frames.max, 
            this.image.height,
    
            // Position 
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max, 
            this.image.height,
            )
    }
}



const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2, 
        y: canvas.height / 2 - 68 / 2
    },
    image: playerImage, 
    frames: {
        max: 4
    }
})


const background = new Sprite ({ 
    position: { 
        x: offset.x, 
        y: offset.y
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



const movables = [background, ...boundaries]

function collision({rectangle1, rectangle2}) {
return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width && 
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height && 
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y)

}
function movement() {
    window.requestAnimationFrame(movement);
    background.draw()
    boundaries.forEach(boundary => {
      boundary.draw();  
    })
    player.draw()

        // This allows for holding two different movement keys at the same time, and also prevents certain objects from moving, and also prevents Player From Colliding with boundary
        let moving = true;
        if (keys.w.pressed && lastKey === 'w') {
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
              collision({
                rectangle1: player,
                rectangle2: {
                  ...boundary,
                  position: {
                    x: boundary.position.x,
                    y: boundary.position.y + 3
                  }
                }
              })
            ) {
                console.log('colliding');
            moving = false;
                break;
            }
          }
          if (moving)
            movables.forEach((movable) => {
                movable.position.y +=3
            })

          } else if (keys.s.pressed && lastKey === 's')  {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                  collision({
                    rectangle1: player,
                    rectangle2: {
                      ...boundary,
                      position: {
                        x: boundary.position.x,
                        y: boundary.position.y - 3
                      }
                    }
                  })
                ) {
                    console.log('colliding');
                moving = false;
                    break;
                }
              }
              if (moving)
            movables.forEach((movable) => {
            movable.position.y -=3
        })
        } else if (keys.a.pressed && lastKey === 'a')  {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                  collision({
                    rectangle1: player,
                    rectangle2: {
                      ...boundary,
                      position: {
                        x: boundary.position.x + 3,
                        y: boundary.position.y
                      }
                    }
                  })
                ) {
                    console.log('colliding');
                moving = false;
                    break;
                }
              }
              if (moving)
            movables.forEach((movable) => {
            movable.position.x +=3
        })
        } else if (keys.d.pressed && lastKey === 'd') {
            for (let i = 0; i < boundaries.length; i++) {
                const boundary = boundaries[i]
                if (
                  collision({
                    rectangle1: player,
                    rectangle2: {
                      ...boundary,
                      position: {
                        x: boundary.position.x - 3,
                        y: boundary.position.y
                      }
                    }
                  })
                ) {
                    console.log('colliding');
                moving = false;
                    break;
                }
              }
              if (moving)
            movables.forEach((movable) => {
            movable.position.x -=3
        })
    }
        
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