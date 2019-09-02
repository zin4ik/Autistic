jQuery(document).ready(function($){

    

 $('.img-fluid').hover(function(){
    var widthImg =$('.img-fluid').width();
    var heidthImg= $('.img-fluid').height();

    var strCss = "width:"+widthImg+"px;"+"height:"+heidthImg+"px;"

     $('.focus_img').css(strCss);
})

   //  $('.img-fluid').hover(function(){

        // $('.img-fluid').addClass('img_backgraund');

    // var widthImg= $('.img-fluid').width();
    // var heidthImg= $('.img-fluid').height();


  

  
 })

