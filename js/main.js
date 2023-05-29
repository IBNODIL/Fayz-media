let elNavOpener = document.getElementById('nav-open');
let elNavLink = document.getElementById('nav-link');
let isopen = true;



elNavOpener.addEventListener('click', function(){
  if(isopen == true){
    elNavLink.style.display = "flex";
    elNavOpener.classList.add('nav-open');
    isopen = false;
  } else{
    elNavLink.style.display = "none";
    elNavOpener.classList.remove('nav-open');
    isopen = true;
  }
});


