let elBtnOne = document.querySelector("#linkone");
let elBtnTwo = document.querySelector("#linktwo");
let elBtnThree = document.querySelector("#linkthree");
let elBtnFour = document.querySelector("#linkfour");
let elBtnFive = document.querySelector("#linkfive");
let elBtnSix = document.querySelector("#linksix");

let elCardOne = document.querySelector("#cardone");
let elCardTwo = document.querySelector("#cardtwo");
let elCardThree = document.querySelector("#cardthree");
let elCardFour = document.querySelector("#cardfour");
let elCardFive = document.querySelector("#cardfive");
let elCardSix = document.querySelector("#cardsix");


elBtnOne.addEventListener('click' , (evt)=> {
    evt.preventDefault();
    elCardOne.classList.toggle("rotaet");
    elCardOne.classList.toggle("rotaet-link");
})
elBtnTwo.addEventListener('click' , (evt)=> {
    evt.preventDefault();
    elCardTwo.classList.toggle("rotaet");
})
elBtnThree.addEventListener('click' , (evt)=> {
    evt.preventDefault();
    elCardThree.classList.toggle("rotaet");
})
elBtnFour.addEventListener('click' , (evt)=> {
    evt.preventDefault();
    elCardFour.classList.toggle("rotaet");
})
elBtnFive.addEventListener('click' , (evt)=> {
    evt.preventDefault();
    elCardFive.classList.toggle("rotaet");
})
elBtnSix.addEventListener('click' , (evt)=> {
    evt.preventDefault();
    elCardSix.classList.toggle("rotaet");
})
