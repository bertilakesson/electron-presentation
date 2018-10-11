// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const content = document.getElementById('content')
const nextButton = document.getElementById('nextButton')
let index = 0

const presentation = [
    {
        title: "First Page",
        bullets: [
            "Lorem",
            "Ipsum"
        ]
    },
    {
        title: "Second Page",
        bullets: [
            "Some",
            "moar",
            "bullits"
        ]
    }
]

reducer = (acc, page) => {console.log(page); return acc + 1 + page.bullets.length}

const total = presentation.reduce(reducer, 0)

function showPresentation(presentation, index) {
    let page;
    for(page = 0; page < presentation.length; page++){
        if (index >= presentation[page].bullets.length + 1) {
            index -= presentation[page].bullets.length + 1;
        } else {
            break;
        }
    }
    showPage(presentation[page].title, presentation[page].bullets, index)
}

function showPage(title, points, index) {
    content.innerHTML = "<h1>" + title + "<h1>"
    content.innerHTML += "<ul>"
    var i
    for (i = 0; i < index; i++) {
        if (i == index - 1) {
            content.innerHTML += "<h2><li class='fade'>" + points[i] + "</li></h2>"
        } else {
            content.innerHTML += "<h2><li>" + points[i] + "</li></h2>"
        }
    }
    content.innerHTML += "</ul>"
    // content.innerHTML += "index:" + index
}

function showPoints(index) {
    showPresentation(presentation, index)
}

showPoints(0)

next = () => {
    if (index < total - 1) {
        index++
        showPoints(index)
    }
}

prev = () => {
    if (index > 0) {
        index--
        showPoints(index)
    }
}

nextButton.addEventListener("click", next)
content.addEventListener("click", next)
prevButton.addEventListener("click", prev)