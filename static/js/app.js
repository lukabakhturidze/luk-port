// burger menu variables>
const burgerMenu = document.getElementById('burger-menu');
const activatedHeader = document.getElementById('header-nav-ul');
// <burger menu variables
//<scroll indicator variables
const sections = document.querySelectorAll(".common-section");
const scrollIndicators = document.querySelectorAll(".scroll-indicator");
//<scroll indicator variables
//burger menu close-open handler>
function burgerMenuActivation(){
    activatedHeader.classList.toggle('header-nav-ul-active');
}
burgerMenu.addEventListener('click', burgerMenuActivation);
//<burger menu close-open handler
//scroll indicator handler>
function scrollIndicatorHandler(){
    sections.forEach((section, index) => {
        let sectionDistanceFromTop = section.offsetTop;
        let sectionHeight = section.offsetHeight;
        let lastElementQuantifier = index - (sections.length -1);
        switch(lastElementQuantifier){
            case 0:
                if(window.pageYOffset >= (sectionDistanceFromTop - (window.outerHeight - sectionHeight)) && window.pageYOffset < (sectionDistanceFromTop + sectionHeight - (window.outerHeight - sectionHeight))){
                    scrollIndicators[index].classList.add("red");
                }
                else{
                    scrollIndicators[index].classList.remove("red");
                }
                break;
            default:
                if(window.pageYOffset >= (sectionDistanceFromTop - (window.outerHeight - sectionHeight)) && window.pageYOffset < (sections[index + 1].offsetTop - (window.outerHeight - sections[index + 1].offsetHeight))){
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

