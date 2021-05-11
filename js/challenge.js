
document.addEventListener("DOMContentLoaded", () => {

    let setInterval = window.setInterval(increaseNumber, 1000) //do not change it

    // let setInterval;
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
        } else {
            // debugger;
            setInterval = window.setInterval(increaseNumber, 1000)
            pauseButton.innerHTML = 'pause';
            paused = true;
            subtractButton.disabled = false;
            plusButton.disabled = false;
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

    subtractButton.addEventListener('click', decreaseNumber)

    function decreaseNumber() {
        let el = document.getElementById('counter');
        number--
        el.innerHTML = number;
    }

    plusButton.addEventListener('click', increaseNumber);

    function increaseNumber() {
        let el = document.getElementById('counter');
        number++
        el.innerHTML = number;
    }

    likeButton.addEventListener('click', displayLikes)
    let likesObject={}
    function displayLikes() {
        let ulLikes = document.querySelector('.likes')
        // ulLikes.innerHTML = ''
        let counterSnapShot = document.getElementById('counter').innerText
        if(likesObject[counterSnapShot]){
            likesObject[counterSnapShot] += 1
        } else {
            likesObject[counterSnapShot] = 1
        }
        let likesArray = Object.entries(likesObject)
        debugger
        // `${key} has been liked ${value} times`
        // likesObject.forEach()
        // debugger;


        // if (document.getElementById(counterSnapShot)) {
        //     let numberofLikes = document.getElementById(counterSnapShot)
        //     console.log(numberofLikes)
            
        //     console.log(numberofLikes)
        // } else {
        //     let liLikes = document.createElement('li')
        //     liLikes.id = counterSnapShot
        //     liLikes.innerHTML = `${counterSnapShot} has been liked 1 time`
        //     ulLikes.appendChild(liLikes)
        // }
    }



});

