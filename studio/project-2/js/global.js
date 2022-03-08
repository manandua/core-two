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
        setTimeout(() => {
            document.querySelector('.if-wrap').style.left = "0"
        }, 200);
        setTimeout(() => {
            pb.classList.add('pb-visible')

        }, 800);
    } else if (n == 2) {
        document.querySelector('.sm-wrap').classList.add('sm-visible')
        sm.classList.add('pb-visible')

    } else if (n == 3) {
        
            document.querySelector('.first').classList.add('invisible')
    

        setTimeout(() => {
            let i = 0;
            let myInteval = setInterval(() => {
                if(i==10)
                document.body.style.backgroundColor="#0f0f0f"
                document.querySelector('.img-holder').style.backgroundImage = "url('" + ball[i++] + "')"
            }, 42);
            setTimeout(() => {
                clearInterval(myInteval)
          
            }, 4998);
        }, 1000);

    }else if(n==4){
        document.querySelector(".tw").classList.remove("hidden");
        setTimeout(() => {
            document.querySelector(".tw-1").classList.remove("hidden");

        }, 800);
    }else if(n==5){
    
            let i = 117;
            let myInteval = setInterval(() => {
                if(i==10)
               { document.body.style.backgroundColor="#F7EDE2"
                document.querySelector('.after-text').classList.add('hidden')
            }
                document.querySelector('.img-holder').style.backgroundImage = "url('" + ball[i--] + "')"
            }, 42);
            setTimeout(() => {

                clearInterval(myInteval)
                document.querySelector(".paper-closing").classList.add("invisible");
                document.querySelector(".tb").classList.remove("hidden")
            }, 4956);
        
    } else if(n==6){
        document.body.style.backgroundColor="#0F0F0F"
        document.querySelector('.tb').classList.add('tb-final');
        setTimeout(() => {
            setTimeout(() => {
                document.querySelector('.soo').classList.remove('invisible')
            }, 500);
        }, 600);
    } else if(n==7){
        document.querySelector('.end1').classList.add('invisible');
        setTimeout(() => {
            document.querySelector('.of').classList.remove('invisible');
        }, 500);
    }else if(n==8){
        document.querySelector('.red').classList.add('red-fill')
        setTimeout(() => {
            setTimeout(() => {
                document.querySelector('footer').classList.add('footer-vis');
            }, 300);

            let html = `<marquee  class="final" direction="left">
            <h1>it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them &nbsp; &nbsp; &nbsp; it <span style="color: #F7EDE2;">kills</span> them</h1>
        </marquee>
        <marquee  class="final final2" direction="right">
            <h1>it <span style="color: #0f0f0f;">kills</span> them &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them  &nbsp; &nbsp; &nbsp;it <span style="color: #0f0f0f;">kills</span> them </h1>
        </marquee>`;
        document.body.innerHTML+=html;

        }, 700);
    }

}

function prev() {
    if (n != 0)
        n--;
    scroll();
}