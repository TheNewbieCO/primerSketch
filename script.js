//animation
const card = document.querySelector('.card');
const container = document.querySelector('.container');
const butt = document.querySelector('.comprabtn');
const bridge = document.querySelector('.bridge img');
const title = document.querySelector('.info h1');


//evento
container.addEventListener("mousemove", (e) => {
    let xaxis = ((window.innerWidth / 2 - e.pageX) / 25);
    let yaxis = ((window.innerHeight / 2 - e.pageY) / 25);
    card.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;
});
container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'all 0.2s ease';
    bridge.style.transform = "translateZ(80px)";
    title.style.transform = "translateZ(70px)";
});

container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.8s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});

butt.addEventListener('click', (e) => {
    alert("Creeme, si la hice para ti. att. Gian")
});