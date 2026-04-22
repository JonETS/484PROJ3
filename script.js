// Task 1: Verification Log
console.log("Status Manager Started");
// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!"; //update h1 text

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute('data-action', "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
function highlightListItems(){
    var items = document.querySelectorAll('li');
    items.forEach(element => {
        element.style.color = "blue";
    });
}
window.addEventListener('load', highlightListItems);//runs when page is loaded

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7]. 
function toggleStatus(e){
    e.preventDefault();
    statusOutput.classList.toggle('hidden'); //toggles the hidden class on div
    if(statusOutput.classList.contains('hidden') == true){//is hidden
        mainTitle.style.backgroundColor = "";
    }
    else{//not hidden
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp();
    }
}
toggleButton.addEventListener('click', toggleStatus); //check for button clicks, no () since only event object is passed
function createTimestamp(){
    var timeSpan = document.getElementById('timeSpan');
    if(timeSpan == null){ //check if timestamp span exists
        timeSpan = document.createElement("span");//create span
        timeSpan.id = 'timeSpan';//id to check for 
    }
    timeSpan.innerHTML = new Date().toLocaleTimeString(); //get time
    statusOutput.appendChild(timeSpan);
}

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10]. 
function startFlashing(){
    if(intervalId == null) //prevent creating multiple intervals
    {
        intervalId = setInterval(() => controlPanel.classList.toggle('hidden'), 500);//call every 500ms and store id in global variable
    }
}
function stopFlashing(){
    clearInterval(intervalId);//stop flashing with the id in globalID
    intervalId = null; //reset to allow a new interval
}
timerButton.addEventListener('click', startFlashing);//click to start flash
timerButton.addEventListener('dblclick', stopFlashing);//double click to stop flash