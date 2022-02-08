let leftimage = document.getElementById('image1');
let leftimages = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png']
setInterval(function() {
    let random = Math.floor(Math.random() * 5);
    leftimage.src = leftimages[random];
    rightimage.src = rightimages[random];
}, 400);

let rightimage = document.getElementById('image2');
let rightimages = ['images/image1.png', 'images/image2.png', 'images/image3.png', 'images/image4.png', 'images/image5.png']
    // setInterval(function() {
    //     let random = Math.floor(Math.random() * 4);
    //     rightimage.src = rightimages[random];
    // }, 800);