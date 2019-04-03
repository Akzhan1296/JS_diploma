function checkBurgerMenu (){
    let burger = document.querySelector('.burger'),
    burgerMenu = document.querySelector('.burger-menu'),
    width = document.documentElement.clientWidth;
    burger.addEventListener('click', ()=>{
        if(width<=768){
            if(burgerMenu.classList.contains('show')){
                burgerMenu.classList.remove('show');
            } else {
                burgerMenu.classList.add('show');
            }
        } 

        
    });
}

module.exports = checkBurgerMenu;