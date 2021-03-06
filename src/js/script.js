
// This function will randomzie the trees shown for each day on the history page
function randomize () {
  var imgList = ["images/healthy_tree_ground.png", "images/almost_dead_tree.png", "images/half_dead_tree2.png", "images/dead_tree.png"];
  var allImg = document.getElementsByClassName("randomTree");

  for (var i = 0; i < allImg.length; i++) {
    var ranNum = Math.floor(Math.random() * 4);
    allImg[i].src = imgList[ranNum];
  }

}
randomize();


// JQuery to animate elements on all pages

$( document ).ready(function() {

  // animate Home page
  $("#todayTitle").hide().fadeIn( 1000 );
  $("#textBottomBar").hide().fadeIn( 1000 );
  $("#todayTree").hide().fadeIn( 1000 );

  // animate History page
  $("#row1").hide().delay(300).fadeIn( 1000 );
  $("#row2").hide().delay(600).fadeIn( 1000 );
  $("#row3").hide().delay(900).fadeIn( 1000 );
  $("#row4").hide().delay(1200).fadeIn( 1000 );
  $("#row5").hide().delay(1500).fadeIn( 1000 );
  $("#row6").hide().delay(1800).fadeIn( 1000 );

  /*$( ".history_rows" ).each(function() {
      $( this ).hide();
      $(this).slideDown(200);
      $(this).fadeIn( 400 );
  });*/


  // animate challenges page
  $(".col-xs-12__h3").hide().fadeIn( 1000 );
  $("#challenge1").hide().delay(400).fadeIn( 1000 );
  $("#challenge2").hide().delay(900).fadeIn( 1000 );
  $("#challenge3").hide().delay(1400).fadeIn( 1000 );


  // animate awards page
  $(".award_row").hide().fadeIn( 1000 );


  // animate sharing page
  $("#title_share").hide().delay(200).fadeIn( 1000 );
  $("#motivation_text").hide().delay(700).fadeIn( 1000 );
  $(".motivation_tree").hide().delay(1200).fadeIn( 1000 );



  // animate settings page
  $(".settings_title_row").hide().delay(400).fadeIn( 1000 );
  $(".settings_row").hide().delay(400).fadeIn( 1000 );


});
