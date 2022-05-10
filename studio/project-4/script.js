console.log('test');
$(window).on('DOMContentLoaded load resize scroll', () => {
    if (isScrolledIntoView(document.querySelector(".holy"))) {
        document.body.style.backgroundColor = "#88C7FF"
    } else
        document.body.style.backgroundColor = "#FFE16E"

});

taskbar = document.getElementById("taskbar");

var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 1000) {
        taskbar.className = "bottomMenu show"
    } else {
        taskbar.className = "bottomMenu hide"
    }
};

window.addEventListener("scroll", myScrollFunc);

let globalRecords;
document.querySelectorAll(".filt a").forEach((tag) => {

    tag.addEventListener("click", () => {
        let filterArray = globalRecords.filter((elem) => {
            return contentFilter(elem, tag.innerHTML, tag.parentNode.dataset.tag)
        })

        document.querySelector(".holy").innerHTML = ""


        filterArray.forEach(thing => {
            let contextArray = ``
            thing['fields']['Context'].forEach(e => {
                contextArray += `
                <div class="filter">
                ${e}
            </div>
                `
            })
            document.querySelector(".holy").innerHTML += `
            <div class="meme">
            <div class="img" onclick="window.open('${thing.fields.Link ? thing.fields.Link : ""}');" style="background-image:url('${thing.fields.Images ? thing.fields.Images[0].thumbnails.large.url : ""}');">
              <h1>${thing['fields']['Name'] || ""}</h1>
            </div>
            <div class="data">
                <h2>${thing['fields']['Period'][0] || ""}</h2> 

                <p>${thing['fields']['Description'] || ""}</p>
                <p class="view-more" onclick="viewMore(this)">
                    View More
                </p>
                <div class="filters">
                   ${contextArray}
                </div>
            </div>
        </div>
            `

        });
    })

})





fetch('https://api.airtable.com/v0/appPVOewRDaRNxdNx/Items', {
        headers: {
            Authorization: 'Bearer key66O0pxxsuOZNb6',

        },
    })
    .then(response => response.json())
    .then(data => {
        globalRecords = data.records;
        let holyGrail = globalRecords.filter((elem) => {
            return contentFilter(elem, "Holy Grail", "Significance")
        })

        holyGrail.forEach(thing => {
            let contextArray = ``
            thing['fields']['Context'].forEach(e => {
                contextArray += `
                <div class="filter">
                ${e}
            </div>
                `
            })
            document.querySelector(".holy").innerHTML += `
            <div class="meme">
            <div class="img" onclick="window.open('${thing.fields.Link ? thing.fields.Link : ""}');" style="background-image:url('${thing.fields.Images ? thing.fields.Images[0].thumbnails.large.url : ""}');">
              <h1>${thing['fields']['Name']}</h1>
            </div>
            <div class="data">
                <h2>${thing['fields']['Period'][0]}</h2> 

                <p>${thing['fields']['Description']}</p>
                <p class="view-more" onclick="viewMore(this)">
                    View More
                </p>
                <div class="filters">
                   ${contextArray}
                </div>
            </div>
        </div>
            `

        });
    });


function contentFilter(elem, txt, content) {
    if (elem.fields[content]) {
        return elem.fields[content].includes(txt)
    } else return false;
}


function viewMore(e) {


    e.parentNode.querySelector("p").classList.toggle("desc-expand")
    if (e.parentNode.querySelector("p").classList.contains("desc-expand"))
        e.innerHTML = "View Less"
    else
        e.innerHTML = "View More"
}

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;

    var isVisible = (elemTop < 0.9 * window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    return isVisible;
}


// 11 se 53 tak
// change signi to context etc
//

document.querySelector(".dog-btn img").addEventListener("click", (e) => {
    document.querySelector(".chatbox").classList.toggle("visible")
    document.querySelector(".dog-btn").classList.toggle("dog-move")

    if (!document.querySelector(".chatbox").classList.contains("init")) {
        document.querySelector(".chatbox").classList.add("init")
        setTimeout(() => {
            document.querySelector(".message-list").innerHTML += `
    <div class="msgbox left first">
        <div class="txt-wrap">
            <div class="txt">hey human.</div>
        </div>
    </div>
    `
            setTimeout(() => {
                let node = document.createElement('div');
                node.innerHTML = "The internet is the wild west. As doge, it is my duty to showcase Internet phenomena and pop culture.";
                node.classList.add("txt");
                document.querySelector(".msgbox.left.first .txt-wrap").appendChild(node);
                setTimeout(() => {
                    let node = document.createElement('div');
                    node.innerHTML = "Which memes do you want an explanation with?";
                    node.classList.add("txt");
                    document.querySelector(".msgbox.left.first .txt-wrap").appendChild(node)

                    setTimeout(() => {
                        document.querySelector(".input-box").innerHTML += `
                <div class="user-txt" onclick="sendMsg(this)">
                Holy Grail
            </div>
            <div class="user-txt" onclick="sendMsg(this)">
               Nostalgic
            </div>
            <div class="user-txt" onclick="sendMsg(this)">
               Cancel Culture
            </div>
                `
                    }, 500);
                }, 3000);
            }, 1000);
        }, 300);
    }
})

function sendMsg(e) {
    let msg = e.innerHTML.trim()
    let listElement = document.querySelector(".message-list");
    listElement.insertAdjacentHTML("beforeend", `<div class="msgbox right">
    <div class="txt-wrap">
     <div class="txt">${msg}</div>
    </div>
 </div> `)
    listElement.scrollTop = listElement.scrollHeight;
    if (msg == "Holy Grail") {
        setTimeout(() => {
            document.querySelector(".message-list").insertAdjacentHTML("beforeend", `
        <div class="msgbox left">
            <div class="txt-wrap">
                <div class="txt">The best of the best. Top-tier and most impactful popculture internet moments.</div>
            </div>
        </div>
        `)
            listElement.scrollTop = listElement.scrollHeight;

        }, 500);
    } else if (msg == "Nostalgic") {
        setTimeout(() => {
            document.querySelector(".message-list").insertAdjacentHTML("beforeend", `
         <div class="msgbox left">
             <div class="txt-wrap">
                 <div class="txt">Moments on the internet that most people remember fondly and vividly.</div>
             </div>
         </div>
         `)
            listElement.scrollTop = listElement.scrollHeight;

        }, 500);
    } else if (msg == "Cancel Culture") {
        setTimeout(() => {
            document.querySelector(".message-list").insertAdjacentHTML("beforeend", `
         <div class="msgbox left">
             <div class="txt-wrap">
                 <div class="txt">People or events that were canceled or sparked a commotion that changed the internet.</div>
             </div>
         </div>
         `)
            listElement.scrollTop = listElement.scrollHeight;

        }, 500);
    }
    listElement.scrollTop = listElement.scrollHeight;

}