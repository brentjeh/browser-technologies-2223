var naamStudentnummer = document.getElementById('naamstudentnummer');
var cssttr = document.getElementById('cssttr');
var wafs = document.getElementById('wafs');
var bt = document.getElementById('bt');
var submit = document.getElementById('submit');

var fieldsetMoeilijkheidsgraad = document.getElementById('moeilijkheidsgraad');
var fieldsetDuidelijkheid = document.getElementById('duidelijkheid');
var fieldsetLesstof = document.getElementById('lesstof');

var radios = fieldsetMoeilijkheidsgraad.querySelectorAll('input[type="radio"]');
var radios = fieldsetDuidelijkheid.querySelectorAll('input[type="radio"]');
var radios = fieldsetLesstof.querySelectorAll('input[type="radio"]');

var stap1 = document.getElementById('stap1');
var stap2 = document.getElementById('stap2');
var stap3 = document.getElementById('stap3');
var stap4 = document.getElementById('stap4');
var stap5 = document.getElementById('stap5');

var next1 = document.getElementById('next1');
var next2 = document.getElementById('next2');
var next3 = document.getElementById('next3');
var next4 = document.getElementById('next4');
var back1 = document.getElementById('back1');
var back2 = document.getElementById('back2');
var back3 = document.getElementById('back3');
var back4 = document.getElementById('back4');
var submitBtn = document.getElementById('submit-btn');
var error = document.getElementById('error');   

var progress = document.getElementById('progress');

naamStudentnummer.addEventListener('submit', function(event) {
    event.preventDefault();
});

cssttr.addEventListener('submit', function(event) {
    event.preventDefault();
});

wafs.addEventListener('submit', function(event) {
    event.preventDefault();
});

bt.addEventListener('submit', function(event) {
    event.preventDefault();
});

back4.addEventListener('submit', function(event) {
    event.preventDefault();
});

submitBtn.addEventListener('submit', function(event) {
    
});

next1.onclick = function(){
    cssttr.classList.add('cssttr-open');
    naamStudentnummer.classList.add('naamstudentnummer-close');
    progress.style.width = "9.6vw";
}

back1.onclick = function(){
    cssttr.classList.remove('cssttr-open');
    naamStudentnummer.classList.remove('naamstudentnummer-close');
    progress.style.width = "4.8vw";
}

next2.onclick = function(){
    wafs.classList.add('wafs-open');
    cssttr.classList.remove('cssttr-open');
    progress.style.width = "14.4vw";
}

back2.onclick = function(){
    wafs.classList.remove('wafs-open');
    cssttr.classList.add('cssttr-open');
    progress.style.width = "9.6vw";
}

next3.onclick = function(){
    bt.classList.add('bt-open');
    wafs.classList.remove('wafs-open');
    progress.style.width = "19.2vw";
}

back3.onclick = function(){
    bt.classList.remove('bt-open');
    wafs.classList.add('wafs-open');
    progress.style.width = "14.4vw";
}

next4.onclick = function(){
    submit.classList.add('submit-open');
    bt.classList.remove('bt-open');
    progress.style.width = "24vw";
}

back4.onclick = function(){
    submit.classList.remove('submit-open');
    bt.classList.add('bt-open');
    progress.style.width = "19.2vw";
}
  