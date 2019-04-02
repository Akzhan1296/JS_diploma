function forms(){
    
    //ajax
    let form = document.querySelector(".form__form"),
        input = document.getElementsByTagName("input"),
        formDesign = document.querySelector(".form_design"),
        formCons = document.querySelector(".form_consalting"),
        popupAnswer = document.querySelector(".popup-thanks"),
        popupsAfterClose = document.querySelectorAll(".popup_ajax"),
        popupAnswerImg = document.querySelector(".popup-thanks__img"),
        popupTnanksClose = document.querySelector(".popup-thanks_close"),
        nameChecking = document.querySelectorAll(".name-check");

    form.addEventListener("submit", event => {
        startAjax(form);
    });

    formDesign.addEventListener("submit", event => {
        startAjax(formDesign);
    });

    formCons.addEventListener("submit", event => {
        startAjax(formCons);
    });

    //thanks popup
    function popupAfterClose() {
        popupsAfterClose.forEach(item => {
            item.style.display = "none";
        });
    }
    popupTnanksClose.addEventListener("click", () => {
        popupAnswer.classList.add("hide");
        popupAnswer.classList.remove("show");
    });


    //only Russian letters
    nameChecking.forEach(function (item) {
        item.addEventListener("keyup", function () {
            console.log(this.value);
            let reg = /[а-яА-ЯёЁ]/; // только цифры /\D/
            if (reg.test(this.value || this.value == "")) {
                console.log("верный формат");
            } else {
                console.log("неверный формат");
                this.value = "";
                alert("Введите только кирилицу ");
            }
        });
    });


    //mask
    let mask = document.querySelectorAll(".mask"),
        old = 0;

    mask.forEach((item)=>{
        item.addEventListener("click", function () {
            if (this.value.length < 1) {
                this.value = "+";
            }
        });
        item.addEventListener("keyup", function () {
            let curLen = this.value.length;
            if (curLen < old) {
                old--;
                return;
            }
            if (curLen == 2) {this.value = this.value + "(";}
            if (curLen == 6) {this.value = this.value + ")-";}
            if (curLen == 11) {this.value = this.value + "-";}
            if (curLen == 14) {this.value = this.value + "-";}
            if (curLen > 17)
            {this.value = this.value.substring(0, this.value.length - 1);
            // old++;
        }
        });
    });




    function startAjax(name) {
        function json(name) {
            console.log("ajaxIsWorking");
            event.preventDefault();
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open("POST", "server.php");
                request.setRequestHeader(
                    "Content-Type",
                    "application/json; charset=utf-8"
                ); // Метод для JSON

                let formData = new FormData(name); // здесь мы получаем всю информацию который написал пользователь

                let obj = {}; // этот пункт нужен для Json.
                formData.forEach((value, key) => {
                    obj[key] = value;
                });
                let json = JSON.stringify(obj); //превращает обычный JS объект в JSON файл

                request.send(json);
                request.addEventListener("readystatechange", () => {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4 && request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                });
            });
        }

        json(name)
            .then(() => {
                popupAnswer.classList.add("show");
                popupAnswerImg.src = "/img/Preloader_4.gif";
                popupAfterClose();
                console.log("загрузка");
            })
            .then(() => {
                popupAnswerImg.src = "/img/thanks.png";
                console.log("спасибо");
            })
            .catch(() => {
                popupAnswerImg.src = "/img/fail.png";
                console.log("Не удача");
            })
            .then(() => {
                cleanInputs();
            });

        //clean inputs
        function cleanInputs() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = "";
            }
        }
    }
}

module.exports = forms;