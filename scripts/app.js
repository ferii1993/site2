const navBtn = document.querySelector(".nav__toggle-icon")
const menu = document.querySelector(".menu")
const cover = document.querySelector(".cover")
const body = document.querySelector("body")

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
})

body.addEventListener("touch",function(){
    if(menu.classList.contains("menu--open")){
        menu.classList.remove("menu--open")
        navBtn.classList.remove("nav__toggle-icon--open")
    }
})
