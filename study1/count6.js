/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $txt = $(".container__count-text");
  var $btn = $(".container__btn");

  $btn.click(function(){
    num = $(this).hasClass("increment") ? 1 : -1;
    count += (num);
    if( count < 0 ) count = 0;
    if( count > maxCount ) count = maxCount;
    $txt.text(count);
  })

  $btn.click(function(){
    $(this).stop.css('opacity','0.5');
  });


    $btn.click(function(){
      if( $txt = maxCount ){
        $('.text1').text("これ以上は増えません");
      }else if( $txt = count ){
        $('.text1').text("これ以上は減りません");
      }
    });



})//end function
