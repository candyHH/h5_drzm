$(document).ready(function () {
  var mySwiper = new Swiper('.swiper-container',{
      loop: false,
      direction: 'vertical',
  });
})

$('.download-btn').on('click',function () {
  window.location.href='http://www.lalocal.cn/download/?source=wechat';
})
