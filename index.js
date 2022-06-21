const canvas = document.querySelector('canvas');

const context = canvas.getContext('2d');



canvas.width = 1024;
canvas.height = 576;

//Collisions, it checks every 70 tiles
const collisionsMap = []
for (let i = 0; i < collisions.length; i+= 70) {
    collisionsMap.push(collisions.slice(i, 70 + i));

}

const battleZonesMap = []
for (let i = 0; i < battleZonesData.length; i+= 70) {
    battleZonesMap.push(battleZonesData.slice(i, 70 + i));

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


const battleZones = []

battleZonesMap.forEach((row, i) => {
    row.forEach ((symbol, j) => {
    if (symbol === 1025)
     battleZones.push(
        new Boundary({
            position: {
         x: j * Boundary.width + offset.x,
         y: i * Boundary.height + offset.y
     }}))   
    })
})

const image = new Image();
image.src = '/Assets/map.png';

const playerDownImage = new Image();
playerDownImage.src = '/Assets/playerDown.png';

const playerUpImage = new Image();
playerUpImage.src = '/Assets/playerUp.png';

const playerLeftImage = new Image();
playerLeftImage.src = '/Assets/playerLeft.png';

const playerRightImage = new Image();
playerRightImage.src = '/Assets/playerRight.png';


const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 4 / 2, 
        y: canvas.height / 2 - 68 / 2
    },
    image: playerDownImage, 
    frames: {
        max: 4,
        hold: 10
    },
    sprites: {
        up: playerUpImage, 
        left: playerLeftImage, 
        down: playerDownImage,
        right: playerRightImage
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



const movables = [background, ...boundaries, ...battleZones]

function collision({rectangle1, rectangle2}) {
return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x && 
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width && 
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height && 
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y)

}


const battle = {
    initiated: false
}

function movement() {
    const animationId = window.requestAnimationFrame(movement);
    background.draw()
    boundaries.forEach(boundary => {
      boundary.draw();  
    })
    battleZones.forEach (battleZone => {
     battleZone.draw()
    })
    player.draw()

    let moving = true;
    player.animate = false;

    if (battle.initiated) return
    // Battle Collision Zone and Activate Battle
    if (keys.w.pressed || keys.s.pressed ||keys.a.pressed || keys.d.pressed) {
        for (let i = 0; i < battleZones.length; i++) {
            const battleZone = battleZones[i]
        // So the collision doesn't start  at the edges
            const overlappingArea = (Math.min(player.position.x + 
                player.width, battleZone.position.x + battleZone.width) - Math.max(player.position.x, 
                battleZone.position.x)) * 
                (Math.min(player.position.y + player.height, battleZone.position.y +battleZone.height) - 
                Math.max(player.position.y, battleZone.position.y))


            if (
              collision({
                rectangle1: player,
                rectangle2: battleZone
              }) &&
              overlappingArea > player.width * player.height / 2
              //Random Chance Battle Happens
              && Math.random() < 0.01
            ) {
                console.log('activate battle')
                // deactivate map loop
                window.cancelAnimationFrame(animationId)
                battle.initiated = true
                //Battle Transition to Black
                gsap.to('#overlappingDiv', {
                    opacity: 1,
                    repeat: 3,
                    yoyo: true,
                    duration: 0.4,
                    onComplete() {
                       gsap.to('#overlappingDiv', {
                        opacity: 1,
                        duration: 0.4,
                        onComplete() {
                            animateBattle()
                            gsap.to('#overlappingDiv', {
                                opacity: 0,
                                duration: 0.4
                               }) 
                        }
                       }) 


                       animateBattle()
                    }
                 })
                break;
            }
          }
    }
        // This allows for holding two different movement keys at the same time, and also prevents certain objects from moving, and also prevents Player From Colliding with boundary
       
        if (keys.w.pressed && lastKey === 'w') {
        player.animate = true;    
        player.image = player.sprites.up
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
            player.animate = true;
            player.image = player.sprites.down
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
            player.animate = true;
            player.image = player.sprites.left
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
            player.animate = true;
            player.image = player.sprites.right
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


const battleBackgroundImage = new Image();
battleBackgroundImage.src = './Assets/battleBackground.png'
const battleBackground = new Sprite({
    position: {
   x: 0, 
   y: 0
}, 
image: battleBackgroundImage
})
// enemy
const draggleImage = new Image()
draggleImage.src = './Assets/draggleSprite.png'
const draggle = new Sprite({
   position: {
    x: 800,
    y: 100
   }, 
   image: draggleImage,
   frames: {
     max: 4, 
     hold: 30
   },
   animate: true
})

const embyImage = new Image()
embyImage.src = './Assets/embySprite.png'
const emby = new Sprite({
   position: {
    x: 280,
    y: 325
   }, 
   image: embyImage,
   frames: {
     max: 4, 
     hold: 30
   },
   animate: true
})

//nimateBattle()

function animateBattle() {
    window.requestAnimationFrame(animateBattle)
    battleBackground.draw()
    draggle.draw()
    emby.draw()

}



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