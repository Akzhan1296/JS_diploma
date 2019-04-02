function filters() {
    //extra-paint
    function showImg(n) {
        n.style.display = 'block';
        n.classList.add("fadeIn");
    } //show Imgs for extra_paint and filter Imgs

    let paint = document.querySelectorAll('.extra-paint'),
        paintBtn = document.querySelector('.extra-paint-btn');

    paintBtn.addEventListener('click', () => {
        paint.forEach(function (item) {
            showImg(item);
            paintBtn.style.display = "none";
        });
    });

    //img-filter 
    let portfolio = document.querySelector('.portfolio'), // parent
        portfolioImgs = document.querySelectorAll('.port_imgs'), //btns-block
        allWorks = document.querySelector('.all'), //each-btn
        lovers = document.querySelector('.lovers'), //each-btn
        chef = document.querySelector('.chef'), //each-btn
        girl = document.querySelector('.girl'), //each-btn
        guy = document.querySelector('.guy'), //each-btn
        grandMother = document.querySelector('.grandmother'), //each-btn
        grandFather = document.querySelector('.granddad'), //each-btn
        portfolioImgsBlock = document.querySelectorAll('.portfolio-block'), //allImgs
        portfolioNo = document.querySelector('.portfolio-no');

    portfolio.addEventListener('click', function (event) {
        let target = event.target;

        function checkActiveBtns() {
            if (target && (target == lovers || target == allWorks || target == chef ||
                    target == girl || target == guy || target == grandMother || target == grandFather)) {
                portfolioImgs.forEach((item) => {
                    item.classList.remove('active');
                });
                portfolioImgsBlock.forEach((item) => {
                    item.style.display = 'none';
                    item.classList.remove("fadeIn");
                });
                portfolioNo.style.display = 'none';
            }
        }

        function portfolioNoImgs() {
            portfolioNo.style.display = 'block';
            portfolioNo.classList.add('fadeIn');
        }

        if (target && target == lovers) {
            checkActiveBtns(); //check Btn
            lovers.classList.add('active'); // make Btn Active
            portfolioImgsBlock.forEach((item) => {
                if (item.classList.contains('lovers')) {
                    showImg(item);
                }
            }); //filter img
        } //lovers

        if (target && target == allWorks) {
            checkActiveBtns();
            allWorks.classList.add('active');
            portfolioImgsBlock.forEach((item) => {
                if (item.classList.contains('all')) {
                    showImg(item);
                }
            }); //filter img
        } //allWorks

        if (target && target == chef) {
            checkActiveBtns();
            chef.classList.add('active');
            portfolioImgsBlock.forEach((item) => {
                if (item.classList.contains('chef')) {
                    showImg(item);
                }
            }); //filter img
        } // chef

        if (target && target == girl) {
            checkActiveBtns();
            girl.classList.add('active');
            portfolioImgsBlock.forEach((item) => {
                if (item.classList.contains('girl')) {
                    showImg(item);
                }
            }); //filter img
        } //girl

        if (target && target == guy) {
            checkActiveBtns();
            guy.classList.add('active');
            portfolioImgsBlock.forEach((item) => {
                if (item.classList.contains('guy')) {
                    showImg(item);
                }
            }); //filter img
        } //guy

        if (target && target == grandMother) {
            checkActiveBtns();
            grandMother.classList.add('active');
            portfolioNoImgs();
        } //grandMother 

        if (target && target == grandFather) {
            checkActiveBtns();
            grandFather.classList.add('active');
            portfolioNoImgs();
        } //grandFather
    });

}

module.exports = filters;