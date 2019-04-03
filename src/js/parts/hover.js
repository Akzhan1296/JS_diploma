function hovers(){

    //наведение
    function hover(){	
        console.log("123");
        let sizesBlocks = document.getElementsByClassName("sizes-block"),
            imgs = document.querySelectorAll(".sizes-block img");
    
            for(let i = 0; i < sizesBlocks.length; i++){
                let divsSizes = sizesBlocks[i].getElementsByTagName('p')
    
            sizesBlocks[i].addEventListener("mouseover", function(){
                for(let i = 0; i <divsSizes.length; i++){
                    divsSizes[i].style.display = "none";
                }
            })
            sizesBlocks[i].addEventListener("mouseout", function(){
                for(let i = 0; i <divsSizes.length; i++){
                    divsSizes[i].style.display = "block";
                }
            })
    
        
            }
    }
    hover();


}

module.exports = hovers;