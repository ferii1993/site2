const navBtn = document.querySelector(".nav__toggle-icon")
const menu = document.querySelector(".menu")
const cover = document.querySelector(".cover")
const body = document.querySelector("body")

let hamburger_checker = false

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

menu.addEventListener("touchstart",function(){
   if(hamburger_checker){
        menu.classList.remove("menu--open") 
        navBtn.classList.remove("nav__toggle-icon--open")  
        cover.classList.remove("cover--show") 
   }
})
