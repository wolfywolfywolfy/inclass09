let myEquationList = [
    {
        equationName: "Entropy",
        subjectName: "Physics"
    },
    {
        equationName: "Half-Life",
        subjectName: "Chemistry"
    }

];

let position = 0;

//display first item in list (first equation)
window.onload = function() {
    displayEquation(0);
    document.getElementById("clickPrev").disabled = true;
}

//display equation below
function displayEquation(i){
    let displayHere = document.getElementById("newEquation");
    displayHere.innerHTML = "";

    let p = document.createElement("p");
    p.textContent = myEquationList[i].equationName;
    displayHere.appendChild(p);

    p = document.createElement("p")
    p.textContent = myEquationList[i].subjectName;
    displayHere.appendChild(p);
}

//Increment positions
document.getElementById("clickNext").onclick = function(){
    //increment
    position++;
    //how disable button at position;
    if(position >= myEquationList.length - 1){
        document.getElementById("clickNext").disabled = true;
    }

    //Display new position of equation
    displayEquation(position);
    //make sure they click previous
    document.getElementById("clickPrev").disabled = false;
}

//Decrement positions
document.getElementById("clickPrev").onclick = function(){
    //decrement
    position--;

    //When at first position...no more click previous
    if(position <= 0) {
        document.getElementById("clickPrev").disabled = true;
    }

    //Display new position of equation
    displayEquation(position);
    //make sure they can click next still
    document.getElementById("clickNext").disabled = false;
}

//submit button
document.getElementById("submitHere").onclick = function(){
    //get text from text box
    let myEquation = document.getElementById("equationName").value;
    let mySubject = document.getElementById("subjectName").value;

    //add new object to array
    let myObject = {
        equationName: myEquation, 
        subjectName: mySubject
    }

    myEquationList.push(myObject);

    //set position to newly added equation
    position = myEquationList.length - 1;

    //display current equation (update clickers)
    displayEquation(position);
    document.getElementById("clickNext").disabled = true;
    document.getElementById("clickPrev").disabled = false;
}