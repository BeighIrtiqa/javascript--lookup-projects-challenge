
countEl = document.getElementById("count-element")
saveEl = document.getElementById("para-count")
totalEl = document.getElementById("para-total")
//intialize the count to 0
let count =0
let total =0

//listen to the click on the increment button 
function increment(){
    count += 1
    countEl.innerText= count
}

function save(){
    total = total + count
    let countSave = count + " - "
    saveEl.textContent += countSave
    totalEl.innerText = total
    countEl.innerText = 0
    count = 0 
    
}


