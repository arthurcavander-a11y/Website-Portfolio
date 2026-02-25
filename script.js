document.addEventListener("DOMContentLoaded",() => {
    const hero=document.querySelector(".hero");
    const cloud1=document.querySelector(".hero-cloud-1");
    const cloud2=document.querySelector(".hero-cloud-2");

    if(!hero || !cloud1 || !cloud2)return;

    let heroWidth=hero.offsetWidth;

    function checkHeroVisibility(){
        const rect = hero.getBoundingClientRect();
            const inView = rect.top<window.innerHeight && rect.bottom>0;
       
    if (inView) {
        hero.classList.add("hero-visible");
        } else {
            hero.classList.remove("hero-visible");
        }    
         }

window.addEventListener("scroll", checkHeroVisibility);
window.addEventListener("resize",() => {
    heroWidth=hero.offsetWidth;
    checkHeroVisibility();
});

checkHeroVisibility();

function animateCloud(cloud, startX, speed){
    let x=startX;

    function frame(){
        x +=speed;

    if (x>heroWidth+250){
    x=-250;
    }
    
    cloud.style.transform= `translateX(${x}px)`;
    requestAnimationFrame(frame);
}

requestAnimationFrame(frame);
}

animateCloud(cloud1, -220, 0.25);
animateCloud(cloud2, -180,0.4);

});

