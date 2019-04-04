function checkBurgerMenu (){
    let burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger-menu'),
        width = document.documentElement.clientWidth;
        
        function checkingCurrentWidth(){
            burger.addEventListener('click', ()=>{
                if(width<=768){
                    if(burgerMenu.classList.contains('show')){
                        burgerMenu.classList.remove('show');
                    } else {
                        burgerMenu.classList.add('show');
                    }
                } 
            });

            if(width>768){
                burgerMenu.classList.remove('show');
            }
        }

        checkingCurrentWidth();
}

module.exports = checkBurgerMenu;