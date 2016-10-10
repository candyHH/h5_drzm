$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container',{
      loop: false,
      direction: 'vertical',
  });

  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  var ratio = 640/1136;
  if(windowWidth/windowHeight>ratio){
    $('.pic-bg').css('height','100%');
  }else{
    $('.pic-bg').css('width','100%');
  }
})

$('.download-btn').on('click',function () {
  window.location.href='http://www.lalocal.cn/download/?source=wechat';
})
