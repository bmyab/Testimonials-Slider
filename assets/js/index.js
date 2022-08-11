const btns= document.querySelectorAll('.cta img');
const sliderImg = document.querySelectorAll('.img__person');
const sliderText = document.querySelectorAll('.slider__texts');

console.log(sliderImg)


console.log(sliderImg)

btns.forEach( (btn) =>{
  btn.addEventListener('click', (e) =>{
    const index = e.target.classList.contains('prev') ? -1 : 1;
    const activeSliderImg =  document.querySelector('.img__person.active');
    const activeSlidetText =  document.querySelector('.slider__texts.active');
  

  let nexIndex = [...sliderImg].indexOf(activeSliderImg)+ index;


  if(nexIndex < 0){
    nexIndex = sliderImg.length - 1 ;
  }

  if(nexIndex > sliderImg.length){
    nexIndex = 0;
  }


  sliderImg[nexIndex].classList.add('active');
  sliderText[nexIndex].classList.add('active');

  activeSliderImg.classList.remove('active');
  activeSlidetText.classList.remove('active');

  });

});