function popups() {
    // 60seconds
    let timerId = setTimeout(cons, 60000),
        clicked = false;

    let designBtnBlock = document.getElementsByTagName("body")[0], //main-parent
        popupDesign = document.querySelector(".popup-design"), //popup-design
        consaltingPopup = document.querySelector(".popup-consultation"), //popup-consulting
        giftPopup = document.querySelector(".popup-gift"); //popup-gift

    designBtnBlock.addEventListener("click", event => {
        let target = event.target;
        if (target && target.classList.contains("show")) {
            target.classList.remove('show');
            document.body.style.overflow = '';
        }
        
        if (
            target &&
            (target.classList.contains("button-design") ||
                target.classList.contains("button-consultation") ||
                target.classList.contains("fixed-gift"))
        ) {
            document.body.style.overflow = "hidden";
            clearTimeout(timerId);
            clicked = true;
        }

        if (target && target.classList.contains("button-design")) {
            console.log("works");
            popupDesign.classList.add("show");
            popupDesign.classList.add("fadeIn");
        } //popup-design

        if (target && target.classList.contains("button-consultation")) {
            cons();
        } //popup-consulting

        if (target && target.classList.contains("fixed-gift")) {
            giftPopup.classList.add("show");
            giftPopup.classList.add("fadeIn");
            animation();
            setTimeout(() => {
                document.body.removeChild(giftBtn);
            }, 2500);
        } // gift-btn


    });

    function cons() {
        consaltingPopup.classList.add("show");
        consaltingPopup.classList.add("fadeIn");
        document.body.style.overflow = "hidden";
        clicked = true;
    } //consalting

    //Анимация для кнопки gift-fixed

    let giftBtn = document.querySelector(".fixed-gift");
    function animation() {
        let opac = 1;
        let f = setInterval(frame, 250);
        function frame() {
            if (opac == 0) {
                clearInterval();
            } else {
                opac = opac - 0.5;
                giftBtn.style.opacity = opac;
            }
        }
    }

    // //popup-scroll

    window.addEventListener("scroll", event => {
        let clientHeight = document.documentElement.clientHeight,
            documentHeight = document.documentElement.scrollHeight,
            scrollTop = window.pageYOffset;
        if (documentHeight - clientHeight <= scrollTop && clicked == false) {
            console.log("кнопки не нажаты");
            giftPopup.classList.add("show");
            giftPopup.classList.add("fadeIn");
            animation();
            setTimeout(() => {
                document.body.removeChild(giftBtn);
            }, 2500);
            clicked = true;
        }
    });

    // close popups
    let popupClose = document.querySelectorAll(".popup-close");

    popupClose.forEach(function (item) {
        item.addEventListener("click", () => {
            consaltingPopup.classList.remove("show");
            consaltingPopup.classList.remove("fadeIn"); // popup-consulting
            giftPopup.classList.remove("show");
            giftPopup.classList.remove("fadeIn"); // popup-gift
            popupDesign.classList.remove("show");
            popupDesign.classList.remove("fadeIn"); // popup-design
            document.body.style.overflow = "";
        });
    });
}

module.exports = popups;