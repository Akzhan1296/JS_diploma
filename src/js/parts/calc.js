function calcs(){
        //calc
        let sizeValue = 0,
        materialValue = 0,
        optionsValue = 1,
        total = 0;

    let size = document.querySelector("#size"),
        material = document.querySelector("#material"),
        options = document.querySelector("#options"),
        promoInput = document.querySelector(".promocode"),
        calcResult = document.querySelector(".calc-price");

    size.addEventListener("change", function () {
        sizeValue = this.options[this.selectedIndex].value;
        calc();
    });

    material.addEventListener("change", function () {
        materialValue = this.options[this.selectedIndex].value;
        calc();
    });

    options.addEventListener("change", function () {
        optionsValue = this.options[this.selectedIndex].value;
        calc();
    });

    promoInput.addEventListener("change", function () {
        calc();
    });

    function calc() {
        if (sizeValue > 0 && materialValue > 0) {
            total = sizeValue * materialValue * optionsValue;
            console.log(total);
            calcResult.innerHTML = total;
            percent();
        } else {
            calcResult.innerHTML =
                "Для расчета нужно выбрать размер картины и материал картины";
        }
    }
    function percent() {
        if (promoInput.value === "IWANTPOPART") {
            let a = (total / 100) * 30;
            let totalPercent = total - a;
            calcResult.innerHTML = totalPercent;
            console.log("123");
        } else {
            calcResult.innerHTML = total;
        }
    }
}

module.exports = calcs;