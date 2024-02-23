// Select DOM Elements
const feedBtn = document.getElementById('feedBtn');
const playBtn = document.getElementById('playBtn');
const groomBtn = document.getElementById('groomBtn');
const hungerIndicator = document.getElementById('hungerIndicator');
const happinessIndicator = document.getElementById('happinessIndicator');
const paragraph=document.createElement('p');
const app=document.getElementById('app');
paragraph.textContent="Your Pet is already very happy"

// Define Pet Status Variables
let hungerLevel = 50; // Initial hunger level
let happinessLevel = 50; // Initial happiness level

// Implement Action Functions
function feedPet() {
    hungerLevel-=10
    happinessLevel+=10

    if(hungerLevel<0 ){
        hungerLevel=0
        
    }
    if(happinessLevel>100){
        happinessLevel=100;
        app.appendChild(paragraph);
        
    }
    updateIndicators();
    
}

function playWithPet() {
    happinessLevel+=10
    if (happinessLevel>100){
        happinessLevel=100;
        app.appendChild(paragraph);
    }
    updateIndicators();

}

function groomPet() {
    happinessLevel += 10;
    
    // Ensure happiness level doesn't exceed 100
    if (happinessLevel > 100) {
        happinessLevel = 100;
    }
    
    // Update UI
    updateIndicators();
}

// Update Status Indicators
function updateIndicators() {
    hungerIndicator.textContent = `${hungerLevel}%`;
    happinessIndicator.textContent = `${happinessLevel}%`;
}

// Event Handling
feedBtn.addEventListener('click', feedPet);
playBtn.addEventListener('click', playWithPet);
groomBtn.addEventListener('click', groomPet);

// Initial Update of Status Indicators
updateIndicators();
