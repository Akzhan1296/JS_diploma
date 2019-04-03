function accordion() {
    // Аккордион

    let accordionBlock = document.querySelectorAll(".accordion-block"), //accordion_info
    accordionHeading = document.querySelectorAll(".heading"), //span_headind
    accordionWrapper = document.querySelector('.often-questions');

    function hideBlockContent() {
        for (let i = 0; i < accordionBlock.length; i++) {
            accordionBlock[i].classList.remove("show","slideInDown");
            accordionBlock[i].classList.add("hide");
            accordionHeading[i].classList.remove("active");
        }
    }
    hideBlockContent();
    function showBlockContent(b) {
        if (accordionBlock[b].classList.contains("hide")) {
            accordionBlock[b].classList.remove("hide");
            accordionBlock[b].classList.add("show","slideInDown");
            accordionHeading[b].classList.add("active");
        }
    }

    accordionWrapper.addEventListener("click", event => {
        let target = event.target;
        if (target && target.classList.contains("heading")) {
            for (let i = 0; i < accordionBlock.length; i++) {
                if (target == accordionHeading[i]) {
                    hideBlockContent();
                    showBlockContent(i);
                }
            }
        }
    });
}

module.exports = accordion;