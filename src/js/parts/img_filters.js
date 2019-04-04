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

    //img_filters

    const d = document,
    tab = d.querySelectorAll('.portfolio-heading'),
    tabContent = d.querySelectorAll('.portfolio-block'),
    noElems = d.querySelector('.portfolio-no');


tab.forEach((btn) => {
    btn.addEventListener('click', function(event){
        const attr = event.target.dataset.btn;

        tab.forEach((item)=>{
            item.classList.remove('active');
        });
        this.classList.add('active');
        console.log(attr);
        tabContent.forEach((content, key) => {
            content.style.display = "block";
            noElems.style.display = 'none';
            if (attr !== 'all') {
                if (attr !== content.dataset.tab) {
                    content.style.display = "none";
                }
            }
            if (attr === 'grandmother' || attr === 'grandfather') {
                noElems.style.display = 'block';
            }
        });
    });
});

}

module.exports = filters;