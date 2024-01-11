document.addEventListener('scroll', ()=>{   //for navbar to change colour on scroll
    const navBar = document.querySelector("nav");
    console.log(navBar);

    if (window.scrollY > 0) {
        navBar.classList.add("isScrolling");
    } 
    else {
        navBar.classList.remove("isScrolling");
    }
});


const navElement = document.querySelectorAll("a");    //this helps take away the menu for smaller screens, when a tab is selected.
console.log(navElement)

for (var i = 0 ; i < navElement.length; i++) {
    navElement[i].addEventListener('click', function() {
        
        document.querySelector("input").checked = false;
    
    });
}




var thisYear = new Date()   //update the year at footer automatically
document.getElementById("year").innerHTML =thisYear.getFullYear()