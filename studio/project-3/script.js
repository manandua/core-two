console.log('test');

fetch('https://api.airtable.com/v0/appPVOewRDaRNxdNx/Items', {
        headers: {
            Authorization: 'Bearer key66O0pxxsuOZNb6',

        },
    })
    .then(response => response.json())
    .then(data => {
        // console.log(data);

        const stuff = document.querySelector('.stuff');

        console.log(stuff);
        data.records.forEach(thing => {
            console.log(thing);
            stuff.innerHTML += `<h2> ${thing.fields.Name} </h2> <h3>${thing.fields.Context}</h3>`;
        });

    });