$(function() {
    $('.last__inner').slick({
        arrows:true,
        dots:true,
        infinite:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnDotsHover:true,
        pauseOnDotsHover:true,
        waitForAnimate:false,
        variableWidth:false,
        responsive:[
          {
            breakpoint: 480,
            settings: "unslick" 
          }
        ]
      });

      $('.news__inner-wrapper').slick({
        arrows:true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        variableWidth:false,
      });

      $(".menu__burger").on('click', function(event){
        $('.menu__burger,.header__nav').toggleClass('active');
      });
    
          
});
