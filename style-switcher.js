/* =========== toggle style switcher */
const styleSwitcherToggle=document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=>{
    document.querySelector(".style-switcher").classList.toggler("open");
})
//hide style-switcher on scroll
Window.addEventListener("scroll" ,()=>{
    if(document.querySelector("style-switcher").classList.contains("open"))
    {
        document.querySelector("style-switcher").classList.remove("open");
    }
})
/*=========== theme colors  ===============*/
const alternateStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(colors)
{
    alternateStyles.forEach(style)=>{
        if(color===style.getAttribute(title))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    }
}
/*=========== theme light and dark mode  ===============*/
const daylight = document.querySelector(".day-night");
daylight.addEventListener("click",()=>{
    daylight.querySelector("i").classList.toggle("fa-sun")
    daylight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
Window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark"))
    {
        daylight.querySelector("i").classList.add("fa-moon");
    }
})