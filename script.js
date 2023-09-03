

const closeBtn = document.querySelector('.modal-close');
const modal = document.querySelector('.mobile-nav-modal');
const showBtn = document.querySelector('.show-menu');

if (closeBtn !== null && closeBtn !== undefined) {
    closeBtn.addEventListener("click", function(){
        modal.classList.toggle("hide");
    })
    
} else {
    console.log("close-modal doesn't exist");
}


if(showBtn !== null && showBtn !== undefined) {
    showBtn.addEventListener('click', function(){
        modal.classList.toggle('hide');
    })
} else {
    console.log("show button doesn't exist");
}







