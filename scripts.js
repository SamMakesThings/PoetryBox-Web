// NOTE: Using var instead of const because of very old browsers on kindles

var schedule = null;
fetch('https://raw.githubusercontent.com/SamMakesThings/PoetryBox-Web/main/poem-schedule.json')
    .then(response => response.json())
    // .then(data => console.log(data));
    .then(data => schedule = data);

// Look at schedule JSON to identify currently scheduled poem
// Later, can have it look at the github raw version to ensure it's up to date
function getCurrentPoem() {
    var now = new Date();
    var nowISO = now.toISOString();
    var nextPoemObject = schedule.schedule.slice().reverse().find(poem => poem.datetimeUTC < nowISO);
    var nextPoemName = nextPoemObject.poem;
    console.log(nextPoemName)
    return nextPoemName;
}

// A function that takes a string and an HTML div, wipes the contents of that div, then fills it with <p> elements for each line in the string
function fillPoemDiv(div, pursuitDiv) {
    var poemName = getCurrentPoem();
    // fetch poem from path
    var poemResponse = fetch(`https://raw.githubusercontent.com/SamMakesThings/PoetryBox-Web/main/poems/${poemName}.txt`)


    // If it's time to show the secret clue, also add the pursuit guy logo
    if (poemName === "pursuitClue") {
        pursuitDiv.innerHTML += 
        `<p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ@@@@@@@@ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ@@.ͺͺͺͺͺͺͺͺ@@@@ͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ@@ͺͺͺ#@ͺͺͺͺͺͺͺͺͺ@@ͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ@@@@ͺͺͺͺ@@@ͺͺͺ/@@@ͺͺ@@ͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ@@@@ͺͺͺͺͺͺͺͺͺͺͺ@/ͺͺͺ@@ͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ@@ͺ@@@ͺͺͺͺͺͺͺͺͺͺ@@ͺ#@@@@(@@@ͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺ@@@@@@@@@@@@@ͺ%@@@@@@@ͺ@@ͺͺͺ@@ͺ@ͺ@@@@@ͺ</p>
        <p>ͺͺͺͺͺ#@@@@ͺͺͺ@@@#ͺͺͺͺͺͺͺͺͺͺͺ&@@@@@ͺͺͺͺ@@ͺͺͺ@@@@@@ͺ</p>
        <p>ͺͺ@@@@ͺͺͺ#@@ͺͺͺͺͺ#@@@ͺͺͺͺͺͺͺ.@@@(ͺͺ@@@ͺͺ@@@ͺͺͺͺͺͺͺ</p>
        <p>ͺ@@@*@@@@@ͺͺͺͺͺͺͺͺͺͺ%@@ͺͺͺͺͺͺ@@/.*@@@@@&ͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺ@@ͺ@@@@ͺͺͺͺͺͺͺͺͺͺͺ.@@ͺͺͺͺͺ&@@ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ@@ͺͺͺͺͺͺ@@ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺ@@@@ͺ(@@ͺͺͺͺͺͺͺ@@ͺͺͺͺͺͺͺ#@@ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺ@@.ͺͺ@*ͺͺ@@ͺͺͺͺ@@@ͺͺ@@@@@ͺͺ@@ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺ*@@ͺ@@@ͺ@@,ͺͺ@@@@ͺͺ@@@ͺͺͺ@@ͺ%@@ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺ%@@@@ͺͺͺͺͺ@@@@@@@@@%ͺͺͺͺͺ@@ͺ@@,ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ#@%ͺ@@@@@@@@ͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ@@ͺͺ@ͺͺ&@@@ͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>
        <p>ͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺͺ@@ͺͺͺͺͺͺ@@@ͺͺͺͺͺͺͺͺͺͺͺͺͺ</p>`
    }

    poemResponse.then(response => response.text())
        .then(text => {
            div.innerHTML = text.split("\n").map(line => `<p>${line}</p>`).join("");
        });
}



