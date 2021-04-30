

/*
  - guess the color (hint: it's "red")
  - disable a link
  - hijack a link
*/

// Variables
const disableButton = document.getElementById('disable') 
const correctAnser = "red";
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');

// Function
function disableClick(event){
    event.preventDefault();
    console.log('you clicked the link!!! 😂');
}
function handleClick(event) {
    console.log('you clicked a button!');
    // console.log(event);
    // console.log(event.value);
    console.log(event.target.value);
    // Earth.USA.Atlanta.Georgia.EastLake.ChrisHouse

    if (event.target.value === correctAnser) {
        console.log('👍🏾');
    }  else { 
        console.log('💩');
    }
}
// Set the click for each button
disableButton.addEventListener('click', disableClick)
redButton.addEventListener('click', handleClick);
greenButton.addEventListener('click', handleClick);
blueButton.addEventListener('click', handleClick);