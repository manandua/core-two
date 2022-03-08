const text = document.querySelector('.if');
let n = 0;

function next() {
    n++;
    scroll()
}
let pb = document.querySelector('.pb')
let sm = document.querySelector('.sm')


let ball = [];

for (let i = 0; i < 119; i++) {
    let n
    if (i < 10)
        ball[i] = "images/ball/Comp 1_0000" + i + ".png"

    else if (i < 100)
        ball[i] = "images/ball/Comp 1_000" + i + ".png"

    else
        ball[i] = "images/ball/Comp 1_00" + i + ".png"
}
const ballImages = ball.map(src => {
    const img = new Image();
    img.src = src;
    return img;
})



function scroll() {
    if (n == 0) {
        text.classList.remove('fill')
        text.style.transform = "translateX(0%)"

    }
    if (n == 1) {
        text.classList.add('fill')
        text.style.transform = "translateX(-22%)"
        setTimeout(() => {
            pb.classList.add('pb-visible')

        }, 600);
    } else if (n == 2) {
        document.querySelector('.sm-wrap').classList.add('sm-visible')
        sm.classList.add('pb-visible')

    } else if (n == 3) {
        document.querySelectorAll('.if-wrap').forEach((x) => {
            x.classList.add('invisible')
        })

        setTimeout(() => {
            let i = 0;
            let myInteval = setInterval(() => {
                document.querySelector('.img-holder').style.backgroundImage = "url('" + ball[i++] + "')"
            }, 42);
            setTimeout(() => {
                clearInterval(myInteval)
            }, 4956);
        }, 1000);

    }

}

function prev() {
    if (n != 0)
        n--;
    scroll();
}