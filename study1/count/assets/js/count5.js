/*js file*/
$(function(){

  var count = 0;
  var maxCount = 10;
  var $inc = $(".increment");
  var $dec = $(".decrement");
  var $txt = $(".container__count-text");


  function countUp(){
    if( count < maxCount){
      count = count + 1;
    }
    countAction();
  }

  function countDown(){
    if( count > 0){
      count = count - 1;
    }
    countAction();
  }

  function countAction(){
    $txt.text(count);
  }

  $inc.click(
    function(){
      countUp();
    }
  )

  $dec.click(
    function(){
      countDown();
    }
  )

  $('.container__btn').click(function(){
    $(this).css("opacity","0.2");
    $(this).stop().fadeTo(300,1);
  });

  $('.container__btn').click(function(){
    if ( count >= 10 ){
      $('.text1').text("これ以上増えません。");
    } else if( count <= 0){
      $('.text1').text("これ以上減りません。");
    } else{
      $('.text1').text("");
    }
  });

})//end function
