function sliders(){


    //main-slider
    let slideIndex = 1,
        slides = document.querySelectorAll(".main-slider-item");

    showSlides();
    setInterval(plusSlides, 6000);

    function plusSlides() {
        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex += 1;
        }
        showSlides();
    }

    function showSlides(n) {
        slides[slideIndex - 1].classList.remove("fadeOutDown");
        slides.forEach(item => {
            item.style.display = "none";
        });
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add("fadeInDownBig");
        setTimeout(() => {
            slides[slideIndex - 1].classList.remove("fadeInDownBig");
        }, 2500);
        setTimeout(() => {
            slides[slideIndex - 1].classList.add("fadeOutDown");
        }, 5500);
    }

    //second-slider
    let secondSlider = document.querySelectorAll(".feedback-slider-item"),
        secondSliderIndex = 1,
        prev = document.querySelector(".main-prev-btn"), // кнопка слайда
        next = document.querySelector(".main-next-btn"); //кпопка следущая

    showSecondSlides();
    let timerID; // таймер который нужно сбросить для анимации
    function timer() {
        // таймер для анимации налвео
        timerID = setInterval(() => {
            secondSlider[secondSliderIndex - 1].classList.add("fadeOutLeft");
            secondSlider[secondSliderIndex - 1].classList.remove("fadeInRightBig");
            console.log("789");
        }, 5000);
    }

    let timerIDFirst; // основной таймер который по нему меняются картинки
    function timerFirst() {
        timerIDFirst = setInterval(plusSecondSlides, 6000);
    }
    timerFirst();

    function plusSecondSlides() {
        if (secondSliderIndex == secondSlider.length) {
            secondSliderIndex = 1;
        } else {
            secondSliderIndex += 1;
        }
        showSecondSlides();
    }

    function showSecondSlides(n) {
        if (n > secondSlider.length) {
            secondSliderIndex = 1; //проверка картинок
        }
        if (n < 1) {
            secondSliderIndex = secondSlider.length; //проверка картинок
        }

        secondSlider.forEach(item => {
            item.style.display = "none";
        });

        secondSlider[secondSliderIndex - 1].style.display = "block";
        secondSlider[secondSliderIndex - 1].classList.add("fadeInRightBig");
        //left
        // здесь должен вызыватся таймер который должен добавлять анимацию налево
    }

    //Показ слайдов
    function viewSlides(n) {
        showSecondSlides((secondSliderIndex += n));
    }

    prev.addEventListener("click", function () {
        viewSlides(-1); //здесь будут листаться слайды назад
        clearInterval(timerIDFirst);
        clearInterval(timer);
        timerFirst();
    });

    next.addEventListener("click", function () {
        viewSlides(+1); //здесь будут листаться слайды вперед
        clearInterval(timerIDFirst);
        clearInterval(timer);
        timerFirst();
    });

}

module.exports = sliders;