const slider = document.querySelector('.slider');
const logosObject = [
    {
        "img": "client/img/partners/african_cotton.png",
        "name": "African Cotton"
    },
    {
        "img": "client/img/partners/bericap.png",
        "name": "bericap"
    },
    {
        "img": "client/img/partners/brazafric_enterprise.png",
        "name": "Brazafric Enterprise"
    },
    {
        "img": "client/img/partners/brazafric_industries.png",
        "name": "Brazafric Industries"
    },
    {
        "img": "client/img/partners/bwosi.png",
        "name": "Bwosi"
    },
    {
        "img": "client/img/partners/fossilcote.png",
        "name": "FossilCote"
    },
    {
        "img": "client/img/partners/ric.png",
        "name": "Ric"
    },
    {
        "img": "client/img/partners/riggen_fresh.png",
        "name": "Riggen Fresh"
    },
    {
        "img": "client/img/partners/seweco.png",
        "name": "Seweco"
    },
    {
        "img": "client/img/partners/tecno.png",
        "name": "Tecno"
    },
];

function initializeSlider (){
    let logosHtml = "";

    for (let logo in logosObject){
        logosHtml += `<div class="slide">`;
        logosHtml += `    <img src="${logosObject[logo].img}" alt="${logosObject[logo].name}"/>`
        logosHtml += `</div>`;
    }

    slider.innerHTML = logosHtml;
}

window.addEventListener("load", initializeSlider());

const tinySlider = tns({
    container: ".slider",
    center: true,
    autoplayButtonOutput: false,
    autoWidth: true,
    gutter: 15,
    slideBy: 1,
    nav: true,
    navPosition: "bottom",
    speed: 400,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next",
    responsive: {
        200: {
            items: 1
        },
        640: {
            items: 2
        },
        1000: {
            items: 3
        },
        1400: {
            items: 4
        }
    }
})