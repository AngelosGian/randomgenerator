const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_-+={}[]?>.,<;'
const pressButton = document.getElementById('press-button')
const output = document.getElementById('result')

pressButton.addEventListener('click', randomize)

function randomize(){
    let randomChar = '';    
    for(let i=0; i < 12; i++){
        randomChar += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return output.innerHTML = randomChar;
}