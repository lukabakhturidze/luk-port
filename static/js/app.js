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
//<my works variables

//my works divisor>
function addActiveClassForMyWorks(type)
{
    type.forEach((button) => {
        button.classList.add("active");
    })
}
function removeActiveClassForMyWorks(type1, type2, type3, type4)
{
    type1.forEach((button) => {
        button.classList.remove("active");
    })
    type2.forEach((button) => {
        button.classList.remove("active");
    })
    type3.forEach((button) => {
        button.classList.remove("active");
    })
    type4.forEach((button) => {
        button.classList.remove("active");
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
                    removeActiveClassForMyWorks(all, animation, portfolio, SNW);
                    addActiveClassForMyWorks(eCommerce);
                    break;
                case 2:
                    removeActiveClassForMyWorks(all, eCommerce, portfolio, SNW);
                    addActiveClassForMyWorks(animation);
                    break;
                case 3:
                    removeActiveClassForMyWorks(all, eCommerce, animation, SNW);
                    addActiveClassForMyWorks(portfolio);
                    break;
                case 4:
                    removeActiveClassForMyWorks(all, eCommerce, animation, portfolio);
                    addActiveClassForMyWorks(SNW);
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
                if(window.pageYOffset >= (sectionDistanceFromTop - (getMudule(window.outerHeight - sectionHeight))) && window.pageYOffset < (sectionDistanceFromTop + sectionHeight - (getMudule(window.outerHeight - sectionHeight)))){
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

