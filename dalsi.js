const nacist = document.querySelector(".nacist")
const novinky = document.querySelector(".novinky")



nacist.addEventListener("click", e => {

    for(let i = 0; i < 2; i++) {

    const novinka = document.createElement("a")
    novinka.classList.add("novinka", "flex")
    novinka.href = "./media_detail.html"
    
    const img = document.createElement("img")
    img.src = "./photos/novinka.webp"
    novinka.append(img)

    const title = document.createElement("p")
    title.innerText = "Kateřina Marie Tichá získala cenu Anděl v kategorii Objev roku"
    novinka.append(title)

    const novinkyClanek = document.createElement("div")
    novinkyClanek.classList.add("novinky_clanek", "flex")

    const clanek = document.createElement("p")
    clanek.classList.add("black", "normal_less")
    clanek.innerHTML = "Celý článek"
    novinkyClanek.append(clanek)

    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg")
    svg.setAttribute("fill", "black")
    svg.setAttribute("viewBox", "0 0 448 512")

    const path = document.createElementNS("http://www.w3.org/2000/svg","path")
    path.setAttribute("d", "M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z")
    svg.append(path)
    novinkyClanek.append(svg)


    novinka.append(novinkyClanek)
    novinky.append(novinka)
     
    }

})