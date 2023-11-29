const navBtn = document.querySelector(".nav__toggle-icon")
const menuItem = document.querySelectorAll(".menu__item")
const menuLink = document.querySelectorAll(".menu__link")
const cover = document.querySelector(".cover")
const body = document.querySelector("body")
const resumeList = document.querySelectorAll(".resume-list__item")
const resumeContent = document.querySelectorAll(".resume-content")
const portfolioList = document.querySelectorAll(".portfolio-list__item")
const portfolioContent = document.querySelectorAll(".portfolio-content")


let hamburger_checker = false

menuLink.forEach(function(items){
    items.addEventListener("click", function(event){
        event.preventDefault()

        menuLink.forEach(function(item){
            item.classList.remove("menu__link--active")
        })
        items.classList.add("menu__link--active")
    })
})

menuItem.forEach(function(items){
    items.addEventListener("click",function(){
        let sectionClass = items.getAttribute("data-section")
        let sectionOffSetTop = document.querySelector(`.${sectionClass}`).offsetTop

        window.scrollTo({
            top : sectionOffSetTop,
            behavior: "smooth"
        })
    })
    
})

navBtn.addEventListener("click",function(){
    navBtn.classList.toggle("nav__toggle-icon--open")
    /*if(navBtn.classList.contains("nav__toggle-icon--open")){
        menu.classList.add("menu--open")
    }else{
        menu.classList.remove("menu--open")
    }*/
    /*یا*/
    menu.classList.toggle("menu--open")
    cover.classList.toggle("cover--show")
    if(menu.classList.contains("menu--open")){
        hamburger_checker = true
    }else{
        hamburger_checker = false
    }
    console.log(hamburger_checker)
})


resumeList.forEach(function(item){
    item.addEventListener("click",function(){
        resumeList.forEach(function(items){
            items.classList.remove("resume-list__item--active")
            items.style.color = "#333333"
        })
        item.classList.add("resume-list__item--active")
        item.style.color = "#fff"
    })
})

resumeList.forEach(function(item){
    item.addEventListener("click",function(){
        resumeChanger(item.getAttribute("data-content-id"))
    })
})

function resumeChanger(resumeItem){
    resumeContent.forEach(function(items){
        items.classList.remove("resume-content--show")
        if(items.id === resumeItem){
            items.classList.add("resume-content--show")
        }
    })
}

portfolioList.forEach(function(item){
    item.addEventListener("click",function(){
        portfolioList.forEach(function(items){
            items.classList.remove("portfolio-list__item--active")
            item.classList.add("portfolio-list__item--active")
        })
    })
})

portfolioList.forEach(function(item){
    item.addEventListener("click",function(){
        portfolioListChanger(item.getAttribute("data-content-id"))
    })
})

function portfolioListChanger(portfolioitem){
    portfolioContent.forEach(function(items){
        items.classList.remove("portfolio-content--show")
        if(items.id === portfolioitem){
            items.classList.add("portfolio-content--show")
        }
    })
}

//const swiper = new Swiper('.swiper', {
//    direction: 'vertical',
//    loop: true,
//  
//    pagination: {
//      el: '.swiper-pagination',
//    },
//  });