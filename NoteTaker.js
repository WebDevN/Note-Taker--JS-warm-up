let i = 1;
let saveDiv = document.getElementById("saveDiv");
let modal = document.getElementById("myModal");
let note = document.getElementById("note");

function toDo() {
    if (i % 2 != 0) {
        let divRow = document.createElement("div");
        divRow.classList.add("row");

        let divCol = document.createElement("div");
        divCol.classList.add("col");

        let card = document.createElement("div");
        card.classList.add("card")
        card.classList.add("align");
        card.style.width = "25rem";

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerHTML = `Note ${i}`;

        let p = document.createElement("p");
        p.classList.add("card-text");

        let text = document.createTextNode(note.value);

        let modalC = document.createElement("div");
        modalC.classList.add("modal-content");

        let span = document.createElement("span");
        span.classList.add(`close-${i}`);
        span.innerHTML = "&times;"

        let modalT = document.createElement("p");
        modalT.id = `modalText-${i}`;

        let button1 = document.createElement("button");
        button1.type = "button"
        button1.classList.add("btn", "btn-link");
        button1.innerHTML = "Open";

        modalC.appendChild(span);
        modalC.appendChild(modalT);
        modal.appendChild(modalC);

        p.appendChild(text);
        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        card.appendChild(cardBody);
        card.appendChild(button1);
        divCol.appendChild(card);
        divRow.appendChild(divCol);
        saveDiv.appendChild(divRow);

        document.getElementById(`modalText-${i}`).innerHTML = note.value;

        button1.onclick = function () {
            modal.style.display = "block";
            let nodeList = modal.childNodes;
            for (j = 0; j < nodeList.length; j++) {
                nodeList[j].style.display = "none";
            }
            modalC.style.display = "block";
        };

        theRest();

        note.value = "";

    } else if (i % 2 === 0) {
        let divCol = document.createElement("div");
        divCol.classList.add("col");

        let card = document.createElement("div");
        card.classList.add("card")
        card.style.width = "25rem";

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        let h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerHTML = `Note ${i}`;

        let p = document.createElement("p");
        p.classList.add("card-text");

        let text = document.createTextNode(note.value);

        let modalC = document.createElement("div");
        modalC.classList.add("modal-content");

        let span = document.createElement("span");
        span.classList.add(`close-${i}`);
        span.innerHTML = "&times;"

        let modalT = document.createElement("p");
        modalT.id = `modalText-${i}`;

        let button1 = document.createElement("button");
        button1.type = "button"
        button1.classList.add("btn", "btn-link");
        button1.innerHTML = "Open";

        modalC.appendChild(span);
        modalC.appendChild(modalT);
        modal.appendChild(modalC);

        p.appendChild(text);
        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        card.appendChild(cardBody);
        card.appendChild(button1);
        divCol.appendChild(card);

        saveDiv.lastElementChild.appendChild(divCol);

        document.getElementById(`modalText-${i}`).innerHTML = note.value;

        button1.onclick = function () {
            modal.style.display = "block";
            let nodeList = modal.childNodes;
            for (j = 0; j < nodeList.length; j++) {
                nodeList[j].style.display = "none";
            }
            modalC.style.display = "block";
        };

        theRest();

        note.value = "";
    }
}

function theRest() {

    let close = document.getElementsByClassName(`close-${i}`)[0];

    close.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    i++;
}

