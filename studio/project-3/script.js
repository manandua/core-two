console.log('test');
$(window).on('DOMContentLoaded load resize scroll', () => {
    if (isScrolledIntoView(document.querySelector(".holy"))) {
        document.body.style.backgroundColor = "#88C7FF"
    } else
        document.body.style.backgroundColor = "#FFE16E"

});
fetch('https://api.airtable.com/v0/appPVOewRDaRNxdNx/Items', {
        headers: {
            Authorization: 'Bearer key66O0pxxsuOZNb6',

        },
    })
    .then(response => response.json())
    .then(data => {
        let records = data.records;
        let holyGrail = records.filter(holyFilter)
        console.log(holyGrail)
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

function holyFilter(elem) {
    if (elem.fields['Significance']) {
        return elem.fields['Significance'].includes("Holy Grail")
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