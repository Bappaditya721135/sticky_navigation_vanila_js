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


// sticky navigation code 
