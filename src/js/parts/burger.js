function checkBurgerMenu() {
    //burger 

    let burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu');

    function checkingCurrentWidth() {
        let width = document.documentElement.clientWidth;
        burger.addEventListener('click', () => {
            if (width <= 768) {
                if (burgerMenu.classList.contains('show')) {
                    burgerMenu.classList.remove('show');
                } else {
                    burgerMenu.classList.add('show');
                }
            }
        });
        console.log(width);
        window.addEventListener('resize', function(){
            if (width > 768) {
                burgerMenu.classList.remove('show');
            }
        });
    }
    checkingCurrentWidth();
}

module.exports = checkBurgerMenu;