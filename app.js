const firstBtn = document.querySelector('.Product');
const secondBtn = document.querySelector('.Company');
const thirdBtn = document.querySelector('.Connect');

const firstArrow = document.querySelector('.prodImg');
const secondArrow = document.querySelector('.comImg');
const thirdArrow = document.querySelector('.conImg');

const firstMenu = document.querySelector('.first-dropdown');
const secondMenu = document.querySelector('.second-dropdown');
const thirdMenu = document.querySelector('.third-dropdown');

let firstMenuOpen = false;
let secondMenuOpen = false;
let thirdMenuOpen = false;






firstBtn.addEventListener("click" , () =>{



    if(!firstMenuOpen){
        firstMenu.classList.add('open');
        firstArrow.classList.add('open');
        firstMenuOpen = true;

    if(secondMenu.classList.add('open')  === true || thirdMenu.classList.add('open') === true){
        secondMenuOpen = false;
        thirdMenuOpen = false;
    }

    }
    else{
        firstMenu.classList.remove('open');
        firstArrow.classList.remove('open');
        firstMenuOpen=false;
    }



    secondMenu.classList.remove('open');
    thirdMenu.classList.remove('open');
 
    secondArrow.classList.remove('open');
    thirdArrow.classList.remove('open');
})




secondBtn.addEventListener("click" , () =>{


    if(!secondMenuOpen){
        secondMenu.classList.add('open');
        secondArrow.classList.add('open');
        secondMenuOpen = true;

        if(firstMenu.classList.add('open') === true || thirdMenu.classList.add('open') === true){
            firstMenuOpen = false;
            thirdMenuOpen = false;
        }
        

    }else{
        secondMenu.classList.remove('open');
        secondArrow.classList.remove('open');
        secondMenuOpen=false;
    }





    
    firstMenu.classList.remove('open');
    thirdMenu.classList.remove('open');
    firstArrow.classList.remove('open');
    thirdArrow.classList.remove('open');
})




thirdBtn.addEventListener("click" , () =>{



    if(!thirdMenuOpen){
        thirdMenu.classList.add('open');
        thirdArrow.classList.add('open');
        thirdMenuOpen = true;

        if(secondMenu.classList.add('open') === true || firstMenu.classList.add('open') === true){
            secondMenuOpen = false;
            firstMenuOpen = false;
        }

    }else{
        thirdMenu.classList.remove('open');
        thirdArrow.classList.remove('open');
        thirdMenuOpen=false;
    }

    firstMenu.classList.remove('open');
    secondMenu.classList.remove('open');

    firstArrow.classList.remove('open');
    secondArrow.classList.remove('open');

})


window.addEventListener("mouseup" , (event)=>{
    let box = document.getElementById('box1');
    if(event.target !=box && event.target.parentNode != box) {

        firstMenu.classList.remove('open');
        firstArrow.classList.remove('open');

        secondMenu.classList.remove('open');
        secondArrow.classList.remove('open');

        thirdMenu.classList.remove('open');
        thirdArrow.classList.remove('open');



    }
    
})

