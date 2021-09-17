document.querySelector('body').classList.add('non-scroll');

document.querySelector('#commerce').addEventListener('click', ()=>{
    document.querySelector('#intro').classList.add('hide-intro');
    document.querySelector('body').classList.remove('non-scroll');
    document.querySelectorAll('.local').forEach(e => {
      e.classList.add('hide-section');
    });
    load(false);
});

document.querySelector('#local').addEventListener('click', ()=>{
    document.querySelector('#intro').classList.add('hide-intro');
    document.querySelector('body').classList.remove('non-scroll');
    document.querySelectorAll('.commerce').forEach(e => {
      e.classList.add('hide-section');
    });
    load(true);
});

document.querySelector('#contacts-nav').classList.add('hide');
document.getElementById('nav-button').addEventListener('mouseover', ()=>{
  document.querySelector('#contacts-nav').classList.remove('hide');
});
document.getElementById('contacts-nav').addEventListener('mouseleave', ()=>{
  document.querySelector('#contacts-nav').classList.add('hide');
});

  //Скрипт при запуске страницы
function load(a){

  if(a){
    document.querySelectorAll('header .right-hide').forEach(e => {
      e.classList.remove('right-hide');
    });
    document.querySelectorAll('header .left-hide').forEach(e => {
      e.classList.remove('left-hide');
    });
    let timerHeader2 = setTimeout(()=>{
      document.querySelector('#rat_img > div').classList.add('pos2');
      let timerHeader2 = setTimeout(()=>{
        document.querySelector('#rat_img > div').classList.remove('pos1');
        document.querySelector('#rat_img > div').classList.remove('pos2');
      }, 300);
    }, 300);
  }
  else{
    document.querySelectorAll('header .right-hide').forEach(e => {
      e.classList.remove('right-hide');
    });
    document.querySelectorAll('header .left-hide').forEach(e => {
      e.classList.remove('left-hide');
    });
  }
}
