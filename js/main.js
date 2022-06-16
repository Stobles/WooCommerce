import {getHeight} from '../js/functions.js';

// Переменные

  //-- Бургер

const burger = document.querySelector('[data-burger]');
const nav = document.querySelector('.nav');

  //-- Спойлер

const spollerBtns = document.querySelectorAll('[data-spoller-button]');
const spollers = document.querySelectorAll('[data-spoller]');


window.addEventListener('resize', () => {
    getHeight("header", "nav");
});

window.addEventListener('resize', () => {
    getHeight("header", "main");
});

getHeight("header", "nav");

getHeight("header", "main"); 

spollerMobile(spollers, spollerBtns)


// SideBar //

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('lock');
})

// Функции //

function spollerMobile(spollers, spollerBtns){
        console.log("Мобильная")
        spollers.forEach(spoller => {
            spoller.style.height = "0px";
        });
        spollerBtns.forEach((spollerBtn, btnIndex) => {
            spollerBtn.addEventListener('click', () => {
                const height = spollers[btnIndex].scrollHeight
                console.log(spollers[btnIndex].style.height)
                if (spollers[btnIndex].style.height === "0px") {
                    spollers[btnIndex].style.height = `${ height + 20}px`;
                    spollers[btnIndex].style.paddingTop = "10px";
                    spollers[btnIndex].style.paddingBottom = "10px";
                    spollers[btnIndex].style.pointerEvenets = "pointer";
                    spollerBtn.style.setProperty("--rotate-deg","180deg");
                } else {
                    spollers[btnIndex].style.height = `${ spollers[btnIndex].scrollHeight }px`;
                    window.getComputedStyle(spollers[btnIndex], null).getPropertyValue("height");
                    spollers[btnIndex].style.height = "0";
                    spollers[btnIndex].style.paddingTop = "0";
                    spollers[btnIndex].style.paddingBottom = "0";
                    spollerBtn.style.setProperty("--rotate-deg","0deg");
                }
            });
        });
}
