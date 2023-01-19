$(()=>{
  $('#editor .w-e-text').html('');
  $('textarea').attr('placeholder','不要水回复哟');
  $('head').append('<style>#editor .w-e-text:empty::before{content:"不要水回复哟";color:#bbb;}#editor .w-e-text::before{content:"";}</style>');
  $('.sign').css('display','none').next().css('font-size','50px');
});
