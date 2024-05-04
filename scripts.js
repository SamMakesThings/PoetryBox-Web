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
function fillPoemDiv(div) {
    var poemName = getCurrentPoem();
    // fetch poem from path
    var poemResponse = fetch(`https://raw.githubusercontent.com/SamMakesThings/PoetryBox-Web/main/poems/${poemName}.txt`)


    poemResponse.then(response => response.text())
        .then(text => {
            div.innerHTML = text.split("\n").map(line => `<p>${line}</p>`).join("");
        });
}



