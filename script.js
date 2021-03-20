let offset =0;
const sliderLine = document.querySelector('.slider-line');
document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 256;
    sliderLine.getElementsByClassName.left = offset + 'px';
});