// tilt js with services section
const tilt = $('.services .box').tilt({
    maxTilt: 15,
    perspective: 1000,
    speed: 500,
    glare: true,
    maxGlare: 0.3,
});

// preloader
$(document).ready(function(){
    $(".preloader").css("display","none");
    $("body").css({
        "overflow":"auto",
        "height": "auto",
    })
})



// show more button in projects section
let showMoreBtn = document.querySelector(".projects .show-more");
let projectRow = document.querySelector(".projects .row .project")
let showMoreOrNo = true;

showMoreBtn.addEventListener("click", () => {
    if(showMoreOrNo === true){
        let imgArray = ["imgs/project-05.png", "imgs/project-10.png", "imgs/project-11.png"]
        let codeArray = ["https://github.com/Moamen31/Special-Design", "https://github.com/Moamen31/Note-App", "https://github.com/Moamen31/Memory-Game"];
        let prevArray = ["https://moamen31.github.io/Special-Design", "https://moamen31.github.io/Note-App", "https://moamen31.github.io/Memory-Game"];
        for(let i = 0; i < imgArray.length; i++){
            let col =
        `
        <div class="col-lg-4 g-4">
            <div class="project position-relative">
                <img class="img-fluid" src=${imgArray[i]} alt="">
                <div class="icons position-absolute">
                    <a href=${codeArray[i]} target="_blank">
                        <i class="fa-solid fa-code"></i>
                        Code
                    </a>
                    <a href=${prevArray[i]} target="_blank">
                        <i class="fa-solid fa-eye"></i>
                        Preview
                    </a>
                </div>
            </div>
        </div>
    `   
    showMoreBtn.insertAdjacentHTML("beforebegin", col)
}
    showMoreOrNo = false;
    }
    showMoreBtn.remove()
})

// scroll to top button
let scrollTopBtn = document.querySelector(".scroll-to-top")

window.onscroll = () => {
    if(window.scrollY >= 600){
        scrollTopBtn.style.display = "block"
    }
    if(window.scrollY == 0){
        scrollTopBtn.style.display = "none"
    }
}
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    })
})
