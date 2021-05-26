
document.addEventListener("DOMContentLoaded", () => {
})
let setInterval = window.setInterval(increaseNumber, 1000) //do not change it
let pauseButton = document.getElementById('pause')
let paused = pauseButton.innerText

pauseButton.addEventListener('click', enableDisable)

function enableDisable() {
    if (paused) {
        // debugger;
        clearInterval(setInterval)
        pauseButton.innerHTML = 'resume'
        paused = false;
        subtractButton.disabled = true;
        plusButton.disabled = true;
        likeButton.disabled = true;
    } else {
        // debugger;
        setInterval = window.setInterval(increaseNumber, 1000)
        pauseButton.innerHTML = 'pause';
        paused = true;
        subtractButton.disabled = false;
        plusButton.disabled = false;
        likeButton.disabled = false;
    }
}

let form = document.forms[0]
let input = document.getElementById('comment-input')
let submit = document.getElementById('submit')
let likeButton = document.getElementById('heart')
let ul = document.createElement('ul')
let commentsSection = document.querySelector('div#list.comments')
commentsSection.appendChild(ul)


submit.addEventListener('click', newList)

function newList(event) {
    let inputValue = input.value
    let li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = inputValue
    form.reset()
    event.preventDefault()
};

let subtractButton = document.getElementById('minus');
let plusButton = document.getElementById('plus');
let number = 0;
const counter = document.getElementById('counter')

subtractButton.addEventListener('click', decreaseNumber)

function decreaseNumber() {
    number--
    counter.innerHTML = number;
}

plusButton.addEventListener('click', increaseNumber);

function increaseNumber() {
    number++
    counter.innerHTML = number;
}

likeButton.addEventListener('click', displayLikes)

let heartLikes = {} //creating empty objects to capture key:value pairs of the counter and times the likes button was clicked
let ulLikes = document.querySelector('.likes')

function displayLikes() {
    const time = parseInt(counter.innerText)
    heartLikes[time] ? heartLikes[time] += 1 : heartLikes[time] = 1 // checking if time key already existts in heartLikes object

    if (document.getElementById(`likes-${time}`)) { //checking if element with that id already exists
        document.getElementById(`likes-${time}`).innerHTML = `${time} was liked ${heartLikes[time]} times`
    }
    else {
        const li = document.createElement('li')
        li.id = `likes-${time}`
        li.innerText = `${time} was liked 1 time`
        ulLikes.appendChild(li)
    }
}



