var currentSlideIndex = 1;

function nextclick(number){
    console.log(number)
    currentSlideIndex = currentSlideIndex + number;
    showImage(currentSlideIndex);
}
function preclick(number){
    console.log(number)
    currentSlideIndex = currentSlideIndex + number;
    showImage(currentSlideIndex);
}
function currentSlide(sildeNumber){
    showImage(currentSlideIndex = sildeNumber)
}

function showImage(n){
    var dots = document.getElementsByClassName("dot");
    var slides = document.getElementsByClassName('box');
    if(n > slides.length){
        currentSlideIndex = 1;
    } 
    if( n < 1){
        currentSlideIndex = slides.length;  
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[currentSlideIndex -1].style.display = 'block';
    dots[currentSlideIndex - 1].className += ' active';
} 


