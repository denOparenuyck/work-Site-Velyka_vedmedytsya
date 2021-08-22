$(function(){
    $('.slider__gallery').slick({
        centerMode:true,
        centerPadding: '140px',
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-prev.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-next.svg" alt=""></button>',
        responsive: [
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:false,
                fade:true,
              }
            }
          ]
    });
    $('.hotel-slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow.svg" alt=""></button>',
        nextArrow:false,
        responsive: [
            {
              breakpoint: 1500,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                vertical:true,
              }
            }
          ]
    });
    $('.comment-slider').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="images/orange-prev-arrow.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/orange-next-arrow.svg" alt=""></button>',
        slidesToShow:1,
        slidesToScroll:1,
    });
    $('.slider-horizontal').slick({
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        asNavFor:'.slider-vertical'
    });
    $('.slider-vertical').slick({
        prevArrow:'<button type="button" class="slick-prev"><img src="images/arrow-up.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="images/arrow-down.svg" alt=""></button>',
        slidesToShow:3,
        slidesToScroll:1,
        vertical:true,
        asNavFor:'.slider-horizontal',
        responsive: [
            {
              breakpoint: 1141,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                vertical:false,
                arrows:false,
                autoplay: true,
              }
            },
            {
                breakpoint: 950,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  vertical:false,
                  arrows:false,
                  autoplay: true,
                }
              },
              {
                breakpoint: 530,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  vertical:false,
                  arrows:false,
                  autoplay: true,
                }
              },
              {
                breakpoint: 370,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  vertical:true,
                  arrows:false,
                  autoplay: true,
                }
              },
          ]
    });
    $('.block').slick({
        vertical:true,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:false,
    });
});



/*==============ACCARDION===============*/

document.querySelectorAll('.accordion-item__trigger').forEach((item) =>
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('accordion-item--active');
    })
)
/*==============/ACCARDION===============*/





