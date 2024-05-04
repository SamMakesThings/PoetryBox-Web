// NOTE: Using var instead of const because of very old browsers on kindles

var schedule = null;
fetch('./poem-schedule.json')
    .then(response => response.json())
    .then(data => schedule = data);

// Look at schedule JSON to identify currently scheduled poem
function getCurrentPoem() {
    var now = new Date();
    var nowISO = now.toISOString();

    var nowMinutes = now.getMinutes();

    if (nowMinutes === 13 || nowMinutes === 14) {
        return "pursuitClue";
    }

    var nextPoemObject = schedule.schedule.slice().reverse().find(poem => poem.datetimeUTC < nowISO);
    var nextPoemName = nextPoemObject.poem;
    console.log(nextPoemName)
    return nextPoemName;
}

// A function that takes a string and an HTML div, wipes the contents of that div, then fills it with <p> elements for each line in the string
function fillPoemDiv(div, pursuitDiv) {
    var poemName = getCurrentPoem();
    // fetch poem from local path
    var poemResponse = fetch(`./poems/${poemName}.txt`)


    // If it's time to show the secret clue, also add the pursuit guy logo
    if (poemName === "pursuitClue") {
        pursuitDiv.innerHTML += 
        `<p>_________________________@@@@@@@@_________________</p>
        <p>______________________@@.________@@@@_____________</p>
        <p>____________________@@___#@_________@@____________</p>
        <p>_________________@@@@____@@@___/@@@__@@___________</p>
        <p>_________________@@@@___________@/___@@___________</p>
        <p>____________________@@_@@@__________@@_#@@@@(@@@__</p>
        <p>___________@@@@@@@@@@@@@_%@@@@@@@_@@___@@_@_@@@@@_</p>
        <p>_____#@@@@___@@@#___________&@@@@@____@@___@@@@@@_</p>
        <p>__@@@@___#@@_____#@@@_______.@@@(__@@@__@@@_______</p>
        <p>_@@@*@@@@@__________%@@______@@/.*@@@@@&__________</p>
        <p>___@@_@@@@___________.@@_____&@@__________________</p>
        <p>______________________@@______@@__________________</p>
        <p>______@@@@_(@@_______@@_______#@@_________________</p>
        <p>____@@.__@*__@@____@@@__@@@@@__@@_________________</p>
        <p>__*@@_@@@_@@,__@@@@__@@@___@@_%@@_________________</p>
        <p>__%@@@@_____@@@@@@@@@%_____@@_@@,_________________</p>
        <p>__________________________#@%_@@@@@@@@____________</p>
        <p>__________________________@@__@__&@@@_____________</p>
        <p>__________________________@@______@@@_____________</p>`
    } else {
        pursuitDiv.innerHTML = "";
    }

    poemResponse.then(response => response.text())
        .then(text => {
            div.innerHTML = text.split("\n").map(line => `<p>${line}</p>`).join("");
        });
}



