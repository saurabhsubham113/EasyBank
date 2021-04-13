
const burgerOpen = document.getElementById('burgerOpen');
const burgerClose = document.getElementById('burgerClose');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');

function disableScroll() {
    // Get the current page scroll position
    scrollTop = document.documentElement.scrollTop;
    scrollLeft = document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function openingModal() {
    burgerOpen.classList.remove("show")
    burgerClose.classList.add("show")
    modal.classList.add("active")
    overlay.classList.add("active")
    disableScroll()
}

function closingModal() {
    burgerClose.classList.remove("show")
    burgerOpen.classList.add("show")
    modal.classList.remove("active")
    overlay.classList.remove("active")
    //activating scroll function
    window.onscroll = function () { };
}


burgerOpen.addEventListener("click", openingModal)

burgerClose.addEventListener("click", closingModal)

overlay.addEventListener("click", closingModal)

//removing event listener
// burgerOpen.removeEventListener("click", openingModal)
// burgerClose.removeEventListener("click", closingModal)
// overlay.removeEventListener("click", closingModal)