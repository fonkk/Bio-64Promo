document.addEventListener('DOMContentLoaded', ()=>{

  let x = 200;
  if(document.querySelector('body').clientWidth < 850){
    x = 0;
  }

  //Анимация для простых блоков
  function showAnimate(a, b){
      document.querySelectorAll(a).forEach(e => {
        e.classList.remove('right-hide');
      });
      document.querySelectorAll(b).forEach(e => {
        e.classList.remove('left-hide');
      });
  }
  function hideAnimate(a, b){
    document.querySelectorAll(a).forEach(e => {
      e.classList.add('right-hide');
    });
    document.querySelectorAll(b).forEach(e => {
      e.classList.add('left-hide');
    });
  }
  
  //Обработка события скролла
  window.addEventListener('scroll',()=>{
    //Первый экран
    if(pageYOffset >= (document.querySelector('section:not(.hide-section) header').clientHeight - 100)){
      hideAnimate('section:not(.hide-section) header > div', '#rat_img');
    }
    else{
      showAnimate('section:not(.hide-section) header > div', '#rat_img');
    }

    //Блок с преимуществами
    if((document.querySelector('.block_4').getBoundingClientRect().y - 400) >= 0 || (document.querySelector('.block_4').getBoundingClientRect().y + document.querySelector('.block_4').clientHeight + x) <= 0){
      hideAnimate('.block_4 > div:first-of-type', '.block_4 > div:last-of-type');
      document.querySelector('#fog_2').classList.add('hide_fog');
    }
    else{
      showAnimate('.block_4 > div:first-of-type', '.block_4 > div:last-of-type');
      document.querySelector('#fog_2').classList.remove('hide_fog');
    }

    //Блок с отзывами
    if((document.querySelector('.block_7 > div').getBoundingClientRect().y - 200 - x) >= 0 || (document.querySelector('.block_7 > div').getBoundingClientRect().y + document.querySelector('.block_7 > div').clientHeight + x) <= 0){
      hideAnimate('.block_7 > div > div:first-of-type', '.block_7 > div > div:last-of-type');
    }
    else{
      showAnimate('.block_7 > div > div:first-of-type', '.block_7 > div > div:last-of-type');
    }

    //Блок с документами
    if((document.querySelector('.docs').getBoundingClientRect().y - 200 - x) >= 0 || (document.querySelector('.docs').getBoundingClientRect().y + document.querySelector('.docs').clientHeight + x) <= 0){
      hideAnimate('.docs > div:first-of-type', '.docs > div:last-of-type');
    }
    else{
      showAnimate('.docs > div:first-of-type', '.docs > div:last-of-type');
    }

    //Форма
    if((document.querySelector('.block_5').getBoundingClientRect().y - 400 - x) >= 0 || (document.querySelector('.block_5').getBoundingClientRect().y + document.querySelector('.block_5').clientHeight + x) <= 0){
      document.querySelector('.block_5 > div > div > div').classList.add('hide-form');
    }
    else{
      document.querySelector('.block_5 > div > div > div').classList.remove('hide-form');
    }

    //Ответы на вопросы
    if((document.querySelector('.block_9').getBoundingClientRect().y - 200 - x) >= 0 || (document.querySelector('.block_9').getBoundingClientRect().y + document.querySelector('.block_9').clientHeight + x) <= 0){
      document.querySelector('.block_9 > div > div > div').classList.add('hide-form');
    }
    else{
      document.querySelector('.block_9 > div > div > div').classList.remove('hide-form');
    }

    //Сертифииаты
    if((document.querySelector('#sertificates').getBoundingClientRect().y - 200 - x) >= 0 || (document.querySelector('#sertificates').getBoundingClientRect().y + document.querySelector('#sertificates').clientHeight + x) <= 0){
      let k = 0;
      document.querySelectorAll('.block_8 img').forEach(e => {
        let timerSertificates = setTimeout(()=>{
          e.classList.add('hide-sert');
        }, k);
        k += 100;
      });
    }
    else{
      let k = 0;
      document.querySelectorAll('.block_8 img').forEach(e => {
        let timerSertificates = setTimeout(()=>{
          e.classList.remove('hide-sert');
        }, k);
        k += 100;
      });
    }

    //Клиенты
    if((document.querySelector('.clients').getBoundingClientRect().y - 200 - x) >= 0 || (document.querySelector('.clients').getBoundingClientRect().y + document.querySelector('.clients').clientHeight + x) <= 0){
      let k = 0;
      document.querySelectorAll('.clients ul li').forEach(e => {
        let timerSertificates = setTimeout(()=>{
          e.classList.add('hide-sert');
        }, k);
        k += 100;
      });
    }
    else{
      let k = 0;
      document.querySelectorAll('.clients ul li').forEach(e => {
        let timerSertificates = setTimeout(()=>{
          e.classList.remove('hide-sert');
        }, k);
        k += 100;
      });
    }

    //Блок с последствиями
    if((document.querySelector('#do_not_hesitate_2').getBoundingClientRect().y - 200 - x) >= 0 || (document.querySelector('#do_not_hesitate_2').getBoundingClientRect().y + document.querySelector('#do_not_hesitate_2').clientHeight + x) <= 0){
      document.querySelector('#plate_with_insects').classList.add('right-hide');
      document.querySelector('#gavel_div').classList.add('line-right');
      document.querySelector('#gavel_line').classList.add('line-right');
      document.querySelector('#table_div').classList.add('line-right');
      document.querySelector('#table_line').classList.add('line-right');
      document.querySelector('#rate_div').classList.add('line-right');
      document.querySelector('#rate_line').classList.add('line-right');
    }
    else{
      document.querySelector('#plate_with_insects').classList.remove('right-hide');
      document.querySelector('#gavel_div').classList.remove('line-right');
      document.querySelector('#gavel_line').classList.remove('line-right');
      document.querySelector('#table_div').classList.remove('line-right');
      document.querySelector('#table_line').classList.remove('line-right');
      document.querySelector('#rate_div').classList.remove('line-right');
      document.querySelector('#rate_line').classList.remove('line-right');
    }

    //Блок с последствиями
    if((document.querySelector('#do_not_hesitate').getBoundingClientRect().y - 400 - x) >= 0 || (document.querySelector('#do_not_hesitate').getBoundingClientRect().y + document.querySelector('#do_not_hesitate').clientHeight + x) <= 0){
      document.querySelector('#woomen').classList.add('women-hide');
      document.querySelector('#rhombus').classList.add('women-hide');
      document.querySelector('#trash_div').classList.add('line-left');
      document.querySelector('#trash_line').classList.add('line-left');
      document.querySelector('#headache_div').classList.add('line-left');
      document.querySelector('#headache_line').classList.add('line-left');
      document.querySelector('#sneeze_div').classList.add('line-right');
      document.querySelector('#sneeze_line').classList.add('line-right');
      document.querySelector('#insomnia_div').classList.add('line-right');
      document.querySelector('#insomnia_line').classList.add('line-right');
    }
    else{
      document.querySelector('#woomen').classList.remove('women-hide');
      document.querySelector('#rhombus').classList.remove('women-hide');
      document.querySelector('#trash_div').classList.remove('line-left');
      document.querySelector('#trash_line').classList.remove('line-left');
      document.querySelector('#headache_div').classList.remove('line-left');
      document.querySelector('#headache_line').classList.remove('line-left');
      document.querySelector('#sneeze_div').classList.remove('line-right');
      document.querySelector('#sneeze_line').classList.remove('line-right');
      document.querySelector('#insomnia_div').classList.remove('line-right');
      document.querySelector('#insomnia_line').classList.remove('line-right');
    }

    //Блок с проблемами
    if((document.querySelector('#problems').getBoundingClientRect().y - 300) >= 0 || (document.querySelector('#problems').getBoundingClientRect().y + document.querySelector('#problems').clientHeight + x) <= 0){
      document.querySelector("#superman").classList.add('man-hide');
      document.querySelector("#fog").classList.add('man-hide');

      document.querySelector('#bug_line').classList.add('line-left');
      document.querySelector('#rat_icon_1_line').classList.add('line-right');
      document.querySelector('#Frame_line').classList.add('line-right');
      document.querySelector('#bug_div').classList.add('div-hide');
      document.querySelector('#rat_icon_1_div').classList.add('div-hide');
      document.querySelector('#Frame_div').classList.add('div-hide');

      document.querySelector('#bug_div').classList.add('div-hide');
      document.querySelector('#rat_icon_1_div').classList.add('div-hide');
      document.querySelector('#Frame_div').classList.add('div-hide');

      document.querySelector('#cockroach_line').classList.add('line-left');
      document.querySelector('#flea_line').classList.add('line-left');
      document.querySelector('#bedbug_line').classList.add('line-left');
      document.querySelector('#ant_line').classList.add('line-left');
      document.querySelector('#rat_icon_2_line').classList.add('line-right');
      document.querySelector('#mouse_line').classList.add('line-right');
      document.querySelector('#virus_line').classList.add('line-right');
      document.querySelector('#bacteria_line').classList.add('line-right');

      document.querySelector('#cockroach_div').classList.add('div-hide');
      document.querySelector('#flea_div').classList.add('div-hide');
      document.querySelector('#bedbug_div').classList.add('div-hide');
      document.querySelector('#ant_div').classList.add('div-hide');
      document.querySelector('#rat_icon_2_div').classList.add('div-hide');
      document.querySelector('#mouse_div').classList.add('div-hide');
      document.querySelector('#virus_div').classList.add('div-hide');
      document.querySelector('#bacteria_div').classList.add('div-hide');
    }
    else{
      document.querySelector("#superman").classList.remove('man-hide');
      document.querySelector("#fog").classList.remove('man-hide');
      let problemsTimer1 = setTimeout(()=>{
        document.querySelector('#bug_line').classList.remove('line-left');
        document.querySelector('#rat_icon_1_line').classList.remove('line-right');
        document.querySelector('#Frame_line').classList.remove('line-right');
        let problemsTimer2 = setTimeout(()=>{
          document.querySelector('#bug_div').classList.remove('div-hide');
          document.querySelector('#rat_icon_1_div').classList.remove('div-hide');
          document.querySelector('#Frame_div').classList.remove('div-hide');
          let problemsTimer3 = setTimeout(()=>{
            document.querySelector('#cockroach_line').classList.remove('line-left');
            document.querySelector('#flea_line').classList.remove('line-left');
            document.querySelector('#bedbug_line').classList.remove('line-left');
            document.querySelector('#ant_line').classList.remove('line-left');
            document.querySelector('#rat_icon_2_line').classList.remove('line-right');
            document.querySelector('#mouse_line').classList.remove('line-right');
            document.querySelector('#virus_line').classList.remove('line-right');
            document.querySelector('#bacteria_line').classList.remove('line-right');
            let problemsTimer4 = setTimeout(()=>{
              document.querySelector('#cockroach_div').classList.remove('div-hide');
              document.querySelector('#flea_div').classList.remove('div-hide');
              document.querySelector('#bedbug_div').classList.remove('div-hide');
              document.querySelector('#ant_div').classList.remove('div-hide');
              document.querySelector('#rat_icon_2_div').classList.remove('div-hide');
              document.querySelector('#mouse_div').classList.remove('div-hide');
              document.querySelector('#virus_div').classList.remove('div-hide');
              document.querySelector('#bacteria_div').classList.remove('div-hide');
            },100);
          },100);
        },100);
      },100);
    }
  });


});
