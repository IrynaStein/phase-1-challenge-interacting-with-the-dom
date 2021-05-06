document.addEventListener ("DOMContentLoaded", () => {
    
let input = document.getElementById('comment-input')
let submit = document.getElementById('submit')
let ul = document.createElement('ul')
let commentsSection = document.querySelector('div#list.comments')
commentsSection.appendChild(ul)

submit.addEventListener ('click', newList)

function newList (event){
    let inputValue = input.value
    let li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML = inputValue
    event.preventDefault()
};
    // let seconds = 0;
    // let el = document.getElementById('counter');
    
    // function incrementSeconds() {
    //     seconds += 1;
    //     el.innerHTML = seconds
// }
    });