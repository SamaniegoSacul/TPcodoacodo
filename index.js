const imgBanner = document.getElementById("imgBanner");
const images = ["utils/banner1.png","utils/banner2.png","utils/banner3.png"];
let currentIndex = 0;

function changeImage(){
    console.log("hola")
    imgBanner.classList.add("hidden");
    setTimeout(()=>{
        imgBanner.src = images[currentIndex];
        imgBanner.classList.remove("hidden");
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000)
}

changeImage();
setInterval(changeImage,10000)