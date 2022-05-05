console.log('test');
$(window).on('DOMContentLoaded load resize scroll', () => {
    if (isScrolledIntoView(document.querySelector(".holy"))) {
        document.body.style.backgroundColor = "#88C7FF"
    } else
        document.body.style.backgroundColor = "#FFE16E"

});

let globalRecords;
document.querySelectorAll(".significance a").forEach((tag) => {

    tag.addEventListener("click", () => {
        let filterArray = globalRecords.filter((elem) => {
            return contentFilter(elem, tag.innerHTML, "Significance")
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
        console.log(elem.innerHTML)
    })

})

//from here

document.querySelectorAll(".context a").forEach((tag) => {

    tag.addEventListener("click", () => {
        let filterArray = globalRecords.filter((elem) => {
            return contentFilter(elem, tag.innerHTML, "Context")
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
        console.log(elem.innerHTML)
    })

})


//to here



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
            <div class="img" onclick="window.open('${thing.fields.Link?thing.fields.Link:""}');" style="background-image:url('${thing.fields.Images?thing.fields.Images[0].thumbnails.large.url:""}');">
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