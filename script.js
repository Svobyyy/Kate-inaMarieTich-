const click = document.querySelector(".click")

const hamburger = document.querySelector(".hamburger")
let ham_active = true;



const hide = document.querySelectorAll(".menu_active")
const blur = document.querySelectorAll(".menu_blur")
const menu = document.querySelector(".menu_display_activate")

// open menu

click.addEventListener("click", () => {

   if(ham_active){ hamburger.src = hamburger.src.slice(0, -4) + "_x.svg"; ham_active = false }
   else {hamburger.src = hamburger.src.replace(`_x`, ''); ham_active = true } 

   
   menu.classList.toggle("menu_display_activate")

   hide.forEach(e => {
      e.classList.toggle("hide")
   })

   blur.forEach(e => {
      e.classList.toggle("blur")
   })
})

//resize

window.addEventListener("resize", () => {

   // menu close 
   if(window.innerWidth >= 850) {

      hamburger.src = hamburger.src.replace(`_x`, '')
      ham_active = true

      hide.forEach(e => {
         e.classList.remove("hide")
      })

      blur.forEach(e => {
         e.classList.remove("blur")
      })

      menu.classList.add("menu_display_activate")

   }

})
