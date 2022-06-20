const canvas = document.querySelector('canvas');

const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;


context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);


const image = new Image();
image.src = './Assets/map.png';

const playerImage = new Image();
playerImage.src = './Assets/playerDown.png';


image.onload = () => {
    context.drawImage(image, -300, -100);
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
}


//Player Movement