// burger menu variables>
const burgerMenu = document.getElementById('burger-menu');
const activatedHeader = document.getElementById('header-nav-ul');
// <burger menu variables
//<scroll indicator variables
const sections = document.querySelectorAll(".common-section");
const scrollIndicators = document.querySelectorAll(".scroll-indicator");
//<scroll indicator variables
//my works variables>
const all = document.querySelectorAll(".all");
const eCommerce = document.querySelectorAll(".E-commerce");
const animation = document.querySelectorAll(".animation");
const portfolio = document.querySelectorAll(".portfolio");
const SNW = document.querySelectorAll(".Social-Networking-website");
const myWorkButtons = document.querySelectorAll(".myWorkButtons");
const games = document.querySelectorAll(".game");
const serviceSite = document.querySelectorAll(".service-site");
//<my works variables
//modal variables>
const policyButton = document.querySelector(".policy");
const policyModal = document.querySelector(".policy-modal");
const closeModalButton = document.querySelectorAll(".modal-close-button");
const disclaimerButton = document.querySelector(".disclaimer");
const disclaimerModal = document.querySelector(".disclaimer-modal");
//<modal variables

//scroll-up variables>
const scrollUpButton = document.querySelector(".scroll-up");
//<scroll-up variables
//scroll-up button functional>
document.addEventListener('scroll', () => {
    if(window.pageYOffset < 500)
    {
        scrollUpButton.classList.remove("activated");
    }
    else
    {
        scrollUpButton.classList.add("activated");
    }
});
scrollUpButton.addEventListener("click", ()=>{
    window.scrollTo(0, 0);
});
//scroll-up button functional>
//modals activation>
function activateCloseModal(modal){
    modal.classList.toggle('display-none');
    modal.classList.toggle('overflow-y-scroll');
    document.body.classList.toggle('overflow-hidden');
}
policyButton.addEventListener("click", () =>{
    activateCloseModal(policyModal);
});
closeModalButton[0].addEventListener("click", () =>{
    activateCloseModal(policyModal);
});
disclaimerButton.addEventListener("click", () =>{
    activateCloseModal(disclaimerModal);
});
closeModalButton[1].addEventListener("click", () =>{
    activateCloseModal(disclaimerModal);
});
window.addEventListener("click", (e) =>{
    if(e.target == policyModal)
    {
        activateCloseModal(policyModal);
    }
    else if(e.target == disclaimerModal)
    {
        activateCloseModal(disclaimerModal);
    }
    else
    {
    }
    
});
//<modals activation
//my works divisor>
function addActiveClassForMyWorks(type)
{
    type.forEach((element) => {
        element.classList.add("active");
    })
}
function removeActiveClassForMyWorks(type1, type2, type3, type4, type5, type6)
{
    type1.forEach((element) => {
        element.classList.remove("active");
    })
    type2.forEach((element) => {
        element.classList.remove("active");
    })
    type3.forEach((element) => {
        element.classList.remove("active");
    })
    type4.forEach((element) => {
        element.classList.remove("active");
    })
    type5.forEach((element) => {
        element.classList.remove("active");
    })
    type6.forEach((element) => {
        element.classList.remove("active");
    })
}
function myWorksDivisor(){
    myWorkButtons.forEach((button,index, arr) => {
        button.addEventListener("click", () =>{
            button.classList.add("red");
            button.classList.add("common-red-bottom-line");
            for(let i = 0; i < arr.length; i++)
            {
                if(i == index)
                {
                }
                else
                {
                    arr[i].classList.remove("red");
                    arr[i].classList.remove("common-red-bottom-line");
                }
            }
            switch(index)
            {
                case 0:
                    addActiveClassForMyWorks(all);
                    break;
                case 1:
                    removeActiveClassForMyWorks(all, animation, portfolio, SNW, games, serviceSite);
                    addActiveClassForMyWorks(eCommerce);
                    break;
                case 2:
                    removeActiveClassForMyWorks(all, eCommerce, portfolio, SNW, games, serviceSite);
                    addActiveClassForMyWorks(animation);
                    break;
                case 3:
                    removeActiveClassForMyWorks(all, eCommerce, animation, SNW, games, serviceSite);
                    addActiveClassForMyWorks(portfolio);
                    break;
                case 4:
                    removeActiveClassForMyWorks(all, eCommerce, animation, SNW, games, serviceSite);
                    addActiveClassForMyWorks(SNW);
                    break;
                case 5:
                    removeActiveClassForMyWorks(all, eCommerce, animation, SNW, games, serviceSite);
                    addActiveClassForMyWorks(games);
                    break;
                case 6:
                    removeActiveClassForMyWorks(all, eCommerce, animation, portfolio , SNW, games);
                    addActiveClassForMyWorks(serviceSite);
                    break;
                default:
                    break;
            }
            
        });
    })
}
myWorksDivisor();
//<my works divisor

//burger menu close-open handler>
function burgerMenuActivation(){
    scrollIndicators.forEach((indicator) =>{
        indicator.addEventListener('click', ()=>{
            activatedHeader.classList.remove('header-nav-ul-active');
        })
    })
    activatedHeader.classList.toggle('header-nav-ul-active');
}
burgerMenu.addEventListener('click', burgerMenuActivation);
//<burger menu close-open handler

//scroll indicator handler>
function getMudule(number){
    if(number >= 0)
    {
        return number;
    }
    else
    {
        return -number;
    }
}
function scrollIndicatorHandler(){
    sections.forEach((section, index) => {
        let sectionDistanceFromTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let lastElementQuantifier = index - (sections.length -1);
        switch(lastElementQuantifier){
            case 0:
                if(window.pageYOffset >= (sectionDistanceFromTop - (getMudule(window.outerHeight - sectionHeight))) && window.pageYOffset <= (sectionDistanceFromTop + sectionHeight - (getMudule(window.outerHeight - sectionHeight)))){
                    scrollIndicators[index].classList.add("red");
                }
                else{
                    scrollIndicators[index].classList.remove("red");
                }
                break;
            default:
                if(window.pageYOffset >= (sectionDistanceFromTop - (getMudule(window.outerHeight - sectionHeight))) && window.pageYOffset < (sections[index + 1].offsetTop - (getMudule(window.outerHeight - sections[index + 1].offsetHeight)))){
                    scrollIndicators[index].classList.add("red");
                }
                else{
                    scrollIndicators[index].classList.remove("red");
                }  
        }
    })
}
document.addEventListener('scroll', scrollIndicatorHandler);
// <scroll indicator handler

