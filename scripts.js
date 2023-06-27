// event deligation for active nav link 
const navParent = document.querySelector(".nav-bar")

navParent.addEventListener("click", (e) => {
    if(e.target.classList.contains("nav-links")){
        // all nav links 
        const allNavLinks = [...navParent.querySelectorAll(".nav-links")]
        // remove acitve-link class 
        allNavLinks.forEach(el => el.classList.remove("active-link"))
        
        // current active link 
        const activeLink = e.target

        // add active-link to the current active link 
        activeLink.classList.add("active-link")
        
    }
})


// const initialCord = document.querySelector(".section-projects").getBoundingClientRect()
// sticky navigation code 
// window.addEventListener("scroll", (e) => {
//     if(window.scrollY > initialCord.top) {
//         // add sticky class 
//         navParent.classList.add("sticky")
//     }
//     else {
//         navParent.classList.remove("sticky")
//     }
// })

const navHeight = document.querySelector(".nav-bar").getBoundingClientRect().height
let options = {
    root: null,
    threshold: "0",
    rootMargin: `-${navHeight}px`,
}

const stickyNavbar = (entries) => {
    if(!entries[0].isIntersecting) {
        navParent.classList.add("sticky")
    }
    else {
        navParent.classList.remove("sticky")
    }
    console.log(entries)
    console.log("intersecting")
}

let observer = new IntersectionObserver(stickyNavbar, options)
const target = document.querySelector(".section-home")
observer.observe(target)