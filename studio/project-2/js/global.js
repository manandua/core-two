const text = document.querySelector('.if');
window.addEventListener('scroll', () => {
    const current = window.scrollY;
    text.style.fontSize = `clamp(1em, 15em - ${current*3.15}px, 15em)`;

    if (current >= 64) {
        text.classList.add('fill')
        text.style.transform = `translate(-30%,0)`


    } else if (current < 64) {
        if (text.classList.contains('fill'))
            text.classList.remove('fill')
        text.style.transform = `translate(0,0)`
    }

    if (current >= 66) {
        document.querySelector('.pb').classList.add('pb-visible')
    } else if (current < 66) {
        if (document.querySelector('.pb').classList.contains('pb-visible'))
            document.querySelector('.pb').classList.remove('pb-visible')
    }


})