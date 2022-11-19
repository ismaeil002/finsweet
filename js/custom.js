$(function(){

    "use strick"

    $(".back2top i").on('click',function(){
        $("html,body").animate({
            scrollTop: 0
        })
    })

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop()

        if(scrolling > 20){
            $(".back2top i").fadeIn(500)
        }else(
            $(".back2top i").fadeOut(500)
        )

        if(scrolling > 50){
            $(".menu").addClass("nav_ex")
        }else{
            $(".menu").removeClass("nav_ex")
        }
    })


    // clients part slide
    $('.clients_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<i class="fa-solid fa-angle-right nxtarw"></i>',
        prevArrow: '<i class="fa-solid fa-angle-left prearw"></i>',
      });


    //   home-blog slider
    $('.hmblog_main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,

        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });


    //   about-team slider
    $('.abtteam_main').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows:false,

        responsive: [
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    //   counterup js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    

})