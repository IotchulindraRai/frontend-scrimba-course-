// grab the count-el element, store it in a countEl variable
let int=document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    int.innerText=count
    console.log(count)
    // set countEl's innerText to the count
}


